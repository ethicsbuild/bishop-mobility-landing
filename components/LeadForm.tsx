'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    mobilityNeeds: ''
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    
    try {
      // Submit to Supabase
      const { data, error } = await supabase
        .from('lead_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            mobility_needs: formData.mobilityNeeds
          }
        ])
      
      if (error) {
        console.error('Supabase error:', error)
        throw error
      }
      
      console.log('Form submitted successfully:', data)
      
      setStatus('success')
      setMessage('Thank you! We\'ll be in touch soon with updates about the Bishop Mobility Cane Holster.')
      setFormData({ name: '', email: '', phone: '', mobilityNeeds: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus('idle')
        setMessage('')
      }, 5000)
    } catch (error) {
      console.error('Submission error:', error)
      setStatus('error')
      setMessage('Something went wrong. Please try again or email us directly at info@bishopmobility.com')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="bg-white">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-lg">Get Early Access</span>
            <h2 className="text-gray-900 mt-2">
              Be Among the First
            </h2>
            <p className="text-xl text-gray-600 mt-4">
              Join our early access list to be notified when the Bishop Mobility Cane Holster 
              becomes available. Limited initial production run.
            </p>
          </div>
          
          <div className="card max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-900 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition-colors"
                  placeholder="John Smith"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-900 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-lg font-medium text-gray-900 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition-colors"
                  placeholder="(555) 123-4567"
                />
              </div>
              
              <div>
                <label htmlFor="mobilityNeeds" className="block text-lg font-medium text-gray-900 mb-2">
                  Tell Us About Your Mobility Needs (Optional)
                </label>
                <textarea
                  id="mobilityNeeds"
                  name="mobilityNeeds"
                  rows={4}
                  value={formData.mobilityNeeds}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition-colors resize-none"
                  placeholder="Do you have arthritis? What challenges do you face with your current cane? Any specific features you're looking for?"
                />
              </div>
              
              {status === 'success' && (
                <div className="bg-green-50 border-2 border-green-500 rounded-lg p-4">
                  <p className="text-green-800 text-lg font-medium">{message}</p>
                </div>
              )}
              
              {status === 'error' && (
                <div className="bg-red-50 border-2 border-red-500 rounded-lg p-4">
                  <p className="text-red-800 text-lg font-medium">{message}</p>
                </div>
              )}
              
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Submitting...' : 'Join the Early Access List'}
              </button>
              
              <p className="text-sm text-gray-500 text-center">
                We respect your privacy. Your information will only be used to contact you about 
                Bishop Mobility Solutions products and updates. We will never share your data with third parties.
              </p>
            </form>
          </div>
          
          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <svg className="w-12 h-12 mx-auto text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="text-lg font-semibold text-gray-900">Email Updates</h3>
              <p className="text-gray-600">Be the first to know when we launch</p>
            </div>
            
            <div className="space-y-2">
              <svg className="w-12 h-12 mx-auto text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-lg font-semibold text-gray-900">Early Bird Pricing</h3>
              <p className="text-gray-600">Exclusive discounts for early supporters</p>
            </div>
            
            <div className="space-y-2">
              <svg className="w-12 h-12 mx-auto text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <h3 className="text-lg font-semibold text-gray-900">Priority Access</h3>
              <p className="text-gray-600">First in line for our limited initial run</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}