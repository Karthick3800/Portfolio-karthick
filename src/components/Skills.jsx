import React from 'react';
import { motion } from 'framer-motion';
import content from '../content.json';

const categoryConfig = {
    Programming: {
        color: '#f97316',
        bg: 'rgba(249,115,22,0.1)',
        border: 'rgba(249,115,22,0.25)',
        icon: '⚡',
        gradient: 'linear-gradient(135deg, rgba(249,115,22,0.15), rgba(249,115,22,0.03))'
    },
    Frontend: {
        color: '#38bdf8',
        bg: 'rgba(56,189,248,0.1)',
        border: 'rgba(56,189,248,0.25)',
        icon: '🎨',
        gradient: 'linear-gradient(135deg, rgba(56,189,248,0.15), rgba(56,189,248,0.03))'
    },
    Backend: {
        color: '#22c55e',
        bg: 'rgba(34,197,94,0.1)',
        border: 'rgba(34,197,94,0.25)',
        icon: '🛠',
        gradient: 'linear-gradient(135deg, rgba(34,197,94,0.15), rgba(34,197,94,0.03))'
    },
    Design: {
        color: '#a855f7',
        bg: 'rgba(168,85,247,0.1)',
        border: 'rgba(168,85,247,0.25)',
        icon: '🎬',
        gradient: 'linear-gradient(135deg, rgba(168,85,247,0.15), rgba(168,85,247,0.03))'
    },
    Hobby: {
        color: '#ec4899',
        bg: 'rgba(236,72,153,0.1)',
        border: 'rgba(236,72,153,0.25)',
        icon: '📷',
        gradient: 'linear-gradient(135deg, rgba(236,72,153,0.15), rgba(236,72,153,0.03))'
    },
};

const skillIcons = {
    'Java Script': '🟨',
    'TypeScript': '🔷',
    'ReactJS': '⚛️',
    'NodeJS': '🟩',
    'Java': '☕',
    'video editing': '🎬',
    'Photography': '📷',
};

const Skills = () => {
    const { skills } = content;
    const categories = [...new Set(skills.map(s => s.category))];

    return (
        <section id="skills" style={{ padding: '100px 0' }}>
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
                        What I Know
                    </p>
                    <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem' }}>
                        Tech <span className="gradient-text">Arsenal</span>
                    </h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '560px', margin: '0 auto' }}>
                        Technologies, tools, and skills I've sharpened through real-world projects and production systems.
                    </p>
                </motion.div>

                {/* Category cards */}
                <div className="skills-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.75rem' }}>
                    {categories.map((category, catIndex) => {
                        const config = categoryConfig[category] || {
                            color: 'var(--primary)',
                            bg: 'rgba(239,68,68,0.1)',
                            border: 'rgba(239,68,68,0.25)',
                            icon: '🔧',
                            gradient: 'linear-gradient(135deg, rgba(239,68,68,0.1), rgba(239,68,68,0.02))'
                        };
                        const categorySkills = skills.filter(s => s.category === category);

                        return (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                                style={{
                                    background: config.gradient,
                                    border: `1px solid ${config.border}`,
                                    borderRadius: '1.25rem',
                                    padding: '1.75rem',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    transition: 'box-shadow 0.3s ease'
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.boxShadow = `0 16px 40px ${config.bg}`;
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                {/* Glow in corner */}
                                <div style={{
                                    position: 'absolute',
                                    top: '-20px',
                                    right: '-20px',
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '50%',
                                    backgroundColor: config.color,
                                    filter: 'blur(40px)',
                                    opacity: 0.2,
                                    pointerEvents: 'none'
                                }}></div>

                                {/* Category header */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                                    <div style={{
                                        backgroundColor: config.bg,
                                        border: `1px solid ${config.border}`,
                                        borderRadius: '0.65rem',
                                        padding: '0.5rem',
                                        fontSize: '1.1rem',
                                        lineHeight: 1,
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}>
                                        {config.icon}
                                    </div>
                                    <div>
                                        <h3 style={{
                                            fontSize: '1rem',
                                            fontWeight: '700',
                                            color: config.color,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.08em'
                                        }}>
                                            {category}
                                        </h3>
                                        <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                                            {categorySkills.length} {categorySkills.length === 1 ? 'skill' : 'skills'}
                                        </span>
                                    </div>
                                </div>

                                {/* Skill pills */}
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                                    {categorySkills.map((skill, i) => (
                                        <motion.div
                                            key={skill.name}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: catIndex * 0.1 + i * 0.05 }}
                                            viewport={{ once: true }}
                                            whileHover={{ scale: 1.08, backgroundColor: config.bg }}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.4rem',
                                                padding: '0.5rem 1rem',
                                                backgroundColor: 'rgba(255,255,255,0.04)',
                                                border: `1px solid ${config.border}`,
                                                borderRadius: '2rem',
                                                fontSize: '0.85rem',
                                                fontWeight: '600',
                                                color: 'var(--text-main)',
                                                cursor: 'default',
                                                transition: 'all 0.2s ease',
                                                backdropFilter: 'blur(8px)'
                                            }}
                                        >
                                            <span style={{ fontSize: '0.9rem' }}>{skillIcons[skill.name] || '•'}</span>
                                            {skill.name}
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom strip — also learning */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    style={{
                        marginTop: '3rem',
                        padding: '1.5rem 2rem',
                        background: 'rgba(255,255,255,0.02)',
                        border: '1px solid var(--glass-border)',
                        borderRadius: '1rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        flexWrap: 'wrap'
                    }}
                >
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em', whiteSpace: 'nowrap' }}>
                        Also worked with:
                    </span>
                    {['PostgreSQL', 'Azure DevOps', 'GitHub Actions', 'Docker', 'Grafana', 'REST APIs', 'CI/CD', 'Git'].map((tool, i) => (
                        <motion.span
                            key={tool}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: i * 0.05 }}
                            viewport={{ once: true }}
                            style={{
                                fontSize: '0.78rem',
                                color: 'var(--text-muted)',
                                backgroundColor: 'rgba(255,255,255,0.04)',
                                border: '1px solid var(--glass-border)',
                                padding: '0.3rem 0.8rem',
                                borderRadius: '2rem',
                                fontWeight: '500'
                            }}
                        >
                            {tool}
                        </motion.span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
