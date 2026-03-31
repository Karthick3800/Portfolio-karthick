import React from 'react';
import content from '../content.json';

const Footer = () => {
    const { personalInfo } = content;
    const currentYear = new Date().getFullYear();

    const links = ['Home', 'About', 'Projects', 'Skills', 'Contact'];

    return (
        <footer style={{
            padding: '3rem 0',
            backgroundColor: '#FFFFFF',
            borderTop: '3px solid #000',
            marginTop: '4rem'
        }}>
            <div className="container" style={{ textAlign: 'center' }}>
                {/* Logo */}
                <div style={{ display: 'inline-flex', alignItems: 'center', marginBottom: '1.75rem' }}>
                    <span style={{
                        backgroundColor: '#FFE500',
                        color: '#0A0A0A',
                        padding: '0.1rem 0.4rem',
                        border: '2px solid #000',
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.4rem',
                        fontWeight: '900',
                        lineHeight: '1.2'
                    }}>K</span>
                    <span style={{
                        color: '#0A0A0A',
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.4rem',
                        fontWeight: '900'
                    }}>arthick</span>
                </div>

                {/* Nav links */}
                <div className="footer-links" style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}>
                    {links.map(name => (
                        <a
                            key={name}
                            href={`#${name.toLowerCase()}`}
                            style={{
                                color: '#0A0A0A',
                                fontSize: '0.8rem',
                                fontWeight: '700',
                                textTransform: 'uppercase',
                                letterSpacing: '0.06em',
                                paddingBottom: '2px',
                                borderBottom: '2px solid transparent',
                                transition: 'border-color 0.15s ease'
                            }}
                            onMouseEnter={e => e.target.style.borderBottomColor = '#FFE500'}
                            onMouseLeave={e => e.target.style.borderBottomColor = 'transparent'}
                        >
                            {name}
                        </a>
                    ))}
                </div>

                {/* Copyright */}
                <p style={{ color: '#555555', fontSize: '0.78rem', fontWeight: '500' }}>
                    © {currentYear} {personalInfo.name}. Built with React + Vite.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
