import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'CCTV Systems',
  description: 'Advanced surveillance solutions including 4K IP cameras, AI analytics, and remote monitoring.',
};

export default function CCTVPage() {
  return (
    <div className="section" style={{ paddingTop: '8rem' }}>
      <div className="container">
        <Link href="/security" style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1.5rem' }}>
          ← Security
        </Link>
        <span className="tag-pill" style={{ color: '#ef4444', borderColor: '#ef444455', background: 'rgba(239,68,68,0.1)', marginBottom: '1.25rem' }}>CCTV Systems</span>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 800, marginBottom: '2rem' }}>Surveillance <span className="gradient-text-red">Redefined</span></h1>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div className="glass-card" style={{ padding: '2rem' }}>
            <h3 style={{ marginBottom: '1rem' }}>4K AI Cameras</h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>Facial recognition, line crossing alerts, and advanced object detection for residential and commercial security.</p>
          </div>
          <div className="glass-card" style={{ padding: '2rem' }}>
            <h3 style={{ marginBottom: '1rem' }}>Remote Monitoring</h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>Access your live feed from anywhere in the world with the One Fiber app. Cloud recording and local storage options available.</p>
          </div>
          <div className="glass-card" style={{ padding: '2rem' }}>
            <h3 style={{ marginBottom: '1rem' }}>Institutional Scale</h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>Centralized management software for multi-site deployments, perfect for enterprise campuses and hospitals.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
