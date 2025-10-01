'use client'

import { motion } from 'framer-motion'
import { scrollToSection } from '@/lib/utils'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { label: 'Home', href: 'hero' },
    { label: 'Services', href: 'services' },
    { label: 'Results', href: 'results' },
    { label: 'About', href: 'about' },
    { label: 'Contact', href: 'contact' },
  ]

  const handleNavClick = (href: string) => {
    scrollToSection(href)
  }

  return (
    <footer className="bg-black/50 border-t border-gray-800/50">
      <div className="container-width section-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          {/* Logo and Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <div 
              className="text-3xl font-light tracking-widest mb-4 cursor-pointer"
              onClick={() => handleNavClick('hero')}
            >
              <span className="text-coral">idev</span>
            </div>
            <p className="text-gray-400 font-light leading-relaxed">
              Crafting digital excellence.
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <nav className="flex flex-wrap justify-center gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-gray-400 hover:text-coral transition-colors duration-200 font-medium"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center md:text-right"
          >
            <p className="text-gray-500 text-sm">
              © {currentYear} <span className="text-coral">idev</span>. All rights reserved.
            </p>
          </motion.div>
        </div>

        {/* Separator Line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 pt-8 border-t border-gray-800/50"
        >
          <div className="text-center">
            <p className="text-gray-600 text-xs">

            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer