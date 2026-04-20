import { useState } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';

interface User {
  id: number;
  name: string;
  email: string;
  plan: 'Free' | 'Premium' | 'Premium+';
  joinDate: string;
  lastActive: string;
  totalAnalyses: number;
  status: 'active' | 'inactive' | 'banned';
}

export default function Users() {
  const [users] = useState<User[]>([
    { id: 1, name: 'Ahmet Yılmaz', email: 'ahmet@example.com', plan: 'Premium+', joinDate: '2025-12-15', lastActive: '2 saat önce', totalAnalyses: 345, status: 'active' },
    { id: 2, name: 'Zeynep Kaya', email: 'zeynep@example.com', plan: 'Premium', joinDate: '2026-01-03', lastActive: '1 gün önce', totalAnalyses: 128, status: 'active' },
    { id: 3, name: 'Mehmet Demir', email: 'mehmet@example.com', plan: 'Free', joinDate: '2026-02-10', lastActive: '5 dk önce', totalAnalyses: 12, status: 'active' },
    { id: 4, name: 'Ayşe Şahin', email: 'ayse@example.com', plan: 'Premium', joinDate: '2025-11-20', lastActive: '3 gün önce', totalAnalyses: 567, status: 'active' },
    { id: 5, name: 'Can Özkan', email: 'can@example.com', plan: 'Free', joinDate: '2026-01-28', lastActive: '1 hafta önce', totalAnalyses: 8, status: 'inactive' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterPlan, setFilterPlan] = useState<string>('all');

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPlan = filterPlan === 'all' || user.plan === filterPlan;
    return matchesSearch && matchesPlan;
  });

  return (
    <AdminLayout>
      <div>
        <h2 className="text-3xl font-bold mb-8">Kullanıcı Yönetimi</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <p className="text-gray-400 text-sm mb-1">Toplam Kullanıcı</p>
            <p className="text-3xl font-bold">12,458</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <p className="text-gray-400 text-sm mb-1">Aktif Kullanıcı</p>
            <p className="text-3xl font-bold">8,234</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <p className="text-gray-400 text-sm mb-1">Yeni (Bu Ay)</p>
            <p className="text-3xl font-bold">1,245</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <p className="text-gray-400 text-sm mb-1">Churn Oranı</p>
            <p className="text-3xl font-bold">3.2%</p>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-cyan-500 focus:outline-none"
                placeholder="Kullanıcı ara (isim, email)..."
              />
            </div>
            <select
              value={filterPlan}
              onChange={(e) => setFilterPlan(e.target.value)}
              className="px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-cyan-500 focus:outline-none"
            >
              <option value="all">Tüm Planlar</option>
              <option value="Free">Free</option>
              <option value="Premium">Premium</option>
              <option value="Premium+">Premium+</option>
            </select>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-700">
              <tr>
                <th className="px-6 py-4 text-left">Kullanıcı</th>
                <th className="px-6 py-4 text-left">Plan</th>
                <th className="px-6 py-4 text-left">Kayıt Tarihi</th>
                <th className="px-6 py-4 text-left">Son Aktif</th>
                <th className="px-6 py-4 text-left">Analiz Sayısı</th>
                <th className="px-6 py-4 text-left">Durum</th>
                <th className="px-6 py-4 text-left">İşlemler</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id} className="border-t border-gray-700 hover:bg-gray-750">
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-semibold">{user.name}</p>
                      <p className="text-sm text-gray-400">{user.email}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      user.plan === 'Premium+' ? 'bg-cyan-500/20 text-cyan-400' :
                      user.plan === 'Premium' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-gray-500/20 text-gray-400'
                    }`}>
                      {user.plan}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-400">{user.joinDate}</td>
                  <td className="px-6 py-4 text-gray-400">{user.lastActive}</td>
                  <td className="px-6 py-4">{user.totalAnalyses}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      user.status === 'active' ? 'bg-green-500/20 text-green-400' :
                      user.status === 'inactive' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {user.status === 'active' ? 'Aktif' : user.status === 'inactive' ? 'Pasif' : 'Yasaklı'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <button className="text-cyan-400 hover:text-cyan-300" title="Detay">
                        👁️
                      </button>
                      <button className="text-blue-400 hover:text-blue-300" title="Düzenle">
                        ✏️
                      </button>
                      <button className="text-red-400 hover:text-red-300" title="Yasakla">
                        🚫
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}
