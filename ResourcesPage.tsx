import { BookOpen, FileText, TrendingUp, Briefcase, ArrowRight } from 'lucide-react';
import React from 'react';

// Define the component's props interface for type safety
interface ResourcesPageProps {
  onNavigate: (page: string) => void;
}

/**
 * A responsive and visually appealing resources page component.
 * It features a hero section, filterable categories, a grid of articles,
 * and a newsletter subscription call-to-action.
 *
 * @param {ResourcesPageProps} props - The component props.
 * @returns {JSX.Element} The rendered resources page.
 */
export default function ResourcesPage({ onNavigate }: ResourcesPageProps) {
  // --- Data Definitions ---
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

  /**
   * Helper function to generate Tailwind CSS color classes dynamically.
   * NOTE: To prevent Tailwind's JIT compiler from tree-shaking these classes,
   * they are listed in a hidden div at the bottom of the component.
   */
  const getColorClasses = (color: string) => ({
    bgLight: `bg-${color}-50`,
    borderLight: `border-${color}-100 hover:border-${color}-300`,
    textDark: `text-${color}-900`,
    textAccent: `text-${color}-700`,
    bgGradient: `bg-gradient-to-br from-${color}-500 to-${color}-700`,
    bgLightAccent: `bg-${color}-100`,
    textInteractive: 'text-blue-600 hover:text-blue-700',
  });

  return (
    <div className="pt-24 min-h-screen bg-gray-50">

      {/* Hero Section */}
      <header className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Resources & Insights</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay informed with expert insights, tutorials, and updates on global privacy and data governance trends.
          </p>
        </div>
      </header>

      <main className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">

          {/* Categories Section */}
          <section id="categories" className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Browse by Category</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category) => {
                const classes = getColorClasses(category.color);
                return (
                  <div
                    key={category.name}
                    className={`${classes.bgLight} p-6 rounded-xl border-2 ${classes.borderLight} transition-all cursor-pointer transform hover:scale-[1.02] hover:shadow-md`}
                  >
                    <h3 className={`${classes.textDark} text-lg font-bold mb-2`}>{category.name}</h3>
                    <p className="text-sm text-gray-600">{category.description}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Featured Articles Section */}
          <section id="articles" className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => {
                const Icon = post.icon;
                const classes = getColorClasses(post.color);
                return (
                  <article key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-gray-100 flex flex-col transform hover:-translate-y-1">
                    <div className={`${classes.bgGradient} p-6 flex items-center justify-center`}>
                      <Icon className="w-12 h-12 text-white" />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <p className={`inline-block px-3 py-1 ${classes.bgLightAccent} ${classes.textAccent} text-xs font-semibold rounded-full mb-3 self-start`}>
                        {post.category}
                      </p>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                      <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
                      <button onClick={() => onNavigate(post.title)} className={`${classes.textInteractive} font-medium inline-flex items-center self-start`}>
                        Read More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          {/* Newsletter CTA Section */}
          <section id="newsletter" className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-12 text-center text-white shadow-2xl">
            <BookOpen className="w-16 h-16 mx-auto mb-6 text-blue-200" />
            <h2 className="text-3xl font-bold mb-4">Want More Resources?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for exclusive content, webinar invitations, and the latest privacy law updates.
            </p>
            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="your@email.com"
                aria-label="Email Address"
                required
                className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-md"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-50 transition-colors font-semibold shadow-md transform hover:scale-[1.01]"
              >
                Subscribe
              </button>
            </form>
          </section>
        </div>
      </main>
      
      {/* Tailwind CSS Safelist:
        This hidden div includes all dynamically generated class names to ensure
        they are not purged during the build process. An alternative is to add
        them to the 'safelist' option in your `tailwind.config.js` file.
      */}
      <div className="hidden">
        <span className="bg-blue-50 border-blue-100 hover:border-blue-300 text-blue-900 bg-blue-100 text-blue-700 from-blue-500 to-blue-700"></span>
        <span className="bg-green-50 border-green-100 hover:border-green-300 text-green-900 bg-green-100 text-green-700 from-green-500 to-green-700"></span>
        <span className="bg-purple-50 border-purple-100 hover:border-purple-300 text-purple-900 bg-purple-100 text-purple-700 from-purple-500 to-purple-700"></span>
        <span className="bg-orange-50 border-orange-100 hover:border-orange-300 text-orange-900 bg-orange-100 text-orange-700 from-orange-500 to-orange-700"></span>
      </div>
    </div>
  );
}
