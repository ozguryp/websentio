import { useState } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';

interface PromoCode {
  id: number;
  code: string;
  discount: number;
  type: 'percentage' | 'fixed';
  usageLimit: number;
  usedCount: number;
  expiryDate: string;
  status: 'active' | 'expired' | 'disabled';
}

export default function PromoCodes() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [promoCodes, setPromoCodes] = useState<PromoCode[]>([
    { id: 1, code: 'WELCOME50', discount: 50, type: 'percentage', usageLimit: 100, usedCount: 67, expiryDate: '2026-03-31', status: 'active' },
    { id: 2, code: 'LOVE2026', discount: 25, type: 'percentage', usageLimit: 500, usedCount: 234, expiryDate: '2026-12-31', status: 'active' },
    { id: 3, code: 'FIRST100', discount: 100, type: 'fixed', usageLimit: 50, usedCount: 50, expiryDate: '2026-02-28', status: 'expired' },
  ]);

  const [newCode, setNewCode] = useState({
    code: '',
    discount: '',
    type: 'percentage' as 'percentage' | 'fixed',
    usageLimit: '',
    expiryDate: '',
  });

  const handleCreate = () => {
    const code: PromoCode = {
      id: promoCodes.length + 1,
      code: newCode.code.toUpperCase(),
      discount: Number(newCode.discount),
      type: newCode.type,
      usageLimit: Number(newCode.usageLimit),
      usedCount: 0,
      expiryDate: newCode.expiryDate,
      status: 'active',
    };
    setPromoCodes([...promoCodes, code]);
    setShowCreateModal(false);
    setNewCode({ code: '', discount: '', type: 'percentage', usageLimit: '', expiryDate: '' });
  };

  const handleDelete = (id: number) => {
    setPromoCodes(promoCodes.filter(code => code.id !== id));
  };

  const toggleStatus = (id: number) => {
    setPromoCodes(promoCodes.map(code => 
      code.id === id 
        ? { ...code, status: code.status === 'active' ? 'disabled' : 'active' }
        : code
    ));
  };

  return (
    <AdminLayout>
      <div>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Promo Kodları</h2>
          <button
            onClick={() => setShowCreateModal(true)}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            + Yeni Kod Oluştur
          </button>
        </div>

        <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-700">
              <tr>
                <th className="px-6 py-4 text-left">Kod</th>
                <th className="px-6 py-4 text-left">İndirim</th>
                <th className="px-6 py-4 text-left">Kullanım</th>
                <th className="px-6 py-4 text-left">Son Tarih</th>
                <th className="px-6 py-4 text-left">Durum</th>
                <th className="px-6 py-4 text-left">İşlemler</th>
              </tr>
            </thead>
            <tbody>
              {promoCodes.map((code) => (
                <tr key={code.id} className="border-t border-gray-700 hover:bg-gray-750">
                  <td className="px-6 py-4">
                    <span className="font-mono font-bold text-cyan-400">{code.code}</span>
                  </td>
                  <td className="px-6 py-4">
                    {code.discount}{code.type === 'percentage' ? '%' : '₺'}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 bg-gray-700 rounded-full h-2 max-w-[100px]">
                        <div
                          className="bg-cyan-500 h-2 rounded-full"
                          style={{ width: `${(code.usedCount / code.usageLimit) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-400">{code.usedCount}/{code.usageLimit}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-400">{code.expiryDate}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      code.status === 'active' ? 'bg-green-500/20 text-green-400' :
                      code.status === 'expired' ? 'bg-red-500/20 text-red-400' :
                      'bg-gray-500/20 text-gray-400'
                    }`}>
                      {code.status === 'active' ? 'Aktif' : code.status === 'expired' ? 'Süresi Doldu' : 'Devre Dışı'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      {code.status !== 'expired' && (
                        <button
                          onClick={() => toggleStatus(code.id)}
                          className="text-yellow-400 hover:text-yellow-300"
                          title={code.status === 'active' ? 'Devre Dışı Bırak' : 'Aktif Et'}
                        >
                          {code.status === 'active' ? '⏸️' : '▶️'}
                        </button>
                      )}
                      <button
                        onClick={() => handleDelete(code.id)}
                        className="text-red-400 hover:text-red-300"
                        title="Sil"
                      >
                        🗑️
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {showCreateModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setShowCreateModal(false)}>
            <div className="bg-gray-800 rounded-xl p-8 max-w-md w-full mx-4 border border-gray-700" onClick={(e) => e.stopPropagation()}>
              <h3 className="text-2xl font-bold mb-6">Yeni Promo Kod</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Kod</label>
                  <input
                    type="text"
                    value={newCode.code}
                    onChange={(e) => setNewCode({ ...newCode, code: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-cyan-500 focus:outline-none font-mono uppercase"
                    placeholder="ÖRNEK50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">İndirim Türü</label>
                  <select
                    value={newCode.type}
                    onChange={(e) => setNewCode({ ...newCode, type: e.target.value as 'percentage' | 'fixed' })}
                    className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-cyan-500 focus:outline-none"
                  >
                    <option value="percentage">Yüzde (%)</option>
                    <option value="fixed">Sabit Tutar (₺)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">İndirim Miktarı</label>
                  <input
                    type="number"
                    value={newCode.discount}
                    onChange={(e) => setNewCode({ ...newCode, discount: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-cyan-500 focus:outline-none"
                    placeholder={newCode.type === 'percentage' ? '50' : '100'}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Kullanım Limiti</label>
                  <input
                    type="number"
                    value={newCode.usageLimit}
                    onChange={(e) => setNewCode({ ...newCode, usageLimit: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-cyan-500 focus:outline-none"
                    placeholder="100"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Son Kullanım Tarihi</label>
                  <input
                    type="date"
                    value={newCode.expiryDate}
                    onChange={(e) => setNewCode({ ...newCode, expiryDate: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-cyan-500 focus:outline-none"
                  />
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
                    Oluştur
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
