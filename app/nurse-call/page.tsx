import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Nurse Call Systems',
  description: 'Mission-critical healthcare communication systems for hospitals and care facilities.',
};

export default function NurseCallPage() {
  return (
    <>
      <section className="division-hero" style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.08) 0%, var(--color-background) 60%)', borderBottom: '1px solid var(--color-border)', paddingTop: '8rem', paddingBottom: '5rem' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '720px' }}>
            <span className="tag-pill" style={{ color: '#10b981', borderColor: '#10b98155', background: 'rgba(16,185,129,0.1)', marginBottom: '1.5rem' }}>Nurse Call Division</span>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.25rem' }}>
              Precision <span className="gradient-text-emerald">Care</span> Communication
            </h1>
            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', lineHeight: 1.8, maxWidth: '560px', marginBottom: '2rem' }}>
              Institutional-grade nurse call infrastructure. Built for reliability, designed for rapid response, and trusted by leading healthcare providers since 2016.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/nurse-call/product" className="btn-primary" style={{ background: 'linear-gradient(135deg, #10b981, #34d399)', color: '#fff' }}>
                System Architecture
              </Link>
              <Link href="/nurse-call/support" className="btn-ghost">Technical Support</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', textAlign: 'center', marginBottom: '3rem' }}>Solutions for Healthcare</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {[
              { title: 'In-Patient Wards', desc: 'Bed-side call buttons with two-way voice communication and emergency overrides.' },
              { title: 'ICU & Critical Care', desc: 'High-priority alert systems with visual dome lights and central monitoring integration.' },
              { title: 'Assisted Living', desc: 'Wireless call pendants and fall detection integration for elderly care residents.' },
            ].map((sol) => (
              <div key={sol.title} className="glass-card" style={{ padding: '2.5rem' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', marginBottom: '1rem', color: '#10b981' }}>{sol.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>{sol.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '1.5rem' }}>Certified Reliability</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-text-muted)', lineHeight: 1.8 }}>
            Our Nurse Call systems comply with global healthcare communication standards, ensuring 99.9% uptime and fail-safe operation in critical environments.
          </p>
        </div>
      </section>
    </>
  );
}
