import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin, Copy, Check } from 'lucide-react';
import content from '../content.json';

const Contact = () => {
    const { personalInfo } = content;
    const [copied, setCopied] = useState(false);

    const copyEmail = () => {
        navigator.clipboard.writeText(personalInfo.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const cards = [
        {
            label: 'Email',
            value: personalInfo.email,
            icon: <Mail size={22} />,
            href: `mailto:${personalInfo.email}`,
            action: copyEmail,
            actionIcon: copied ? <Check size={14} /> : <Copy size={14} />,
            actionLabel: copied ? 'Copied!' : 'Copy',
        },
        {
            label: 'Location',
            value: personalInfo.location,
            icon: <MapPin size={22} />,
            href: null,
        },
        {
            label: 'LinkedIn',
            value: 'Connect with me',
            sub: 'karthick233',
            icon: <Linkedin size={22} />,
            href: personalInfo.socials.linkedin,
            external: true,
        },
    ];

    return (
        <section id="contact" style={{ padding: '100px 0' }}>
            <div className="container">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <p style={{ color: 'var(--primary)', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.75rem' }}>
                        Let's Connect
                    </p>
                    <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem' }}>
                        Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '520px', margin: '0 auto', lineHeight: '1.8' }}>
                        Have a project in mind, a role to fill, or just want to say hello? I'd love to hear from you.
                    </p>
                </motion.div>

                {/* Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="contact-grid"
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', maxWidth: '900px', margin: '0 auto' }}
                >
                    {cards.map((card, i) => {
                        const inner = (
                            <motion.div
                                key={card.label}
                                whileHover={{ y: -6, borderColor: 'rgba(239,68,68,0.4)', boxShadow: '0 12px 40px rgba(239,68,68,0.12)' }}
                                style={{
                                    backgroundColor: 'rgba(255,255,255,0.03)',
                                    border: '1px solid var(--glass-border)',
                                    borderRadius: '1.25rem',
                                    padding: '2rem 1.75rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    gap: '1.1rem',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    transition: 'all 0.3s ease',
                                    cursor: card.href ? 'pointer' : 'default',
                                    height: '100%'
                                }}
                            >
                                {/* Corner glow */}
                                <div style={{
                                    position: 'absolute',
                                    bottom: '-20px', right: '-20px',
                                    width: '80px', height: '80px',
                                    borderRadius: '50%',
                                    backgroundColor: 'var(--primary)',
                                    filter: 'blur(40px)',
                                    opacity: 0.08,
                                    pointerEvents: 'none'
                                }}></div>

                                <div style={{
                                    backgroundColor: 'rgba(239,68,68,0.1)',
                                    border: '1px solid rgba(239,68,68,0.2)',
                                    padding: '0.9rem',
                                    borderRadius: '0.9rem',
                                    color: 'var(--primary)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    {card.icon}
                                </div>

                                <div style={{ width: '100%' }}>
                                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                        {card.label}
                                    </div>
                                    <div style={{ fontWeight: '700', fontSize: '0.95rem', color: 'white', wordBreak: 'break-all' }}>
                                        {card.value}
                                    </div>
                                    {card.sub && (
                                        <div style={{ fontSize: '0.78rem', color: 'var(--primary)', marginTop: '0.2rem' }}>@{card.sub}</div>
                                    )}
                                </div>

                                {/* Copy button for email */}
                                {card.action && (
                                    <motion.button
                                        onClick={e => { e.preventDefault(); card.action(); }}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.35rem',
                                            fontSize: '0.75rem',
                                            fontWeight: '600',
                                            color: copied ? '#22c55e' : 'var(--text-muted)',
                                            backgroundColor: copied ? 'rgba(34,197,94,0.1)' : 'rgba(255,255,255,0.05)',
                                            border: `1px solid ${copied ? 'rgba(34,197,94,0.3)' : 'var(--glass-border)'}`,
                                            padding: '0.4rem 0.9rem',
                                            borderRadius: '2rem',
                                            cursor: 'pointer',
                                            transition: 'all 0.25s ease',
                                            fontFamily: 'var(--font-main)'
                                        }}
                                    >
                                        {card.actionIcon} {card.actionLabel}
                                    </motion.button>
                                )}
                            </motion.div>
                        );

                        return card.href ? (
                            <a key={card.label} href={card.href} target={card.external ? '_blank' : undefined} rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
                                {inner}
                            </a>
                        ) : (
                            <div key={card.label} style={{ height: '100%' }}>{inner}</div>
                        );
                    })}
                </motion.div>

                {/* CTA nudge */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginTop: '3rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}
                >
                    Response time is usually within 24 hours ⚡
                </motion.p>
            </div>
        </section>
    );
};

export default Contact;
