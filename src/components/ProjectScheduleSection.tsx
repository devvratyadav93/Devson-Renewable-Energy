import React from 'react';

interface GanttRow {
  act: string;
  bars: [boolean, boolean, boolean, boolean, boolean, boolean];
}

const ganttData: GanttRow[] = [
  { act: 'Solar Power Plant', bars: [true, true, true, true, true, true] },
  { act: 'NTP', bars: [true, false, false, false, false, false] },
  { act: 'Site Mobilisation', bars: [true, true, true, true, false, false] },
  { act: 'Prep. of Final Drawings & BOM', bars: [true, true, false, false, false, false] },
  { act: 'Receipt of Material', bars: [false, true, false, false, false, false] },
  { act: 'Installation of PV Modules', bars: [false, true, true, false, false, false] },
  { act: 'Module Interconnections', bars: [false, true, true, true, false, false] },
  { act: 'Earthing & Connections', bars: [false, false, true, true, false, false] },
  { act: 'Solar Cable Laying & Termination', bars: [false, false, false, true, false, false] },
  { act: 'Installation of Inverters', bars: [false, false, false, true, false, false] },
  { act: 'DC Cable Laying', bars: [false, false, false, true, false, false] },
  { act: 'AC Cable Laying & Terminations', bars: [false, false, false, true, false, false] },
  { act: 'Communication Cable & Data', bars: [false, false, false, false, true, false] },
  { act: 'Quality Checking', bars: [false, false, false, false, true, false] },
  { act: 'Pre-Commissioning Tests', bars: [false, false, false, false, true, false] },
  { act: 'Inspection from Govt Bodies', bars: [false, false, false, false, false, true] },
  { act: 'Final Commissioning', bars: [false, false, false, false, false, true] },
  { act: 'Observation for Performance', bars: [false, false, false, false, false, true] },
  { act: 'Completion & Handover', bars: [false, false, false, false, false, true] },
];

export const ProjectScheduleSection: React.FC = () => {
  return (
    <section id="schedule" className="alt">
      <div className="wrap">
        <div className="section-head">
          <div className="sec-num">
            <span className="sec-num-lbl">05 —</span>{' '}
            <span className="sec-num-text">PROJECT SCHEDULE</span>
          </div>
          <h2 className="sec-heading">120 days, start to handover.</h2>
          <p>Three 40-day phases covering mobilisation, installation, and commissioning.</p>
        </div>
        <div className="gantt-wrap reveal">
          <table className="gantt">
            <thead>
              <tr>
                <th className="act-h">Activity</th>
                <th colSpan={2}>Phase 1 · 40 days</th>
                <th colSpan={2}>Phase 2 · 40 days</th>
                <th colSpan={2}>Phase 3 · 40 days</th>
              </tr>
            </thead>
            <tbody>
              {ganttData.map((row, idx) => (
                <tr key={idx}>
                  <td className="act">{row.act}</td>
                  <td className="cell phase-divider">
                    <div className={`gbar ${row.bars[0] ? 'on' : ''}`}></div>
                  </td>
                  <td className="cell">
                    <div className={`gbar ${row.bars[1] ? 'on' : ''}`}></div>
                  </td>
                  <td className="cell phase-divider">
                    <div className={`gbar ${row.bars[2] ? 'on' : ''}`}></div>
                  </td>
                  <td className="cell">
                    <div className={`gbar ${row.bars[3] ? 'on' : ''}`}></div>
                  </td>
                  <td className="cell phase-divider">
                    <div className={`gbar ${row.bars[4] ? 'on' : ''}`}></div>
                  </td>
                  <td className="cell">
                    <div className={`gbar ${row.bars[5] ? 'on' : ''}`}></div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
