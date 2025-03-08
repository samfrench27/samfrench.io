"use client";
import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface StatusState {
  submitted: boolean;
  success: boolean;
  message: string;
  isLoading?: boolean;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState<StatusState>({
    submitted: false,
    success: false,
    message: '',
    isLoading: false
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        submitted: true,
        success: false,
        message: 'Please fill in all fields',
        isLoading: false
      });
      return;
    }
    
    try {
      setStatus({
        ...status,
        isLoading: true
      });
      
      // Send the form data to our API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        // Success
        setStatus({
          submitted: true,
          success: true,
          message: 'Thank you for your message! I\'ll get back to you soon.',
          isLoading: false
        });
        
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        // Error
        setStatus({
          submitted: true,
          success: false,
          message: data.error || 'Something went wrong. Please try again.',
          isLoading: false
        });
      }
    } catch (error) {
      setStatus({
        submitted: true,
        success: false,
        message: 'Error submitting form. Please try again.',
        isLoading: false
      });
    }
    
    // Clear status message after 5 seconds
    setTimeout(() => {
      setStatus(prev => ({
        ...prev,
        submitted: false,
      }));
    }, 5000);
  };

  // The rest of your component stays the same
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-16 relative">
          Get In Touch
          <span className="block w-20 h-1 bg-cyan-500 mx-auto mt-4"></span>
        </h2>
        
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <form onSubmit={handleSubmit} className="p-8">
            {status.submitted && (
              <div className={`mb-6 p-4 rounded-md ${status.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {status.message}
              </div>
            )}
            
            {/* Form fields remain the same */}
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                placeholder="Your Name"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                placeholder="Your Email"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-y"
                placeholder="Your Message"
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={status.isLoading}
              className="w-full bg-blue-900 text-white font-medium py-3 px-4 rounded-md hover:bg-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-70"
            >
              {status.isLoading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Prefer to connect directly? Reach out via <a href="mailto:sam@samfrench.io" className="text-blue-600 hover:underline">sam@samfrench.io</a>
          </p>
        </div>
      </div>
    </div>
  );
}