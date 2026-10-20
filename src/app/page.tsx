'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { CoverPage } from '@/components/CoverPage';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { AboutSection } from '@/components/AboutSection';
import { ClientsNetworkSection } from '@/components/ClientsNetworkSection';
import { ProjectSummarySection } from '@/components/ProjectSummarySection';
import { TechSpecSection } from '@/components/TechSpecSection';
import { VendorsSection } from '@/components/VendorsSection';
import { ScopeOfWorkSection } from '@/components/ScopeOfWorkSection';
import { ProjectScheduleSection } from '@/components/ProjectScheduleSection';
import { WarrantySection } from '@/components/WarrantySection';
import { CommercialOfferSection } from '@/components/CommercialOfferSection';
import { ExecutionSection } from '@/components/ExecutionSection';
import { ServicesSection } from '@/components/ServicesSection';
import { TrackRecordSection } from '@/components/TrackRecordSection';
import { Footer } from '@/components/Footer';
import { AcceptBar } from '@/components/AcceptBar';
import { IosPrintModal } from '@/components/IosPrintModal';

export default function Home() {
  const [iosModalOpen, setIosModalOpen] = useState(false);

  // Force all reveal elements visible (crucial for printing without blank sections)
  const makeAllVisible = useCallback(() => {
    document.querySelectorAll('.reveal').forEach((el) => {
      el.classList.add('is-visible');
    });
  }, []);

  // Safe print handler with iOS detection & image preloading
  const handlePrint = useCallback(() => {
    makeAllVisible();

    if (typeof window === 'undefined') return;

    const isIOS =
      /iphone|ipad|ipod/i.test(navigator.userAgent) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

    if (isIOS) {
      setIosModalOpen(true);
      return;
    }

    // Preload all images before calling print to eliminate blank image boxes
    const imgs = Array.from(document.querySelectorAll('img'));
    if (!imgs.length) {
      window.print();
      return;
    }

    let loaded = 0;
    const total = imgs.length;
    const trigger = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          window.print();
        });
      });
    };

    const onLoad = () => {
      loaded++;
      if (loaded >= total) trigger();
    };

    imgs.forEach((img) => {
      if (img.complete && img.naturalWidth > 0) {
        onLoad();
      } else {
        img.addEventListener('load', onLoad, { once: true });
        img.addEventListener('error', onLoad, { once: true });
      }
    });
  }, [makeAllVisible]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Mobile detection for styling
    const isMobile = /iphone|ipad|ipod|android|blackberry|mini|windowssce|palm/i.test(
      navigator.userAgent
    );
    if (isMobile) {
      document.body.classList.add('mobile-device');
    }

    // Scroll reveal observer with defensive visibility
    let observer: IntersectionObserver | null = null;
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              entry.target.classList.remove('animate-in');
            }
          });
        },
        { threshold: 0.05, rootMargin: '100px 0px' }
      );

      document.querySelectorAll('.reveal').forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top > window.innerHeight) {
          el.classList.add('animate-in');
          observer?.observe(el);
        } else {
          el.classList.add('is-visible');
        }
      });
    } else {
      makeAllVisible();
    }

    // Print event listeners
    const handleBeforePrint = () => makeAllVisible();
    window.addEventListener('beforeprint', handleBeforePrint);

    let mql: MediaQueryList | null = null;
    let mqlHandler: ((e: MediaQueryListEvent) => void) | null = null;
    if (window.matchMedia) {
      mql = window.matchMedia('print');
      mqlHandler = (e: MediaQueryListEvent) => {
        if (e.matches) makeAllVisible();
      };
      mql.addEventListener('change', mqlHandler);
    }

    return () => {
      window.removeEventListener('beforeprint', handleBeforePrint);
      if (mql && mqlHandler) {
        mql.removeEventListener('change', mqlHandler);
      }
      observer?.disconnect();
    };
  }, [makeAllVisible]);

  return (
    <>
      {/* Print-only corporate cover page (first page of A4 PDF) */}
      <CoverPage />

      {/* Sticky Navigation */}
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* Main Content Sections */}
      <main>
        <AboutSection />
        <ClientsNetworkSection />
        <ProjectSummarySection />
        <TechSpecSection />
        <VendorsSection />
        <ScopeOfWorkSection />
        <ProjectScheduleSection />
        <WarrantySection />
        <CommercialOfferSection />
        <ExecutionSection />
        <ServicesSection />
        <TrackRecordSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Bottom Action Bar */}
      <AcceptBar onPrint={handlePrint} />

      {/* iOS Print Guidance Modal */}
      <IosPrintModal isOpen={iosModalOpen} onClose={() => setIosModalOpen(false)} />
    </>
  );
}
