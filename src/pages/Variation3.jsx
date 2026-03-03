import React, { useRef, useState, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Variation3() {
    const containerRef = useRef(null);
    const [dayNight, setDayNight] = useState(0); // 0 = day, 1 = night

    useGSAP(() => {
        // 3D Scale Build Effect
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.build-section',
                start: 'top top',
                end: '+=200%',
                scrub: true,
                pin: true,
            }
        });

        tl.fromTo('.shed-layer-foundation', { scale: 0.8, opacity: 0, y: 100 }, { scale: 1, opacity: 1, y: 0, duration: 1 })
            .fromTo('.shed-layer-walls', { scale: 0.8, opacity: 0, y: 100 }, { scale: 1, opacity: 1, y: 0, duration: 1 }, "-=0.2")
            .fromTo('.shed-layer-roof', { scale: 0.8, opacity: 0, y: 100 }, { scale: 1, opacity: 1, y: 0, duration: 1 }, "-=0.2")
            .to('.build-text', { opacity: 0, scale: 0.9, duration: 0.5 }, "-=2")
            .to('.success-text', { opacity: 1, scale: 1, duration: 0.5 });

        // Day Night Scroll Tracker (simplistic implementation using scrub to directly set state is tricky in GSAP React, 
        // so we'll use a scrubbed animation on a pseudo-element instead for performance)
        gsap.to('.day-night-overlay', {
            background: 'rgba(10, 20, 40, 0.8)', // Night blue
            scrollTrigger: {
                trigger: '.day-night-section',
                start: 'top top',
                end: '+=100%',
                scrub: true,
                pin: true,
                onUpdate: (self) => setDayNight(self.progress)
            }
        });

    }, { scope: containerRef });

    return (
        <div ref={containerRef} style={{ background: 'var(--law-green)' }}>

            {/* 3D Scroll Build Section */}
            <section className="build-section" style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>

                <div className="build-text" style={{ position: 'absolute', top: '15%', zIndex: 10, textAlign: 'center' }}>
                    <h2 style={{ fontSize: '3.5rem', fontFamily: 'var(--font-heading)' }}>Built to Last.</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--law-yellow)' }}>Scroll to assemble.</p>
                </div>

                <div className="success-text" style={{ position: 'absolute', top: '25%', opacity: 0, scale: 0.8, zIndex: 10, textAlign: 'center' }}>
                    <p style={{ fontSize: '1.2rem', color: 'var(--law-yellow)', textTransform: 'uppercase', letterSpacing: '3px' }}>The £25,000 Range</p>
                    <h2 style={{ fontSize: '4.5rem', fontFamily: 'var(--font-heading)' }}>Lugarde Premium.</h2>
                </div>

                {/* Abstract "Layers" of the shed */}
                <div style={{ position: 'relative', width: '800px', height: '500px', marginTop: '10rem' }}>
                    <div className="shed-layer-roof" style={{ position: 'absolute', top: '-100px', left: '10%', width: '80%', height: '200px', background: '#2C3E33', clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)', zIndex: 3, boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}></div>
                    <div className="shed-layer-walls" style={{ position: 'absolute', top: '100px', left: '15%', width: '70%', height: '300px', background: 'url(https://images.unsplash.com/photo-1510627498534-ebdcececeaa6?q=80&w=800) center/cover', zIndex: 2, borderRadius: '8px' }}>
                        {/* Window abstraction */}
                        <div style={{ position: 'absolute', top: '20%', left: '10%', width: '30%', height: '60%', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(4px)', border: '2px solid #111' }}></div>
                        <div style={{ position: 'absolute', top: '20%', right: '10%', width: '30%', height: '100%', background: 'rgba(0,0,0,0.8)', border: '2px solid #111', borderBottom: 'none' }}></div>
                    </div>
                    <div className="shed-layer-foundation" style={{ position: 'absolute', bottom: '-20px', left: '5%', width: '90%', height: '40px', background: '#333', zIndex: 1, borderRadius: '4px' }}></div>
                </div>

            </section>

            {/* Day / Night Section */}
            <section className="day-night-section" style={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>
                <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000"
                    alt="Shed Interior"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, zIndex: 0 }}
                />

                <div className="day-night-overlay" style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, background: 'rgba(0,0,0,0)', zIndex: 1 }}></div>

                {/* Interior Warm Lights that fade in as progress increases */}
                <div style={{
                    width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 2,
                    background: 'radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.4) 0%, transparent 60%)',
                    opacity: dayNight,
                    mixBlendMode: 'screen'
                }}></div>

                <div style={{ position: 'relative', zIndex: 3, padding: '4rem', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', pointerEvents: 'none' }}>
                    <h2 style={{ fontSize: '4rem', color: '#fff', textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
                        {dayNight > 0.5 ? 'Perfect for Evenings.' : 'Bathed in Sunlight.'}
                    </h2>
                    <p style={{ fontSize: '1.2rem', color: '#ddd', maxWidth: '500px', lineHeight: 1.6, textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>
                        From morning coffees in your home office to evening cocktails in your private lounge.
                        Smart lighting integrations come standard.
                    </p>
                </div>
            </section>

        </div>
    );
}
