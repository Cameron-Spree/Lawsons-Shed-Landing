import React, { useState, useEffect } from 'react';

export default function ThemeCustomizer() {
    const [isOpen, setIsOpen] = useState(false);
    const [colors, setColors] = useState({
        primary: '#0a140e',
        secondary: '#c8a27b',
        tertiary: '#f4f0e6'
    });

    // Apply colors to CSS variables
    useEffect(() => {
        document.documentElement.style.setProperty('--law-green', colors.primary);
        document.documentElement.style.setProperty('--law-yellow', colors.secondary);
        document.documentElement.style.setProperty('--law-offwhite', colors.tertiary);
    }, [colors]);

    const handleColorChange = (key, value) => {
        setColors(prev => ({ ...prev, [key]: value }));
    };

    return (
        <div style={{ position: 'fixed', top: '2rem', right: '2rem', zIndex: 9999 }}>
            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    background: 'var(--law-yellow)',
                    color: '#000',
                    border: 'none',
                    borderRadius: '50px',
                    padding: '0.8rem 1.5rem',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 600,
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                }}
            >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                    <path d="M2 12h20"></path>
                </svg>
                Theme
            </button>

            {/* Editor Panel */}
            {isOpen && (
                <div className="glass-panel" style={{
                    position: 'absolute',
                    top: '3rem',
                    right: '0',
                    width: '280px',
                    padding: '1.5rem',
                    marginTop: '1rem',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                }}>
                    <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>Customize Palette</h3>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>

                        <label style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontSize: '0.9rem', color: '#ccc' }}>Primary (Backgrounds)</span>
                            <input
                                type="color"
                                value={colors.primary}
                                onChange={(e) => handleColorChange('primary', e.target.value)}
                                style={{ width: '40px', height: '40px', border: 'none', borderRadius: '4px', cursor: 'pointer', background: 'none' }}
                            />
                        </label>

                        <label style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontSize: '0.9rem', color: '#ccc' }}>Secondary (Highlights)</span>
                            <input
                                type="color"
                                value={colors.secondary}
                                onChange={(e) => handleColorChange('secondary', e.target.value)}
                                style={{ width: '40px', height: '40px', border: 'none', borderRadius: '4px', cursor: 'pointer', background: 'none' }}
                            />
                        </label>

                        <label style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontSize: '0.9rem', color: '#ccc' }}>Tertiary (Text/Accents)</span>
                            <input
                                type="color"
                                value={colors.tertiary}
                                onChange={(e) => handleColorChange('tertiary', e.target.value)}
                                style={{ width: '40px', height: '40px', border: 'none', borderRadius: '4px', cursor: 'pointer', background: 'none' }}
                            />
                        </label>
                    </div>

                    <button
                        onClick={() => setColors({ primary: '#0a140e', secondary: '#c8a27b', tertiary: '#f4f0e6' })}
                        style={{
                            width: '100%',
                            marginTop: '1.5rem',
                            padding: '0.8rem',
                            background: 'rgba(255,255,255,0.1)',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            transition: 'background 0.2s',
                        }}
                        onMouseOver={(e) => e.target.style.background = 'rgba(255,255,255,0.2)'}
                        onMouseOut={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}
                    >
                        Reset to Defaults
                    </button>

                </div>
            )}
        </div>
    );
}
