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
    'bot-field': '', // Honeypot field for spam protection
  });
  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
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
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

    // Don't submit if honeypot is filled (spam protection)
    if (formData['bot-field']) {
      return;
    }

    setIsSubmitting(true);
    setFormStatus(null);

    // Encode form data for Netlify Forms
    const encode = (data: Record<string, string>) => {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&');
    };

    try {
      // Submit to Netlify Forms
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
          ...formData,
        }),
      });

      if (response.ok) {
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
          'bot-field': '',
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Sorry, there was an error submitting your message. Please try again or contact us directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
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
        className="pt-32 pb-20 bg-primary-600 text-white"
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
              
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
              >
                {/* Hidden fields for Netlify Forms */}
                <input type="hidden" name="form-name" value="contact" />

                {/* Honeypot field - hidden from users */}
                <div style={{ display: 'none' }}>
                  <label>
                    Don't fill this out if you're human:
                    <input
                      name="bot-field"
                      value={formData['bot-field']}
                      onChange={handleChange}
                    />
                  </label>
                </div>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-primary-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-primary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="email" className="block text-primary-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-primary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-primary-700 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-primary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="service" className="block text-primary-700 mb-2">
                    Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-primary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">Select a treatment</option>
                    <optgroup label="Hair Removal">
                      <option value="Soprano Ice Platinum">Soprano Ice Platinum Laser</option>
                      <option value="Apilus xCell">Apilus xCell Electrolysis</option>
                    </optgroup>
                    <optgroup label="Skin Rejuvenation">
                      <option value="SkinPen Microneedling">SkinPen Microneedling</option>
                      <option value="Lynton IPL">Lynton IPL Treatments</option>
                      <option value="Lynton RF">Lynton Radio-Frequency</option>
                      <option value="Lynton Laser">Lynton Laser Resurfacing</option>
                      <option value="Dermalux LED">Dermalux LED Light Therapy</option>
                    </optgroup>
                    <optgroup label="Injectable Treatments">
                      <option value="Botox">Botox Anti-wrinkle</option>
                      <option value="Mesotox">Mesotox Skin Refinement</option>
                      <option value="Polynucleotides">Polynucleotides</option>
                      <option value="Skin Boosters">Skin Boosters</option>
                    </optgroup>
                    <optgroup label="Advanced Therapies">
                      <option value="ASCE+ Exosomes">ASCE+ Exosomes</option>
                      <option value="PRP Hair">PRP Hair Restoration</option>
                      <option value="Relaxing Facials">Relaxing Facials</option>
                      <option value="Chemical Peels">Chemical Peels</option>
                      <option value="ZO Skincare">ZO Medical Skincare</option>
                      <option value="Permanent Makeup">Permanent Makeup</option>
                    </optgroup>
                    <option value="Consultation">General Consultation</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-primary-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-primary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn btn-primary w-full flex items-center justify-center ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  <Send size={18} className="mr-2" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                <p className="text-xs text-primary-500 mt-3">
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
              <div className="bg-white text-primary-800 rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin size={24} className="mr-4 text-primary-800 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Our Address</h3>
                      <p className="text-primary-600">114 Camden Road, Tunbridge Wells, TN1 2QX</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone size={24} className="mr-4 text-primary-800 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Phone</h3>
                      <p className="text-primary-600">
                        <a href="tel:+441892338157" className="hover:text-primary-800 underline transition-colors">01892 338157</a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail size={24} className="mr-4 text-primary-800 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Email</h3>
                      <p className="text-primary-600">
                        <a href="mailto:info@hitechaesthetics.com" className="hover:text-primary-800 underline transition-colors">info@hitechaesthetics.com</a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock size={24} className="mr-4 text-primary-800 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Business Hours</h3>
                      <p className="text-primary-600">Monday - Saturday: 9:00am - 5:30pm</p>
                      <p className="text-primary-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Google Maps Embed */}
              <div className="rounded-lg overflow-hidden shadow-lg bg-primary-100 mb-8">
                <div className="w-full" style={{ position: 'relative', paddingBottom: '66.75%', height: 0 }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2503.46573386704!2d0.2669608775332785!3d51.13676213771081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47df45c137d46dc5%3A0x1594bc02bbbe31f8!2sHiTech%20Aesthetics!5e0!3m2!1sen!2suk!4v1749819146783!5m2!1sen!2suk"
                    width="100%"
                    height="100%"
                    style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="HiTech Aesthetics Location"
                  ></iframe>
                </div>
              </div>
              
              {/* Booking Options */}
              <div className="mt-8 bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl mb-6">Book Your Appointment</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-primary-50 rounded-lg p-6">
                    <h3 className="font-semibold text-primary-800 mb-2">Online Booking</h3>
                    <p className="text-primary-600 text-sm mb-4">
                      Book consultations and treatments directly through our secure online system.
                    </p>
                    <a 
                      href="https://www.vagaro.com/hitechaesthetics/book-now" 
                      className="btn btn-primary inline-flex items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Clock size={18} className="mr-2" />
                      Book Online Now
                    </a>
                  </div>
                  
                  <div className="bg-secondary-50 rounded-lg p-6">
                    <h3 className="font-semibold text-secondary-800 mb-2">Phone Booking</h3>
                    <p className="text-secondary-600 text-sm mb-4">
                      Speak directly with our team to schedule your appointment and ask any questions.
                    </p>
                    <a 
                      href="tel:+441892338157" 
                      className="btn btn-secondary inline-flex items-center"
                    >
                      <Phone size={18} className="mr-2" />
                      Call 01892 338157
                    </a>
                  </div>
                </div>
                
                <div className="border-t pt-6">
                  <h4 className="font-medium mb-3">Booking Information:</h4>
                  <ul className="text-sm text-neutral-600 space-y-1">
                    <li>• One Time Free Consultation</li>
                    <li>• 48-hour cancellation policy applies</li>
                    <li>• Please arrive on time for appointments</li>
                    <li>• Patch tests may be required 48 hours before treatment</li>
                  </ul>
                </div>
              </div>
              
              {/* Payment & Finance */}
              <div className="mt-8 bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl mb-6">Payment & Finance</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-neutral-50 rounded-lg p-4">
                    <h3 className="font-medium mb-2">Payment Methods</h3>
                    <ul className="text-sm text-neutral-600 space-y-1">
                      <li>• Cash</li>
                      <li>• Card payments</li>
                      <li>• Bank transfer</li>
                      <li>• Apple Pay / Google Pay</li>
                    </ul>
                  </div>
                  <div className="bg-neutral-50 rounded-lg p-4">
                    <h3 className="font-medium mb-2">Finance Options</h3>
                    <ul className="text-sm text-neutral-600 space-y-1">
                      <li>• 0% finance available</li>
                      <li>• Split payment plan</li>
                      <li>• No credit check needed</li>
                      <li>• Ask about payment plans</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;