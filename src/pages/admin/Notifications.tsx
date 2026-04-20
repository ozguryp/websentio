import { useState } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';

interface Notification {
  id: number;
  title: string;
  message: string;
  target: string;
  sentDate: string;
  status: 'sent' | 'scheduled' | 'draft';
  recipients: number;
}

export default function Notifications() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([
    { id: 1, title: 'Yeni Özellik Duyurusu', message: 'Gelecek tahmini özelliği artık Premium+ kullanıcılarına açıldı!', target: 'Premium+', sentDate: '2026-02-14', status: 'sent', recipients: 8234 },
    { id: 2, title: 'Özel İndirim', message: 'Bu hafta sonu Premium abonelikte %30 indirim!', target: 'Free', sentDate: '2026-02-13', status: 'sent', recipients: 4224 },
    { id: 3, title: 'Bakım Bildirimi', message: 'Sistem bakımı yapılacaktır. Lütfen bilginize.', target: 'Tümü', sentDate: '2026-02-15', status: 'scheduled', recipients: 12458 },
  ]);

  const [newNotification, setNewNotification] = useState({
    title: '',
    message: '',
    target: 'all',
    scheduleDate: '',
  });

  const handleCreate = () => {
    const notification: Notification = {
      id: notifications.length + 1,
      title: newNotification.title,
      message: newNotification.message,
      target: newNotification.target === 'all' ? 'Tümü' : newNotification.target,
      sentDate: newNotification.scheduleDate || new Date().toISOString().split('T')[0],
      status: newNotification.scheduleDate ? 'scheduled' : 'sent',
      recipients: 12458,
    };
    setNotifications([notification, ...notifications]);
    setShowCreateModal(false);
    setNewNotification({ title: '', message: '', target: 'all', scheduleDate: '' });
  };

  const handleDelete = (id: number) => {
    setNotifications(notifications.filter(notif => notif.id !== id));
  };

  return (
    <AdminLayout>
      <div>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Bildirimler</h2>
          <button
            onClick={() => setShowCreateModal(true)}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            + Yeni Bildirim Gönder
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <span className="text-3xl">📤</span>
              <span className="text-sm font-semibold px-2 py-1 rounded bg-green-500/20 text-green-400">
                Gönderildi
              </span>
            </div>
            <p className="text-2xl font-bold">{notifications.filter(n => n.status === 'sent').length}</p>
            <p className="text-gray-400 text-sm">Toplam gönderilen</p>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <span className="text-3xl">⏰</span>
              <span className="text-sm font-semibold px-2 py-1 rounded bg-yellow-500/20 text-yellow-400">
                Planlandı
              </span>
            </div>
            <p className="text-2xl font-bold">{notifications.filter(n => n.status === 'scheduled').length}</p>
            <p className="text-gray-400 text-sm">Zamanlanmış</p>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <span className="text-3xl">👥</span>
            </div>
            <p className="text-2xl font-bold">
              {notifications.reduce((sum, n) => sum + n.recipients, 0).toLocaleString()}
            </p>
            <p className="text-gray-400 text-sm">Toplam alıcı</p>
          </div>
        </div>

        <div className="space-y-4">
          {notifications.map((notification) => (
            <div key={notification.id} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-xl font-bold">{notification.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      notification.status === 'sent' ? 'bg-green-500/20 text-green-400' :
                      notification.status === 'scheduled' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-gray-500/20 text-gray-400'
                    }`}>
                      {notification.status === 'sent' ? 'Gönderildi' : 
                       notification.status === 'scheduled' ? 'Zamanlandı' : 'Taslak'}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-4">{notification.message}</p>
                  <div className="flex items-center space-x-6 text-sm text-gray-500">
                    <span>📅 {notification.sentDate}</span>
                    <span>👥 {notification.recipients.toLocaleString()} alıcı</span>
                    <span>🎯 {notification.target}</span>
                  </div>
                </div>
                <button
                  onClick={() => handleDelete(notification.id)}
                  className="text-red-400 hover:text-red-300 ml-4"
                  title="Sil"
                >
                  🗑️
                </button>
              </div>
            </div>
          ))}
        </div>

        {showCreateModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setShowCreateModal(false)}>
            <div className="bg-gray-800 rounded-xl p-8 max-w-2xl w-full mx-4 border border-gray-700" onClick={(e) => e.stopPropagation()}>
              <h3 className="text-2xl font-bold mb-6">Yeni Bildirim Gönder</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Başlık</label>
                  <input
                    type="text"
                    value={newNotification.title}
                    onChange={(e) => setNewNotification({ ...newNotification, title: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-cyan-500 focus:outline-none"
                    placeholder="Bildirim başlığı"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Mesaj</label>
                  <textarea
                    value={newNotification.message}
                    onChange={(e) => setNewNotification({ ...newNotification, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-cyan-500 focus:outline-none resize-none"
                    placeholder="Bildirim mesajı..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Hedef Kitle</label>
                  <select
                    value={newNotification.target}
                    onChange={(e) => setNewNotification({ ...newNotification, target: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-cyan-500 focus:outline-none"
                  >
                    <option value="all">Tüm Kullanıcılar</option>
                    <option value="Free">Free Kullanıcılar</option>
                    <option value="Premium">Premium Kullanıcılar</option>
                    <option value="Premium+">Premium+ Kullanıcılar</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Zamanlama (Opsiyonel)</label>
                  <input
                    type="datetime-local"
                    value={newNotification.scheduleDate}
                    onChange={(e) => setNewNotification({ ...newNotification, scheduleDate: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-cyan-500 focus:outline-none"
                  />
                  <p className="text-sm text-gray-500 mt-2">Boş bırakırsanız hemen gönderilir</p>
                </div>

                <div className="flex space-x-4 pt-4">
                  <button
                    onClick={() => setShowCreateModal(false)}
                    className="flex-1 bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg font-semibold transition"
                  >
                    İptal
                  </button>
                  <button
                    onClick={handleCreate}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
                  >
                    {newNotification.scheduleDate ? 'Zamanla' : 'Gönder'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
