import React from 'react';
import { motion } from 'framer-motion';
import { User, Code2, GraduationCap, Server, Settings, Activity, Cpu } from 'lucide-react';
import content from '../content.json';

const highlights = [
    { icon: <Server size={20} />, title: 'Backend Development', description: 'Scalable REST APIs with Node.js, Express, and Java Spring Boot.' },
    { icon: <Settings size={20} />, title: 'DevOps Practices', description: 'CI/CD pipelines via Azure DevOps and GitHub Actions.' },
    { icon: <Activity size={20} />, title: 'Monitoring & Observability', description: 'Grafana dashboards and alerts for production reliability.' },
    { icon: <Cpu size={20} />, title: 'Intelligent Processing', description: 'Azure AI integrations and rule engines for document workflows.' },
    { icon: <Code2 size={20} />, title: 'Quality Code', description: 'Clean, maintainable TypeScript & Java following best practices.' },
    { icon: <GraduationCap size={20} />, title: 'Continuous Learning', description: 'Actively improving in cloud, backend, and DevOps domains.' },
];

const About = () => {
    const { personalInfo } = content;

    return (
        <section id="about" style={{ padding: '100px 0' }}>
            <div className="container">

                <div className="about-container" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: '4rem', alignItems: 'start' }}>

                    {/* Left — Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <p style={{ color: 'var(--primary)', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.75rem' }}>
                            Who I Am
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                            <div style={{ backgroundColor: 'rgba(239,68,68,0.1)', padding: '0.75rem', borderRadius: '0.75rem', color: 'var(--primary)' }}>
                                <User size={24} />
                            </div>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: '800' }}>About <span className="gradient-text">Me</span></h2>
                        </div>

                        <div style={{
                            background: 'rgba(255,255,255,0.03)',
                            border: '1px solid var(--glass-border)',
                            borderRadius: '1.25rem',
                            padding: '2.25rem',
                            backdropFilter: 'blur(16px)',
                            marginBottom: '1.5rem',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            {/* Subtle top border accent */}
                            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, var(--primary), transparent)' }}></div>

                            <p style={{ fontSize: '1rem', color: 'var(--text-main)', marginBottom: '1.25rem', lineHeight: '1.85' }}>
                                {personalInfo.bio}
                            </p>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '0.95rem' }}>
                                My professional focus is on building robust backends and bridging the gap between development and operations.
                                I thrive in environments that challenge me to solve complex integration puzzles and optimize performance at scale.
                            </p>
                        </div>

                        {/* Info row */}
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            {[
                                { label: '📍 Location', value: personalInfo.location },
                                { label: '📧 Email', value: personalInfo.email },
                            ].map(item => (
                                <div key={item.label} style={{
                                    flex: '1 1 160px',
                                    backgroundColor: 'rgba(255,255,255,0.03)',
                                    border: '1px solid var(--glass-border)',
                                    borderRadius: '0.75rem',
                                    padding: '0.9rem 1.2rem'
                                }}>
                                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '0.3rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: '600' }}>
                                        {item.label}
                                    </div>
                                    <div style={{ fontSize: '0.85rem', fontWeight: '600', color: 'white', wordBreak: 'break-all' }}>
                                        {item.value}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right — Highlights grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="about-highlights"
                        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}
                    >
                        {highlights.map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -4, borderColor: 'rgba(239,68,68,0.35)' }}
                                style={{
                                    backgroundColor: 'rgba(255,255,255,0.03)',
                                    border: '1px solid var(--glass-border)',
                                    borderRadius: '1rem',
                                    padding: '1.35rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '0.85rem',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <div style={{
                                    color: 'var(--primary)',
                                    backgroundColor: 'rgba(239,68,68,0.1)',
                                    padding: '0.6rem',
                                    borderRadius: '0.65rem',
                                    width: 'fit-content'
                                }}>
                                    {item.icon}
                                </div>
                                <div>
                                    <div style={{ fontWeight: '700', fontSize: '0.92rem', marginBottom: '0.4rem' }}>{item.title}</div>
                                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: '1.55' }}>{item.description}</div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
