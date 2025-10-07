import { CheckCircle, Target, Users, Award } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div className="pt-24">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Who We Are</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              P-Data is a consulting firm that helps organizations build data privacy, analytics, and governance programs that scale. We combine legal, technical, and strategic perspectives to ensure your data is protected, compliant, and delivering value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-12 text-white">
              <Target className="w-16 h-16 mb-6 text-blue-200" />
              <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-blue-100 leading-relaxed">
                To empower small to mid-sized businesses with the tools, knowledge, and frameworks they need to protect customer trust, ensure regulatory compliance, and harness data as a strategic asset.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl p-12 text-white">
              <Award className="w-16 h-16 mb-6 text-gray-300" />
              <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                A world where every organization, regardless of size, can navigate data privacy and analytics with confidence, turning compliance into competitive advantage.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Approach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology that delivers measurable results
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Understand</h3>
              <p className="text-gray-600 leading-relaxed">
                We learn your operations, data flows, and challenges.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Design</h3>
              <p className="text-gray-600 leading-relaxed">
                We create frameworks and policies that align with your goals and regulations.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Implement</h3>
              <p className="text-gray-600 leading-relaxed">
                We deploy tools, processes, and training across teams.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sustain</h3>
              <p className="text-gray-600 leading-relaxed">
                We monitor, audit, and continuously improve your data maturity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Difference</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 text-lg">Hands-on, practical consulting</h4>
                <p className="text-gray-600">Not just theoretical advice — we roll up our sleeves and work alongside your team.</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 text-lg">Integrated focus on privacy + analytics</h4>
                <p className="text-gray-600">Ensuring both protection and performance work together seamlessly.</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 text-lg">Scalable support</h4>
                <p className="text-gray-600">From startups to established enterprises, we adapt to your needs.</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 text-lg">Transparent communication</h4>
                <p className="text-gray-600">Clear reporting and measurable results you can track.</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-12 space-x-4">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Book a Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
