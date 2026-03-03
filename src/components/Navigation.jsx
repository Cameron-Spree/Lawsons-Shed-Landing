import React from 'react';

const Navigation = ({ activeTab, setActiveTab }) => {
    const tabs = [
        { id: 'variation1', label: '1. The Fold' },
        { id: 'variation2', label: '2. The Gallery' },
        { id: 'variation3', label: '3. The Configurator' },
    ];

    return (
        <nav style={{
            position: 'fixed',
            top: '1.5rem',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 100,
            display: 'flex',
            gap: '0.5rem',
            padding: '0.5rem',
            background: 'rgba(15, 31, 21, 0.6)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '999px',
        }}>
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    style={{
                        padding: '0.6rem 1.2rem',
                        borderRadius: '999px',
                        border: 'none',
                        background: activeTab === tab.id ? 'var(--law-yellow)' : 'transparent',
                        color: activeTab === tab.id ? '#000' : 'var(--law-text)',
                        fontFamily: 'var(--font-heading)',
                        fontSize: '0.85rem',
                        fontWeight: 500,
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                    }}
                >
                    {tab.label}
                </button>
            ))}
        </nav>
    );
};

export default Navigation;
