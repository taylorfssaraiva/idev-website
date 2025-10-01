'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Users, Clock, Award, ArrowRight, Zap, Target, DollarSign } from 'lucide-react'
import { useState } from 'react'

interface SuccessStory {
    industry: string
    title: string
    description: string
    results: {
        metric: string
        value: string
        icon: string
    }[]
    technologies: string[]
    highlights: string[]
}

const SuccessStories = () => {
    const [activeStory, setActiveStory] = useState<number>(0)

    const stories: SuccessStory[] = [
        {
            industry: 'AdTech & Travel',
            title: 'High-Performance Advertising Platform',
            description: 'Built a distributed advertising technology platform processing millions of requests daily with real-time data pipelines, sophisticated audience targeting, and cross-device identity resolution.',
            results: [
                { metric: 'Daily Requests', value: '10M+', icon: 'trending' },
                { metric: 'Response Time', value: '<100ms', icon: 'clock' },
                { metric: 'System Uptime', value: '99.9%', icon: 'target' },
                { metric: 'Cost Savings', value: '35%', icon: 'dollar' }
            ],
            technologies: ['Golang', 'Python', 'Google Cloud', 'BigQuery', 'Kafka', 'Redis'],
            highlights: [
                'Scalable microservices architecture',
                'Real-time data processing pipelines',
                'Advanced audience segmentation',
                'Cross-device identity matching'
            ]
        },
        {
            industry: 'Financial Services',
            title: 'Secure Payment Processing System',
            description: 'Developed enterprise-grade payment processing infrastructure with robust security protocols, real-time fraud detection, and comprehensive audit trails for global transaction handling.',
            results: [
                { metric: 'Transactions', value: '5M+/day', icon: 'trending' },
                { metric: 'Uptime', value: '99.99%', icon: 'target' },
                { metric: 'Security Incidents', value: '0', icon: 'award' },
                { metric: 'Performance', value: '2x faster', icon: 'clock' }
            ],
            technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Kubernetes', 'AWS', 'Redis'],
            highlights: [
                'PCI-DSS compliant architecture',
                'Real-time fraud detection',
                'Zero-downtime deployments',
                'Global transaction processing'
            ]
        },
        {
            industry: 'Data Analytics',
            title: 'Credit Risk Assessment Platform',
            description: 'Modernized legacy credit risk systems with real-time analytics, interactive dashboards, and optimized database architectures for instant insights and regulatory compliance.',
            results: [
                { metric: 'Query Speed', value: '50% faster', icon: 'clock' },
                { metric: 'Data Accuracy', value: '99.8%', icon: 'target' },
                { metric: 'User Adoption', value: '95%', icon: 'users' },
                { metric: 'Reporting', value: '10x faster', icon: 'trending' }
            ],
            technologies: ['Python', 'React', 'PostgreSQL', 'Docker', 'Azure', 'Elasticsearch'],
            highlights: [
                'Advanced data processing pipelines',
                'Interactive visualization dashboards',
                'Sub-second query performance',
                'Automated compliance reporting'
            ]
        },
        {
            industry: 'AI & Machine Learning',
            title: 'Intelligent Automation Platform',
            description: 'Architected full-stack AI-powered automation platform with multiple ML models, semantic search capabilities, and real-time processing for enterprise workflow optimization.',
            results: [
                { metric: 'Time to Market', value: '3 months', icon: 'clock' },
                { metric: 'User Growth', value: '400%', icon: 'trending' },
                { metric: 'AI Accuracy', value: '92%', icon: 'target' },
                { metric: 'Automation', value: '70%', icon: 'award' }
            ],
            technologies: ['Next.js', 'Python', 'LangChain', 'OpenAI', 'Pinecone', 'AWS Lambda'],
            highlights: [
                'LangChain AI orchestration',
                'Vector database integration',
                'Real-time WebSocket communication',
                'Scalable serverless architecture'
            ]
        }
    ]

    const getIcon = (iconName: string, size: number = 20) => {
        const props = { size, className: 'text-red-400' }
        switch (iconName) {
            case 'trending': return <TrendingUp {...props} />
            case 'users': return <Users {...props} />
            case 'clock': return <Clock {...props} />
            case 'award': return <Award {...props} />
            case 'target': return <Target {...props} />
            case 'dollar': return <DollarSign {...props} />
            default: return <TrendingUp {...props} />
        }
    }

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact')
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

    return (
        <section id="results" className="py-24 bg-slate-900 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-40 right-20 w-96 h-96 bg-red-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-40 left-20 w-96 h-96 bg-red-600/20 rounded-full blur-3xl"></div>
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
                        <span className="text-sm font-medium text-red-400 uppercase tracking-wider">Proven Results</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-light tracking-wide mb-6 text-white">
                        Success <span className="text-red-500">Stories</span>
                    </h2>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
                        Real-world solutions delivering measurable impact across industries. From high-traffic
                        platforms to secure payment systems and AI-powered automation.
                    </p>
                </motion.div>

                {/* Story Selector */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                    {stories.map((story, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveStory(index)}
                            className={`
                p-6 rounded-xl font-medium transition-all duration-300 text-left
                ${activeStory === index
                                ? 'bg-red-500 text-white shadow-lg shadow-red-500/30 scale-105'
                                : 'bg-slate-800/50 text-slate-400 hover:bg-slate-800 hover:text-white border border-slate-700/50'
                            }
              `}
                        >
                            <div className="text-sm mb-1 opacity-80">Case Study {index + 1}</div>
                            <div className="font-semibold">{story.industry}</div>
                        </button>
                    ))}
                </div>

                {/* Active Story */}
                <motion.div
                    key={activeStory}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Title & Description */}
                    <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 mb-8">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="flex-shrink-0 p-3 rounded-xl bg-red-500/10">
                                <Zap className="w-6 h-6 text-red-400" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-3xl font-semibold text-white mb-4">
                                    {stories[activeStory].title}
                                </h3>
                                <p className="text-lg text-slate-300 leading-relaxed">
                                    {stories[activeStory].description}
                                </p>
                            </div>
                        </div>

                        {/* Key Highlights */}
                        <div className="grid md:grid-cols-2 gap-3 pt-6 border-t border-slate-700/50">
                            {stories[activeStory].highlights.map((highlight, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-slate-400">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                                    <span>{highlight}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Results Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {stories[activeStory].results.map((result, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 rounded-xl p-6 text-center hover:border-red-500/30 transition-all duration-300 hover:scale-105"
                            >
                                <div className="flex justify-center mb-3">
                                    {getIcon(result.icon, 24)}
                                </div>
                                <div className="text-3xl font-bold text-white mb-2">{result.value}</div>
                                <div className="text-sm text-slate-400">{result.metric}</div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Technologies */}
                    <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
                        <h4 className="text-sm font-semibold text-red-400 uppercase tracking-wider mb-4">
                            Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {stories[activeStory].technologies.map((tech, idx) => (
                                <span
                                    key={idx}
                                    className="px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-lg text-red-300 text-sm font-medium"
                                >
                  {tech}
                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Stats Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-20 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl p-8"
                >
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold text-red-400 mb-2">15M+</div>
                            <div className="text-sm text-slate-400">Daily Transactions</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-red-400 mb-2">99.9%</div>
                            <div className="text-sm text-slate-400">System Uptime</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-red-400 mb-2">$10M+</div>
                            <div className="text-sm text-slate-400">Value Delivered</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-red-400 mb-2">10+</div>
                            <div className="text-sm text-slate-400">Years Experience</div>
                        </div>
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-16"
                >
                    <p className="text-slate-400 text-lg mb-6">
                        Ready to achieve similar results for your business?
                    </p>
                    <button
                        onClick={scrollToContact}
                        className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/30"
                    >
                        Start Your Project
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </motion.div>
            </div>
        </section>
    )
}

export default SuccessStories