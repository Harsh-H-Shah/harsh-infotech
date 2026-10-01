'use client';

import Link from 'next/link';
import { useRef, useEffect } from 'react';
import { asset } from "@/lib/asset";

export default function OneFiberPage() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) videoRef.current.play().catch(() => {});
  }, []);

  return (
    <>
      <section className="video-hero">
        <video ref={videoRef} src={asset("/videos/One_Fiber.mp4")} muted loop playsInline preload="auto" />
        <div className="video-hero__overlay" style={{ background: 'linear-gradient(to bottom, rgba(5,5,8,0.4) 0%, rgba(5,5,8,0.95) 100%)' }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <span className="tag-pill" style={{ color: '#06b6d4', borderColor: '#06b6d455', background: 'rgba(6,182,212,0.1)', marginBottom: '1.5rem' }}>
            Flagship Platform
          </span>
          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
            fontWeight: 800,
            lineHeight: 1,
            marginBottom: '1.5rem',
          }}>
            The Brain of <br/>Your <span className="gradient-text-cyan">Ecosystem</span>
          </h1>
          <p style={{
            fontSize: '1.15rem', color: 'rgba(240,240,248,0.7)', lineHeight: 1.8, maxWidth: '620px', margin: '0 auto 2.5rem'
          }}>
            One Fiber isn’t just a product. It’s a high-speed connectivity layer that harmoniously integrates every Harsh Infotech division into one responsive platform.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/one-fiber/overview" className="btn-primary" style={{ background: 'linear-gradient(135deg, #06b6d4, #22d3ee)', color: '#000' }}>
              Platform Overview
            </Link>
            <Link href="/one-fiber/services" className="btn-ghost" style={{ background: 'rgba(255,255,255,0.05)' }}>Services & Plans</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="glass-card" style={{ padding: '2.5rem' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>⚡</div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', marginBottom: '1rem' }}>Unified Latency</h3>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>Ultra-low latency communication between locks, switches, and security systems. Action and reaction happens in milliseconds.</p>
            </div>
            <div className="glass-card" style={{ padding: '2.5rem' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>🔒</div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', marginBottom: '1rem' }}>Zero-Trust Security</h3>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>Enterprise-grade encryption for every data packet. Your home and business data stays private and secure.</p>
            </div>
            <div className="glass-card" style={{ padding: '2.5rem' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>🚀</div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', marginBottom: '1rem' }}>Infinite Scalability</h3>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>Start with one room and expand to a whole campus. One Fiber grows with your requirements without replacing core infrastructure.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
