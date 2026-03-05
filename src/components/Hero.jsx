import React from 'react';
import { motion } from 'framer-motion';
import { Download, Linkedin, MousePointer2 } from 'lucide-react';
import content from '../content.json';

const Hero = () => {
    const { personalInfo } = content;

    return (
        <section id="home" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            padding: '120px 0 60px'
        }}>
            <div className="container" style={{
                display: 'grid',
                gridTemplateColumns: '1.2fr 0.8fr',
                gap: '4rem',
                alignItems: 'center'
            }}>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >

                    <h1 style={{ fontSize: '4.5rem', marginBottom: '1rem', fontWeight: '800' }}>
                        Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
                    </h1>
                    <h2 style={{ fontSize: '2.5rem', color: 'var(--text-muted)', marginBottom: '2rem', fontWeight: '500' }}>
                        {personalInfo.title}
                    </h2>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '600px', marginBottom: '3rem' }}>
                        {personalInfo.bio}
                    </p>

                    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                padding: '1rem 2.5rem',
                                backgroundColor: 'var(--primary)',
                                color: 'black',
                                borderRadius: '0.75rem',
                                fontWeight: '700',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                boxShadow: '0 10px 20px -5px var(--primary-glow)'
                            }}
                        >
                            Get in touch
                        </motion.a>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <motion.a
                                href={personalInfo.socials.linkedin}
                                target="_blank"
                                whileHover={{ y: -5, color: 'var(--primary)' }}
                                style={{ padding: '0.75rem', borderRadius: '50%', backgroundColor: 'var(--bg-card)', border: '1px solid var(--glass-border)' }}
                            >
                                <Linkedin size={20} />
                            </motion.a>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    style={{ position: 'relative' }}
                >
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '120%',
                        height: '120%',
                        background: 'radial-gradient(circle, var(--primary-glow) 0%, transparent 70%)',
                        filter: 'blur(40px)',
                        opacity: 0.3,
                        zIndex: -1
                    }}></div>
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="glass"
                        style={{
                            aspectRatio: '1',
                            borderRadius: '2rem',
                            overflow: 'hidden',
                            border: '2px solid var(--glass-border)',
                            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                        }}
                    >
                        <img
                            src="/profile-pic.jpg"
                            alt="Profile"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </motion.div>


                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
