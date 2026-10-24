import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="subpage-wrapper" style={{ textAlign: 'center', padding: '100px 20px', minHeight: '60vh' }}>
      <div className="wrap">
        <span className="teaser-pill-badge" style={{ margin: '0 auto 16px' }}>404 · Page Not Found</span>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', color: 'var(--forest)', marginBottom: '14px' }}>
          Page Not Found / पृष्ठ नहीं मिला
        </h1>
        <p style={{ color: 'var(--slate)', maxWidth: '520px', margin: '0 auto 30px', fontSize: '1rem', lineHeight: '1.6' }}>
          The requested page could not be located. You can navigate back to the home page or explore our solar schemes and subsidy calculator.
        </p>
        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" className="btn-teaser-primary">
            Return to Home / मुख्य पृष्ठ
          </Link>
          <Link href="/energy-needs" className="btn-teaser-secondary">
            Energy Needs & Subsidies / सोलर योजनाएं
          </Link>
        </div>
      </div>
    </div>
  );
}
