import { GraduationCap, Award, BookOpen, CheckCircle, ArrowRight, Lock } from 'lucide-react';

interface CoursesPageProps {
  onNavigate: (page: string) => void;
}

export default function CoursesPage({ onNavigate }: CoursesPageProps) {
  const freeCourses = [
    {
      title: 'Data Privacy Basics',
      duration: '2 hours',
      level: 'Beginner',
      description: 'Learn fundamental privacy principles and why data protection matters.',
    },
    {
      title: 'Intro to Data Analytics',
      duration: '3 hours',
      level: 'Beginner',
      description: 'Get started with data analysis concepts and basic tools.',
    },
    {
      title: 'Understanding Data Governance',
      duration: '2.5 hours',
      level: 'Beginner',
      description: 'Explore governance frameworks and their role in organizational success.',
    },
  ];

  const certifications = [
    {
      title: 'Certified Data Privacy Specialist (CDPS)',
      duration: '8 weeks',
      price: '$799',
      description: 'Comprehensive certification covering GDPR, CCPA, HIPAA, and privacy program management.',
      features: [
        'Live instructor-led sessions',
        'Hands-on case studies',
        'Industry-recognized certification',
        'Career support and networking',
      ],
    },
    {
      title: 'Certified Analytics Professional (CAP)',
      duration: '10 weeks',
      price: '$899',
      description: 'Master data analytics tools including SQL, Power BI, and Tableau with real-world projects.',
      features: [
        'Project-based learning',
        'Access to analytics tools',
        'Portfolio development',
        'Job placement assistance',
      ],
    },
    {
      title: 'Certified Governance & Compliance Analyst (CGCA)',
      duration: '6 weeks',
      price: '$699',
      description: 'Become proficient in data governance, audit practices, and compliance frameworks.',
      features: [
        'Framework templates included',
        'Audit methodology training',
        'Compliance toolkit',
        'Ongoing resource access',
      ],
    },
  ];

  return (
    <div className="pt-24">
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-purple-100">
        <div className="max-w-7xl mx-auto text-center">
          <GraduationCap className="w-20 h-20 text-purple-600 mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Learn with P-Data</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We offer online learning paths that make data privacy and analytics accessible for everyone — from beginners to professionals.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Free Courses</h2>
            <p className="text-lg text-gray-600">Start your learning journey at no cost</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {freeCourses.map((course, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200 overflow-hidden">
                <div className="bg-green-500 text-white px-4 py-2 text-sm font-semibold">
                  FREE
                </div>
                <div className="p-6">
                  <BookOpen className="w-10 h-10 text-green-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <span className="flex items-center">
                      <Award className="w-4 h-4 mr-1" />
                      {course.level}
                    </span>
                    <span>{course.duration}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{course.description}</p>
                  <button className="w-full px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium">
                    Start Free Course
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Certifications</h2>
            <p className="text-lg text-gray-600">Advance your career with industry-recognized credentials</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border-2 border-blue-200 overflow-hidden">
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-6">
                  <Award className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{cert.title}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold">{cert.price}</span>
                    <span className="text-blue-100">{cert.duration}</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">{cert.description}</p>
                  <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                  <ul className="space-y-2 mb-6">
                    {cert.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium inline-flex items-center justify-center">
                    Enroll Now
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Career Resources</h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Access our comprehensive career development toolkit designed specifically for privacy and analytics professionals.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Career pathway guides
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Resume templates and review
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Interview preparation tips
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Skill development checklists
                  </li>
                </ul>
                <button
                  onClick={() => onNavigate('resources')}
                  className="px-8 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-50 transition-colors font-medium inline-flex items-center"
                >
                  View Career Resources
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <Lock className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-center mb-2">Exclusive Content</h3>
                <p className="text-gray-300 text-center">
                  Premium resources available to enrolled students
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
