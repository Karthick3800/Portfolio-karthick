import React from 'react';
import content from '../content.json';

const Footer = () => {
    const { personalInfo } = content;
    const currentYear = new Date().getFullYear();

    return (
        <footer style={{
            padding: '4rem 0',
            borderTop: '1px solid var(--glass-border)',
            marginTop: '4rem',
            textAlign: 'center'
        }}>
            <div className="container">
                <h2 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '1.5rem' }}>
                    <span style={{ color: 'var(--primary)' }}>K</span>arthick
                </h2>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                    © {currentYear} {personalInfo.name}. Built with React, Vite, and ❤️ in Tirunelveli.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
