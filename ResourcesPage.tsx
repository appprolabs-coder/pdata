import { BookOpen, FileText, TrendingUp, Briefcase, ArrowRight } from 'lucide-react';

interface ResourcesPageProps {
  onNavigate: (page: string) => void;
}

export default function ResourcesPage({ onNavigate }: ResourcesPageProps) {
  const blogPosts = [
    {
      title: 'How to Comply with the New State Privacy Laws in 2025',
      category: 'Privacy Laws & Updates',
      excerpt: 'A comprehensive guide to navigating the evolving landscape of state-level privacy regulations.',
      icon: FileText,
      color: 'blue',
    },
    {
      title: '5 Common Data Governance Gaps (and How to Fix Them)',
      category: 'Governance Practices',
      excerpt: 'Identify and address the most frequent governance issues we see in organizations.',
      icon: TrendingUp,
      color: 'green',
    },
    {
      title: 'Privacy by Design: What It Really Means in Practice',
      category: 'Privacy Laws & Updates',
      excerpt: 'Moving beyond theory to implement privacy by design principles in your organization.',
      icon: FileText,
      color: 'blue',
    },
    {
      title: 'Starting a Career in Data Privacy & Analytics',
      category: 'Career Growth',
      excerpt: 'Essential skills, certifications, and pathways to build your career in this growing field.',
      icon: Briefcase,
      color: 'purple',
    },
    {
      title: 'Building Your First Privacy Impact Assessment',
      category: 'Governance Practices',
      excerpt: 'Step-by-step guide with templates to conduct effective PIAs.',
      icon: TrendingUp,
      color: 'green',
    },
    {
      title: 'Analytics Best Practices for Privacy-First Organizations',
      category: 'Analytics & Insights',
      excerpt: 'How to leverage data analytics while maintaining strong privacy standards.',
      icon: BookOpen,
      color: 'orange',
    },
  ];

  const categories = [
    { name: 'Privacy Laws & Updates', description: 'GDPR, CCPA, HIPAA, and more', color: 'blue' },
    { name: 'Analytics & Insights', description: 'Tutorials and success stories', color: 'orange' },
    { name: 'Governance Practices', description: 'Frameworks, templates, and case studies', color: 'green' },
    { name: 'Career Growth', description: 'Building your path in privacy & analytics', color: 'purple' },
  ];

  return (
    <div className="pt-24">
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Resources & Insights</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay informed with expert insights, tutorials, and updates on global privacy and data governance trends. We publish regularly on topics that help you build smarter and safer data practices.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Browse by Category</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category) => (
                <div
                  key={category.name}
                  className={`bg-${category.color}-50 p-6 rounded-xl border-2 border-${category.color}-100 hover:border-${category.color}-300 transition-colors cursor-pointer`}
                >
                  <h3 className={`text-lg font-bold text-${category.color}-900 mb-2`}>{category.name}</h3>
                  <p className="text-sm text-gray-600">{category.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => {
                const Icon = post.icon;
                return (
                  <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100">
                    <div className={`bg-gradient-to-br from-${post.color}-500 to-${post.color}-700 p-6 flex items-center justify-center`}>
                      <Icon className="w-12 h-12 text-white" />
                    </div>
                    <div className="p-6">
                      <div className={`inline-block px-3 py-1 bg-${post.color}-100 text-${post.color}-700 text-xs font-semibold rounded-full mb-3`}>
                        {post.category}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <button className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                        Read More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-12 text-center text-white">
            <BookOpen className="w-16 h-16 mx-auto mb-6 text-blue-200" />
            <h2 className="text-3xl font-bold mb-4">Want More Resources?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for exclusive content, webinar invitations, and the latest privacy law updates.
            </p>
            <form className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
