import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900/80 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img src="/sentio-logo.png" alt="Sentio" className="w-10 h-10" />
              <span className="text-xl font-bold">Sentio</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition">Ana Sayfa</Link>
            <Link to="/features" className="text-gray-300 hover:text-white transition">Özellikler</Link>
            <Link to="/pricing" className="text-gray-300 hover:text-white transition">Fiyatlandırma</Link>
            <Link to="/about" className="text-gray-300 hover:text-white transition">Hakkımızda</Link>
            <Link to="/blog" className="text-gray-300 hover:text-white transition">Blog</Link>
            <Link to="/contact" className="text-gray-300 hover:text-white transition">İletişim</Link>
            <Link
              to="/pricing"
              className="glow-button bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2 rounded-lg font-bold hover:scale-105 transition-transform shadow-lg shadow-cyan-500/25"
            >
              Hemen Başla
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded">Ana Sayfa</Link>
            <Link to="/features" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded">Özellikler</Link>
            <Link to="/pricing" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded">Fiyatlandırma</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded">Hakkımızda</Link>
            <Link to="/blog" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded">Blog</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded">İletişim</Link>
            <Link
              to="/pricing"
              className="glow-button w-full mt-2 bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2 rounded-lg font-bold block text-center"
            >
              Hemen Başla
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
