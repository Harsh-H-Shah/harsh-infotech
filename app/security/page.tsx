import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Security Solutions',
  description: 'Professional surveillance, fire safety, and compliance-ready security infrastructure since 2010.',
};

const securityCategories = [
  {
    name: 'CCTV Systems',
    tagline: 'High-definition evidence.',
    desc: '4K IP cameras with AI analytics, starlight vision, and remote monitoring.',
    href: '/security/cctv',
    icon: '🎥',
    accent: '#ef4444',
  },
  {
    name: 'Fire Safety',
    tagline: 'Detect. Alert. Protect.',
    desc: 'Advanced smoke detectors, heat sensors, and integrated fire alarm infrastructure.',
    href: '/security/fire',
    icon: '🔥',
    accent: '#f97316',
  },
  {
    name: 'Property Solutions',
    tagline: 'Built for scale.',
    desc: 'Bespoke security architecture for residential complexes and commercial properties.',
    href: '/contact',
    icon: '🏢',
    accent: '#ef4444',
  },
  {
    name: 'Compliance',
    tagline: 'Certified safety.',
    desc: 'Regulatory-ready documentation and certification for institutional security audits.',
    href: '/contact',
    icon: '📜',
    accent: '#ef4444',
  },
];

export default function SecurityPage() {
  return (
    <>
      <section className="division-hero" style={{ background: 'linear-gradient(135deg, rgba(239,68,68,0.08) 0%, var(--color-background) 60%)', borderBottom: '1px solid var(--color-border)', paddingTop: '8rem', paddingBottom: '5rem' }}>
        <div className="glow-bg" style={{ background: '#ef4444', top: '-50px', right: '-50px', width: '500px', height: '500px', opacity: 0.08 }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '720px' }}>
            <span className="tag-pill" style={{ color: '#ef4444', borderColor: '#ef444455', background: 'rgba(239,68,68,0.1)', marginBottom: '1.5rem' }}>Security Division</span>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.25rem' }}>
              Security That <span className="gradient-text-red">Never</span> Sleeps
            </h1>
            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', lineHeight: 1.8, maxWidth: '560px', marginBottom: '2rem' }}>
              From commercial-grade surveillance to multi-tiered fire safety systems — protecting lives and property with intelligent, compliance-ready technology.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/security/cctv" className="btn-primary" style={{ background: 'linear-gradient(135deg, #ef4444, #f87171)', color: '#fff' }}>
                CCTV systems
              </Link>
              <Link href="/security/fire" className="btn-ghost">Fire safety</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {securityCategories.map((p) => (
              <Link key={p.name} href={p.href} style={{ textDecoration: 'none' }}>
                <div className="glass-card" style={{ padding: '2rem', height: '100%' }}>
                  <div style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>{p.icon}</div>
                  <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: p.accent, marginBottom: '0.4rem' }}>{p.tagline}</div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.3rem', marginBottom: '0.75rem' }}>{p.name}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>{p.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', marginBottom: '1.5rem' }}>Trusted Since 2010</h2>
          <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.8 }}>
            Our security division has delivered over 300+ large-scale projects for corporate offices, hospitals, and high-rise residential complexes with a focus on regulatory compliance and peak technical performance.
          </p>
        </div>
      </section>
    </>
  );
}
