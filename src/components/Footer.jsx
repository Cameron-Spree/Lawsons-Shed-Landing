import React, { useState } from 'react';

export default function Footer() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <footer style={{ background: '#0a140e', color: 'var(--law-offwhite)', padding: '8rem 2rem', display: 'flex', justifyContent: 'center' }}>
            <div style={{ maxWidth: '1200px', width: '100%', display: 'flex', flexWrap: 'wrap', gap: '4rem' }}>

                {/* Contact Info */}
                <div style={{ flex: '1 1 400px' }}>
                    <h2 style={{ fontSize: '3.5rem', fontFamily: 'var(--font-heading)', color: 'var(--law-yellow)', marginBottom: '1rem' }}>
                        Ready to Begin?
                    </h2>
                    <p style={{ fontSize: '1.2rem', color: '#ccc', lineHeight: 1.6, marginBottom: '2rem' }}>
                        Our Lawsons Premier experts are standing by. Reach out to request a physical brochure, book a showroom appointment, or discuss custom floorplans for your £25,000 sanctuary.
                    </p>
                    <div style={{ display: 'flex', gap: '2rem', marginTop: '3rem' }}>
                        <div>
                            <p style={{ color: 'var(--law-yellow)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>Call Us</p>
                            <p style={{ fontSize: '1.2rem', marginTop: '0.5rem' }}>0800 123 4567</p>
                        </div>
                        <div>
                            <p style={{ color: 'var(--law-yellow)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>Email Us</p>
                            <p style={{ fontSize: '1.2rem', marginTop: '0.5rem' }}>premier@lawsons.co.uk</p>
                        </div>
                    </div>
                </div>

                {/* Inquiry Form */}
                <div className="glass-panel" style={{ flex: '1 1 400px', padding: '3rem' }}>
                    {submitted ? (
                        <div style={{ textAlign: 'center', padding: '4rem 0' }}>
                            <h3 style={{ fontSize: '2rem', color: 'var(--law-yellow)', fontFamily: 'var(--font-heading)' }}>Thank You.</h3>
                            <p style={{ marginTop: '1rem', color: '#ccc' }}>An expert will be in touch shortly.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-heading)', marginBottom: '1rem' }}>Request an Inquiry</h3>

                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <input required type="text" placeholder="First Name" style={{ flex: 1, padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', fontSize: '1rem' }} />
                                <input required type="text" placeholder="Last Name" style={{ flex: 1, padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', fontSize: '1rem' }} />
                            </div>

                            <input required type="email" placeholder="Email Address" style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', fontSize: '1rem' }} />

                            <select style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', fontSize: '1rem', appearance: 'none' }}>
                                <option value="brochure" style={{ color: '#000' }}>Request a Brochure</option>
                                <option value="appointment" style={{ color: '#000' }}>Book a Showroom Visit</option>
                                <option value="quote" style={{ color: '#000' }}>Discuss Custom Build</option>
                            </select>

                            <textarea placeholder="Any additional details?" rows="4" style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', fontSize: '1rem', resize: 'none' }}></textarea>

                            <button type="submit" style={{ padding: '1.2rem', background: 'var(--law-yellow)', color: '#000', border: 'none', borderRadius: '8px', fontSize: '1.1rem', fontWeight: 600, cursor: 'pointer', marginTop: '1rem', fontFamily: 'var(--font-heading)' }}>
                                Submit Inquiry
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </footer>
    );
}
