import { Check } from 'lucide-react';

interface PricingPlanProps {
  name: string;
  price: number;
  description: string;
  features: string[];
  highlighted?: boolean;
  ctaText: string;
}

function PricingPlan({
  name,
  price,
  description,
  features,
  highlighted = false,
  ctaText,
}: PricingPlanProps) {
  return (
    <div
      className={`rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 ${
        highlighted
          ? 'ring-2 ring-purple-600 dark:ring-purple-400 bg-work dark:bg-gray-800 lg:scale-105'
          : 'bg-white dark:bg-gray-800'
      }`}
    >
      <div className="px-8 py-12">
        {highlighted && (
          <div className="mb-4 inline-block px-3 py-1 bg-purple-600 text-white text-sm font-semibold rounded-full">
            Most Popular
          </div>
        )}

        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {name}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">{description}</p>

        <div className="mb-6">
          <span className="text-5xl font-bold text-gray-900 dark:text-white">
            ${price}
          </span>
          <span className="text-gray-600 dark:text-gray-400">/month</span>
        </div>

        <button
          className={
            highlighted
              ? 'w-full btn-primary mb-8'
              : 'w-full btn-secondary mb-8'
          }
        >
          {ctaText}
        </button>

        <div className="space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-3">
              <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700 dark:text-gray-300">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function PricingPage() {
  const plans = [
    {
      name: 'Starter',
      price: 29,
      description: 'Perfect for freelancers and new businesses',
      features: [
        '1 domain',
        'Basic CRM for 100 contacts',
        'Payment processing',
        'Website builder with 10 pages',
        '5 GB storage',
        'Community support',
        'Monthly backups',
      ],
      ctaText: 'Start Free Trial',
    },
    {
      name: 'Professional',
      price: 79,
      description: 'Best for growing small businesses',
      features: [
        '5 domains',
        'CRM for 5,000 contacts',
        'Advanced payment processing',
        'Website builder with unlimited pages',
        '100 GB storage',
        'Email support',
        'Daily backups',
        'API access',
        'Team collaboration tools',
        'Email campaigns (500/month)',
      ],
      highlighted: true,
      ctaText: 'Get Started',
    },
    {
      name: 'Enterprise',
      price: 199,
      description: 'For established businesses ready to scale',
      features: [
        'Unlimited domains',
        'Unlimited CRM contacts',
        'Premium payment processing',
        'Advanced website builder',
        '1 TB storage',
        '24/7 phone support',
        'Real-time backups',
        'Advanced API access',
        'Dedicated account manager',
        'Unlimited email campaigns',
        'Custom integrations',
        'Advanced analytics',
        'White-label options',
      ],
      ctaText: 'Contact Sales',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50 to-white dark:from-purple-900/20 dark:to-gray-950">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Choose the plan that fits your business. All plans include a 14-day free trial.
          </p>

          <div className="flex items-center justify-center space-x-4 bg-gray-100 dark:bg-gray-800 rounded-lg p-4 w-fit mx-auto">
            <span className="text-gray-700 dark:text-gray-300">Billed Monthly</span>
            <button className="relative inline-flex h-8 w-14 items-center rounded-full bg-purple-600 cursor-pointer">
              <span className="inline-block h-6 w-6 transform rounded-full bg-white transition" />
            </button>
            <span className="text-gray-700 dark:text-gray-300">Billed Annually (Save 20%)</span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, index) => (
            <PricingPlan
              key={index}
              name={plan.name}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              highlighted={plan.highlighted}
              ctaText={plan.ctaText}
            />
          ))}
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Compare All Features
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-4 px-6 font-semibold text-gray-900 dark:text-white">
                    Feature
                  </th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-900 dark:text-white">
                    Starter
                  </th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-900 dark:text-white">
                    Professional
                  </th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-900 dark:text-white">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'CRM System', starter: true, pro: true, enterprise: true },
                  { name: 'Payment Processing', starter: true, pro: true, enterprise: true },
                  { name: 'Domain Management', starter: true, pro: true, enterprise: true },
                  { name: 'Web Hosting', starter: true, pro: true, enterprise: true },
                  { name: 'Website Builder', starter: true, pro: true, enterprise: true },
                  { name: 'Team Members', starter: false, pro: true, enterprise: true },
                  { name: 'API Access', starter: false, pro: true, enterprise: true },
                  { name: 'Custom Integrations', starter: false, pro: false, enterprise: true },
                  { name: 'Priority Support', starter: false, pro: true, enterprise: true },
                  { name: 'Dedicated Manager', starter: false, pro: false, enterprise: true },
                ].map((feature, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                  >
                    <td className="py-4 px-6 font-medium text-gray-900 dark:text-white">
                      {feature.name}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {feature.starter ? (
                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <span className="text-gray-400">—</span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {feature.pro ? (
                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <span className="text-gray-400">—</span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {feature.enterprise ? (
                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <span className="text-gray-400">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Pricing Questions?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                q: "Can I change plans anytime?",
                a: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.",
              },
              {
                q: "Do you offer refunds?",
                a: "We offer a 30-day money-back guarantee. If you're not satisfied, we'll refund your subscription.",
              },
              {
                q: "Is there a discount for annual billing?",
                a: "Absolutely! Annual billing saves you 20% compared to monthly billing.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards, PayPal, and bank transfers for enterprise customers.",
              },
            ].map((item, index) => (
              <div key={index}>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {item.q}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Start your 14-day free trial today. No credit card required.
          </p>
          <button className="px-8 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-all">
            Start Free Trial
          </button>
        </div>
      </section>
    </div>
  );
}
