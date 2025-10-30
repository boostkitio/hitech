import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FileText, 
  Download, 
  Calendar, 
  Shield, 
  Heart, 
  Info,
  Phone,
  AlertCircle
} from 'lucide-react';

interface Resource {
  id: string;
  title: string;
  description: string;
  category: string;
  downloadUrl?: string;
  icon: React.ElementType;
}

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

const resources: Resource[] = [
  {
    id: '1',
    title: 'New Patient Registration Form',
    description: 'Complete this form before your first visit to save time',
    category: 'Forms',
    downloadUrl: '/forms/new-patient-registration.pdf',
    icon: FileText
  },
  {
    id: '2',
    title: 'Medical History Questionnaire',
    description: 'Important medical information for your practitioner',
    category: 'Forms',
    downloadUrl: '/forms/medical-history.pdf',
    icon: Heart
  },
  {
    id: '3',
    title: 'Consent Forms',
    description: 'Treatment consent and photography release forms',
    category: 'Forms',
    downloadUrl: '/forms/consent-forms.pdf',
    icon: Shield
  },
  {
    id: '4',
    title: 'Pre-Treatment Guidelines',
    description: 'General preparation instructions for all treatments',
    category: 'Pre-Treatment',
    downloadUrl: '/guides/pre-treatment-general.pdf',
    icon: Info
  },
  {
    id: '5',
    title: 'Laser Treatment Preparation',
    description: 'Specific guidelines for laser treatments',
    category: 'Pre-Treatment',
    downloadUrl: '/guides/pre-laser.pdf',
    icon: AlertCircle
  },
  {
    id: '6',
    title: 'Injectable Treatment Preparation',
    description: 'What to do before Botox and filler treatments',
    category: 'Pre-Treatment',
    downloadUrl: '/guides/pre-injectables.pdf',
    icon: Info
  },
  {
    id: '7',
    title: 'Post-Treatment Care Guide',
    description: 'General aftercare instructions',
    category: 'Post-Care',
    downloadUrl: '/guides/post-treatment-general.pdf',
    icon: Heart
  },
  {
    id: '8',
    title: 'Laser Aftercare',
    description: 'Post-laser treatment care instructions',
    category: 'Post-Care',
    downloadUrl: '/guides/post-laser.pdf',
    icon: Shield
  },
  {
    id: '9',
    title: 'Injectable Aftercare',
    description: 'Post-injection care and what to expect',
    category: 'Post-Care',
    downloadUrl: '/guides/post-injectables.pdf',
    icon: Info
  }
];

const faqs: FAQ[] = [
  // General FAQs
  {
    question: 'How do I book an appointment?',
    answer: 'You can book an appointment by calling us at 01234 567890, using our online booking system, or visiting us in person. We recommend booking at least 2 weeks in advance for popular treatments.',
    category: 'General'
  },
  {
    question: 'What should I expect during my first consultation?',
    answer: 'Your first consultation includes a comprehensive skin analysis, discussion of your aesthetic goals, medical history review, and personalised treatment recommendations. This typically takes 45-60 minutes.',
    category: 'General'
  },
  {
    question: 'Do you offer payment plans?',
    answer: 'Yes, we offer flexible payment plans through our financing partners. You can spread the cost of treatments over 3-12 months with 0% interest options available.',
    category: 'General'
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'We require at least 48 hours notice for cancellations. Late cancellations or no-shows may incur a fee. For surgical procedures, 7 days notice is required.',
    category: 'General'
  },
  // Treatment FAQs
  {
    question: 'How do I know which treatment is right for me?',
    answer: 'During your consultation, our expert practitioners will assess your skin, discuss your goals, and recommend the most suitable treatments. We create personalised treatment plans for each patient.',
    category: 'Treatments'
  },
  {
    question: 'Are the treatments painful?',
    answer: 'Comfort levels vary by treatment. We use topical numbing cream, cooling devices, and gentle techniques to minimize discomfort. Most patients find treatments very tolerable.',
    category: 'Treatments'
  },
  {
    question: 'How long do results last?',
    answer: 'Results duration varies by treatment: Botox lasts 3-4 months, dermal fillers 6-18 months, and permanent treatments like Soprano laser hair removal provide long-lasting results with maintenance.',
    category: 'Treatments'
  },
  {
    question: 'Can I combine different treatments?',
    answer: 'Yes, many treatments complement each other well. We often create combination treatment plans for optimal results. Your practitioner will advise on the best approach.',
    category: 'Treatments'
  },
  // Safety FAQs
  {
    question: 'Are your treatments safe?',
    answer: 'All our treatments are FDA-approved and performed by qualified medical professionals. We maintain the highest safety standards and use only premium, authentic products.',
    category: 'Safety'
  },
  {
    question: 'What are the potential side effects?',
    answer: 'Side effects vary by treatment but are typically mild and temporary, such as redness, swelling, or bruising. We provide detailed information about potential side effects during your consultation.',
    category: 'Safety'
  },
  {
    question: 'Am I suitable for treatment if I have a medical condition?',
    answer: 'We conduct thorough medical assessments before any treatment. Some conditions may affect suitability. Please disclose all medical conditions during your consultation.',
    category: 'Safety'
  },
  {
    question: 'What if I have an allergic reaction?',
    answer: 'Allergic reactions are rare. We perform patch tests when necessary and have emergency protocols in place. Our staff are trained to handle any adverse reactions.',
    category: 'Safety'
  }
];

const ResourcesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Forms');
  const [activeFaqCategory, setActiveFaqCategory] = useState('General');
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = ['Forms', 'Pre-Treatment', 'Post-Care'];
  const faqCategories = ['General', 'Treatments', 'Safety'];

  return (
    <>
      <Helmet>
        <title>Patient Resources | HiTech Aesthetics</title>
        <meta 
          name="description" 
          content="Access patient forms, pre and post-treatment instructions, FAQs, and helpful resources for your aesthetic treatments at HiTech Aesthetics."
        />
      </Helmet>

      {/* Header Section */}
      <section ref={headerRef} className="pt-32 pb-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-white mb-6">Patient Resources</h1>
            <p className="text-xl text-neutral-100">
              Everything you need to prepare for your visit and care for your skin after treatment
            </p>
          </motion.div>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Downloadable Resources</h2>
            
            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-colors ${
                    activeTab === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Resources Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources
                .filter(resource => resource.category === activeTab)
                .map((resource, index) => (
                  <motion.div
                    key={resource.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-neutral-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
                  >
                    <resource.icon className="w-12 h-12 text-primary-600 mb-4" />
                    <h3 className="font-semibold text-lg mb-2">{resource.title}</h3>
                    <p className="text-neutral-600 text-sm mb-4">{resource.description}</p>
                    {resource.downloadUrl && (
                      <a
                        href={resource.downloadUrl}
                        download
                        className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </a>
                    )}
                  </motion.div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Instructions */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Treatment Instructions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Pre-Treatment */}
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <div className="flex items-center mb-6">
                  <Calendar className="w-8 h-8 text-primary-600 mr-3" />
                  <h3 className="text-2xl font-semibold">Before Your Treatment</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span className="text-neutral-700">Avoid sun exposure for 2 weeks prior</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span className="text-neutral-700">Discontinue retinoids 3-5 days before</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span className="text-neutral-700">Stay hydrated and get adequate rest</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span className="text-neutral-700">Arrive with clean skin, no makeup</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span className="text-neutral-700">Inform us of any medications or changes in health</span>
                  </li>
                </ul>
              </div>

              {/* Post-Treatment */}
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <div className="flex items-center mb-6">
                  <Heart className="w-8 h-8 text-primary-600 mr-3" />
                  <h3 className="text-2xl font-semibold">After Your Treatment</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span className="text-neutral-700">Follow specific aftercare instructions provided</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span className="text-neutral-700">Use recommended SPF daily</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span className="text-neutral-700">Avoid harsh products and exfoliants</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span className="text-neutral-700">Stay hydrated and maintain gentle skincare</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span className="text-neutral-700">Contact us with any concerns</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            
            {/* FAQ Category Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {faqCategories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveFaqCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-colors ${
                    activeFaqCategory === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {faqs
                .filter(faq => faq.category === activeFaqCategory)
                .map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-neutral-50 rounded-lg p-6"
                  >
                    <h3 className="font-semibold text-lg mb-2 text-neutral-900">
                      {faq.question}
                    </h3>
                    <p className="text-neutral-600">{faq.answer}</p>
                  </motion.div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-12 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Phone className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Need Immediate Assistance?</h3>
            <p className="mb-6">
              For urgent concerns outside of office hours, please contact our emergency line.
            </p>
            <div className="space-y-2">
              <p className="text-lg">
                <strong>Office Hours:</strong> 01234 567890
              </p>
              <p className="text-lg">
                <strong>Emergency Line:</strong> 07123 456789
              </p>
              <p className="text-sm text-primary-100 mt-4">
                Available 24/7 for post-treatment emergencies
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResourcesPage;