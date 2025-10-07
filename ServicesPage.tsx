import { Shield, BarChart, GraduationCap, FileCheck, ArrowRight } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export default function ServicesPage({ onNavigate }: ServicesPageProps) {
  return (
    <div className="pt-24">
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our services are designed to help you stay compliant, confident, and competitive in a data-driven world.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Data Privacy Consulting</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  We simplify complex privacy regulations and help you create a strong compliance foundation.
                </p>
                <h3 className="font-semibold text-gray-900 mb-3">Offerings:</h3>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    GDPR, CCPA, HIPAA, and global compliance support
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Privacy governance framework design
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Data mapping and inventory
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Privacy Impact Assessments (PIAs)
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Third-party risk management
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Breach response & readiness programs
                  </li>
                </ul>
                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <p className="font-semibold text-blue-900">Outcome:</p>
                  <p className="text-blue-800">A compliant, accountable, and trusted organization that puts privacy at its core.</p>
                </div>
                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Get Privacy Help
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-12 flex items-center justify-center">
                <Shield className="w-64 h-64 text-white opacity-20" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 bg-gradient-to-br from-green-600 to-green-800 rounded-2xl p-12 flex items-center justify-center">
                <BarChart className="w-64 h-64 text-white opacity-20" />
              </div>
              <div className="order-1 md:order-2">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <BarChart className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Data Analytics & Insights</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  We help you use your data ethically and effectively — turning insights into impact.
                </p>
                <h3 className="font-semibold text-gray-900 mb-3">Offerings:</h3>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    Business intelligence dashboards
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    Data visualization and performance metrics
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    Predictive and trend analytics
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    Data quality management
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    Integration of analytics with privacy controls
                  </li>
                </ul>
                <div className="bg-green-50 p-4 rounded-lg mb-6">
                  <p className="font-semibold text-green-900">Outcome:</p>
                  <p className="text-green-800">Better decisions powered by transparent, high-quality data.</p>
                </div>
                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
                >
                  Discover Analytics Solutions
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <GraduationCap className="w-8 h-8 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Training & Certification</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Empower your workforce to manage privacy and analytics confidently.
                </p>
                <h3 className="font-semibold text-gray-900 mb-3">Programs Include:</h3>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    Privacy fundamentals for employees
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    Advanced certifications for professionals
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    Hands-on analytics tool training (SQL, Power BI, Tableau)
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    Executive briefings for leadership teams
                  </li>
                </ul>
                <div className="bg-purple-50 p-4 rounded-lg mb-6">
                  <p className="font-semibold text-purple-900">Outcome:</p>
                  <p className="text-purple-800">Skilled, privacy-aware professionals who can operationalize compliance and insight.</p>
                </div>
                <button
                  onClick={() => onNavigate('courses')}
                  className="inline-flex items-center justify-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
                >
                  Explore Training Options
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
              <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-12 flex items-center justify-center">
                <GraduationCap className="w-64 h-64 text-white opacity-20" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 bg-gradient-to-br from-orange-600 to-orange-800 rounded-2xl p-12 flex items-center justify-center">
                <FileCheck className="w-64 h-64 text-white opacity-20" />
              </div>
              <div className="order-1 md:order-2">
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                  <FileCheck className="w-8 h-8 text-orange-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Audit & Governance</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  We assess your current state and build a roadmap for continuous improvement.
                </p>
                <h3 className="font-semibold text-gray-900 mb-3">Services Include:</h3>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    End-to-end data privacy and governance audits
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    Compliance maturity assessments
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    Risk identification and remediation
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    Ongoing governance monitoring
                  </li>
                </ul>
                <div className="bg-orange-50 p-4 rounded-lg mb-6">
                  <p className="font-semibold text-orange-900">Outcome:</p>
                  <p className="text-orange-800">A resilient data management ecosystem that keeps pace with regulations and innovation.</p>
                </div>
                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center justify-center px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-medium"
                >
                  Book an Audit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
