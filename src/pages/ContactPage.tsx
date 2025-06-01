import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Mail, Clock, Send, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  } | null>(null);
  
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [formRef, formInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [infoRef, infoInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.phone) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Please fill in all required fields.',
      });
      return;
    }
    
    // Form submission would happen here in a real application
    // For this demo, we'll simulate a successful submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you for your message. We will be in touch shortly.',
    });
    
    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });
  };
  
  return (
    <>
      <Helmet>
        <title>Contact Us | HiTech Aesthetics</title>
        <meta 
          name="description" 
          content="Contact HiTech Aesthetics to book your consultation or enquire about our treatments. Visit our luxury clinic or reach us by phone or email."
        />
      </Helmet>
      
      {/* Header Section */}
      <section 
        ref={headerRef}
        className="pt-32 pb-20 bg-primary-800 text-white"
      >
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-white mb-6">Contact Us</h1>
            <p className="text-xl text-neutral-100">
              Get in touch with our team to book your consultation or enquire about our treatments.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Form and Information */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, x: -50 }}
              animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h2 className="text-2xl mb-6">Send Us a Message</h2>
              
              {formStatus && (
                <div 
                  className={`p-4 mb-6 rounded-lg ${
                    formStatus.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                  }`}
                >
                  <div className="flex items-start">
                    <AlertCircle className="mr-2 mt-0.5 flex-shrink-0" size={18} />
                    <p>{formStatus.message}</p>
                  </div>
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-neutral-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="email" className="block text-neutral-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-neutral-700 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="service" className="block text-neutral-700 mb-2">
                    Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">Select a treatment</option>
                    <option value="Dermal Fillers">Dermal Fillers</option>
                    <option value="Anti-Wrinkle Treatments">Anti-Wrinkle Treatments</option>
                    <option value="Skin Rejuvenation">Skin Rejuvenation</option>
                    <option value="Chemical Peels">Chemical Peels</option>
                    <option value="Microneedling">Microneedling</option>
                    <option value="Laser Treatments">Laser Treatments</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-neutral-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="btn btn-primary w-full flex items-center justify-center"
                >
                  <Send size={18} className="mr-2" />
                  Send Message
                </button>
                <p className="text-xs text-neutral-500 mt-3">
                  By submitting this form, you agree to our privacy policy and consent to being contacted regarding your enquiry.
                </p>
              </form>
            </motion.div>
            
            {/* Contact Information */}
            <motion.div
              ref={infoRef}
              initial={{ opacity: 0, x: 50 }}
              animate={infoInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-primary-800 text-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-2xl text-white mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin size={24} className="mr-4 text-secondary-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-medium text-white mb-1">Our Address</h3>
                      <p className="text-neutral-300">114 Camden Road, Tunbridge Wells, TN1 2QX</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone size={24} className="mr-4 text-secondary-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-medium text-white mb-1">Phone</h3>
                      <p className="text-neutral-300">
                        <a href="tel:+441892338157" className="hover:text-secondary-400 transition-colors">01892 338157</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail size={24} className="mr-4 text-secondary-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-medium text-white mb-1">Email</h3>
                      <p className="text-neutral-300">
                        <a href="mailto:info@hitechaesthetics.co.uk" className="hover:text-secondary-400 transition-colors">info@hitechaesthetics.co.uk</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock size={24} className="mr-4 text-secondary-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-medium text-white mb-1">Business Hours</h3>
                      <p className="text-neutral-300">Monday - Friday: 9am - 6pm</p>
                      <p className="text-neutral-300">Saturday: 10am - 4pm</p>
                      <p className="text-neutral-300">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Google Maps Embed */}
              <div className="rounded-lg overflow-hidden shadow-lg h-64 bg-neutral-100">
                <div className="w-full h-full flex items-center justify-center text-neutral-500">
                  [GOOGLE MAPS EMBED PLACEHOLDER]
                </div>
              </div>
              
              {/* Booking Calendar */}
              <div className="mt-8 bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl mb-6">Book Online</h2>
                <div className="bg-neutral-100 rounded-lg p-8 flex items-center justify-center h-64">
                  <div className="text-center">
                    <p className="text-neutral-600 mb-4">
                      Book your consultation or treatment directly through our online calendar.
                    </p>
                    <a 
                      href="#" 
                      className="btn btn-primary inline-flex items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Clock size={18} className="mr-2" />
                      Open Booking Calendar
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Emergency Contact */}
      <section className="py-12 bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl mb-4">Emergency Contact</h3>
            <p className="text-neutral-600 mb-4">
              For urgent concerns related to your treatment, please contact our emergency line:
            </p>
            <a 
              href="tel:+441892338157" 
              className="text-xl font-medium text-primary-800 hover:text-primary-600 transition-colors"
            >
              01892 338157
            </a>
            <p className="text-sm text-neutral-500 mt-2">
              Available 24/7 for existing clients only
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;