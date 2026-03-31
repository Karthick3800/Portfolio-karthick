import React, { useState } from 'react';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { Mail, MapPin, Github, Linkedin, Copy, Check } from 'lucide-react';
import content from '../content.json';

const cardAccents = ['#FFE500', '#00D4FF', '#00FF88', '#FF3366'];

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
            actionIcon: copied ? <Check size={13} /> : <Copy size={13} />,
            actionLabel: copied ? 'Copied!' : 'Copy',
        },
        {
            label: 'Location',
            value: personalInfo.location,
            icon: <MapPin size={22} />,
            href: null,
        },
        {
            label: 'GitHub',
            value: 'View my work',
            sub: 'Karthick3800',
            icon: <Github size={22} />,
            href: personalInfo.socials.github,
            external: true,
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
                    <span className="section-label">Let's Connect</span>
                    <h2 style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '1rem' }}>
                        Get In <span className="section-title-underline">Touch</span>
                    </h2>
                    <p style={{ color: '#555555', maxWidth: '500px', margin: '0 auto', lineHeight: '1.8' }}>
                        Have a project in mind or just want to say hello? I'd love to hear from you.
                    </p>
                </motion.div>

                {/* Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    viewport={{ once: true }}
                    className="contact-grid"
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', maxWidth: '1000px', margin: '0 auto' }}
                >
                    {cards.map((card, i) => {
                        const accent = cardAccents[i];

                        const inner = (
                            <motion.div
                                key={card.label}
                                whileHover={{ x: 6, y: 6, boxShadow: '0 0 0 #000' }}
                                style={{
                                    backgroundColor: '#FFFFFF',
                                    border: '2px solid #000',
                                    boxShadow: '6px 6px 0 #000',
                                    borderTop: `4px solid ${accent}`,
                                    borderRadius: '0',
                                    padding: '2rem 1.5rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    gap: '1rem',
                                    height: '100%',
                                    transition: 'transform 0.15s ease, box-shadow 0.15s ease',
                                    cursor: card.href ? 'pointer' : 'default'
                                }}
                            >
                                <div style={{
                                    backgroundColor: accent,
                                    border: '2px solid #000',
                                    padding: '0.85rem',
                                    borderRadius: '0',
                                    color: '#0A0A0A',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    {card.icon}
                                </div>

                                <div style={{ width: '100%' }}>
                                    <div style={{ fontSize: '0.65rem', color: '#555555', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.3rem' }}>
                                        {card.label}
                                    </div>
                                    <div style={{ fontWeight: '700', fontSize: '0.92rem', color: '#0A0A0A', wordBreak: 'break-all' }}>
                                        {card.value}
                                    </div>
                                    {card.sub && (
                                        <div style={{ fontSize: '0.75rem', color: '#555555', marginTop: '0.15rem', fontWeight: '600' }}>
                                            @{card.sub}
                                        </div>
                                    )}
                                </div>

                                {/* Copy button */}
                                {card.action && (
                                    <motion.button
                                        onClick={e => { e.preventDefault(); card.action(); }}
                                        whileHover={{ x: 3, y: 3, boxShadow: '0 0 0 #000' }}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.35rem',
                                            fontSize: '0.7rem',
                                            fontWeight: '800',
                                            color: '#0A0A0A',
                                            backgroundColor: copied ? '#00FF88' : '#FFE500',
                                            border: '2px solid #000',
                                            boxShadow: '3px 3px 0 #000',
                                            padding: '0.35rem 0.85rem',
                                            borderRadius: '0',
                                            cursor: 'pointer',
                                            transition: 'transform 0.15s ease, box-shadow 0.15s ease, background-color 0.2s ease',
                                            fontFamily: 'var(--font-main)',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.05em'
                                        }}
                                    >
                                        {card.actionIcon} {card.actionLabel}
                                    </motion.button>
                                )}
                            </motion.div>
                        );

                        return card.href ? (
                            <a key={card.label} href={card.href} target={card.external ? '_blank' : undefined} rel="noopener noreferrer"
                                style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
                                {inner}
                            </a>
                        ) : (
                            <div key={card.label} style={{ height: '100%' }}>{inner}</div>
                        );
                    })}
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginTop: '3rem', color: '#555555', fontSize: '0.85rem', fontWeight: '600' }}
                >
                    Response time is usually within 24 hours ⚡
                </motion.p>
            </div>
        </section>
    );
};

export default Contact;
