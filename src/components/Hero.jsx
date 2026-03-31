import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Briefcase, Code2, Zap } from 'lucide-react';
import content from '../content.json';

const roles = [
    'Junior Software Engineer',
    'Backend Developer',
    'DevOps Enthusiast',
    'REST API Developer',
    'Problem Solver',
];

const techBadges = [
    { label: 'Node.js',     pos: { top: '-18px',    right: '-28px'  } },
    { label: 'Grafana',     pos: { top: '8%',        left: '-44px'  } },
    { label: 'Spring Boot', pos: { top: '38%',       left: '-52px'  } },
    { label: 'MongoDB',     pos: { top: '38%',       right: '-44px' } },
    { label: 'CI/CD',       pos: { bottom: '18%',   right: '-36px'  } },
    { label: 'SQL',         pos: { bottom: '-14px',  left: '12px'   } },
];

const Hero = () => {
    const { personalInfo } = content;
    const [displayText, setDisplayText] = useState('');
    const [roleIndex, setRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[roleIndex];
        let timeout;

        if (!isDeleting) {
            if (displayText.length < currentRole.length) {
                timeout = setTimeout(() => {
                    setDisplayText(currentRole.slice(0, displayText.length + 1));
                }, 100);
            } else {
                timeout = setTimeout(() => setIsDeleting(true), 1800);
            }
        } else {
            if (displayText.length > 0) {
                timeout = setTimeout(() => {
                    setDisplayText(displayText.slice(0, -1));
                }, 50);
            } else {
                setIsDeleting(false);
                setRoleIndex(r => (r + 1) % roles.length);
            }
        }

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, roleIndex]);

    const stats = [
        { icon: <Briefcase size={16} />, value: '7+', label: 'Projects' },
        { icon: <Code2 size={16} />,     value: '8+', label: 'Technologies' },
        { icon: <Zap size={16} />,       value: '1+', label: 'Yrs Exp.' },
    ];

    return (
        <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '120px 0 80px', position: 'relative' }}>
            <div className="container hero-container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '4rem', alignItems: 'center' }}>

                {/* Left — Text */}
                <motion.div
                    className="hero-text"
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <h1 style={{ fontSize: '4.5rem', fontWeight: '900', lineHeight: '1.05', marginBottom: '1rem' }}>
                        Hi, I'm{' '}
                        <span style={{
                            backgroundColor: '#FFE500',
                            color: '#0A0A0A',
                            padding: '0 0.3rem',
                            border: '3px solid #000',
                            display: 'inline-block',
                            lineHeight: '1.1'
                        }}>
                            {personalInfo.name}
                        </span>
                    </h1>

                    {/* Typewriter */}
                    <h2 style={{
                        fontSize: '1.6rem',
                        color: '#0A0A0A',
                        fontWeight: '700',
                        marginBottom: '1.75rem',
                        minHeight: '2.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.2rem',
                        borderLeft: '4px solid #FFE500',
                        paddingLeft: '0.85rem'
                    }}>
                        <span>{displayText}</span>
                        <span className="cursor-blink">|</span>
                    </h2>

                    <p style={{ fontSize: '1.05rem', color: '#555555', maxWidth: '540px', marginBottom: '2rem', lineHeight: '1.85' }}>
                        {personalInfo.heroBio}
                    </p>

                    {/* Stats row */}
                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 + i * 0.1 }}
                                style={{
                                    backgroundColor: '#FFFFFF',
                                    border: '2px solid #000',
                                    boxShadow: '4px 4px 0 #000',
                                    padding: '0.75rem 1.25rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    minWidth: '88px'
                                }}
                            >
                                <span style={{ fontSize: '1.75rem', fontWeight: '900', color: '#0A0A0A', lineHeight: 1 }}>
                                    {stat.value}
                                </span>
                                <span style={{ fontSize: '0.62rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#555', marginTop: '0.25rem' }}>
                                    {stat.label}
                                </span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Yellow divider */}
                    <div style={{ width: '60px', height: '4px', backgroundColor: '#FFE500', border: '1px solid #000', marginBottom: '2rem' }}></div>

                    {/* Buttons */}
                    <div className="hero-buttons" style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
                        <motion.a
                            href="#contact"
                            className="btn-primary"
                            whileHover={{ x: 4, y: 4, boxShadow: '0 0 0 #000' }}
                            whileTap={{ x: 2, y: 2 }}
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                        >
                            Get in Touch
                        </motion.a>
                        <motion.a
                            href="#projects"
                            className="btn-secondary"
                            whileHover={{ x: 4, y: 4, boxShadow: '0 0 0 #000' }}
                            whileTap={{ x: 2, y: 2 }}
                        >
                            View Work
                        </motion.a>
                        <motion.a
                            href={personalInfo.socials.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ x: 4, y: 4, boxShadow: '0 0 0 #000' }}
                            whileTap={{ x: 2, y: 2 }}
                            style={{
                                padding: '0.75rem 1rem',
                                backgroundColor: '#FFFFFF',
                                border: '2px solid #000',
                                boxShadow: '4px 4px 0 #000',
                                fontFamily: 'monospace',
                                fontSize: '0.85rem',
                                fontWeight: '800',
                                color: '#0A0A0A',
                                letterSpacing: '-0.02em',
                                transition: 'transform 0.15s ease, box-shadow 0.15s ease',
                                display: 'inline-block'
                            }}
                        >
                            &lt;/&gt;
                        </motion.a>
                    </div>
                </motion.div>

                {/* Right — Image + badges */}
                <motion.div
                    className="hero-image-container"
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.9, ease: 'easeOut' }}
                    style={{ position: 'relative', width: '100%', maxWidth: '400px', justifySelf: 'center' }}
                >
                    <motion.div
                        className="hero-image-wrapper"
                        whileHover={{ x: 4, y: 4, boxShadow: '0 0 0 #000' }}
                        transition={{ duration: 0.15 }}
                    >
                        <img src="/profile-pic.jpg" alt="Karthick — Software Engineer" />
                    </motion.div>

                    {/* Floating tech badges */}
                    <div className="hero-badges">
                        {techBadges.map((badge, i) => (
                            <motion.div
                                key={badge.label}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1, y: [0, -7, 0] }}
                                transition={{
                                    opacity: { delay: 0.9 + i * 0.12, duration: 0.3 },
                                    scale:   { delay: 0.9 + i * 0.12, duration: 0.3 },
                                    y: { delay: 1.2 + i * 0.15, duration: 3 + i * 0.4, repeat: Infinity, ease: 'easeInOut' }
                                }}
                                style={{
                                    position: 'absolute',
                                    ...badge.pos,
                                    backgroundColor: '#FFFFFF',
                                    border: '2px solid #000',
                                    boxShadow: '3px 3px 0 #000',
                                    borderRadius: '0',
                                    padding: '0.35rem 0.75rem',
                                    fontSize: '0.68rem',
                                    fontWeight: '800',
                                    color: '#0A0A0A',
                                    whiteSpace: 'nowrap',
                                    zIndex: 10,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.06em'
                                }}
                            >
                                {badge.label}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.a
                href="#about"
                animate={{ y: [0, 9, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                    position: 'absolute',
                    bottom: '2.5rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.4rem',
                    color: '#0A0A0A',
                    fontSize: '0.65rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    fontWeight: '700',
                    cursor: 'pointer',
                    textDecoration: 'none'
                }}
            >
                <span>Scroll</span>
                <ArrowDown size={14} />
            </motion.a>
        </section>
    );
};

export default Hero;
