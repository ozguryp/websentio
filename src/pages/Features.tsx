import { useState, useEffect } from 'react';

export default function Features() {
  const [isVisible, setIsVisible] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setIsVisible(prev => ({ ...prev, [index]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen py-20" style={{ background: 'linear-gradient(180deg, #050810 0%, #0A101E 100%)' }}>
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Özellikler
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Sentio, ilişkinizi güçlendirmek için ihtiyacınız olan tüm araçları sunar.
            Yapay zeka destekli analizler ve önerilerle ilişkinizi bir üst seviyeye taşıyın.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-32">
          <div className="md:col-span-2 group relative backdrop-blur-xl bg-white/[0.03] border border-cyan-500/30 rounded-3xl p-8 hover:bg-white/[0.05] transition-all duration-500 hover:-translate-y-2"
               style={{ boxShadow: '0 0 40px -10px rgba(0, 242, 255, 0.2)' }}>
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-cyan-500/0 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 bg-cyan-500/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                     style={{ boxShadow: '0 0 20px rgba(0, 242, 255, 0.3)' }}>
                  <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Mesaj Analizi</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Mesajlarınızı yapay zeka ile analiz eder, tonunu, duygusunu ve anlamını çözer. 
                İlişkinizdeki iletişim kalitesini artırmanıza yardımcı olur.
              </p>
              <div className="flex items-center gap-2 text-sm text-cyan-400">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="font-mono">AI is analyzing...</span>
              </div>
            </div>
            <div className="absolute inset-0 rounded-3xl border border-cyan-500/0 group-hover:border-cyan-500/50 transition-colors duration-500 pointer-events-none"></div>
          </div>

          <div className="group relative backdrop-blur-xl bg-white/[0.03] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.05] hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1">
            <div className="relative z-10">
              <div className="relative inline-block mb-4">
                <div className="absolute inset-0 bg-purple-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative w-14 h-14 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Ekran Görüntüsü</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Mesajları ekran görüntüsünden okur ve detaylı analiz sunar.
              </p>
            </div>
          </div>

          <div className="group relative backdrop-blur-xl bg-white/[0.03] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.05] hover:border-yellow-500/30 transition-all duration-300 hover:-translate-y-1">
            <div className="relative z-10">
              <div className="relative inline-block mb-4">
                <div className="absolute inset-0 bg-yellow-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative w-14 h-14 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Burç Uyumu</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Astrolojik uyum analizi ve detaylı burç yorumları.
              </p>
            </div>
          </div>

          <div className="md:col-span-2 group relative backdrop-blur-xl bg-white/[0.03] border border-purple-500/30 rounded-3xl p-8 hover:bg-white/[0.05] transition-all duration-500 hover:-translate-y-2"
               style={{ boxShadow: '0 0 40px -10px rgba(112, 0, 255, 0.2)' }}>
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-purple-500/0 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 bg-purple-500/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative w-16 h-16 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                     style={{ boxShadow: '0 0 20px rgba(112, 0, 255, 0.3)' }}>
                  <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">İleri Seviye AI Koçu</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                GPT-4 teknolojisi ile güçlendirilmiş koçunuz, size özel tavsiyelerde bulunur ve sorularınızı yanıtlar. 
                7/24 ilişki danışmanı yanınızda.
              </p>
              <div className="grid grid-cols-3 gap-2 mt-4">
                <div className="h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse"></div>
                <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse delay-100"></div>
                <div className="h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full animate-pulse delay-200"></div>
              </div>
            </div>
            <div className="absolute inset-0 rounded-3xl border border-purple-500/0 group-hover:border-purple-500/50 transition-colors duration-500 pointer-events-none"></div>
          </div>

          <div className="md:col-span-2 group relative backdrop-blur-xl bg-white/[0.03] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.05] hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1">
            <div className="relative z-10">
              <div className="relative inline-block mb-4">
                <div className="absolute inset-0 bg-blue-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative w-14 h-14 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Gelecek Tahmini</h3>
              <p className="text-gray-400 leading-relaxed">
                İlişkinizin gidişatını analiz eder ve olası senaryoları değerlendirir.
              </p>
            </div>
          </div>

          <div className="group relative backdrop-blur-xl bg-white/[0.03] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.05] hover:border-green-500/30 transition-all duration-300 hover:-translate-y-1">
            <div className="relative z-10">
              <div className="relative inline-block mb-4">
                <div className="absolute inset-0 bg-green-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative w-14 h-14 bg-gradient-to-br from-green-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Duygu Analizi</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Mesajlardaki duygu durumunu tespit eder.
              </p>
            </div>
          </div>

          <div className="group relative backdrop-blur-xl bg-white/[0.03] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.05] hover:border-pink-500/30 transition-all duration-300 hover:-translate-y-1">
            <div className="relative z-10">
              <div className="relative inline-block mb-4">
                <div className="absolute inset-0 bg-pink-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative w-14 h-14 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Kişilik Analizi</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Detaylı kişilik özelliklerini ortaya çıkarır.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center animate-on-scroll opacity-0 transition-all duration-1000" data-index="0" style={{ transform: isVisible[0] ? 'translateY(0)' : 'translateY(50px)', opacity: isVisible[0] ? 1 : 0 }}>
            <div className="order-2 lg:order-1 perspective-1000">
              <div className="transform hover:rotate-y-5 transition-transform duration-500" style={{ transform: 'rotateY(-5deg) rotateX(2deg)' }}>
                <div className="backdrop-blur-xl bg-white/[0.03] rounded-3xl p-6 shadow-2xl shadow-cyan-500/10">
                  <img src="/app-screen-1.png" alt="Mesaj Analizi" className="w-full rounded-2xl" />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <div className="inline-block px-4 py-2 backdrop-blur-xl bg-cyan-500/10 border border-cyan-500/20 rounded-full">
                <span className="text-cyan-400 text-sm font-semibold font-mono">MESAJ ANALİZİ</span>
              </div>
              <h3 className="text-4xl font-extrabold tracking-tight">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Mesajları Anlayın
                </span>
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                WhatsApp, Instagram veya iMessage ekran görüntülerinizi yükleyin. 
                Yapay zeka, mesajların tonunu, duygusunu ve gizli anlamlarını çözer.
              </p>
              <ul className="space-y-4">
                {['Ekran görüntüsü ile anında analiz', 'Ton ve duygu tespiti', 'Gizli anlamları ortaya çıkarma'].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-cyan-400/20 flex items-center justify-center flex-shrink-0" style={{ filter: 'drop-shadow(0 0 8px rgba(34, 211, 238, 0.5))' }}>
                      <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center animate-on-scroll opacity-0 transition-all duration-1000" data-index="1" style={{ transform: isVisible[1] ? 'translateY(0)' : 'translateY(50px)', opacity: isVisible[1] ? 1 : 0 }}>
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 backdrop-blur-xl bg-purple-500/10 border border-purple-500/20 rounded-full">
                <span className="text-purple-400 text-sm font-semibold font-mono">BURÇ UYUMU</span>
              </div>
              <h3 className="text-4xl font-extrabold tracking-tight">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Astrolojik Uyum
                </span>
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Sizin ve partnerinizin burçlarını analiz eder, uyum oranınızı hesaplar 
                ve ilişkinize özel astrolojik önerilerde bulunur.
              </p>
              <ul className="space-y-4">
                {['12 burç detaylı analiz', 'Uyum skoru hesaplama', 'Günlük burç yorumları'].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-purple-400/20 flex items-center justify-center flex-shrink-0" style={{ filter: 'drop-shadow(0 0 8px rgba(192, 132, 252, 0.5))' }}>
                      <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="perspective-1000">
              <div className="transform hover:rotate-y-5 transition-transform duration-500" style={{ transform: 'rotateY(5deg) rotateX(2deg)' }}>
                <div className="backdrop-blur-xl bg-white/[0.03] rounded-3xl p-6 shadow-2xl shadow-purple-500/10">
                  <img src="/app-screen-2.png" alt="Burç Uyumu" className="w-full rounded-2xl" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center animate-on-scroll opacity-0 transition-all duration-1000" data-index="2" style={{ transform: isVisible[2] ? 'translateY(0)' : 'translateY(50px)', opacity: isVisible[2] ? 1 : 0 }}>
            <div className="order-2 lg:order-1 perspective-1000">
              <div className="transform hover:rotate-y-5 transition-transform duration-500" style={{ transform: 'rotateY(-5deg) rotateX(2deg)' }}>
                <div className="backdrop-blur-xl bg-white/[0.03] rounded-3xl p-6 shadow-2xl shadow-blue-500/10">
                  <img src="/app-screen-6.png" alt="Günlük Analiz" className="w-full rounded-2xl" />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <div className="inline-block px-4 py-2 backdrop-blur-xl bg-blue-500/10 border border-blue-500/20 rounded-full">
                <span className="text-blue-400 text-sm font-semibold font-mono">GÜNLÜK İÇGÖRÜLER</span>
              </div>
              <h3 className="text-4xl font-extrabold tracking-tight">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Her Gün Yeni Analizler
                </span>
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                İlişkinizdeki değişimleri takip edin. Günlük mini analizler ve 
                yıldız mesajları ile ilişkinizi sürekli iyileştirin.
              </p>
              <ul className="space-y-4">
                {['Günün yıldız mesajı', 'Mini günlük analizler', 'İlerleme takibi'].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-blue-400/20 flex items-center justify-center flex-shrink-0" style={{ filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))' }}>
                      <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-32 backdrop-blur-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-3xl p-12 border border-cyan-500/20">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Daha Fazlasını Keşfedin</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Sentio'nun tüm özelliklerini deneyimlemek için hemen ücretsiz hesap oluşturun.
            </p>
            <button className="group relative px-8 py-4 rounded-xl font-semibold text-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-100 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute inset-0 border-2 border-cyan-400 rounded-xl opacity-0 group-hover:opacity-100 animate-pulse"></div>
              <span className="relative z-10">Ücretsiz Deneyin</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
