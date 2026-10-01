'use client';

import Link from 'next/link';
import { useRef, useEffect } from 'react';
import { asset } from "@/lib/asset";

const switchModels = [
  { name: 'Modulo 1G', desc: '1-gang, single backlit touch switch with energy meter', price: 'From ₹1,299' },
  { name: 'Modulo 2G', desc: '2-gang dual-zone touchscreen with scene presets', price: 'From ₹1,799' },
  { name: 'Modulo 4G', desc: '4-gang premium glass panel with real-time wattage display', price: 'From ₹2,499' },
  { name: 'Modulo Fan', desc: 'Capacitive fan regulator with 10-speed control', price: 'From ₹1,099' },
  { name: 'Modulo Dimmer', desc: 'LED/CFL dimmer with smooth 0–100% ramp control', price: 'From ₹1,399' },
  { name: 'Modulo Scene', desc: '6-scene controller — one tap for mood, movie, sleep', price: 'From ₹2,199' },
];

export default function SwitchesPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const assemblyRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    [videoRef, assemblyRef].forEach((ref) => {
      if (ref.current) ref.current.play().catch(() => {});
    });
  }, []);

  return (
    <>
      {/* Hero with Switch.mp4 */}
      <section className="video-hero" style={{ minHeight: '85vh' }}>
        <video ref={videoRef} src={asset("/videos/Switch.mp4")} muted loop playsInline />
        <div className="video-hero__overlay" style={{
          background: 'linear-gradient(to bottom, rgba(5,5,8,0.5) 0%, rgba(5,5,8,0.3) 40%, rgba(5,5,8,0.9) 100%)',
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <Link href="/smart-home" style={{ color: 'rgba(240,240,248,0.6)', fontSize: '0.85rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1.5rem' }}>
            ← Smart Home
          </Link>
          <span className="tag-pill" style={{ color: '#a78bfa', borderColor: '#a78bfa55', background: 'rgba(167,139,250,0.1)', display: 'inline-flex', marginBottom: '1.25rem' }}>
            Smart Switches
          </span>
          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            maxWidth: '640px',
            marginBottom: '1.25rem',
          }}>
            Control Every Light, <span style={{ color: '#a78bfa' }}>Every Room.</span>
          </h1>
          <p style={{ color: 'rgba(240,240,248,0.7)', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '520px', marginBottom: '2.25rem' }}>
            The Modulo series reimagines the humble switch — touch glass panels, real-time energy tracking, and One Fiber cloud control for every gang in your home.
          </p>
          <Link href="/contact" className="btn-primary" style={{ background: 'linear-gradient(135deg, #6366f1, #a78bfa)', color: '#fff' }}>
            Request a Sample
          </Link>
        </div>
      </section>

      {/* Assembly Video + Info */}
      <section className="section" style={{ background: 'var(--color-surface)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div style={{ borderRadius: '1rem', overflow: 'hidden', border: '1px solid var(--color-border)', aspectRatio: '16/9' }}>
              <video
                ref={assemblyRef}
                src={asset("/videos/Switch Assembly.mp4")}
                muted
                loop
                playsInline
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div>
              <span className="section-label" style={{ color: '#a78bfa' }}>Professional Installation</span>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', marginBottom: '1rem' }}>
                Tool-Free Module Swap
              </h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                The Modulo gang system uses a snap-in design — individual function modules click into standardized frames without rewiring. Upgrade a single switch or swap the entire panel in minutes.
              </p>
              {['Snap-in modular design', 'Compatible with existing 1-way wiring', 'No hub required (One Fiber direct)', 'Available in 3 finishes: Graphite, Pearl, Satin Gold'].map((feat) => (
                <div key={feat} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" stroke="#a78bfa" strokeWidth="1.3"/><path d="M4 7l2 2 4-4" stroke="#a78bfa" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  {feat}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Models */}
      <section className="section">
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', textAlign: 'center', marginBottom: '2.5rem' }}>Modulo Series</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
            {switchModels.map((m) => (
              <div key={m.name} className="glass-card" style={{ padding: '1.75rem' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.1rem', color: '#a78bfa', marginBottom: '0.5rem' }}>{m.name}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '1rem' }}>{m.desc}</p>
                <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-text)' }}>{m.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '1rem' }}>Ready to Upgrade Your Switches?</h2>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>Order a sample kit or book a site visit for a personalised quote.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary" style={{ background: 'linear-gradient(135deg, #6366f1, #a78bfa)', color: '#fff' }}>Order Sample Kit</Link>
            <Link href="/smart-home/appliances" className="btn-ghost">Smart Appliances →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
