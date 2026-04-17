import React from 'react';
import { motion } from 'framer-motion';
import content from '../content.json';

const categoryConfig = {
    Programming: { topBorder: '#FF6B35', iconBg: '#FF6B35', pillBg: '#FF6B35', pillColor: '#FFFFFF', icon: '⚡' },
    Frontend:    { topBorder: '#00D4FF', iconBg: '#00D4FF', pillBg: '#00D4FF', pillColor: '#0A0A0A', icon: '🎨' },
    Backend:     { topBorder: '#00FF88', iconBg: '#00FF88', pillBg: '#00FF88', pillColor: '#0A0A0A', icon: '🛠' },
    Design:      { topBorder: '#FF3366', iconBg: '#FF3366', pillBg: '#FF3366', pillColor: '#FFFFFF', icon: '🎬' },
    Hobby:       { topBorder: '#FFE500', iconBg: '#FFE500', pillBg: '#FFE500', pillColor: '#0A0A0A', icon: '📷' },
};

const skillIcons = {
    'Java Script': '🟨',
    'TypeScript':  '🔷',
    'ReactJS':     '⚛️',
    'NodeJS':      '🟩',
    'Java':        '☕',
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
                    <span className="section-label">What I Know</span>
                    <h2 style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '1rem' }}>
                        Tech <span className="section-title-underline">Arsenal</span>
                    </h2>
                    <p style={{ color: '#555555', maxWidth: '560px', margin: '0 auto' }}>
                        Technologies and tools I've used in real projects and production systems.
                    </p>
                </motion.div>

                {/* Category cards */}
                <div className="skills-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.75rem', alignItems: 'start' }}>
                    {categories.map((category, catIndex) => {
                        const config = categoryConfig[category] || {
                            topBorder: '#FFE500', iconBg: '#FFE500', pillBg: '#FFE500', pillColor: '#0A0A0A', icon: '🔧'
                        };
                        const categorySkills = skills.filter(s => s.category === category);

                        return (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ x: 4, y: 4, boxShadow: '0 0 0 #000' }}
                                style={{
                                    backgroundColor: '#FFFFFF',
                                    border: '2px solid #000',
                                    boxShadow: '4px 4px 0 #000',
                                    borderTop: `4px solid ${config.topBorder}`,
                                    borderRadius: '0',
                                    padding: '1.75rem',
                                    transition: 'transform 0.15s ease, box-shadow 0.15s ease'
                                }}
                            >
                                {/* Category header */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                                    <div style={{
                                        backgroundColor: config.iconBg,
                                        border: '2px solid #000',
                                        borderRadius: '0',
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
                                            fontSize: '0.88rem',
                                            fontWeight: '800',
                                            color: '#0A0A0A',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.1em'
                                        }}>
                                            {category}
                                        </h3>
                                        <span style={{ fontSize: '0.7rem', color: '#555555', fontWeight: '500' }}>
                                            {categorySkills.length} {categorySkills.length === 1 ? 'skill' : 'skills'}
                                        </span>
                                    </div>
                                </div>

                                {/* Skill pills */}
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.55rem' }}>
                                    {categorySkills.map((skill, i) => (
                                        <motion.div
                                            key={skill.name}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: catIndex * 0.1 + i * 0.05 }}
                                            viewport={{ once: true }}
                                            whileHover={{ scale: 1.06 }}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.4rem',
                                                padding: '0.45rem 0.9rem',
                                                backgroundColor: config.pillBg,
                                                border: '1px solid #000',
                                                borderRadius: '0',
                                                fontSize: '0.82rem',
                                                fontWeight: '700',
                                                color: config.pillColor,
                                                cursor: 'default',
                                                transition: 'transform 0.15s ease'
                                            }}
                                        >
                                            <span style={{ fontSize: '0.85rem' }}>{skillIcons[skill.name] || '•'}</span>
                                            {skill.name}
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Also worked with strip */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    style={{
                        marginTop: '2.5rem',
                        padding: '1.5rem 2rem',
                        backgroundColor: '#FFFFFF',
                        border: '2px solid #000',
                        boxShadow: '4px 4px 0 #000',
                        borderRadius: '0',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        flexWrap: 'wrap'
                    }}
                >
                    <span style={{ fontSize: '0.72rem', color: '#0A0A0A', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.12em', whiteSpace: 'nowrap' }}>
                        Also worked with:
                    </span>
                    {['PostgreSQL', 'Azure DevOps', 'GitHub Actions', 'Docker', 'Grafana', 'REST APIs', 'CI/CD', 'Git'].map((tool, i) => (
                        <motion.span
                            key={tool}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: i * 0.04 }}
                            viewport={{ once: true }}
                            style={{
                                fontSize: '0.75rem',
                                color: '#0A0A0A',
                                backgroundColor: '#F0F0F0',
                                border: '1px solid #000',
                                padding: '0.28rem 0.75rem',
                                borderRadius: '0',
                                fontWeight: '600'
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
