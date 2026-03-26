import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import content from '../content.json';

const techColors = {
    'Java': { bg: 'rgba(249,115,22,0.12)', color: '#f97316', border: 'rgba(249,115,22,0.3)' },
    'Spring Boot': { bg: 'rgba(34,197,94,0.12)', color: '#22c55e', border: 'rgba(34,197,94,0.3)' },
    'ReactJS': { bg: 'rgba(56,189,248,0.12)', color: '#38bdf8', border: 'rgba(56,189,248,0.3)' },
    'NodeJS': { bg: 'rgba(132,204,22,0.12)', color: '#84cc16', border: 'rgba(132,204,22,0.3)' },
    'Node.js': { bg: 'rgba(132,204,22,0.12)', color: '#84cc16', border: 'rgba(132,204,22,0.3)' },
    'TypeScript': { bg: 'rgba(59,130,246,0.12)', color: '#3b82f6', border: 'rgba(59,130,246,0.3)' },
    'Express': { bg: 'rgba(234,179,8,0.12)', color: '#eab308', border: 'rgba(234,179,8,0.3)' },
    'Azure AI': { bg: 'rgba(14,165,233,0.12)', color: '#0ea5e9', border: 'rgba(14,165,233,0.3)' },
    'CSS': { bg: 'rgba(168,85,247,0.12)', color: '#a855f7', border: 'rgba(168,85,247,0.3)' },
    'HTML': { bg: 'rgba(239,68,68,0.12)', color: '#ef4444', border: 'rgba(239,68,68,0.3)' },
    'Gemini API': { bg: 'rgba(129,140,248,0.12)', color: '#818cf8', border: 'rgba(129,140,248,0.3)' },
};

const projectCategories = {
    1: 'Backend',
    2: 'Frontend',
    3: 'Backend',
    4: 'Backend',
    5: 'Full Stack',
    6: 'Frontend',
    7: 'Backend',
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
                    <p style={{ color: 'var(--primary)', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.75rem' }}>
                        What I've Built
                    </p>
                    <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem' }}>
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '560px', margin: '0 auto' }}>
                        From REST APIs to React UIs — a selection of work spanning backend systems, DevOps, and frontend.
                    </p>
                </motion.div>

                {/* Filter tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', marginBottom: '3rem', flexWrap: 'wrap' }}
                >
                    {filters.map(filter => (
                        <motion.button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                            style={{
                                padding: '0.5rem 1.4rem',
                                borderRadius: '2rem',
                                border: activeFilter === filter
                                    ? '1px solid var(--primary)'
                                    : '1px solid var(--glass-border)',
                                backgroundColor: activeFilter === filter
                                    ? 'rgba(239,68,68,0.12)'
                                    : 'transparent',
                                color: activeFilter === filter ? 'var(--primary)' : 'var(--text-muted)',
                                fontWeight: '600',
                                fontSize: '0.85rem',
                                cursor: 'pointer',
                                transition: 'all 0.25s ease',
                                fontFamily: 'var(--font-main)'
                            }}
                        >
                            {filter}
                            <span style={{
                                marginLeft: '0.5rem',
                                fontSize: '0.7rem',
                                color: activeFilter === filter ? 'var(--primary)' : 'rgba(255,255,255,0.25)'
                            }}>
                                {filter === 'All' ? projects.length : projects.filter(p => projectCategories[p.id] === filter).length}
                            </span>
                        </motion.button>
                    ))}
                </motion.div>

                {/* Project grid */}
                <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.75rem' }}>
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
                                    transition={{ duration: 0.4, delay: index * 0.07 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -10 }}
                                    style={{
                                        background: 'rgba(255,255,255,0.03)',
                                        border: '1px solid var(--glass-border)',
                                        borderRadius: '1rem',
                                        overflow: 'hidden',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        cursor: 'default',
                                        position: 'relative',
                                        transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.borderColor = 'rgba(239,68,68,0.4)';
                                        e.currentTarget.style.boxShadow = '0 16px 40px rgba(239,68,68,0.12)';
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.borderColor = 'var(--glass-border)';
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}
                                >
                                    {/* Top accent bar */}
                                    <div style={{
                                        height: '3px',
                                        background: 'linear-gradient(90deg, var(--primary), var(--secondary), transparent)',
                                    }}></div>

                                    <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column' }}>

                                        {/* Number + category */}
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                                            <span style={{
                                                fontSize: '2rem',
                                                fontWeight: '800',
                                                color: 'rgba(239,68,68,0.15)',
                                                fontFamily: 'var(--font-heading)',
                                                lineHeight: 1
                                            }}>
                                                {num}
                                            </span>
                                            <span style={{
                                                fontSize: '0.68rem',
                                                fontWeight: '700',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.1em',
                                                color: 'var(--primary)',
                                                backgroundColor: 'rgba(239,68,68,0.1)',
                                                border: '1px solid rgba(239,68,68,0.2)',
                                                padding: '0.25rem 0.65rem',
                                                borderRadius: '2rem'
                                            }}>
                                                {projectCategories[project.id]}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '0.75rem', lineHeight: 1.3 }}>
                                            {project.title}
                                        </h3>

                                        {/* Description */}
                                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem', flex: 1, lineHeight: '1.7' }}>
                                            {project.description}
                                        </p>

                                        {/* Tech tags */}
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                                            {project.tech.map(t => {
                                                const style = techColors[t] || { bg: 'rgba(255,255,255,0.05)', color: 'var(--text-muted)', border: 'var(--glass-border)' };
                                                return (
                                                    <span key={t} style={{
                                                        fontSize: '0.72rem',
                                                        fontWeight: '600',
                                                        backgroundColor: style.bg,
                                                        color: style.color,
                                                        border: `1px solid ${style.border}`,
                                                        padding: '0.25rem 0.65rem',
                                                        borderRadius: '0.4rem',
                                                    }}>
                                                        {t}
                                                    </span>
                                                );
                                            })}
                                        </div>

                                        {/* Link */}
                                        {project.link && (
                                            <motion.a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ x: 4 }}
                                                style={{
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    gap: '0.4rem',
                                                    fontSize: '0.85rem',
                                                    fontWeight: '700',
                                                    color: 'var(--primary)',
                                                    borderTop: '1px solid var(--glass-border)',
                                                    paddingTop: '1rem',
                                                    transition: 'gap 0.2s ease'
                                                }}
                                            >
                                                {project.link.includes('github') ? <Github size={15} /> : <ExternalLink size={15} />}
                                                {project.link.includes('github') ? 'View on GitHub' : 'View Live'}
                                            </motion.a>
                                        )}
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
