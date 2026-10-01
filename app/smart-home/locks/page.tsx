import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: 'Smart Locks',
  description: 'Biometric smart locks with PIN, RFID, app & voice control. Secure, elegant, and One Fiber connected.',
};

const specs = [
  { key: 'Authentication', value: 'Fingerprint, PIN, RFID, App, Voice' },
  { key: 'Connectivity', value: 'Wi-Fi 6, One Fiber Wireless, Bluetooth 5.0' },
  { key: 'Auto-Lock Delay', value: '5s – 120s (configurable)' },
  { key: 'Activity Log', value: 'Last 1,000 events with timestamps' },
  { key: 'Tamper Alert', value: 'Real-time push notification + siren' },
  { key: 'Battery Life', value: '12 months (4x AA alkaline)' },
  { key: 'Weather Rating', value: 'IP65 dust & water resistant' },
  { key: 'Material', value: 'Premium zinc alloy body + tempered glass' },
];

const highlights = [
  { icon: '👆', title: 'Biometric Fingerprint', desc: 'Recognises up to 100 fingerprints. Unlocks in under 0.5 seconds.' },
  { icon: '📱', title: 'Remote Control', desc: 'Lock, unlock, and share access remotely via the One Fiber app.' },
  { icon: '📋', title: 'Activity Logs', desc: 'Every entry and exit logged with timestamp and identity.' },
  { icon: '🔔', title: 'Tamper Detection', desc: 'Instant alerts on forced entry attempts or voltage spikes.' },
];

export default function LocksPage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        paddingTop: '8rem',
        paddingBottom: '4rem',
        background: 'linear-gradient(135deg, rgba(99,102,241,0.06) 0%, var(--color-background) 60%)',
        borderBottom: '1px solid var(--color-border)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div className="glow-bg" style={{ background: '#6366f1', top: '-100px', right: '0', width: '600px', height: '600px', opacity: 0.07 }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <Link href="/smart-home" style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1.5rem' }}>
            ← Smart Home
          </Link>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <span className="tag-pill" style={{ color: '#6366f1', borderColor: '#6366f155', background: 'rgba(99,102,241,0.1)', marginBottom: '1.25rem' }}>Smart Locks</span>
              <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1.25rem' }}>
                Access on Your <span className="gradient-text-indigo">Terms</span>
              </h1>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, fontSize: '1rem', marginBottom: '2rem', maxWidth: '440px' }}>
                Multi-modal authentication, real-time monitoring, and seamless One Fiber integration. Security that never compromises on convenience.
              </p>
              <Link href="/contact" className="btn-primary" style={{ background: 'linear-gradient(135deg, #6366f1, #a78bfa)', color: '#fff' }}>
                Request a Demo
              </Link>
            </div>
            {/* Product image */}
            <div style={{
              background: 'var(--color-surface)',
              borderRadius: '1.5rem',
              border: '1px solid var(--color-border)',
              overflow: 'hidden',
              aspectRatio: '4/3',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}>
              <Image
                src={asset("/images/Smart lock.png")}
                alt="Harsh Infotech Smart Lock"
                fill
                style={{ objectFit: 'contain', padding: '2rem' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section">
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', textAlign: 'center', marginBottom: '2.5rem' }}>Key Features</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
            {highlights.map((h) => (
              <div key={h.title} className="glass-card" style={{ padding: '1.75rem' }}>
                <div style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{h.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.5rem' }}>{h.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="section" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container" style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', textAlign: 'center', marginBottom: '2.5rem' }}>Technical Specifications</h2>
          <table className="spec-table">
            <tbody>
              {specs.map((s) => (
                <tr key={s.key}>
                  <td style={{ color: 'var(--color-text-muted)', padding: '0.9rem 0', fontSize: '0.9rem', width: '40%', borderBottom: '1px solid var(--color-border)' }}>{s.key}</td>
                  <td style={{ padding: '0.9rem 0', fontSize: '0.9rem', fontWeight: 500, borderBottom: '1px solid var(--color-border)' }}>{s.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', marginBottom: '1rem' }}>Interested in Smart Locks?</h2>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>Contact us for pricing, bulk orders, and professional installation.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary" style={{ background: 'linear-gradient(135deg, #6366f1, #a78bfa)', color: '#fff' }}>Get a Quote</Link>
            <Link href="/smart-home/switches" className="btn-ghost">View Smart Switches →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
