import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  const menuItems = [
    { path: '/admin/dashboard', icon: '📊', label: 'Dashboard' },
    { path: '/admin/users', icon: '👥', label: 'Kullanıcılar' },
    { path: '/admin/promo-codes', icon: '🎟️', label: 'Promo Kodları' },
    { path: '/admin/notifications', icon: '🔔', label: 'Bildirimler' },
    { path: '/admin/analytics', icon: '📈', label: 'İstatistikler' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 flex">
      <aside className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-gray-800 border-r border-gray-700 transition-all duration-300 flex flex-col`}>
        <div className="p-4 border-b border-gray-700">
          <div className="flex items-center justify-between">
            {isSidebarOpen && (
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg"></div>
                <span className="text-xl font-bold">Admin Panel</span>
              </div>
            )}
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="text-gray-400 hover:text-white p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
                location.pathname === item.path
                  ? 'bg-cyan-500 text-white'
                  : 'text-gray-400 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              {isSidebarOpen && <span>{item.label}</span>}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-700">
          <button
            onClick={handleLogout}
            className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-gray-700 hover:text-white transition"
          >
            <span className="text-xl">🚪</span>
            {isSidebarOpen && <span>Çıkış Yap</span>}
          </button>
        </div>
      </aside>

      <main className="flex-1 overflow-auto">
        <header className="bg-gray-800 border-b border-gray-700 px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Sentio Yönetim Paneli</h1>
            <div className="flex items-center space-x-4">
              <span className="text-gray-400">Admin</span>
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full"></div>
            </div>
          </div>
        </header>

        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
