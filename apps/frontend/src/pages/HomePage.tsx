import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Lock, BarChart3, CreditCard, Globe, Code } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';



export function HomePage() {


  const features = [
    {
      icon: CreditCard,
      title: 'Payment Processing',
      description: 'Integrated payment gateway supporting multiple payment methods and currencies.',
    },
    {
      icon: BarChart3,
      title: 'CRM System',
      description: 'Manage your customers, leads, and sales pipeline all in one place.',
    },
    {
      icon: Globe,
      title: 'Domain Management',
      description: 'Register and manage your domain names directly from our platform.',
    },
    {
      icon: Code,
      title: 'Web Hosting',
      description: 'Reliable, fast, and scalable hosting infrastructure for your applications.',
    },
    {
      icon: Zap,
      title: 'Website Builder',
      description: 'Create professional websites without coding. Drag, drop, and deploy instantly.',
    },
    {
      icon: Lock,
      title: 'Security Best Practices',
      description: 'Enterprise-grade security with SSL, backups, and compliance certifications.',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full">
            <span className="text-purple-600 dark:text-purple-400 font-medium text-sm">
              ✨ Business in a bottle
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            All Your Business Tools,
            <span className="text-purple-600"> One Platform</span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
            OpenLaunchWorks brings together CRM, payments, domain management, hosting, and website building. Stop juggling multiple tools and start growing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/pricing"
              className="btn-primary inline-flex items-center justify-center"
            >
              Get Started <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <button className="btn-secondary">
              Watch Demo
            </button>
          </div>

          {/* Placeholder for hero image */}
          <div className="bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-xl h-96 flex items-center justify-center">
            <span className="text-gray-400 dark:text-gray-600">Dashboard Preview</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              We've bundled the essential tools every small business needs to grow online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow"
                >
                  <Icon className="w-12 h-12 text-purple-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-12 md:p-16 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to unify your business tools?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of small businesses growing with OpenLaunchWorks.
          </p>
          <Link
            to="/pricing"
            className="inline-block px-8 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-all"
          >
            Start Free Trial
          </Link>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />
    </div>
  );
}
