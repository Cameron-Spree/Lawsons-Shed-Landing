import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Variation2() {
    const containerRef = useRef(null);
    const galleryRef = useRef(null);

    useGSAP(() => {
        const panels = gsap.utils.toArray('.gallery-panel');

        gsap.to(panels, {
            xPercent: -100 * (panels.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: galleryRef.current,
                pin: true,
                scrub: 1,
                snap: 1 / (panels.length - 1),
                end: () => "+=" + galleryRef.current.offsetWidth
            }
        });

    }, { scope: containerRef });

    return (
        <div ref={containerRef} style={{ background: 'var(--law-green)' }}>
            {/* Intro Section */}
            <section style={{ height: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '0 2rem' }}>
                <h1 style={{ fontSize: '4.5rem', fontFamily: 'var(--font-heading)', color: 'var(--law-offwhite)', marginBottom: '1rem' }}>
                    Explore the <span style={{ color: 'var(--law-yellow)' }}>Collection.</span>
                </h1>
                <p style={{ fontSize: '1.2rem', color: '#ccc', maxWidth: '600px', lineHeight: 1.6 }}>
                    Scroll down to journey through our premium Lugarde range. Immersive, beautifully crafted, built for life.
                </p>
                <div style={{ marginTop: '3rem', animation: 'bounce 2s infinite' }}>
                    <p style={{ fontSize: '0.9rem', color: 'var(--law-yellow)', textTransform: 'uppercase', letterSpacing: '2px' }}>Scroll</p>
                    <div style={{ width: '1px', height: '40px', background: 'var(--law-yellow)', margin: '1rem auto' }}></div>
                </div>
            </section>

            {/* Horizontal Gallery */}
            <div
                ref={galleryRef}
                style={{
                    width: '400vw',
                    height: '100vh',
                    display: 'flex',
                    flexWrap: 'nowrap',
                    overflow: 'hidden'
                }}
            >
                <div className="gallery-panel" style={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4rem' }}>
                    <div className="glass-panel" style={{ display: 'flex', width: '100%', height: '100%', overflow: 'hidden', padding: '2rem', gap: '2rem' }}>
                        <div style={{ flex: 1, overflow: 'hidden', borderRadius: '16px' }}>
                            <img src="/shed_gallery_office_1772528082739.png" alt="Garden office" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '2rem' }}>
                            <h3 style={{ fontSize: '1.2rem', color: 'var(--law-yellow)', letterSpacing: '2px', textTransform: 'uppercase' }}>The Office Plus</h3>
                            <h2 style={{ fontSize: '3rem', margin: '1rem 0' }}>Work In Peace.</h2>
                            <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: '#ccc' }}>Fully insulated walls, premium electrical fit-outs, and a climate-controlled interior. From £15,000.</p>
                        </div>
                    </div>
                </div>

                <div className="gallery-panel" style={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4rem' }}>
                    <div className="glass-panel" style={{ display: 'flex', width: '100%', height: '100%', overflow: 'hidden', padding: '2rem', gap: '2rem', flexDirection: 'row-reverse' }}>
                        <div style={{ flex: 1, overflow: 'hidden', borderRadius: '16px' }}>
                            <img src="/shed_gallery_timber_1772528098350.png" alt="Premium Timber" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '2rem' }}>
                            <h3 style={{ fontSize: '1.2rem', color: 'var(--law-yellow)', letterSpacing: '2px', textTransform: 'uppercase' }}>Lugarde Quality</h3>
                            <h2 style={{ fontSize: '3rem', margin: '1rem 0' }}>Northern European Pine.</h2>
                            <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: '#ccc' }}>Dried to exactly 14-16% moisture to prevent warping. A lifetime of durability.</p>
                        </div>
                    </div>
                </div>

                <div className="gallery-panel" style={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4rem' }}>
                    <div className="glass-panel" style={{ display: 'flex', width: '100%', height: '100%', overflow: 'hidden', padding: '2rem', gap: '2rem' }}>
                        <div style={{ flex: 1, overflow: 'hidden', borderRadius: '16px' }}>
                            <img src="/shed_gallery_lounge_1772528117496.png" alt="Lounge Area" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '2rem' }}>
                            <h3 style={{ fontSize: '1.2rem', color: 'var(--law-yellow)', letterSpacing: '2px', textTransform: 'uppercase' }}>The Sanctuary</h3>
                            <h2 style={{ fontSize: '3rem', margin: '1rem 0' }}>Your Private Retreat.</h2>
                            <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: '#ccc' }}>With prices up to £25,000, create a secondary living space complete with built-in verandas and custom glazing.</p>
                            <button style={{ marginTop: '2rem', padding: '1rem 2rem', width: 'fit-content', background: 'var(--law-yellow)', color: '#000', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 600 }}>Design Yours</button>
                        </div>
                    </div>
                </div>

                {/* We need one extra panel to end the horizontal scroll cleanly or just 3 panels as designed */}
            </div>

            {/* Outro */}
            <section style={{ height: '60vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#0a140e' }}>
                <h2 style={{ fontSize: '3rem', color: 'var(--law-offwhite)' }}>Experience it in person. Visit a branch.</h2>
            </section>

            <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
      `}</style>
        </div>
    );
}
