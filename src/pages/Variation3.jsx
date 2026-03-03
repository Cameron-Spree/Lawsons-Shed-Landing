import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Variation3() {
    const containerRef = useRef(null);
    const [dayNight, setDayNight] = useState(0);

    useGSAP(() => {
        // Pure SVG Assembly Animation
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.build-section',
                start: 'top top',
                end: '+=400%', // Long scroll distance for many pieces
                scrub: 1,
                pin: true,
            }
        });

        tl.fromTo('.svg-foundation', { scale: 0.8, opacity: 0, y: 200 }, { scale: 1, opacity: 1, y: 0, duration: 1 })
            .fromTo('.svg-floor', { scale: 0.9, opacity: 0, y: 150 }, { scale: 1, opacity: 1, y: 0, duration: 1 }, "-=0.5")
            .fromTo('.svg-wall-back', { opacity: 0, y: 150 }, { opacity: 1, y: 0, duration: 1 }, "-=0.5")
            .fromTo('.svg-wall-sides', { opacity: 0, x: -100 }, { opacity: 1, x: 0, duration: 1 }, "-=0.5")
            .fromTo('.svg-roof-truss', { opacity: 0, y: -200 }, { opacity: 1, y: 0, duration: 1 }, "-=0.2")
            .fromTo('.svg-roof-panels', { opacity: 0, y: -300, scale: 1.2 }, { opacity: 1, y: 0, scale: 1, duration: 1.5 }, "-=0.5")
            .fromTo('.svg-doors', { opacity: 0, scale: 1.1 }, { opacity: 1, scale: 1, duration: 1 }, "-=0.5")
            .to('.build-text', { opacity: 0, y: -50, duration: 0.5 }, "-=4")
            .to('.success-text', { opacity: 1, y: 0, duration: 1 }, "-=1");

        // Day Night Fade Effect using the custom High Quality AI images
        gsap.to('.night-image-layer', {
            opacity: 1,
            scrollTrigger: {
                trigger: '.day-night-section',
                start: 'top top',
                end: '+=150%',
                scrub: true,
                pin: true,
                onUpdate: (self) => setDayNight(self.progress)
            }
        });

    }, { scope: containerRef });

    return (
        <div ref={containerRef} style={{ background: 'var(--law-green)' }}>

            {/* 3D Scroll Build Section - Upgraded to Pure SVG */}
            <section className="build-section" style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>

                <div className="build-text" style={{ position: 'absolute', top: '15%', zIndex: 10, textAlign: 'center' }}>
                    <h2 style={{ fontSize: '3.5rem', fontFamily: 'var(--font-heading)' }}>Step-by-Step Perfection.</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--law-yellow)' }}>Scroll to assemble your sanctuary.</p>
                </div>

                <div className="success-text" style={{ position: 'absolute', top: '22%', opacity: 0, transform: 'translateY(50px)', zIndex: 10, textAlign: 'center' }}>
                    <p style={{ fontSize: '1.2rem', color: 'var(--law-yellow)', textTransform: 'uppercase', letterSpacing: '3px' }}>The £25,000 Range</p>
                    <h2 style={{ fontSize: '4.5rem', fontFamily: 'var(--font-heading)' }}>Lugarde Premium.</h2>
                    <p style={{ marginTop: '1rem', color: '#ccc', maxWidth: '600px', margin: '1rem auto' }}>Every bearer, every joint, and every panel is precision engineered to guarantee a lifetime of luxury.</p>
                </div>

                {/* Pure SVG Architectural Build */}
                <div style={{ position: 'relative', width: '800px', height: '600px', marginTop: '12rem' }}>
                    <svg viewBox="0 0 1000 800" style={{ width: '100%', height: '100%', overflow: 'visible' }}>

                        {/* Foundation Grid */}
                        <g className="svg-foundation" style={{ transformOrigin: 'center' }}>
                            <rect x="200" y="550" width="600" height="40" fill="#1a1a1a" rx="4" />
                            <rect x="220" y="540" width="560" height="10" fill="#333" />
                        </g>

                        {/* Floor Boards */}
                        <g className="svg-floor" style={{ transformOrigin: 'center' }}>
                            <rect x="220" y="525" width="560" height="15" fill="#8B5A2B" />
                            {Array.from({ length: 20 }).map((_, i) => (
                                <line key={i} x1={220 + (i * 28) + 14} y1="525" x2={220 + (i * 28) + 14} y2="540" stroke="#6b4421" strokeWidth="2" />
                            ))}
                        </g>

                        {/* Back Wall */}
                        <g className="svg-wall-back" style={{ transformOrigin: 'center' }}>
                            <rect x="230" y="250" width="540" height="275" fill="#7d5836" />
                            {Array.from({ length: 14 }).map((_, i) => (
                                <line key={i} x1="230" y1={250 + (i * 19.6)} x2="770" y2={250 + (i * 19.6)} stroke="#63452a" strokeWidth="2" />
                            ))}
                        </g>

                        {/* Side Walls */}
                        <g className="svg-wall-sides" style={{ transformOrigin: 'center' }}>
                            <rect x="220" y="250" width="25" height="275" fill="#5c4028" />
                            <rect x="755" y="250" width="25" height="275" fill="#5c4028" />
                        </g>

                        {/* Roof Trusses */}
                        <g className="svg-roof-truss" style={{ transformOrigin: 'center' }}>
                            <polygon points="500,100 200,250 800,250" fill="#3d2a1a" />
                            <line x1="500" y1="100" x2="500" y2="250" stroke="#25190f" strokeWidth="6" />
                            <line x1="400" y1="150" x2="400" y2="250" stroke="#25190f" strokeWidth="6" />
                            <line x1="600" y1="150" x2="600" y2="250" stroke="#25190f" strokeWidth="6" />
                        </g>

                        {/* Roof Panels */}
                        <g className="svg-roof-panels" style={{ transformOrigin: 'center' }}>
                            <polygon points="500,80 160,260 840,260" fill="#1a201c" />
                            {/* Overhang edge */}
                            <rect x="160" y="260" width="680" height="15" fill="#111" rx="2" />
                            {/* Shingle lines */}
                            <line x1="500" y1="80" x2="160" y2="260" stroke="#2a332d" strokeWidth="4" />
                            <line x1="500" y1="80" x2="840" y2="260" stroke="#2a332d" strokeWidth="4" />
                        </g>

                        {/* Full Front Bifold Doors (Glass) */}
                        <g className="svg-doors" style={{ transformOrigin: 'center' }}>
                            {/* Frame */}
                            <rect x="250" y="270" width="500" height="255" fill="rgba(200, 230, 255, 0.15)" stroke="#111" strokeWidth="12" rx="4" />
                            {/* Panels */}
                            <line x1="375" y1="270" x2="375" y2="525" stroke="#111" strokeWidth="8" />
                            <line x1="500" y1="270" x2="500" y2="525" stroke="#111" strokeWidth="8" />
                            <line x1="625" y1="270" x2="625" y2="525" stroke="#111" strokeWidth="8" />

                            {/* Minimal glare highlights to look like glass */}
                            <polygon points="260,280 480,280 400,510 260,510" fill="rgba(255,255,255,0.05)" />
                            <polygon points="510,280 730,280 650,510 510,510" fill="rgba(255,255,255,0.05)" />
                        </g>
                    </svg>
                </div>

            </section>

            {/* Day / Night Transition Section */}
            <section className="day-night-section" style={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>

                {/* Base Daylight Image (HQ) */}
                <img
                    className="day-image-layer"
                    src="/shed_daylight_hq_1772532616249.png"
                    alt="Shed Exterior Day"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, zIndex: 1 }}
                />

                {/* Nighttime Fade Image (HQ) */}
                <img
                    className="night-image-layer"
                    src="/shed_nighttime_hq_1772532693165.png"
                    alt="Shed Exterior Night"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, zIndex: 2, opacity: 0 }}
                />

                {/* Floating UI overlay that updates its text based on scroll progress */}
                <div style={{ position: 'relative', zIndex: 10, padding: '6rem', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', pointerEvents: 'none' }}>
                    <div className="glass-panel" style={{ padding: '3rem', maxWidth: '600px', transition: 'all 0.3s ease' }}>
                        <h2 style={{ fontSize: '4rem', color: '#fff', textShadow: '0 4px 20px rgba(0,0,0,0.5)', transition: 'color 0.5s ease', fontFamily: 'var(--font-heading)' }}>
                            {dayNight > 0.5 ? 'Perfect for Evenings.' : 'Bathed in Sunlight.'}
                        </h2>
                        <p style={{ fontSize: '1.2rem', color: '#ddd', marginTop: '1rem', lineHeight: 1.6, textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>
                            {dayNight > 0.5
                                ? 'Integrated ambient lighting systems and premium insulation mean your sanctuary stays cozy and inviting long after the sun goes down.'
                                : 'Large bifold doors and UV-protected glazing flood your space with natural light while keeping it perfectly climate-controlled.'}
                        </p>
                    </div>
                </div>
            </section>

        </div>
    );
}
