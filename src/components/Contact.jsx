import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin } from 'lucide-react';
import content from '../content.json';

const Contact = () => {
    const { personalInfo } = content;

    return (
        <section id="contact" style={{ padding: '100px 0' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem' }}>
                        Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                        Have a project in mind or just want to say hi? Feel free to reach out to me!
                    </p>
                </motion.div>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%'
                }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="contact-grid"
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                            gap: '1.5rem',
                            width: '100%',
                            maxWidth: '900px'
                        }}
                    >
                        {/* Email Card */}
                        <motion.a 
                            href={`mailto:${personalInfo.email}`}
                            className="glass" 
                            whileHover={{ y: -5, borderColor: 'var(--primary)', backgroundColor: 'var(--bg-card)' }}
                            style={{
                                padding: '1.5rem',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                gap: '1rem',
                                height: '100%',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                textDecoration: 'none'
                            }}>
                            <div style={{
                                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                                padding: '0.75rem',
                                borderRadius: '0.75rem',
                                color: 'var(--primary)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Mail size={24} />
                            </div>
                            <div style={{ width: '100%' }}>
                                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.25rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email</div>
                                <div style={{
                                    fontWeight: '600',
                                    fontSize: '0.95rem',
                                    wordBreak: 'break-all',
                                    color: 'white'
                                }}>{personalInfo.email}</div>
                            </div>
                        </motion.a>

                        {/* Location Card */}
                        <div className="glass" style={{
                            padding: '1.5rem',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                            gap: '1rem',
                            height: '100%'
                        }}>
                            <div style={{
                                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                                padding: '0.75rem',
                                borderRadius: '0.75rem',
                                color: 'var(--primary)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <MapPin size={24} />
                            </div>
                            <div>
                                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.25rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Location</div>
                                <div style={{ fontWeight: '600', fontSize: '0.95rem', color: 'white' }}>{personalInfo.location}</div>
                            </div>
                        </div>

                        {/* LinkedIn Card */}
                        <motion.a
                            href={personalInfo.socials.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass"
                            whileHover={{ y: -5, borderColor: 'var(--primary)', backgroundColor: 'var(--bg-card)' }}
                            style={{
                                padding: '1.5rem',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                gap: '1rem',
                                height: '100%',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                textDecoration: 'none'
                            }}
                        >
                            <div style={{
                                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                                padding: '0.75rem',
                                borderRadius: '0.75rem',
                                color: 'var(--primary)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Linkedin size={24} />
                            </div>
                            <div style={{ width: '100%' }}>
                                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.25rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Social</div>
                                <div style={{ fontWeight: '600', fontSize: '0.95rem', color: 'white' }}>LinkedIn Profile</div>
                            </div>
                        </motion.a>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Contact;
