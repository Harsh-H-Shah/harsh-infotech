import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Smart Home Ecosystem',
  description: 'How all Harsh Infotech smart home devices work together via the One Fiber platform.',
};

export default function EcosystemPage() {
  return (
    <>
      <section className="division-hero" style={{ background: 'linear-gradient(135deg, rgba(6,182,212,0.06) 10%, var(--color-background) 70%)', paddingTop: '8rem', paddingBottom: '4rem' }}>
        <div className="container">
          <Link href="/smart-home" style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1.5rem' }}>
            ← Smart Home
          </Link>
          <span className="tag-pill" style={{ color: '#06b6d4', borderColor: '#06b6d455', background: 'rgba(6,182,212,0.1)', marginBottom: '1.25rem' }}>Our Ecosystem</span>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.25rem' }}>
            One App. <span className="gradient-text-cyan">Infinite</span> Possibilities.
          </h1>
          <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, fontSize: '1rem', marginBottom: '2.25rem', maxWidth: '540px' }}>
            Discover the interconnectivity of the Harsh Infotech ecosystem. One Fiber acts as the brain, bringing switches, locks, and appliances into a single, unified dialogue.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1.5fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', marginBottom: '1.5rem' }}>Unified Control</h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Traditional smart homes often suffer from “App Fatigue” — where every device needs a different app. One Fiber eliminates this by providing a single point of control for the entire Harsh Infotech range.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div className="glass-card" style={{ padding: '1.25rem' }}>
                  <div style={{ fontWeight: 700, color: '#06b6d4', marginBottom: '0.25rem' }}>Scene Automation</div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Tap “Away” to lock the door, turn off all lights, and set the AC to eco-mode simultaneously.</p>
                </div>
                <div className="glass-card" style={{ padding: '1.25rem' }}>
                  <div style={{ fontWeight: 700, color: '#06b6d4', marginBottom: '0.25rem' }}>Instant Sync</div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Changing a setting on your switch panel instantly reflects in the app and all other linked devices.</p>
                </div>
              </div>
            </div>
            {/* Visual representation placeholder */}
            <div style={{
              background: 'var(--color-surface)',
              borderRadius: '2rem',
              border: '1px solid var(--color-border)',
              height: '400px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', width: '200px', height: '200px', background: 'var(--color-one-fiber-glow)', borderRadius: '50%', filter: 'blur(80px)' }} />
              <div style={{
                width: 100, height: 100, background: 'rgba(255,255,255,0.05)', border: '1px solid var(--color-border)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem',
                zIndex: 2,
              }}>
                ⚡
              </div>
              {/* Lines to other icons around it */}
              {[
                { icon: '🔐', pos: '0, -120px' },
                { icon: '💡', pos: '100px, -60px' },
                { icon: '🌡️', pos: '100px, 60px' },
                { icon: '📺', pos: '0, 120px' },
                { icon: '🛡️', pos: '-100px, 60px' },
                { icon: '📱', pos: '-100px, -60px' },
              ].map((item, i) => (
                <div key={i} style={{
                  position: 'absolute',
                  transform: `translate(${item.pos})`,
                  width: 50, height: 50, background: 'rgba(255,255,255,0.03)', border: '1px solid var(--color-border)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem',
                  zIndex: 1,
                }}>
                  {item.icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '1.5rem' }}>Experience the Future Today</h2>
          <Link href="/one-fiber/overview" className="btn-primary" style={{ background: 'linear-gradient(135deg, #06b6d4, #22d3ee)', color: '#000' }}>Explore One Fiber</Link>
        </div>
      </section>
    </>
  );
}
