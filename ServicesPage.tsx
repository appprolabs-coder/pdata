import { Shield, BarChart, GraduationCap, FileCheck, ArrowRight } from 'lucide-react';
import React from 'react';

// Define the component's props interface
interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

/**
 * A detailed services page component that showcases different service offerings
 * in a clear, two-column layout. Each service has a dedicated icon, description,
 * list of offerings, and a call-to-action.
 *
 * @param {ServicesPageProps} props - The component props, including a navigation handler.
 * @returns {JSX.Element} The rendered services page.
 */
export default function ServicesPage({ onNavigate }: ServicesPageProps) {
  const services = [
    {
      title: 'Data Privacy Consulting',
      description: 'We simplify complex privacy regulations and help you create a strong compliance foundation.',
      icon: Shield,
      color: 'blue',
      offerings: [
        'GDPR, CCPA, HIPAA, and global compliance support',
        'Privacy governance framework design',
        'Data mapping and inventory',
        'Privacy Impact Assessments (PIAs)',
        'Third-party risk management',
        'Breach response & readiness programs',
      ],
      outcome: 'A compliant, accountable, and trusted organization that puts privacy at its core.',
      cta: 'Get Privacy Help',
      navTarget: 'contact',
    },
    {
      title: 'Data Analytics & Insights',
      description: 'We help you use your data ethically and effectively — turning insights into impact.',
      icon: BarChart,
      color: 'green',
      offerings: [
        'Business intelligence dashboards',
        'Data visualization and performance metrics',
        'Predictive and trend analytics',
        'Data quality management',
        'Integration of analytics with privacy controls',
      ],
      outcome: 'Better decisions powered by transparent, high-quality data.',
      cta: 'Discover Analytics Solutions',
      navTarget: 'contact',
    },
    {
      title: 'Training & Certification',
      description: 'Empower your workforce to manage privacy and analytics confidently.',
      icon: GraduationCap,
      color: 'purple',
      offerings: [
        'Privacy fundamentals for employees',
        'Advanced certifications for professionals',
        'Hands-on analytics tool training (SQL, Power BI, Tableau)',
        'Executive briefings for leadership teams',
      ],
      outcome: 'Skilled, privacy-aware professionals who can operationalize compliance and insight.',
      cta: 'Explore Training Options',
      navTarget: 'courses',
    },
    {
      title: 'Audit & Governance',
      description: 'We assess your current state and build a roadmap for continuous improvement.',
      icon: FileCheck,
      color: 'orange',
      offerings: [
        'End-to-end data privacy and governance audits',
        'Compliance maturity assessments',
        'Risk identification and remediation',
        'Ongoing governance monitoring',
      ],
      outcome: 'A resilient data management ecosystem that keeps pace with regulations and innovation.',
      cta: 'Book an Audit',
      navTarget: 'contact',
    },
  ];

  const getColorClasses = (color: string) => ({
    iconText: `text-${color}-600`,
    iconBg: `bg-${color}-100`,
    bullet: `text-${color}-600`,
    outcomeBg: `bg-${color}-50`,
    outcomeTitle: `text-${color}-900`,
    outcomeText: `text-${color}-800`,
    buttonBg: `bg-${color}-600`,
    buttonHoverBg: `hover:bg-${color}-700`,
    gradientFrom: `from-${color}-600`,
    gradientTo: `to-${color}-800`,
  });

  return (
    <div className="pt-24 bg-white">
      {/* Hero Section */}
      <header className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our services are designed to help you stay compliant, confident, and competitive in a data-driven world.
          </p>
        </div>
      </header>

      {/* Services Section */}
      <main className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              const classes = getColorClasses(service.color);
              const isReversed = index % 2 !== 0;

              return (
                <div key={service.title} className="grid md:grid-cols-2 gap-12 items-center">
                  {/* Text Content */}
                  <div className={isReversed ? 'md:order-2' : 'md:order-1'}>
                    <div className={`w-16 h-16 ${classes.iconBg} rounded-lg flex items-center justify-center mb-6`}>
                      <Icon className={`w-8 h-8 ${classes.iconText}`} />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    <h3 className="font-semibold text-gray-900 mb-3">Offerings:</h3>
                    <ul className="space-y-2 text-gray-600 mb-6">
                      {service.offerings.map((offering) => (
                        <li key={offering} className="flex items-start">
                          <span className={`${classes.bullet} mr-2 font-bold`}>•</span>
                          {offering}
                        </li>
                      ))}
                    </ul>
                    <div className={`${classes.outcomeBg} p-4 rounded-lg mb-6`}>
                      <p className={`font-semibold ${classes.outcomeTitle}`}>Outcome:</p>
                      <p className={classes.outcomeText}>{service.outcome}</p>
                    </div>
                    <button
                      onClick={() => onNavigate(service.navTarget)}
                      className={`inline-flex items-center justify-center px-6 py-3 ${classes.buttonBg} text-white rounded-lg ${classes.buttonHoverBg} transition-colors font-medium`}
                    >
                      {service.cta}
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </button>
                  </div>
                  {/* Image/Icon Block */}
                  <div className={`bg-gradient-to-br ${classes.gradientFrom} ${classes.gradientTo} rounded-2xl p-12 flex items-center justify-center h-full ${isReversed ? 'md:order-1' : 'md:order-2'}`}>
                    <Icon className="w-48 h-48 sm:w-64 sm:h-64 text-white opacity-20" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

       {/* Hidden div to ensure Tailwind's JIT compiler includes dynamic classes */}
       <div className="hidden">
        <span className="text-blue-600 bg-blue-100 bg-blue-50 text-blue-900 text-blue-800 bg-blue-600 hover:bg-blue-700 from-blue-600 to-blue-800"></span>
        <span className="text-green-600 bg-green-100 bg-green-50 text-green-900 text-green-800 bg-green-600 hover:bg-green-700 from-green-600 to-green-800"></span>
        <span className="text-purple-600 bg-purple-100 bg-purple-50 text-purple-900 text-purple-800 bg-purple-600 hover:bg-purple-700 from-purple-600 to-purple-800"></span>
        <span className="text-orange-600 bg-orange-100 bg-orange-50 text-orange-900 text-orange-800 bg-orange-600 hover:bg-orange-700 from-orange-600 to-orange-800"></span>
      </div>
    </div>
  );
}
