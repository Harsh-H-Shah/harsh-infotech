import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Smart Appliances',
  description: 'Connected home appliances including ACs, fans, and lifestyle devices unified via One Fiber.',
};

const applianceCategories = [
  { name: 'Climate Control', items: ['Smart AC Controllers', 'Connected Fans', 'In-wall Thermostats'] },
  { name: 'Energy Management', items: ['Smart Plugs', 'Circuit Monitors', 'Solar Integration'] },
  { name: 'Lifestyle', items: ['Motorized Curtains', 'Smart Lighting', 'Kitchen Control'] },
];

export default function AppliancesPage() {
  return (
    <>
      <section className="division-hero" style={{ background: 'linear-gradient(135deg, rgba(129,140,248,0.06) 0%, var(--color-background) 60%)', paddingTop: '8rem', paddingBottom: '4rem' }}>
        <div className="container">
          <Link href="/smart-home" style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1.5rem' }}>
            ← Smart Home
          </Link>
          <span className="tag-pill" style={{ color: '#818cf8', borderColor: '#818cf855', background: 'rgba(129,140,248,0.1)', marginBottom: '1.25rem' }}>Smart Appliances</span>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.25rem' }}>
            A Truly <span className="gradient-text-indigo">Liveable</span> Home
          </h1>
          <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, fontSize: '1rem', marginBottom: '2.25rem', maxWidth: '500px' }}>
            Connect your existing appliances to the One Fiber ecosystem. Monitor energy, automate routines, and control your environment from anywhere.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {applianceCategories.map((cat) => (
              <div key={cat.name} className="glass-card" style={{ padding: '2.5rem' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', marginBottom: '1.5rem', color: '#818cf8' }}>{cat.name}</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {cat.items.map((item) => (
                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem', color: 'var(--color-text-muted)' }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="#818cf8" strokeWidth="1.5"/><path d="M5 8l2 2 4-4" stroke="#818cf8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-surface)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '1.5rem' }}>Seamless Connectivity</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 2.5rem', color: 'var(--color-text-muted)' }}>
            All appliance controllers feature native One Fiber connectivity, meaning they work together out of the box with zero complex setup.
          </p>
          <Link href="/contact" className="btn-primary" style={{ background: 'linear-gradient(135deg, #6366f1, #a78bfa)', color: '#fff' }}>Enquire About Appliances</Link>
        </div>
      </section>
    </>
  );
}
