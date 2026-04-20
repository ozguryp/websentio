import AdminLayout from '../../components/admin/AdminLayout';

export default function Analytics() {
  return (
    <AdminLayout>
      <div>
        <h2 className="text-3xl font-bold mb-8">İstatistikler ve Analizler</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <p className="text-gray-400 text-sm mb-1">Günlük Analiz</p>
            <p className="text-3xl font-bold">45,678</p>
            <p className="text-sm text-green-400 mt-2">↑ 23% bu hafta</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <p className="text-gray-400 text-sm mb-1">Aylık Gelir</p>
            <p className="text-3xl font-bold">₺425,600</p>
            <p className="text-sm text-green-400 mt-2">↑ 15% geçen aya göre</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <p className="text-gray-400 text-sm mb-1">Dönüşüm Oranı</p>
            <p className="text-3xl font-bold">12.4%</p>
            <p className="text-sm text-green-400 mt-2">↑ 2.1% artış</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <p className="text-gray-400 text-sm mb-1">Ortalama Kullanım</p>
            <p className="text-3xl font-bold">28 dk</p>
            <p className="text-sm text-green-400 mt-2">↑ 5% artış</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-xl font-bold mb-6">Popüler Özellikler</h3>
            <div className="space-y-4">
              {[
                { name: 'Mesaj Analizi', usage: 89, count: '34,567' },
                { name: 'Burç Uyumu', usage: 76, count: '28,234' },
                { name: 'Duygu Analizi', usage: 68, count: '25,123' },
                { name: 'Gelecek Tahmini', usage: 54, count: '19,876' },
                { name: 'Kişilik Analizi', usage: 42, count: '15,432' },
              ].map((feature, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold">{feature.name}</span>
                    <span className="text-gray-400 text-sm">{feature.count} kullanım</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full"
                      style={{ width: `${feature.usage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-xl font-bold mb-6">Plan Dağılımı</h3>
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-cyan-500 rounded"></div>
                    <span className="font-semibold">Premium+</span>
                  </div>
                  <span className="text-gray-400">8,234 kullanıcı (66%)</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-cyan-500 h-2 rounded-full" style={{ width: '66%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-blue-500 rounded"></div>
                    <span className="font-semibold">Premium</span>
                  </div>
                  <span className="text-gray-400">2,456 kullanıcı (20%)</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '20%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-gray-500 rounded"></div>
                    <span className="font-semibold">Free</span>
                  </div>
                  <span className="text-gray-400">1,768 kullanıcı (14%)</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gray-500 h-2 rounded-full" style={{ width: '14%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h3 className="text-xl font-bold mb-6">Aylık Gelir Trendi</h3>
          <div className="h-64 flex items-end justify-between gap-2">
            {[
              { month: 'Ağu', value: 280000, height: 55 },
              { month: 'Eyl', value: 310000, height: 62 },
              { month: 'Eki', value: 295000, height: 59 },
              { month: 'Kas', value: 340000, height: 68 },
              { month: 'Ara', value: 385000, height: 77 },
              { month: 'Oca', value: 410000, height: 82 },
              { month: 'Şub', value: 425600, height: 85 },
            ].map((data, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div className="w-full bg-gradient-to-t from-cyan-500 to-blue-600 rounded-t transition-all hover:opacity-80 relative group" style={{ height: `${data.height}%` }}>
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-700 px-2 py-1 rounded text-sm whitespace-nowrap">
                    ₺{data.value.toLocaleString()}
                  </div>
                </div>
                <span className="text-sm text-gray-400 mt-2">{data.month}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
