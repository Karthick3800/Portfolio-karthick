import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import content from '../content.json';

const techColors = {
    'Java':        { bg: '#FF6B35', color: '#FFFFFF' },
    'Spring Boot': { bg: '#00FF88', color: '#0A0A0A' },
    'ReactJS':     { bg: '#00D4FF', color: '#0A0A0A' },
    'NodeJS':      { bg: '#00FF88', color: '#0A0A0A' },
    'Node.js':     { bg: '#00FF88', color: '#0A0A0A' },
    'TypeScript':  { bg: '#00D4FF', color: '#0A0A0A' },
    'Express':     { bg: '#FFE500', color: '#0A0A0A' },
    'Azure AI':    { bg: '#00D4FF', color: '#0A0A0A' },
    'CSS':         { bg: '#FF3366', color: '#FFFFFF' },
    'HTML':        { bg: '#FF6B35', color: '#FFFFFF' },
    'Gemini API':  { bg: '#FF3366', color: '#FFFFFF' },
    'MongoDB':     { bg: '#00FF88', color: '#0A0A0A' },
    'SQL':         { bg: '#FFE500', color: '#0A0A0A' },
    'CI/CD':              { bg: '#FF3366', color: '#FFFFFF' },
    'Grafana':            { bg: '#FF6B35', color: '#FFFFFF' },
    'JavaScript':         { bg: '#FFE500', color: '#0A0A0A' },
    'Google Apps Script': { bg: '#00FF88', color: '#0A0A0A' },
    'Gmail API':          { bg: '#FF3366', color: '#FFFFFF' },
    'Google Sheets':      { bg: '#00D4FF', color: '#0A0A0A' },
};

const projectCategories = {
    1: 'Backend', 2: 'Backend', 3: 'Backend',
    4: 'Frontend', 5: 'Backend', 6: 'Full Stack', 7: 'Frontend', 8: 'Backend', 9: 'Frontend', 10: 'Backend',
};

const filters = ['All', 'Backend', 'Frontend', 'Full Stack'];

const Projects = () => {
    const { projects } = content;
    const [activeFilter, setActiveFilter] = useState('All');

    const filtered = activeFilter === 'All'
        ? projects
        : projects.filter(p => projectCategories[p.id] === activeFilter);

    return (
        <section id="projects" style={{ padding: '100px 0' }}>
            <div className="container">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '3rem' }}
                >
                    <span className="section-label">What I've Built</span>
                    <h2 style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '1rem' }}>
                        Featured <span className="section-title-underline">Projects</span>
                    </h2>
                    <p style={{ color: '#555555', maxWidth: '560px', margin: '0 auto' }}>
                        From REST APIs to React UIs — work spanning backend systems, DevOps, and frontend.
                    </p>
                </motion.div>

                {/* Filter tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', marginBottom: '3rem', flexWrap: 'wrap' }}
                >
                    {filters.map(filter => {
                        const isActive = activeFilter === filter;
                        const count = filter === 'All' ? projects.length : projects.filter(p => projectCategories[p.id] === filter).length;
                        return (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                style={{
                                    padding: '0.5rem 1.25rem',
                                    border: '2px solid #000',
                                    boxShadow: isActive ? '0 0 0 #000' : '3px 3px 0 #000',
                                    transform: isActive ? 'translate(3px, 3px)' : 'none',
                                    backgroundColor: isActive ? '#FFE500' : '#FFFFFF',
                                    color: '#0A0A0A',
                                    fontWeight: '800',
                                    fontSize: '0.78rem',
                                    cursor: 'pointer',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.06em',
                                    transition: 'all 0.15s ease',
                                    fontFamily: 'var(--font-main)',
                                    borderRadius: '0'
                                }}
                            >
                                {filter} <span style={{ opacity: 0.5 }}>({count})</span>
                            </button>
                        );
                    })}
                </motion.div>

                {/* Project grid */}
                <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '2rem', alignItems: 'start' }}>
                    <AnimatePresence mode="popLayout">
                        {filtered.map((project, index) => {
                            const num = String(project.id).padStart(2, '0');
                            return (
                                <motion.div
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4, delay: index * 0.06 }}
                                    viewport={{ once: true }}
                                    whileHover={{ x: 6, y: 6, boxShadow: '0 0 0 #000' }}
                                    style={{
                                        backgroundColor: '#FFFFFF',
                                        border: '2px solid #000',
                                        boxShadow: '6px 6px 0 #000',
                                        borderRadius: '0',
                                        overflow: 'hidden',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        transition: 'transform 0.15s ease, box-shadow 0.15s ease'
                                    }}
                                >
                                    {/* Yellow top bar */}
                                    <div style={{ height: '4px', backgroundColor: '#FFE500', borderBottom: '2px solid #000' }}></div>

                                    <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                        {/* Number + category */}
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.1rem' }}>
                                            <span style={{
                                                fontSize: '2.2rem',
                                                fontWeight: '900',
                                                color: '#0A0A0A',
                                                opacity: 0.1,
                                                fontFamily: 'var(--font-heading)',
                                                lineHeight: 1
                                            }}>
                                                {num}
                                            </span>
                                            <span style={{
                                                fontSize: '0.62rem',
                                                fontWeight: '800',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.1em',
                                                color: '#0A0A0A',
                                                backgroundColor: '#FFE500',
                                                border: '2px solid #000',
                                                padding: '0.2rem 0.55rem',
                                                borderRadius: '0'
                                            }}>
                                                {projectCategories[project.id]}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.7rem', color: '#0A0A0A', lineHeight: 1.3 }}>
                                            {project.title}
                                        </h3>

                                        {/* Description */}
                                        <p style={{ color: '#555555', fontSize: '0.88rem', marginBottom: '1.25rem', flex: 1, lineHeight: '1.7' }}>
                                            {project.description}
                                        </p>

                                        {/* Tech tags */}
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                                            {project.tech.map(t => {
                                                const s = techColors[t] || { bg: '#F0F0F0', color: '#0A0A0A' };
                                                return (
                                                    <span key={t} style={{
                                                        fontSize: '0.68rem',
                                                        fontWeight: '700',
                                                        backgroundColor: s.bg,
                                                        color: s.color,
                                                        border: '1px solid #000',
                                                        padding: '0.2rem 0.6rem',
                                                        borderRadius: '0'
                                                    }}>
                                                        {t}
                                                    </span>
                                                );
                                            })}
                                        </div>

                                        {/* Link buttons */}
                                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: 'auto' }}>
                                            {project.link && (
                                                <motion.a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    whileHover={{ x: 3, y: 3, boxShadow: '0 0 0 #000' }}
                                                    style={{
                                                        display: 'inline-flex',
                                                        alignItems: 'center',
                                                        gap: '0.4rem',
                                                        fontSize: '0.75rem',
                                                        fontWeight: '800',
                                                        color: '#0A0A0A',
                                                        backgroundColor: project.github ? '#FFE500' : '#FFFFFF',
                                                        border: '2px solid #000',
                                                        boxShadow: '3px 3px 0 #000',
                                                        padding: '0.4rem 0.9rem',
                                                        borderRadius: '0',
                                                        textTransform: 'uppercase',
                                                        letterSpacing: '0.05em',
                                                        transition: 'transform 0.15s ease, box-shadow 0.15s ease',
                                                        textDecoration: 'none'
                                                    }}
                                                >
                                                    {project.link.includes('github') ? <Github size={13} /> : <ExternalLink size={13} />}
                                                    {project.link.includes('github') ? 'GitHub' : 'Live'}
                                                </motion.a>
                                            )}
                                            {project.github && (
                                                <motion.a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    whileHover={{ x: 3, y: 3, boxShadow: '0 0 0 #000' }}
                                                    style={{
                                                        display: 'inline-flex',
                                                        alignItems: 'center',
                                                        gap: '0.4rem',
                                                        fontSize: '0.75rem',
                                                        fontWeight: '800',
                                                        color: '#0A0A0A',
                                                        backgroundColor: '#FFFFFF',
                                                        border: '2px solid #000',
                                                        boxShadow: '3px 3px 0 #000',
                                                        padding: '0.4rem 0.9rem',
                                                        borderRadius: '0',
                                                        textTransform: 'uppercase',
                                                        letterSpacing: '0.05em',
                                                        transition: 'transform 0.15s ease, box-shadow 0.15s ease',
                                                        textDecoration: 'none'
                                                    }}
                                                >
                                                    <Github size={13} /> GitHub
                                                </motion.a>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Projects;
