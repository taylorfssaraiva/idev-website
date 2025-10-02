'use client'

import {motion} from 'framer-motion'
import {ChevronDown} from 'lucide-react'
import {scrollToSection} from '@/lib/utils'

const Hero = () => {
    const floatingElements = [
        {content: '{ }', x: '10%', y: '20%', delay: 0},
        {content: '< />', x: '85%', y: '15%', delay: 0.5},
        {content: '{ }', x: '20%', y: '80%', delay: 1},
        {content: '< />', x: '90%', y: '75%', delay: 1.5},
    ]

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
                <div className="absolute inset-0 bg-gradient-to-t from-coral/5 via-transparent to-transparent"></div>
            </div>

            {/* Floating Code Elements */}
            {floatingElements.map((element, index) => (
                <motion.div
                    key={index}
                    initial={{opacity: 0, y: 20}}
                    animate={{
                        opacity: 0.3,
                        y: 0,
                        x: [0, 10, -5, 0],
                    }}
                    transition={{
                        duration: 1,
                        delay: element.delay,
                        x: {
                            duration: 6,
                            repeat: Infinity,
                            repeatType: 'reverse'
                        }
                    }}
                    className="absolute text-coral/20 text-4xl md:text-6xl font-mono select-none pointer-events-none"
                    style={{left: element.x, top: element.y}}
                >
                    {element.content}
                </motion.div>
            ))}

            {/* Main Content */}
            <div className="relative z-10 container-width section-padding text-center">
                <motion.div
                    initial={{opacity: 0, y: 30}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8}}
                    className="space-y-8"
                >
                    {/* Main Branding */}
                    <motion.h1
                        initial={{opacity: 0, scale: 0.9}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{duration: 0.8, delay: 0.2}}
                        className="text-6xl md:text-8xl lg:text-9xl font-light tracking-widest"
                    >
                        <span className="text-coral">idev</span>
                    </motion.h1>

                    {/* Tagline */}
                    <motion.h2
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, delay: 0.4}}
                        className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-200 tracking-wide"
                    >
                        Crafting Digital Excellence
                    </motion.h2>

                    {/* Subtitle */}
                    <motion.p
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, delay: 0.6}}
                        className="max-w-4xl mx-auto text-lg md:text-xl text-gray-400 leading-relaxed font-light"
                    >
                        Expert in full-stack development, database optimization, and scalable cloud solutions.
                        We help businesses thrive with high-performance applications designed using modern technologies and proven industry best practices.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, delay: 0.8}}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
                    >
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="btn-primary text-lg px-8 py-4 min-w-[200px]"
                        >
                            Start Your Project
                        </button>
                        <button
                            onClick={() => scrollToSection('results')}
                            className="btn-secondary text-lg px-8 py-4 min-w-[200px]"
                        >
                            View Results
                        </button>
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1, delay: 1.5}}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                    <motion.button
                        onClick={() => scrollToSection('services')}
                        animate={{y: [0, 10, 0]}}
                        transition={{duration: 2, repeat: Infinity}}
                        className="text-coral hover:text-coral-dark transition-colors duration-200"
                        aria-label="Scroll to services"
                    >
                        <ChevronDown size={32}/>
                    </motion.button>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero