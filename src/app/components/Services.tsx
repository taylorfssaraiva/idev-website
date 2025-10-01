'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Code, Monitor, Database, Cloud, Brain, Sparkles, Zap, ArrowRight, CheckCircle } from 'lucide-react'

interface Service {
    title: string
    description: string
    technologies: string[]
    icon: string
    highlights: string[]
    caseStudy?: string
    results?: string[]
}

const Services = () => {
    const [selectedService, setSelectedService] = useState<number>(0)
    const [hoveredCard, setHoveredCard] = useState<number | null>(null)

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact')
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

    const scrollToDetails = () => {
        const detailsSection = document.getElementById('service-details')
        if (detailsSection) {
            detailsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

    const handleServiceClick = (index: number) => {
        setSelectedService(index)
        // Small delay to allow state update before scrolling
        setTimeout(() => {
            scrollToDetails()
        }, 100)
    }

    const services: Service[] = [
        {
            title: 'AI & Machine Learning Solutions',
            description: 'Leverage artificial intelligence to automate processes, gain predictive insights, and create intelligent applications that learn and adapt.',
            technologies: ['TensorFlow', 'PyTorch', 'LangChain', 'OpenAI API'],
            icon: 'brain',
            highlights: [
                'Custom AI model development and training',
                'Natural Language Processing (NLP) applications',
                'Predictive analytics and data forecasting',
                'AI-powered automation and chatbots',
                'Computer vision and image recognition'
            ],
            caseStudy: 'Built AI-powered customer support system reducing response time by 70%',
            results: ['70% faster response time', '90% customer satisfaction', '40% cost reduction']
        },
        {
            title: 'Full-Stack Development',
            description: 'End-to-end application development with modern architectures, focusing on scalability, performance, and exceptional user experiences.',
            technologies: ['Java', 'Golang', 'Python', 'TypeScript'],
            icon: 'code',
            highlights: [
                'Enterprise-grade application architecture',
                'Microservices and distributed systems',
                'Real-time data processing pipelines',
                'API design and integration',
                'Legacy system modernization'
            ],
            caseStudy: 'Architected AdTech platform processing 10M+ daily transactions',
            results: ['99.9% uptime', '10M+ daily requests', '<100ms latency']
        },
        {
            title: 'Frontend & UI/UX Engineering',
            description: 'Create stunning, responsive interfaces that convert visitors into customers with modern frameworks and performance optimization.',
            technologies: ['React', 'Next.js', 'Angular', 'Vue.js'],
            icon: 'monitor',
            highlights: [
                'Progressive Web Applications (PWA)',
                'Mobile-first responsive design',
                'Performance optimization & SEO',
                'Accessibility compliance (WCAG 2.1)',
                'Design system implementation'
            ],
            caseStudy: 'Redesigned e-commerce platform increasing conversion by 45%',
            results: ['45% conversion increase', '60% faster load time', '95+ Lighthouse score']
        },
        {
            title: 'Backend & Database Architecture',
            description: 'High-performance APIs, optimized databases, and scalable backend systems that handle millions of requests with reliability.',
            technologies: ['Spring Boot', 'Node.js', 'PostgreSQL', 'Redis'],
            icon: 'database',
            highlights: [
                'Database optimization and query tuning',
                'RESTful and GraphQL API development',
                'Caching strategies and performance',
                'Data migration and ETL pipelines',
                'Security and compliance (SOC 2, GDPR)'
            ],
            caseStudy: 'Optimized payment processing system for Mastercard operations',
            results: ['50% faster queries', '99.99% reliability', 'Zero data breaches']
        },
        {
            title: 'Cloud Infrastructure & DevOps',
            description: 'Modern cloud solutions with automated deployments, monitoring, and infrastructure that scales with your business growth.',
            technologies: ['AWS', 'GCP', 'Docker', 'Kubernetes'],
            icon: 'cloud',
            highlights: [
                'Cloud migration and optimization',
                'CI/CD pipeline implementation',
                'Infrastructure as Code (Terraform)',
                'Container orchestration',
                'Monitoring and observability'
            ],
            caseStudy: 'Migrated enterprise infrastructure to cloud, reducing costs by 60%',
            results: ['60% cost reduction', '10x faster deployments', '99.95% availability']
        },
        {
            title: 'Digital Transformation Consulting',
            description: 'Strategic guidance to modernize your technology stack, processes, and team capabilities for competitive advantage.',
            technologies: ['Agile', 'System Design', 'Architecture', 'Strategy'],
            icon: 'sparkles',
            highlights: [
                'Technology stack evaluation',
                'Architecture review and recommendations',
                'Team training and mentorship',
                'Technical debt assessment',
                'Roadmap and implementation planning'
            ],
            caseStudy: 'Led digital transformation for Fortune 500 financial services firm',
            results: ['3x development velocity', '80% technical debt reduction', '12 engineers trained']
        }
    ]

    const getIcon = (iconName: string) => {
        const iconProps = { size: 28 }
        switch (iconName) {
            case 'brain': return <Brain {...iconProps} />
            case 'code': return <Code {...iconProps} />
            case 'monitor': return <Monitor {...iconProps} />
            case 'database': return <Database {...iconProps} />
            case 'cloud': return <Cloud {...iconProps} />
            case 'sparkles': return <Sparkles {...iconProps} />
            default: return <Code {...iconProps} />
        }
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    }

    return (
        <section id="services" className="py-24 bg-slate-900 relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-20 left-20 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-2 mb-6">
                        <Zap className="w-4 h-4 text-red-500" />
                        <span className="text-sm font-medium text-red-400 uppercase tracking-wider">Enterprise Solutions</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-light tracking-wide mb-6 text-white">
                        Services That <span className="text-red-500">Drive Results</span>
                    </h2>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
                        From AI-powered automation to cloud infrastructure, I deliver comprehensive solutions
                        that transform businesses and accelerate growth.
                    </p>
                </motion.div>

                {/* Service Cards Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="relative group cursor-pointer"
                            onClick={() => handleServiceClick(index)}
                            onMouseEnter={() => setHoveredCard(index)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div className={`
                relative p-6 rounded-2xl border transition-all duration-300 h-full
                ${selectedService === index
                                ? 'bg-red-500/10 border-red-500/50 shadow-2xl shadow-red-500/20 scale-105'
                                : 'bg-slate-800/50 border-slate-700/50 hover:border-red-500/30 hover:bg-slate-800/70'
                            }
              `}>
                                {/* Icon */}
                                <div className={`
                  inline-flex p-3 rounded-xl mb-4 transition-all duration-300
                  ${selectedService === index
                                    ? 'bg-red-500 text-white shadow-lg shadow-red-500/50'
                                    : 'bg-red-500/10 text-red-400 group-hover:bg-red-500/20'
                                }
                `}>
                                    {getIcon(service.icon)}
                                </div>

                                {/* Title */}
                                <h3 className={`
                  text-xl font-semibold mb-3 transition-colors duration-300
                  ${selectedService === index ? 'text-white' : 'text-slate-200 group-hover:text-white'}
                `}>
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-slate-400 text-sm leading-relaxed mb-4 font-light">
                                    {service.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {service.technologies.slice(0, 3).map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className={`
                        text-xs px-2 py-1 rounded-full border transition-all duration-300
                        ${selectedService === index
                                                ? 'bg-red-500/20 border-red-500/40 text-red-300'
                                                : 'bg-slate-700/50 border-slate-600/50 text-slate-400'
                                            }
                      `}
                                        >
                      {tech}
                    </span>
                                    ))}
                                    {service.technologies.length > 3 && (
                                        <span className="text-xs px-2 py-1 rounded-full bg-slate-700/50 border border-slate-600/50 text-slate-400">
                      +{service.technologies.length - 3} more
                    </span>
                                    )}
                                </div>

                                {/* View Details Arrow */}
                                <div className="flex items-center gap-2 text-red-400 text-sm font-medium group-hover:gap-3 transition-all duration-300">
                                    <span>View Details</span>
                                    <ArrowRight className="w-4 h-4" />
                                </div>

                                {/* Selection Indicator */}
                                {selectedService === index && (
                                    <motion.div
                                        layoutId="selected-indicator"
                                        className="absolute top-4 right-4 w-3 h-3 bg-red-500 rounded-full shadow-lg shadow-red-500/50"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Detailed View */}
                <motion.div
                    id="service-details"
                    key={selectedService}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 backdrop-blur-sm scroll-mt-24"
                >
                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Left Column - Details */}
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 rounded-xl bg-red-500 text-white shadow-lg shadow-red-500/30">
                                    {getIcon(services[selectedService].icon)}
                                </div>
                                <h3 className="text-2xl font-semibold text-white">
                                    {services[selectedService].title}
                                </h3>
                            </div>

                            <p className="text-slate-300 leading-relaxed mb-6">
                                {services[selectedService].description}
                            </p>

                            <div className="mb-6">
                                <h4 className="text-sm font-semibold text-red-400 uppercase tracking-wider mb-4">
                                    Key Capabilities
                                </h4>
                                <div className="space-y-3">
                                    {services[selectedService].highlights.map((highlight, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                                            <span className="text-slate-300 text-sm">{highlight}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h4 className="text-sm font-semibold text-red-400 uppercase tracking-wider mb-3">
                                    Technology Stack
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {services[selectedService].technologies.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-2 bg-red-500/10 border border-red-500/30 rounded-lg text-red-300 text-sm font-medium"
                                        >
                      {tech}
                    </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Case Study & Results */}
                        <div className="space-y-6">
                            <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-6">
                                <h4 className="text-sm font-semibold text-red-400 uppercase tracking-wider mb-3">
                                    Case Study
                                </h4>
                                <p className="text-slate-300 leading-relaxed mb-4">
                                    {services[selectedService].caseStudy}
                                </p>

                                {services[selectedService].results && (
                                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-700/50">
                                        {services[selectedService].results!.map((result, idx) => (
                                            <div key={idx} className="text-center">
                                                <div className="text-2xl font-bold text-red-400 mb-1">
                                                    {result.split(' ')[0]}
                                                </div>
                                                <div className="text-xs text-slate-400">
                                                    {result.split(' ').slice(1).join(' ')}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="bg-gradient-to-br from-red-500/10 to-red-600/5 border border-red-500/20 rounded-xl p-6">
                                <h4 className="text-lg font-semibold text-white mb-3">
                                    Ready to get started?
                                </h4>
                                <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                                    Let's discuss how this service can transform your business.
                                    Schedule a free consultation to explore your specific needs.
                                </p>
                                <button className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group" onClick={scrollToContact}>
                                    Schedule Consultation
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-16 text-center"
                >
                    <p className="text-slate-400 text-lg mb-6">
                        Don't see what you're looking for? I offer custom solutions tailored to your unique needs.
                    </p>
                    <button className="inline-flex items-center gap-2 bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-red-500/30 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300" onClick={scrollToContact}>
                        Discuss Custom Solution
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </motion.div>
            </div>
        </section>
    )
}

export default Services