import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Variation1() {
    const containerRef = useRef(null);

    useGSAP(() => {
        // Hero Animation: Scale down and pin the hero image as user scrolls down
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.hero-section',
                start: 'top top',
                end: '+=100%',
                scrub: true,
                pin: true,
            }
        });

        tl.to('.hero-image', {
            scale: 0.8,
            borderRadius: '40px',
            opacity: 0.5,
            filter: 'blur(10px)',
            duration: 1
        })
            .to('.hero-text', {
                y: -100,
                opacity: 0,
                duration: 0.5
            }, '<');

        // Section 2 Panel Fold effect
        gsap.utils.toArray('.fold-panel').forEach((panel, i) => {
            ScrollTrigger.create({
                trigger: panel,
                start: 'top top',
                pin: true,
                pinSpacing: false,
                end: '+=100%', // hold for 1 viewport height
            });
        });

    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="variation-container">
            {/* HERO SECTION */}
            <section className="hero-section" style={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>
                <img
                    className="hero-image"
                    src="https://images.unsplash.com/photo-1596431940733-a3d8b2e3532c?q=80&w=2560&auto=format&fit=crop"
                    alt="Luxury outbuilding"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, zIndex: 0 }}
                />
                <div
                    className="hero-text"
                    style={{ position: 'relative', zIndex: 1, padding: '10rem 4rem', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
                >
                    <h1 style={{ fontSize: '5rem', marginBottom: '1rem' }}>The Ultimate<br /><span style={{ color: 'var(--law-yellow)' }}>Sanctuary.</span></h1>
                    <p style={{ fontSize: '1.2rem', maxWidth: '500px', lineHeight: 1.6, color: '#ccc' }}>
                        Introducing the Lawsons Premier Range. Partnered with Lugarde, we bring you £25,000 of architectural perfection.
                    </p>
                </div>
            </section>

            {/* FOLD SECTIONS */}
            <section className="fold-panel panel-1" style={{ height: '100vh', background: 'var(--law-green)', display: 'flex', alignItems: 'center', position: 'relative', zIndex: 2 }}>
                <div style={{ padding: '4rem', display: 'flex', gap: '4rem', width: '100%', maxWidth: '1400px', margin: '0 auto' }}>
                    <div style={{ flex: 1 }}>
                        <h2 style={{ fontSize: '3rem', color: 'var(--law-yellow)', marginBottom: '2rem' }}>Precision Engineered</h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>Every joint, every piece of timber is milled to perfection. Our premium log cabins use a patented stacking system ensuring unparalleled wind and water resistance.</p>
                    </div>
                    <div style={{ flex: 1, height: '60vh', borderRadius: '24px', position: 'relative', overflow: 'hidden' }}>
                        <img src="https://images.unsplash.com/photo-1510627498534-ebdcececeaa6?q=80&w=1200" alt="Timber detail" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

                        {/* Hotspots */}
                        <div className="hotspot" style={{ position: 'absolute', top: '30%', left: '40%', cursor: 'pointer', zIndex: 10 }}>
                            <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'var(--law-yellow)', boxShadow: '0 0 0 10px rgba(212, 175, 55, 0.3)', animation: 'pulse 2s infinite' }}></div>
                            <div className="hotspot-text glass-panel" style={{ position: 'absolute', top: '30px', left: '30px', width: '200px', padding: '1rem', opacity: 0, transition: 'opacity 0.3s ease', pointerEvents: 'none' }}>
                                <h4 style={{ color: 'var(--law-yellow)', margin: 0, fontFamily: 'var(--font-heading)' }}>Pro Insulation</h4>
                                <p style={{ fontSize: '0.85rem', margin: '0.5rem 0 0', color: '#fff', fontFamily: 'var(--font-body)' }}>Options for 44mm to 68mm wall thickness.</p>
                            </div>
                        </div>

                        <div className="hotspot" style={{ position: 'absolute', top: '60%', left: '70%', cursor: 'pointer', zIndex: 10 }}>
                            <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'var(--law-yellow)', boxShadow: '0 0 0 10px rgba(212, 175, 55, 0.3)', animation: 'pulse 2s infinite 1s' }}></div>
                            <div className="hotspot-text glass-panel" style={{ position: 'absolute', top: '30px', left: '-150px', width: '200px', padding: '1rem', opacity: 0, transition: 'opacity 0.3s ease', pointerEvents: 'none' }}>
                                <h4 style={{ color: 'var(--law-yellow)', margin: 0, fontFamily: 'var(--font-heading)' }}>Lugarde Joints</h4>
                                <p style={{ fontSize: '0.85rem', margin: '0.5rem 0 0', color: '#fff', fontFamily: 'var(--font-body)' }}>Patented corner connections.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="fold-panel panel-2" style={{ height: '100vh', background: '#1c2e22', display: 'flex', alignItems: 'center', position: 'relative', zIndex: 3 }}>
                <div style={{ padding: '4rem', display: 'flex', flexDirection: 'row-reverse', gap: '4rem', width: '100%', maxWidth: '1400px', margin: '0 auto' }}>
                    <div style={{ flex: 1 }}>
                        <h2 style={{ fontSize: '3rem', color: 'var(--law-offwhite)', marginBottom: '2rem' }}>A Space For You</h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>Whether it’s a high-end home office, a private gym, or a luxury garden lounge. Complete with premium insulation, double glazing, and beautiful bifold doors.</p>
                    </div>
                    <div style={{ flex: 1, height: '60vh', borderRadius: '24px', overflow: 'hidden' }}>
                        <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200" alt="Interior view" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                </div>
            </section>

            <section style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'var(--law-green)', zIndex: 4, position: 'relative' }}>
                <div style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '4rem', marginBottom: '1rem' }}>Ready to Elevate?</h2>
                    <button style={{ padding: '1rem 3rem', fontSize: '1.2rem', background: 'var(--law-yellow)', color: '#000', border: 'none', borderRadius: '8px', cursor: 'pointer', fontFamily: 'var(--font-heading)', fontWeight: 600 }}>Request a Brochure</button>
                </div>
            </section>
        </div>
    );
}
