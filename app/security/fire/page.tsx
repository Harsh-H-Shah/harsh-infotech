import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Fire Safety',
  description: 'Integrated fire detection and alarm systems for residential and commercial property safety.',
};

export default function FireSafetyPage() {
  return (
    <div className="section" style={{ paddingTop: '8rem' }}>
      <div className="container">
        <Link href="/security" style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1.5rem' }}>
          ← Security
        </Link>
        <span className="tag-pill" style={{ color: '#ef4444', borderColor: '#ef444455', background: 'rgba(239,68,68,0.1)', marginBottom: '1.25rem' }}>Fire Safety</span>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 800, marginBottom: '2rem' }}>Safety Without <span className="gradient-text-red">Compromise</span></h1>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div className="glass-card" style={{ padding: '2rem' }}>
            <h3 style={{ marginBottom: '1rem' }}>Smart Detection</h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>Addressable smoke and heat detectors that pin-point the exact location of a hazard instantly.</p>
          </div>
          <div className="glass-card" style={{ padding: '2rem' }}>
            <h3 style={{ marginBottom: '1rem' }}>One Fiber Alarm</h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>Automatically trigger emergency lighting, unlock smart doors, and broadcast evacuation alerts via the unified platform.</p>
          </div>
          <div className="glass-card" style={{ padding: '2rem' }}>
            <h3 style={{ marginBottom: '1rem' }}>Compliance Ready</h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>Our systems meet all national fire safety standards and are designed for seamless institutional audits.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
