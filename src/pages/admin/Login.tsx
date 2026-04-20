import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (credentials.email === 'admin@sentio.com' && credentials.password === 'admin123') {
      localStorage.setItem('adminToken', 'authenticated');
      navigate('/admin/dashboard');
    } else {
      setError('Geçersiz e-posta veya şifre');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl mx-auto mb-4"></div>
          <h1 className="text-3xl font-bold mb-2">Yönetici Girişi</h1>
          <p className="text-gray-400">Sentio Admin Panel</p>
        </div>

        <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2">
                E-posta
              </label>
              <input
                type="email"
                id="email"
                value={credentials.email}
                onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-cyan-500 focus:outline-none transition"
                placeholder="admin@sentio.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold mb-2">
                Şifre
              </label>
              <input
                type="password"
                id="password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-cyan-500 focus:outline-none transition"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Giriş Yap
            </button>
          </form>

          <div className="mt-4 text-center text-sm text-gray-400">
            Demo: admin@sentio.com / admin123
          </div>
        </div>
      </div>
    </div>
  );
}
