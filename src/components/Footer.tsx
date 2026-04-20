import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src="/sentio-logo.png" alt="Sentio" className="w-10 h-10" />
              <span className="text-xl font-bold">Sentio</span>
            </div>
            <p className="text-gray-400 mb-4">
              Yapay zeka destekli ileri seviye ilişki koçu. İlişkinizi daha iyi anlamak ve geliştirmek için akıllı çözümler.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Hızlı Linkler</h3>
            <ul className="space-y-2">
              <li><Link to="/features" className="text-gray-400 hover:text-white transition">Özellikler</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-white transition">Fiyatlandırma</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition">Hakkımızda</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Destek</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition">İletişim</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white transition">SSS</Link></li>
              <li>
                <Link to="/kvkk" className="flex items-center gap-1.5 text-green-400 hover:text-green-300 transition font-medium">
                  <span>🛡️</span> KVKK
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8 pt-8 border-t border-gray-800">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white font-semibold mb-4">Politikalar</h3>
            <ul className="grid grid-cols-2 gap-2">
              <li><Link to="/privacy" className="text-gray-400 hover:text-white transition text-sm">Gizlilik Politikası</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white transition text-sm">Hizmet Şartları</Link></li>
              <li><Link to="/kvkk" className="text-gray-400 hover:text-white transition text-sm">KVKK Aydınlatma</Link></li>
              <li><Link to="/cookies" className="text-gray-400 hover:text-white transition text-sm">Çerez Politikası</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Sentio. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
