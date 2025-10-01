'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from 'lucide-react'
import { ContactForm, ContactInfo } from '@/types'
import { validateEmail } from '@/lib/utils'

const Contact = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState<Partial<ContactForm>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const contactInfo: ContactInfo = {
    email: 'contact@idevtech.dev',
    phone: '+1 (407) 972-5547',
    location: 'Remote',
    social: {
      github: 'https://github.com/taylorfssaraiva',
      linkedin: 'https://linkedin.com/in/taylorfonseca',
      twitter: 'https://twitter.com/taylorfonseca'
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactForm> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!validateForm()) return

        setIsSubmitting(true)

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            if (!response.ok) throw new Error('Failed to send message')

            setFormData({ name: '', email: '', subject: '', message: '' })
            setErrors({})
            alert('Thank you for your message! We\'ll get back to you soon.')
        } catch (error) {
            console.error('Error submitting form:', error)
            alert('There was an error sending your message. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name as keyof ContactForm]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container-width section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-wide mb-6">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            Ready to start your next project? Let's discuss how we can bring 
            your ideas to life with cutting-edge technology solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-300 leading-relaxed font-light mb-8">
                I'm always interested in discussing new opportunities, innovative projects, 
                and ways to help businesses leverage technology for growth. Reach out through 
                any of the channels below.
              </p>
            </motion.div>

            {/* Contact Details */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-center space-x-4 p-4 rounded-lg bg-gray-800/50 border border-gray-700/50 hover:border-coral/20 transition-colors duration-300">
                <div className="p-2 rounded-lg bg-coral/10">
                  <Mail size={24} className="text-coral" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a 
                    href={`mailto:${contactInfo.email}`}
                    className="text-white hover:text-coral transition-colors duration-200"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 rounded-lg bg-gray-800/50 border border-gray-700/50 hover:border-coral/20 transition-colors duration-300">
                <div className="p-2 rounded-lg bg-coral/10">
                  <Phone size={24} className="text-coral" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <a 
                    href={`tel:${contactInfo.phone}`}
                    className="text-white hover:text-coral transition-colors duration-200"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 rounded-lg bg-gray-800/50 border border-gray-700/50 hover:border-coral/20 transition-colors duration-300">
                <div className="p-2 rounded-lg bg-coral/10">
                  <MapPin size={24} className="text-coral" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white">{contactInfo.location}</p>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            {/*<motion.div variants={itemVariants} className="pt-8">*/}
            {/*  <p className="text-gray-400 mb-4 font-medium">Follow Me</p>*/}
            {/*  <div className="flex space-x-4">*/}
            {/*    {[*/}
            {/*      { icon: Github, href: contactInfo.social.github, label: 'GitHub' },*/}
            {/*      { icon: Linkedin, href: contactInfo.social.linkedin, label: 'LinkedIn' },*/}
            {/*      { icon: Twitter, href: contactInfo.social.twitter, label: 'Twitter' }*/}
            {/*    ].map((social, index) => (*/}
            {/*      <a*/}
            {/*        key={index}*/}
            {/*        href={social.href}*/}
            {/*        target="_blank"*/}
            {/*        rel="noopener noreferrer"*/}
            {/*        className="p-3 rounded-lg bg-gray-800/50 border border-gray-700/50 hover:border-coral/20 hover:bg-coral/10 transition-all duration-300 group"*/}
            {/*        aria-label={social.label}*/}
            {/*      >*/}
            {/*        <social.icon size={24} className="text-gray-400 group-hover:text-coral transition-colors duration-300" />*/}
            {/*      </a>*/}
            {/*    ))}*/}
            {/*  </div>*/}
            {/*</motion.div>*/}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.form variants={itemVariants} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-coral/50 transition-colors duration-200 ${
                      errors.name ? 'border-red-500' : 'border-gray-600/50 focus:border-coral'
                    }`}
                    placeholder="Your name"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-coral/50 transition-colors duration-200 ${
                      errors.email ? 'border-red-500' : 'border-gray-600/50 focus:border-coral'
                    }`}
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-coral/50 transition-colors duration-200 ${
                    errors.subject ? 'border-red-500' : 'border-gray-600/50 focus:border-coral'
                  }`}
                  placeholder="Project subject"
                />
                {errors.subject && <p className="mt-1 text-sm text-red-400">{errors.subject}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className={`w-full px-4 py-3 bg-gray-800/50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-coral/50 transition-colors duration-200 resize-none ${
                    errors.message ? 'border-red-500' : 'border-gray-600/50 focus:border-coral'
                  }`}
                  placeholder="Tell me about your project..."
                />
                {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact