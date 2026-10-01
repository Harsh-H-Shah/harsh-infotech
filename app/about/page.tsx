import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Harsh Infotech, established in 2008, and our journey as a technology solutions provider.',
};

export default function AboutPage() {
  return (
    <div className="section" style={{ paddingTop: '10rem' }}>
      <div className="container">
        <span className="section-label" style={{ color: '#06b6d4' }}>Our Heritage</span>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, marginBottom: '2rem' }}>
          Established in <span className="gradient-text-cyan">2008</span>
        </h1>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
          <div>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
              For over 15 years, Harsh Infotech has been at the forefront of the technological revolution in India. What started as a small team dedicated to surveillance has grown into a multi-divisional technology powerhouse.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-text-muted)' }}>
              Our mission is simple: to make complex technology accessible and unified. Whether it’s securing a campus, automating a home, or enabling critical healthcare communications, we deliver reliability built on a decade and a half of experience.
            </p>
          </div>
          <div className="glass-card" style={{ padding: '2.5rem' }}>
            <h3 style={{ marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>Our Core Values</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                { title: 'Reliability', desc: 'Failure is not an option in mission-critical systems.' },
                { title: 'Unity', desc: 'Technology should speak one language: One Fiber.' },
                { title: 'Innovation', desc: "Always pushing the boundaries of what's possible." },
              ].map((v) => (
                <li key={v.title}>
                  <div style={{ fontWeight: 700, fontSize: '1rem', color: '#06b6d4', marginBottom: '0.25rem' }}>{v.title}</div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>{v.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
