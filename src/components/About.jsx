import React from 'react';
import { motion } from 'framer-motion';
import { User, Code2, GraduationCap, Server, Settings, Activity, Cpu } from 'lucide-react';
import content from '../content.json';

const highlightAccents = ['#00FF88', '#00D4FF', '#FFE500', '#FF6B35', '#FF3366', '#00D4FF'];

const highlights = [
    { icon: <Server size={20} />,      title: 'Backend Development',      description: 'Scalable REST APIs with Node.js, Express, and Java Spring Boot.' },
    { icon: <Settings size={20} />,    title: 'DevOps Practices',          description: 'CI/CD pipelines via Azure DevOps and GitHub Actions.' },
    { icon: <Activity size={20} />,    title: 'Monitoring & Observability', description: 'Grafana dashboards and alerts for production reliability.' },
    { icon: <Cpu size={20} />,         title: 'Intelligent Processing',    description: 'Azure AI integrations and rule engines for document workflows.' },
    { icon: <Code2 size={20} />,       title: 'Quality Code',              description: 'Clean, maintainable TypeScript & Java following best practices.' },
    { icon: <GraduationCap size={20} />, title: 'Continuous Learning',     description: 'Actively improving in cloud, backend, and DevOps domains.' },
];

const About = () => {
    const { personalInfo } = content;

    return (
        <section id="about" style={{ padding: '100px 0' }}>
            <div className="container">
                <div className="about-container" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: '4rem', alignItems: 'stretch' }}>

                    {/* Left — Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        style={{ display: 'flex', flexDirection: 'column' }}
                    >
                        <span className="section-label">Who I Am</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.75rem' }}>
                            <div style={{
                                backgroundColor: '#FFE500',
                                border: '2px solid #000',
                                padding: '0.6rem',
                                color: '#0A0A0A',
                                display: 'flex'
                            }}>
                                <User size={22} />
                            </div>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: '900' }}>
                                About <span className="section-title-underline">Me</span>
                            </h2>
                        </div>

                        <div style={{
                            backgroundColor: '#FFFFFF',
                            border: '2px solid #000',
                            boxShadow: '6px 6px 0 #000',
                            borderTop: '4px solid #FFE500',
                            padding: '2rem',
                            borderRadius: '0',
                            flex: 1
                        }}>
                            <p style={{ fontSize: '1rem', color: '#0A0A0A', marginBottom: '1.25rem', lineHeight: '1.85' }}>
                                {personalInfo.bio}
                            </p>
                            <p style={{ color: '#555555', lineHeight: '1.8', fontSize: '0.95rem' }}>
                                My professional focus is on building robust backends and bridging the gap between development and operations.
                                I thrive in environments that challenge me to solve complex integration puzzles and optimize performance at scale.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right — Highlights grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="about-highlights"
                        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', alignItems: 'start' }}
                    >
                        {highlights.map((item, index) => {
                            const accent = highlightAccents[index];
                            return (
                                <motion.div
                                    key={index}
                                    whileHover={{ x: 4, y: 4, boxShadow: '0 0 0 #000' }}
                                    style={{
                                        backgroundColor: '#FFFFFF',
                                        border: '2px solid #000',
                                        boxShadow: '4px 4px 0 #000',
                                        borderLeft: `4px solid ${accent}`,
                                        borderRadius: '0',
                                        padding: '1.25rem',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '0.8rem',
                                        transition: 'transform 0.15s ease, box-shadow 0.15s ease'
                                    }}
                                >
                                    <div style={{
                                        backgroundColor: accent,
                                        border: '2px solid #000',
                                        padding: '0.5rem',
                                        borderRadius: '0',
                                        width: 'fit-content',
                                        color: '#0A0A0A',
                                        display: 'flex'
                                    }}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: '800', fontSize: '0.88rem', color: '#0A0A0A', marginBottom: '0.35rem' }}>
                                            {item.title}
                                        </div>
                                        <div style={{ fontSize: '0.76rem', color: '#555555', lineHeight: '1.55' }}>
                                            {item.description}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
