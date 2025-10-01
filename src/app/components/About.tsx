'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Award, Target, Zap, Shield, Code2, TrendingUp, Users, Globe, Rocket, CheckCircle } from 'lucide-react'

interface Skill {
    name: string
    percentage: number
}

const About = () => {
    const [isVisible, setIsVisible] = useState(false)

    const skills: Skill[] = [
        { name: 'Full-Stack Development', percentage: 95 },
        { name: 'Database Optimization', percentage: 92 },
        { name: 'Cloud Architecture', percentage: 88 },
        { name: 'System Design', percentage: 90 },
        { name: 'DevOps & CI/CD', percentage: 85 }
    ]

    const values = [
        {
            icon: Target,
            title: 'Results-Driven',
            description: 'We focus on measurable outcomes that directly impact your bottom line and business growth.'
        },
        {
            icon: Zap,
            title: 'Cutting-Edge Tech',
            description: 'Leveraging the latest technologies and frameworks to build future-proof solutions.'
        },
        {
            icon: Shield,
            title: 'Enterprise-Grade',
            description: 'Security, scalability, and reliability built into every line of code we write.'
        },
        {
            icon: Rocket,
            title: 'Rapid Delivery',
            description: 'Agile methodology ensures fast turnaround without compromising on quality.'
        }
    ]

    const achievements = [
        { icon: Code2, value: '100+', label: 'Projects Delivered' },
        { icon: Globe, value: 'Global', label: 'Client Reach' },
        { icon: TrendingUp, value: '99.9%', label: 'Client Satisfaction' },
        { icon: Users, value: '10+', label: 'Years in Business' }
    ]

    const expertise = [
        'Enterprise Software Development',
        'AI & Machine Learning Integration',
        'Cloud Infrastructure & Migration',
        'Database Performance Tuning',
        'Real-time Data Processing',
        'Security & Compliance (SOC 2, GDPR)',
        'Microservices Architecture',
        'CI/CD Pipeline Implementation'
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6
            }
        }
    }

    const ProgressBar = ({ skill, index }: { skill: Skill; index: number }) => {
        const [progress, setProgress] = useState(0)

        useEffect(() => {
            if (isVisible) {
                const timer = setTimeout(() => {
                    setProgress(skill.percentage)
                }, index * 200)
                return () => clearTimeout(timer)
            }
        }, [isVisible, skill.percentage, index])

        return (
            <motion.div
                variants={itemVariants}
                className="mb-5"
            >
                <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-medium text-sm">{skill.name}</span>
                    <span className="text-red-400 font-semibold text-sm">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                    <motion.div
                        className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                    />
                </div>
            </motion.div>
        )
    }

    return (
        <section id="about" className="py-24 bg-slate-900 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-20 left-20 w-96 h-96 bg-red-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-600/20 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-2 mb-6">
                        <Award className="w-4 h-4 text-red-500" />
                        <span className="text-sm font-medium text-red-400 uppercase tracking-wider">About idev</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-light tracking-wide mb-6 text-white">
                        Building <span className="text-red-500">Digital Excellence</span>
                    </h2>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
                        A software consultancy specializing in enterprise-grade solutions that transform
                        businesses through cutting-edge technology and proven methodologies.
                    </p>
                </motion.div>

                {/* Company Overview */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 mb-16"
                >
                    <div className="grid lg:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                                <Zap className="w-6 h-6 text-red-400" />
                                Who We Are
                            </h3>
                            <p className="text-slate-300 leading-relaxed mb-4">
                                idev is a forward-thinking software consultancy delivering enterprise-level solutions
                                to clients across industries. We combine deep technical expertise with business acumen
                                to create systems that don't just work—they excel.
                            </p>
                            <p className="text-slate-300 leading-relaxed">
                                From AdTech platforms processing millions of daily requests to secure payment systems
                                handling global transactions, our work powers critical business operations for leading
                                companies worldwide.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                                <Target className="w-6 h-6 text-red-400" />
                                Our Approach
                            </h3>
                            <p className="text-slate-300 leading-relaxed mb-4">
                                We believe in partnership over transactions. Every project begins with understanding
                                your unique challenges and goals, allowing us to architect solutions that deliver
                                real business value.
                            </p>
                            <p className="text-slate-300 leading-relaxed">
                                Our agile methodology ensures rapid delivery without sacrificing quality, security,
                                or scalability. We build systems designed to grow with your business.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Core Values */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
                >
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-red-500/30 transition-all duration-300 hover:scale-105"
                        >
                            <div className="p-3 rounded-xl bg-red-500/10 inline-flex mb-4">
                                <value.icon className="w-6 h-6 text-red-400" />
                            </div>
                            <h4 className="text-white font-semibold mb-2">{value.title}</h4>
                            <p className="text-slate-400 text-sm leading-relaxed">{value.description}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Stats and Expertise */}
                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                    {/* Achievements */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-semibold text-white mb-6">By the Numbers</h3>
                        <div className="grid grid-cols-2 gap-6">
                            {achievements.map((stat, index) => (
                                <div
                                    key={index}
                                    className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 rounded-xl p-6 text-center hover:border-red-500/30 transition-all duration-300"
                                >
                                    <div className="flex justify-center mb-3">
                                        <div className="p-3 rounded-lg bg-red-500/10">
                                            <stat.icon size={24} className="text-red-400" />
                                        </div>
                                    </div>
                                    <div className="text-3xl font-bold text-red-400 mb-2">{stat.value}</div>
                                    <div className="text-sm text-slate-400">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Core Expertise */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-semibold text-white mb-6">Core Expertise</h3>
                        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                            <div className="grid grid-cols-1 gap-3">
                                {expertise.map((item, index) => (
                                    <div key={index} className="flex items-center gap-3 text-slate-300">
                                        <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Technical Proficiency */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    onViewportEnter={() => setIsVisible(true)}
                    transition={{ duration: 0.6 }}
                    className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8"
                >
                    <div className="grid lg:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-semibold text-white mb-6">Technical Proficiency</h3>
                            <p className="text-slate-300 leading-relaxed mb-8">
                                Our expertise spans the entire technology stack, from frontend frameworks to
                                cloud infrastructure. We stay ahead of industry trends to deliver solutions
                                using the most effective and modern tools available.
                            </p>
                            <div className="space-y-4">
                                {skills.map((skill, index) => (
                                    <ProgressBar key={skill.name} skill={skill} index={index} />
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold text-white mb-6">Why Choose idev</h3>
                            <div className="space-y-4">
                                <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-5">
                                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                                        <Shield className="w-5 h-5 text-red-400" />
                                        Enterprise Experience
                                    </h4>
                                    <p className="text-slate-400 text-sm">
                                        Proven track record delivering mission-critical systems for Fortune 500 companies
                                        and high-growth startups alike.
                                    </p>
                                </div>
                                <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-5">
                                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                                        <Code2 className="w-5 h-5 text-red-400" />
                                        Quality First
                                    </h4>
                                    <p className="text-slate-400 text-sm">
                                        Clean, maintainable code following industry best practices with comprehensive
                                        testing and documentation.
                                    </p>
                                </div>
                                <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-5">
                                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                                        <Rocket className="w-5 h-5 text-red-400" />
                                        Rapid Execution
                                    </h4>
                                    <p className="text-slate-400 text-sm">
                                        Agile development practices ensure fast time-to-market while maintaining
                                        flexibility for evolving requirements.
                                    </p>
                                </div>
                                <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-5">
                                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                                        <Users className="w-5 h-5 text-red-400" />
                                        True Partnership
                                    </h4>
                                    <p className="text-slate-400 text-sm">
                                        We view every engagement as a partnership, committed to your long-term
                                        success and growth.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default About