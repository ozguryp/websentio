import AdminLayout from '../../components/admin/AdminLayout';

export default function Dashboard() {
  const stats = [
    { label: 'Toplam Kullanıcı', value: '12,458', change: '+12%', icon: '👥', color: 'cyan' },
    { label: 'Aktif Abonelik', value: '8,234', change: '+8%', icon: '💳', color: 'blue' },
    { label: 'Günlük Analiz', value: '45,678', change: '+23%', icon: '📊', color: 'cyan' },
    { label: 'Gelir (Aylık)', value: '₺425,600', change: '+15%', icon: '💰', color: 'blue' },
  ];

  const recentActivities = [
    { user: 'Ahmet Y.', action: 'Premium+ plana geçti', time: '5 dk önce' },
    { user: 'Zeynep K.', action: 'Yeni hesap oluşturdu', time: '12 dk önce' },
    { user: 'Mehmet S.', action: 'Mesaj analizi yaptı', time: '18 dk önce' },
    { user: 'Ayşe D.', action: 'Promo kodu kullandı', time: '25 dk önce' },
    { user: 'Can Ö.', action: 'Abonelik iptali', time: '32 dk önce' },
  ];

  return (
    <AdminLayout>
      <div>
        <h2 className="text-3xl font-bold mb-8">Dashboard</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{stat.icon}</span>
                <span className={`text-sm font-semibold px-2 py-1 rounded ${
                  stat.change.startsWith('+') ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                }`}>
                  {stat.change}
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-xl font-bold mb-6">Son Aktiviteler</h3>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center justify-between py-3 border-b border-gray-700 last:border-0">
                  <div>
                    <p className="font-semibold">{activity.user}</p>
                    <p className="text-sm text-gray-400">{activity.action}</p>
                  </div>
                  <span className="text-sm text-gray-500">{activity.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-xl font-bold mb-6">Hızlı İşlemler</h3>
            <div className="grid grid-cols-1 gap-4">
              <button className="flex items-center space-x-3 px-4 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition text-left">
                <span className="text-2xl">🎟️</span>
                <div>
                  <p className="font-semibold">Yeni Promo Kod</p>
                  <p className="text-sm text-gray-400">İndirim kodu oluştur</p>
                </div>
              </button>
              <button className="flex items-center space-x-3 px-4 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition text-left">
                <span className="text-2xl">🔔</span>
                <div>
                  <p className="font-semibold">Bildirim Gönder</p>
                  <p className="text-sm text-gray-400">Kullanıcılara bildirim</p>
                </div>
              </button>
              <button className="flex items-center space-x-3 px-4 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition text-left">
                <span className="text-2xl">📊</span>
                <div>
                  <p className="font-semibold">Rapor Oluştur</p>
                  <p className="text-sm text-gray-400">Detaylı analiz raporu</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
