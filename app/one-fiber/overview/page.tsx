import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'One Fiber Platform Overview',
  description: 'Technical overview of the One Fiber connectivity platform that powers the Harsh Infotech ecosystem.',
};

export default function OneFiberOverviewPage() {
  return (
    <div className="section" style={{ paddingTop: '8rem' }}>
      <div className="container">
        <Link href="/one-fiber" style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1.5rem' }}>
          ← One Fiber
        </Link>
        <span className="tag-pill" style={{ color: '#06b6d4', borderColor: '#06b6d455', background: 'rgba(6,182,212,0.1)', marginBottom: '1.25rem' }}>Platform Overview</span>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 800, marginBottom: '2rem' }}>How One <span className="gradient-text-cyan">Fiber</span> Works</h1>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div className="glass-card" style={{ padding: '2rem' }}>
            <h3 style={{ marginBottom: '1rem' }}>Local-First AI</h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>One Fiber processes most automation locally, ensuring privacy and speed without relying entirely on a cloud connection.</p>
          </div>
          <div className="glass-card" style={{ padding: '2rem' }}>
            <h3 style={{ marginBottom: '1rem' }}>Universal Protocol</h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>By leveraging a custom Sub-GHz wireless protocol, we achieve massive range through walls and floors that standard Wi-Fi cannot penetrate.</p>
          </div>
          <div className="glass-card" style={{ padding: '2rem' }}>
            <h3 style={{ marginBottom: '1rem' }}>Modular Architecture</h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>Add new devices as easily as scanning a QR code. One Fiber automatically configures the network and links it to your dashboards.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
