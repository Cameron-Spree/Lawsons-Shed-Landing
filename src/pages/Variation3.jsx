import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Variation3() {
    const containerRef = useRef(null);
    const [dayNight, setDayNight] = useState(0);

    useGSAP(() => {
        // Enhanced 3D Scale Build Effect with more pieces
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.build-section',
                start: 'top top',
                end: '+=300%', // Longer scroll distance for more pieces
                scrub: 1,
                pin: true,
            }
        });

        tl.fromTo('.shed-piece-foundation', { scale: 0.5, opacity: 0, y: 300, rotationX: 45 }, { scale: 1, opacity: 1, y: 0, rotationX: 0, duration: 1 })
            .fromTo('.shed-piece-floor', { scale: 0.5, opacity: 0, y: 300 }, { scale: 1, opacity: 1, y: 0, duration: 1 }, "-=0.5")
            .fromTo('.shed-piece-wall-back', { opacity: 0, y: -200 }, { opacity: 1, y: 0, duration: 1 }, "-=0.5")
            .fromTo('.shed-piece-wall-sides', { opacity: 0, x: -300 }, { opacity: 1, x: 0, duration: 1 }, "-=0.2")
            .fromTo('.shed-piece-glass', { opacity: 0, scale: 1.2 }, { opacity: 1, scale: 1, duration: 1 }, "-=0.2")
            .fromTo('.shed-piece-roof', { opacity: 0, y: -400, scale: 1.5 }, { opacity: 1, y: 0, scale: 1, duration: 1.5 }, "-=0.5")
            .to('.build-text', { opacity: 0, y: -50, duration: 0.5 }, "-=3")
            .to('.success-text', { opacity: 1, y: 0, duration: 1 });

        // Day Night Fade Effect using the custom AI images
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

            {/* 3D Scroll Build Section - Enhanced with more pieces */}
            <section className="build-section" style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', perspective: '1000px' }}>

                <div className="build-text" style={{ position: 'absolute', top: '15%', zIndex: 10, textAlign: 'center' }}>
                    <h2 style={{ fontSize: '3.5rem', fontFamily: 'var(--font-heading)' }}>Step-by-Step Perfection.</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--law-yellow)' }}>Scroll to assemble your sanctuary.</p>
                </div>

                <div className="success-text" style={{ position: 'absolute', top: '25%', opacity: 0, transform: 'translateY(50px)', zIndex: 10, textAlign: 'center' }}>
                    <p style={{ fontSize: '1.2rem', color: 'var(--law-yellow)', textTransform: 'uppercase', letterSpacing: '3px' }}>The £25,000 Range</p>
                    <h2 style={{ fontSize: '4.5rem', fontFamily: 'var(--font-heading)' }}>Lugarde Premium.</h2>
                    <p style={{ marginTop: '1rem', color: '#ccc', maxWidth: '600px', margin: '1rem auto' }}>Every bearer, every joint, and every panel is precision engineered to guarantee a lifetime of luxury.</p>
                </div>

                {/* Abstract "Layers" of the shed */}
                <div style={{ position: 'relative', width: '800px', height: '600px', marginTop: '10rem', transformStyle: 'preserve-3d' }}>

                    {/* Foundation */}
                    <div className="shed-piece-foundation" style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', height: '30px', background: '#222', zIndex: 1, borderRadius: '4px', boxShadow: '0 20px 40px rgba(0,0,0,0.8)' }}>
                        <div style={{ width: '100%', height: '10px', background: '#444' }}></div> {/* Bearer detail */}
                    </div>

                    {/* Floor */}
                    <div className="shed-piece-floor" style={{ position: 'absolute', bottom: '30px', left: '2%', width: '96%', height: '15px', background: '#c8a27b', zIndex: 2 }}></div>

                    {/* Back Wall */}
                    <div className="shed-piece-wall-back" style={{ position: 'absolute', bottom: '45px', left: '5%', width: '90%', height: '350px', background: 'url(/shed_hotspots_base_1772530761432.png) center/cover', zIndex: 3, filter: 'brightness(0.5)' }}></div>

                    {/* Side Walls */}
                    <div className="shed-piece-wall-sides" style={{ position: 'absolute', bottom: '45px', left: '0', width: '15%', height: '350px', background: 'url(/shed_hotspots_base_1772530761432.png) left/cover', zIndex: 4, filter: 'brightness(0.8)' }}></div>
                    <div className="shed-piece-wall-sides" style={{ position: 'absolute', bottom: '45px', right: '0', width: '15%', height: '350px', background: 'url(/shed_hotspots_base_1772530761432.png) right/cover', zIndex: 4, filter: 'brightness(0.8)' }}></div>

                    {/* Glass Doors / Windows */}
                    <div className="shed-piece-glass" style={{ position: 'absolute', bottom: '45px', left: '20%', width: '60%', height: '300px', background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', border: '4px solid #111', zIndex: 5, display: 'flex' }}>
                        <div style={{ flex: 1, borderRight: '2px solid #111' }}></div>
                        <div style={{ flex: 1, borderRight: '2px solid #111' }}></div>
                        <div style={{ flex: 1 }}></div>
                    </div>

                    {/* Roof */}
                    <div className="shed-piece-roof" style={{ position: 'absolute', top: '50px', left: '-5%', width: '110%', height: '150px', background: '#1a2620', clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)', zIndex: 6, boxShadow: '0 30px 50px rgba(0,0,0,0.6)' }}>
                        <div style={{ position: 'absolute', bottom: 0, width: '100%', height: '15px', background: '#0a120e' }}></div> {/* overhang detail */}
                    </div>

                </div>

            </section>

            {/* Day / Night Transition Section */}
            <section className="day-night-section" style={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>

                {/* Base Daylight Image */}
                <img
                    className="day-image-layer"
                    src="/shed_daylight_1772530780855.png"
                    alt="Shed Exterior Day"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, zIndex: 1 }}
                />

                {/* Nighttime Fade Image */}
                <img
                    className="night-image-layer"
                    src="/shed_nighttime_1772530844399.png"
                    alt="Shed Exterior Night"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, zIndex: 2, opacity: 0 }}
                />

                {/* Floating UI overlay that updates its text based on scroll progress */}
                <div style={{ position: 'relative', zIndex: 10, padding: '6rem', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', pointerEvents: 'none' }}>
                    <div className="glass-panel" style={{ padding: '3rem', maxWidth: '600px', transition: 'all 0.3s ease' }}>
                        <h2 style={{ fontSize: '4rem', color: '#fff', textShadow: '0 4px 20px rgba(0,0,0,0.5)', transition: 'color 0.5s ease' }}>
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
