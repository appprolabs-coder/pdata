

import { Shield, BarChart, GraduationCap, FileCheck, CheckCircle, ArrowRight, Star } from 'lucide-react';
import React from 'react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen">
      
      {/* ----------------- Hero Section ----------------- */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Hero Text and CTAs */}
            <div>
              <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-6 md:text-6xl">
                Your Privacy, Our Priority
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Empowering organizations to build **trust**, ensure **compliance**, and unlock the true value of their data.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition-colors font-semibold transform hover:scale-[1.02]"
                >
                  Book a Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button
                  onClick={() => onNavigate('services')}
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:border-blue-600 hover:text-blue-600 transition-colors font-medium bg-white"
                >
                  Explore Our Services
                </button>
              </div>
            </div>
            
            {/* Hero Visual */}
            <div className="relative hidden md:block">
              <div className="bg-gradient-to-br from-blue-50 to-blue-200 rounded-3xl p-16 shadow-2xl transform rotate-1">
                <Shield className="w-full h-full text-blue-600 opacity-30" style={{ maxHeight: '300px' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- Mission Section ----------------- */}
      <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At P-Data, we help small to mid-sized businesses protect their customers' trust, meet data protection requirements, and use analytics to make smarter business decisions.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mt-4">
              We bridge the gap between **privacy**, **compliance**, and **data-driven growth** — so you can focus on running your business with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* ----------------- Core Services Section ----------------- */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Card 1: Privacy Consulting */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Data Privacy Consulting</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Navigate GDPR, CCPA, and other privacy laws with tailored frameworks designed to protect your customers and your business.
              </p>
            </div>
            
            {/* Card 2: Analytics & Insights */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                <BarChart className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Data Analytics & Insights</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Turn raw data into business intelligence. Make strategic decisions backed by real-time insights while maintaining full compliance.
              </p>
            </div>
            
            {/* Card 3: Training & Certification */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                <GraduationCap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Training & Certification</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Empower your team with practical, hands-on training in privacy, governance, and analytics — from foundational to advanced certifications.
              </p>
            </div>
            
            {/* Card 4: Audit & Governance */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                <FileCheck className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Audit & Governance</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Assess your current data landscape, identify compliance gaps, and strengthen your governance with actionable audit recommendations.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-colors font-medium transform hover:scale-[1.02]"
            >
              Learn More About Our Services
            </button>
          </div>
        </div>
      </section>

      {/* ----------------- Testimonials Section ----------------- */}
      <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-600">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-4 italic text-lg">
                "P-Data helped us translate privacy compliance into a competitive advantage. Their expertise saved us time, money, and potential risk."
              </p>
              <div className="text-sm">
                <div className="font-semibold text-gray-900">Director</div>
                <div className="text-gray-600">FinTech Startup</div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-600">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-4 italic text-lg">
                "Their analytics and governance framework made our data processes transparent and efficient. A crucial partner for scaling our business."
              </p>
              <div className="text-sm">
                <div className="font-semibold text-gray-900">COO</div>
                <div className="text-gray-600">Healthcare Client</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- CTA Footer Bar ----------------- */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-white mb-6">
            Ready to strengthen your privacy and analytics strategy?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's start with a free consultation today.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center justify-center px-10 py-4 bg-white text-blue-700 rounded-xl hover:bg-gray-50 transition-colors font-extrabold text-lg shadow-xl transform hover:scale-105"
          >
            Schedule Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>

    </div>
  );
}
