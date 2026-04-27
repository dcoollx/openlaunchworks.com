import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  { question: "What is a CRM? and why should i have one",
    answer: "a CRM or Customer Relationship Manager, is software designed to organize your company's releationship with its cusomters, clients and venders. We at Openlaunchworks have partnered with Zoho CRM to provide you with a free and highly cutomized CRM"
  },
  {
    question: 'What is OpenLaunchWorks?',
    answer:
      'OpenLaunchWorks is an all-in-one platform designed for small businesses as startups. It combines CRM, payment processing, domain management, web hosting, and a custom made website, opinionated tech stack. Take The guesswork out of small business technology so you can focus on growing your business',
  },
  {
    question: 'How does pricing work?',
    answer:
      'We offer flexible pricing plans starting at $29/month for a custom website. Our $59 plan includes a custom made WebApp, including intregration with a CRM, Payment gatewaye and more. While we offer subscription based plans that include free consultations and customization, we also offer an upfront price',
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer:
      'Yes! You can cancel your subscription at any time, but please note that refunds are only available within 30 days of purchase. You will retain access to your CRM and all the data contained within, but your website and servers will be taken offline',
  },
  {
    question: 'Is there a free trial available?',
    answer:
      'Absolutely! We offer a 14-day free trial with full access to all features. No credit card required to get started. This gives you plenty of time to explore everything OpenLaunchWorks can do.',
  },
  {
    question: 'Do you provide customer support?',
    answer:
      'Yes, we offer 24/7 customer support through email, chat, and phone. For Subscription based customers this will include consultations and free upgrades to your customized webapp',
  },
  {
    question: 'How secure is my data?',
    answer:
      'Data security is our top priority. We use enterprise-grade encryption, regular security audits, automated backups, and comply with GDPR and other international data protection regulations.',
  },
  {
    question: 'Can I integrate OpenLaunchWorks with other tools?',
    answer:
      'Yes! We have integrations with popular tools like Zapier, Slack, Google Workspace, and many others. Custom API integrations are also available for subscription customers.',
  },
  {
    question: 'What happens to my data if I leave?',
    answer:
      'Your data is yours. You can export all your data in standard formats (CSV, JSON) anytime. We make it easy for you to move your data to another platform if you decide to leave.',
  },
  {
    question: 'Do you offer domain registration?',
    answer:
      'Yes! You can register new domains directly through OpenLaunchWorks, or connect existing domains. We handle renewals and DNS management for you.',
  },
  {
    question: 'What is included in the hosting?',
    answer:
      'Our hosting includes unlimited bandwidth, automatic SSL certificates, 99.9% uptime guarantee, automatic backups, and CDN acceleration. Your websites will be fast and secure.',
  },
];

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition"
          >
            <span className="font-semibold text-gray-900 dark:text-white text-left">
              {faq.question}
            </span>
            <ChevronDown
              className={`w-5 h-5 text-purple-600 transition-transform flex-shrink-0 ${
                openIndex === index ? 'transform rotate-180' : ''
              }`}
            />
          </button>

          {openIndex === index && (
            <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600">
              <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export function FAQPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50 to-white dark:from-purple-900/20 dark:to-gray-950">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Find answers to common questions about OpenLaunchWorks and how we can help your business.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <FAQAccordion />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Still have questions?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Our support team is here to help. Contact us anytime!
          </p>
          <button className="btn-primary">
            Contact Support
          </button>
        </div>
      </section>
    </div>
  );
}
