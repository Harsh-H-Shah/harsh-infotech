import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Smart Home',
  description: 'Intelligent living solutions — smart locks, switches, appliances, and whole-home automation via One Fiber.',
};

const products = [
  {
    name: 'Smart Locks',
    desc: 'Biometric, PIN, RFID & app-controlled door locks with tamper alerts and activity logs.',
    href: '/smart-home/locks',
    icon: '🔐',
    accent: '#6366f1',
  },
  {
    name: 'Smart Switches',
    desc: 'Touchscreen modular switches with scene control, energy monitoring, and voice assistant support.',
    href: '/smart-home/switches',
    icon: '💡',
    accent: '#a78bfa',
  },
  {
    name: 'Smart Appliances',
    desc: 'Connected ACs, fans, and home appliances controlled from anywhere via the One Fiber app.',
    href: '/smart-home/appliances',
    icon: '🌡️',
    accent: '#818cf8',
  },
  {
    name: 'Ecosystem Overview',
    desc: 'See how all smart home products work together through the One Fiber connectivity platform.',
    href: '/smart-home/ecosystem',
    icon: '🔗',
    accent: '#06b6d4',
  },
];

const features = [
  { label: 'Voice Control', desc: 'Works with Alexa, Google Assistant & Siri' },
  { label: 'One Fiber Native', desc: 'All devices connected on a single unified platform' },
  { label: 'Energy Insights', desc: 'Real-time power consumption monitoring per device' },
  { label: 'Scene Automation', desc: 'Trigger scenarios by time, location or voice' },
  { label: 'Remote Access', desc: 'Control and monitor from anywhere via mobile' },
  { label: 'Offline Backup', desc: 'Local control even during internet outages' },
];

export default function SmartHomePage() {
  return (
    <>
      {/* Hero */}
      <section className="division-hero" style={{
        background: 'linear-gradient(135deg, rgba(99,102,241,0.08) 0%, var(--color-background) 60%)',
        borderBottom: '1px solid var(--color-border)',
        paddingTop: '8rem',
        paddingBottom: '5rem',
      }}>
        <div className="glow-bg" style={{ background: '#6366f1', top: '-50px', right: '-50px', width: '500px', height: '500px', opacity: 0.08 }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '720px' }}>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              <span className="tag-pill" style={{ color: '#6366f1', borderColor: '#6366f155', background: 'rgba(99,102,241,0.1)' }}>
                Smart Home Division
              </span>
              <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Est. 2013</span>
            </div>
            <h1 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              marginBottom: '1.25rem',
            }}>
              Your Home, <span className="gradient-text-indigo">Intelligently</span> Controlled
            </h1>
            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', lineHeight: 1.8, maxWidth: '560px', marginBottom: '2rem' }}>
              A complete smart home ecosystem — from the front door to every switch and appliance — unified through One Fiber for a seamless living experience.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/smart-home/locks" className="btn-primary" style={{ background: 'linear-gradient(135deg, #6366f1, #a78bfa)', color: '#fff' }}>
                Explore Products
              </Link>
              <Link href="/smart-home/ecosystem" className="btn-ghost">View Ecosystem</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section">
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', marginBottom: '2.5rem', textAlign: 'center' }}>
            Product Categories
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
            {products.map((p) => (
              <Link key={p.name} href={p.href} style={{ textDecoration: 'none' }}>
                <div className="glass-card" style={{ padding: '2rem', height: '100%' }}>
                  <div style={{
                    width: 52,
                    height: 52,
                    background: p.accent + '18',
                    borderRadius: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.6rem',
                    marginBottom: '1.25rem',
                  }}>
                    {p.icon}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.2rem', marginBottom: '0.6rem', color: p.accent }}>{p.name}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>{p.desc}</p>
                  <div style={{ marginTop: '1.25rem', color: p.accent, fontSize: '0.875rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    Learn more →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label" style={{ color: '#6366f1' }}>Platform Features</span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}>Everything in One App</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
            {features.map((f) => (
              <div key={f.label} className="glass-card" style={{ padding: '1.5rem' }}>
                <div style={{ color: '#6366f1', fontWeight: 700, marginBottom: '0.4rem', fontSize: '0.95rem' }}>{f.label}</div>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', marginBottom: '1rem' }}>
            Ready to Automate Your Home?
          </h2>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', maxWidth: '480px', margin: '0 auto 2rem' }}>
            Our smart home specialists will design a custom automation plan for your property.
          </p>
          <Link href="/contact" className="btn-primary" style={{ background: 'linear-gradient(135deg, #6366f1, #a78bfa)', color: '#fff' }}>
            Book a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
