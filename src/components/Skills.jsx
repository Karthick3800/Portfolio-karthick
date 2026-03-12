import React from 'react';
import { motion } from 'framer-motion';
import content from '../content.json';

const Skills = () => {
    const { skills } = content;

    // Group skills by category
    const categories = [...new Set(skills.map(skill => skill.category))];

    return (
        <section id="skills" style={{ padding: '100px 0' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem' }}>
                        Technical <span className="gradient-text">Skills</span>
                    </h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                        A comprehensive list of my technical expertise and technologies I've mastered over the years.
                    </p>
                </motion.div>

                <div className="skills-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {categories.map((category, catIndex) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="glass"
                            style={{ padding: '2rem' }}
                        >
                            <h3 style={{
                                fontSize: '1.2rem',
                                marginBottom: '1.5rem',
                                color: 'var(--primary)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em'
                            }}>
                                {category}
                            </h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                                {skills
                                    .filter(skill => skill.category === category)
                                    .map((skill, index) => (
                                        <motion.div
                                            key={skill.name}
                                            whileHover={{ scale: 1.05, backgroundColor: 'rgba(239, 68, 68, 0.15)' }}
                                            style={{
                                                padding: '0.5rem 1rem',
                                                backgroundColor: 'var(--bg-card)',
                                                border: '1px solid var(--glass-border)',
                                                borderRadius: '0.5rem',
                                                fontSize: '0.9rem',
                                                color: 'var(--text-main)',
                                                cursor: 'default'
                                            }}
                                        >
                                            {skill.name}
                                        </motion.div>
                                    ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
