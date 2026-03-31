import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 100,
            backgroundColor: '#FFFFFF',
            borderBottom: '2px solid #000',
            boxShadow: isScrolled ? '0 4px 0 #000' : 'none',
            transition: 'box-shadow 0.2s ease',
            display: 'flex',
            justifyContent: 'center',
            padding: '1rem 0'
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                maxWidth: '1200px',
                padding: '0 2rem'
            }}>
                {/* Logo */}
                <motion.a
                    href="#home"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    style={{ display: 'inline-flex', alignItems: 'center', cursor: 'pointer', textDecoration: 'none' }}
                >
                    <span style={{
                        backgroundColor: '#FFE500',
                        color: '#0A0A0A',
                        display: 'inline-block',
                        padding: '0.1rem 0.4rem',
                        border: '2px solid #000',
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.5rem',
                        fontWeight: '900',
                        lineHeight: '1.2'
                    }}>K</span>
                    <span style={{
                        color: '#0A0A0A',
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.5rem',
                        fontWeight: '900'
                    }}>arthick</span>
                </motion.a>

                {/* Desktop Menu */}
                <div style={{ display: 'flex', gap: '2rem' }} className="desktop-menu">
                    {navLinks.map((link, index) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.08 }}
                            style={{
                                fontWeight: '700',
                                fontSize: '0.82rem',
                                color: '#0A0A0A',
                                textTransform: 'uppercase',
                                letterSpacing: '0.06em',
                                paddingBottom: '3px',
                                borderBottom: '3px solid transparent',
                                transition: 'border-color 0.15s ease'
                            }}
                            onMouseEnter={e => e.target.style.borderBottomColor = '#FFE500'}
                            onMouseLeave={e => e.target.style.borderBottomColor = 'transparent'}
                        >
                            {link.name}
                        </motion.a>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mobile-menu"
                >
                    {navLinks.map(link => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
