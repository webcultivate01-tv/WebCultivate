import React from 'react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
        <div className="text-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl p-8 sm:p-10 md:p-12 lg:p-16 shadow-2xl border border-gray-200 dark:border-slate-700">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-600 dark:text-gray-300">
            Let's create something amazing together
          </p>
          <Link to="/contact" className="inline-block px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg rounded-xl font-semibold text-white bg-gradient-to-r from-primary to-primary-dark shadow-lg shadow-primary/35 hover:shadow-xl hover:shadow-primary/45 hover:-translate-y-1 transition-all duration-400 relative overflow-hidden before:content-[''] before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:transition-all before:duration-500 hover:before:left-full">
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
