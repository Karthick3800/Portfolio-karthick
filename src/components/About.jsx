import React from 'react';
import { motion } from 'framer-motion';
import { User, Code2, GraduationCap, Server, Settings, Activity, Cpu } from 'lucide-react';
import content from '../content.json';

const About = () => {
    const { personalInfo } = content;

    const highlights = [
        {
            icon: <Server size={24} />,
            title: "Backend Development",
            description: "Building scalable, secure, and production-ready backend systems."
        },
        {
            icon: <Settings size={24} />,
            title: "DevOps Practices",
            description: "Experience with CI/CD pipelines, deployments, and cloud environments."
        },
        {
            icon: <Activity size={24} />,
            title: "Monitoring & Observability",
            description: "Creating Grafana dashboards and alerts to ensure system reliability."
        },
        {
            icon: <Cpu size={24} />,
            title: "Intelligent Processing",
            description: "Working with Azure AI and rule engines for document processing."
        },
        {
            icon: <Code2 size={24} />,
            title: "Quality Code",
            description: "Writing clean, maintainable, and efficient code following best practices."
        },
        {
            icon: <GraduationCap size={24} />,
            title: "Continuous Learning",
            description: "Actively improving skills in cloud, backend, and DevOps tools."
        }
    ];

    return (
        <section id="about" style={{ padding: '100px 0' }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
                    gap: '4rem',
                    alignItems: 'start'
                }}>
                    {/* Left Side: Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                            <div style={{ backgroundColor: 'rgba(51, 255, 0, 0.1)', padding: '0.75rem', borderRadius: '0.75rem', color: 'var(--primary)' }}>
                                <User size={24} />
                            </div>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: '800' }}>About <span className="gradient-text">Me</span></h2>
                        </div>

                        <div className="glass" style={{ padding: '2.5rem' }}>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                                {personalInfo.bio}
                            </p>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1rem' }}>
                                My professional focus is on building robust backends and bridging the gap between development and operations.
                                I thrive in environments that challenge me to solve complex integration puzzles and optimize performance at scale.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Side: Highlights */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}
                    >
                        {highlights.map((item, index) => (
                            <div key={index} className="glass" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <div style={{ color: 'var(--primary)', backgroundColor: 'rgba(51, 255, 0, 0.1)', padding: '0.75rem', borderRadius: '0.75rem', width: 'fit-content' }}>
                                    {item.icon}
                                </div>
                                <div>
                                    <div style={{ fontWeight: '700', fontSize: '1rem', marginBottom: '0.5rem' }}>{item.title}</div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>{item.description}</div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};


export default About;
