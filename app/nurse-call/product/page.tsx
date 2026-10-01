import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Nurse Call Product Architecture',
  description: 'Technical details of the Nurse Call system components including call points, monitors, and software.',
};

export default function NurseCallProductPage() {
  return (
    <div className="section" style={{ paddingTop: '8rem' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <Link href="/nurse-call" style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1.5rem' }}>
          ← Nurse Call
        </Link>
        <span className="tag-pill" style={{ color: '#10b981', borderColor: '#10b98155', background: 'rgba(16,185,129,0.1)', marginBottom: '1.25rem' }}>System Architecture</span>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 800, marginBottom: '2rem' }}>The <span className="gradient-text-emerald">Standard</span> of Care</h1>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div className="glass-card" style={{ padding: '2.5rem' }}>
            <h3 style={{ marginBottom: '1rem', color: '#10b981' }}>IP-Based Nurse Call</h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8 }}>Our system is fully IP-based, allowing for seamless integration with existing hospital networks and patient information systems. Every call point is an intelligent node monitorable from any central nurse station.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div className="glass-card" style={{ padding: '2rem' }}>
              <h4 style={{ marginBottom: '1rem' }}>Patient Call Point</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>Antibacterial housing with backlit buttons, two-way voice, and optional medical oxygen sensor integration.</p>
            </div>
            <div className="glass-card" style={{ padding: '2rem' }}>
              <h4 style={{ marginBottom: '1rem' }}>Central Monitor</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>High-definition touchscreens for nurse stations with real-time room status, response timer tracking, and emergency escalation.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
