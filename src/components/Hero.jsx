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
    { label: 'Node.js',     pos: { top: '-18px',   right: '-28px'  } },
    { label: 'Grafana',     pos: { top: '8%',      left: '-44px'   } },
    { label: 'Spring Boot', pos: { top: '38%',     left: '-52px'   } },
    { label: 'MongoDB',     pos: { top: '38%',     right: '-44px'  } },
    { label: 'CI/CD',       pos: { bottom: '18%',  right: '-36px'  } },
    { label: 'SQL',         pos: { bottom: '-14px', left: '12px'   } },
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
        { icon: <Briefcase size={16} />, value: '7+', label: 'Projects Built' },
        { icon: <Code2 size={16} />, value: '8+', label: 'Technologies' },
        { icon: <Zap size={16} />, value: '1+', label: 'Yrs Experience' },
    ];

    return (
        <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '120px 0 80px', position: 'relative' }}>
            <div className="container hero-container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '4rem', alignItems: 'center' }}>

                {/* Left — Text */}
                <motion.div
                    className="hero-text"
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, ease: 'easeOut' }}
                >
                    <h1 style={{ fontSize: '4.5rem', marginBottom: '0.75rem', fontWeight: '800', lineHeight: '1.1' }}>
                        Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
                    </h1>

                    {/* Typewriter */}
                    <h2 style={{
                        fontSize: '1.75rem',
                        color: 'var(--text-muted)',
                        marginBottom: '1.75rem',
                        fontWeight: '500',
                        minHeight: '2.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.2rem'
                    }}>
                        <span style={{ color: 'white' }}>{displayText}</span>
                        <span className="cursor-blink">|</span>
                    </h2>

                    <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', maxWidth: '540px', marginBottom: '2.5rem', lineHeight: '1.85' }}>
                        {personalInfo.heroBio}
                    </p>

                    {/* Stats row */}
                    <div style={{ display: 'flex', gap: '2.5rem', marginBottom: '2.5rem' }}>
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + i * 0.1 }}
                                style={{ display: 'flex', flexDirection: 'column' }}
                            >
                                <span style={{ fontSize: '2rem', fontWeight: '800', background: 'linear-gradient(135deg, var(--primary), #fca5a5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                    {stat.value}
                                </span>
                                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: '500', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                                    {stat.label}
                                </span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Divider */}
                    <div style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg, var(--primary), transparent)', borderRadius: '2px', marginBottom: '2.5rem' }}></div>

                    {/* Buttons */}
                    <div className="hero-buttons" style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05, boxShadow: '0 15px 40px -8px rgba(239,68,68,0.6)' }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                padding: '0.9rem 2.2rem',
                                background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
                                color: 'white',
                                borderRadius: '0.75rem',
                                fontWeight: '700',
                                fontSize: '0.95rem',
                                boxShadow: '0 10px 30px -5px var(--primary-glow)',
                                letterSpacing: '0.02em'
                            }}
                        >
                            Get in Touch
                        </motion.a>
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05, borderColor: 'var(--primary)', color: 'var(--primary)' }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                padding: '0.9rem 2.2rem',
                                backgroundColor: 'transparent',
                                color: 'var(--text-muted)',
                                borderRadius: '0.75rem',
                                fontWeight: '600',
                                fontSize: '0.95rem',
                                border: '1px solid var(--glass-border)',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            View Work
                        </motion.a>
                        <motion.a
                            href={personalInfo.socials.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -3, borderColor: 'var(--primary)', color: 'var(--primary)' }}
                            style={{
                                padding: '0.65rem 1rem',
                                borderRadius: '0.6rem',
                                backgroundColor: 'var(--bg-card)',
                                border: '1px solid var(--glass-border)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'all 0.3s ease',
                                fontFamily: 'monospace',
                                fontSize: '0.85rem',
                                fontWeight: '700',
                                color: 'var(--text-muted)',
                                letterSpacing: '-0.02em'
                            }}
                        >
                            &lt;/&gt;
                        </motion.a>
                    </div>
                </motion.div>

                {/* Right — Image + floating badges */}
                <motion.div
                    className="hero-image-container"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    style={{ position: 'relative', width: '100%', maxWidth: '400px', justifySelf: 'center' }}
                >
                    {/* Glow ring */}
                    <div style={{
                        position: 'absolute',
                        top: '50%', left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '115%', height: '115%',
                        background: 'radial-gradient(circle, rgba(239,68,68,0.35) 0%, transparent 70%)',
                        filter: 'blur(50px)',
                        zIndex: -1
                    }}></div>

                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.4 }}
                        className="glass hero-image-wrapper"
                        style={{ border: '2px solid rgba(239,68,68,0.25)' }}
                    >
                        <img src="/profile-pic.jpg" alt="Karthick — Software Engineer" />
                    </motion.div>

                    {/* Floating tech badges */}
                    {techBadges.map((badge, i) => (
                        <motion.div
                            key={badge.label}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1, y: [0, -7, 0] }}
                            transition={{
                                opacity: { delay: 0.9 + i * 0.15, duration: 0.3 },
                                scale: { delay: 0.9 + i * 0.15, duration: 0.3 },
                                y: { delay: 1.2 + i * 0.15, duration: 3 + i * 0.4, repeat: Infinity, ease: 'easeInOut' }
                            }}
                            style={{
                                position: 'absolute',
                                ...badge.pos,
                                backgroundColor: 'rgba(10,10,10,0.92)',
                                border: '1px solid rgba(239,68,68,0.35)',
                                borderRadius: '0.6rem',
                                padding: '0.4rem 0.85rem',
                                fontSize: '0.74rem',
                                fontWeight: '700',
                                color: 'var(--primary)',
                                boxShadow: '0 4px 20px rgba(239,68,68,0.2)',
                                whiteSpace: 'nowrap',
                                zIndex: 10,
                                backdropFilter: 'blur(10px)'
                            }}
                        >
                            {badge.label}
                        </motion.div>
                    ))}
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
                    color: 'var(--text-muted)',
                    fontSize: '0.72rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    cursor: 'pointer'
                }}
            >
                <span>Scroll</span>
                <ArrowDown size={14} />
            </motion.a>
        </section>
    );
};

export default Hero;
