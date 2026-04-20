import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';


export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Component mount olduğunda animasyonu başlat
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center justify-center">
        {/* Background — glow CTA çevresinde, başlıkta değil */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[600px] h-[300px] bg-cyan-500/6 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/3 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[80px]"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center">

            {/* Brand */}
            <div
              className={`mb-6 transition-all duration-[600ms] ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <span className="text-sm font-semibold text-gray-500 tracking-widest uppercase">Sentio</span>
            </div>

            {/* Headline — sert, net, merak uyandıran */}
            <h1
              className={`text-5xl md:text-7xl font-bold tracking-tight mb-6 transition-all duration-[700ms] ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ letterSpacing: '-0.03em', transitionDelay: '100ms' }}
            >
              <span className="text-white">Karşındakinin</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                gerçek niyetini çöz.
              </span>
            </h1>

            {/* Subheadline */}
            <p
              className={`text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10 transition-all duration-[700ms] ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '250ms' }}
            >
              AI ile mesajları analiz et — karşındakinin ne hissettiğini,
              ne demek istediğini ve ne beklediğini öğren.
            </p>

            {/* CTA */}
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center mb-4 transition-all duration-[700ms] ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <div className="flex flex-col items-center gap-1.5">
                <Link
                  to="/pricing"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(34,211,238,0.25)] hover:shadow-[0_0_45px_rgba(34,211,238,0.4)]"
                >
                  Ücretsiz Analiz Yap
                </Link>
                <span className="text-xs text-gray-500">Kayıt gerekmez · 30 saniyede sonuç</span>
              </div>
              <Link
                to="/features"
                className="glass-card backdrop-blur-xl bg-white/5 border border-white/10 px-10 py-4 rounded-2xl font-semibold text-lg hover:scale-105 hover:border-white/20 transition-all duration-300 text-white self-start sm:self-auto"
              >
                Nasıl Çalışır?
              </Link>
            </div>

            {/* Mini Demo — en büyük conversion artışı */}
            <div
              className={`mt-12 max-w-md mx-auto transition-all duration-[700ms] ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '550ms' }}
            >
              <div className="glass-card bg-gray-800/50 backdrop-blur-xl border border-gray-700/60 rounded-2xl p-5 text-left">
                {/* Gelen mesaj */}
                <div className="flex justify-start mb-3">
                  <div className="bg-gray-700/70 rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[80%]">
                    <p className="text-gray-200 text-sm">"Beni artık arama"</p>
                  </div>
                </div>
                {/* AI analiz sonucu */}
                <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/25 rounded-xl p-3.5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-wide">Sentio Analizi</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">Kırgınlık</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-orange-400 to-red-400 rounded-full" style={{ width: '78%' }}></div>
                        </div>
                        <span className="text-xs text-orange-400 font-semibold w-8">%78</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">Geri dönüş beklentisi</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full" style={{ width: '65%' }}></div>
                        </div>
                        <span className="text-xs text-cyan-400 font-semibold w-8">%65</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">Duygusal yoğunluk</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" style={{ width: '88%' }}></div>
                        </div>
                        <span className="text-xs text-purple-400 font-semibold w-8">%88</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-600 text-center mt-2">Örnek analiz — gerçek sonuçlar kişiye göre değişir</p>
            </div>

            {/* Sosyal Kanıt */}
            <div
              className={`mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-500 transition-all duration-[700ms] ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '700ms' }}
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1.5">
                  {['bg-cyan-400/30', 'bg-blue-400/30', 'bg-purple-400/30', 'bg-pink-400/30'].map((c, i) => (
                    <div key={i} className={`w-7 h-7 rounded-full ${c} border-2 border-gray-900`}></div>
                  ))}
                </div>
                <span className="text-sm">5.000+ kişi ilişkisini daha iyi anladı</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-gray-800"></div>
              <div className="flex items-center gap-1.5">
                <div className="flex text-yellow-400 text-xs gap-0.5">
                  {'★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
                  <span className="text-gray-700">★</span>
                </div>
                <span className="text-sm">4.3/5 kullanıcı memnuniyeti</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Sentio Section - Enhanced Cards */}
      <section className="py-32 relative">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Neden <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Sentio</span>?
            </h2>
            <p className="text-gray-300 text-2xl font-light">İlişkinizi güçlendirmek için ihtiyacınız olan her şey</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🤖',
                title: 'Yapay Zeka Gücü',
                description: 'En gelişmiş AI teknolojisi ile mesajlarınızı derinlemesine analiz eder.',
                gradient: 'from-cyan-500/10 to-blue-500/10',
                border: 'border-cyan-500/30',
                glow: 'hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]',
                link: '',
                linkText: ''
              },
              {
                icon: '🔒',
                title: 'Gizlilik Öncelikli',
                description: 'Mesajlarınız analiz sonrası silinir, AI eğitiminde kullanılmaz ve anonim tutulur. KVKK uyumlu.',
                gradient: 'from-purple-500/10 to-pink-500/10',
                border: 'border-purple-500/30',
                glow: 'hover:shadow-[0_0_40px_rgba(168,85,247,0.2)]',
                link: '/faq',
                linkText: 'Gizlilik SSS →'
              },
              {
                icon: '⚡',
                title: 'Anında Sonuçlar',
                description: 'Mesajlarınızı anında analiz eder, size özel öneriler sunar.',
                gradient: 'from-blue-500/10 to-cyan-500/10',
                border: 'border-blue-500/30',
                glow: 'hover:shadow-[0_0_40px_rgba(59,130,246,0.2)]',
                link: '',
                linkText: ''
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className={`glass-card backdrop-blur-xl bg-gradient-to-br ${feature.gradient} p-10 rounded-3xl group hover:scale-105 transition-all duration-300 border ${feature.border} ${feature.glow}`}
              >
                <div className="text-7xl mb-6 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_20px_rgba(34,211,238,0.3)]">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed text-base">{feature.description}</p>
                {feature.link && (
                  <Link to={feature.link} className="inline-block mt-4 text-sm text-purple-400 hover:text-purple-300 font-medium transition-colors">
                    {feature.linkText}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Solutions Section */}
      <section className="py-32 relative">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                İlişkinizi güçlendirmek için <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">akıllı çözümler</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
                Sentio, ilişki içindeki veya olmayan herkes için yapay zeka destekli detaylı analizler sunar.
              </p>
              <ul className="space-y-5 pt-4">
                {[
                  'Mesaj ve ekran görüntüsü analizi',
                  'Burç uyumu ve kişilik analizi',
                  'Gelecek tahmini ve duygu durumu',
                  'İleri seviye AI koçu desteği'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(34,211,238,0.4)] group-hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] transition-all">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-200 text-xl font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card backdrop-blur-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-3xl p-12 text-center space-y-8 border border-cyan-500/30 shadow-[0_0_60px_rgba(34,211,238,0.15)]">
              <div className="text-8xl mx-auto drop-shadow-[0_0_30px_rgba(34,211,238,0.3)]">📱</div>
              <div className="space-y-4">
                <h3 className="text-4xl md:text-5xl font-bold leading-tight">Hemen İndir,<br />İlişkini Analiz Et!</h3>
                <p className="text-gray-300 text-lg">iOS ve Android için ücretsiz. Hemen indirin ve ilişkinizi keşfedin.</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 relative">
                {/* Yakında Badge */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-1 rounded-full text-sm font-bold shadow-lg z-10">
                  Yakında
                </div>
                
                <a
                  href="#"
                  className="flex items-center justify-center gap-3 bg-black/50 px-6 py-4 rounded-xl font-semibold transition-all border border-gray-700 shadow-lg opacity-60 cursor-not-allowed"
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Download on the</div>
                    <div className="text-lg font-bold">App Store</div>
                  </div>
                </a>

                <a
                  href="#"
                  className="flex items-center justify-center gap-3 bg-black/50 px-6 py-4 rounded-xl font-semibold transition-all border border-gray-700 shadow-lg opacity-60 cursor-not-allowed"
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-gray-400">GET IT ON</div>
                    <div className="text-lg font-bold">Google Play</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-page CTA #1 — After Smart Solutions */}
      <section className="py-16 relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card backdrop-blur-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-3xl px-8 py-10 shadow-[0_0_60px_rgba(34,211,238,0.1)]">
            <p className="text-gray-400 text-sm font-semibold uppercase tracking-widest mb-3">Hemen Deneyin</p>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              İlk analiziniz <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">ücretsiz</span>
            </h3>
            <p className="text-gray-400 mb-8 text-lg">Kredi kartı gerekmez. Kayıt olmadan deneyin.</p>
            <Link
              to="/pricing"
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 px-10 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_30px_rgba(34,211,238,0.3)]"
            >
              Ücretsiz Başla →
            </Link>
          </div>
        </div>
      </section>

      {/* App Screenshots - Enhanced with Larger Size */}
      <section className="py-32 relative">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Uygulama</span> İçi Görünüm
            </h2>
            <p className="text-gray-300 text-2xl font-light">Sentio uygulamasının sunduğu özellikleri keşfedin</p>
          </div>

          <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide">
            {[
              { img: '/app-screen-1.png', title: 'Mesaj Analizi' },
              { img: '/app-screen-2.png', title: 'Burç Uyumu' },
              { img: '/app-screen-3.png', title: 'Derin Bağlar' },
              { img: '/app-screen-4.png', title: 'Niyet Analizi' },
              { img: '/app-screen-5.png', title: 'Risk Değerlendirme' },
              { img: '/app-screen-6.png', title: 'Günlük Analiz' },
            ].map((screen, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-64 snap-center glass-card backdrop-blur-xl bg-gray-800/40 rounded-2xl p-4 hover:scale-105 transition-all duration-300 group overflow-hidden border border-gray-700/50 hover:border-cyan-500/50 shadow-lg hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]"
              >
                <div className="relative aspect-[9/16] rounded-xl overflow-hidden bg-gray-900">
                  <img 
                    src={screen.img} 
                    alt={screen.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-cyan-500/20 to-blue-500/20"><span class="text-6xl">${index === 0 ? '💬' : index === 1 ? '⭐' : index === 2 ? '💕' : index === 3 ? '🎯' : index === 4 ? '⚠️' : '📊'}</span></div>`;
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-base font-semibold text-white">{screen.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <style>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
            .scrollbar-hide {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}</style>
        </div>
      </section>

      {/* Mid-page CTA #2 — Blog & Trust */}
      <section className="py-20 relative">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Blog CTA */}
            <div className="glass-card backdrop-blur-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-3xl p-8 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300">
              <div>
                <div className="text-5xl mb-4">📖</div>
                <h3 className="text-2xl font-bold text-white mb-3">İlişki Rehberi</h3>
                <p className="text-gray-400 leading-relaxed">
                  "Toksik ilişkiler nasıl anlaşılır?", "Yapay zeka ile mesaj analizi" ve daha fazlası — uzman içeriklerimizi keşfedin.
                </p>
              </div>
              <Link
                to="/blog"
                className="mt-6 inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold transition-colors group"
              >
                Blogu Keşfet
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Privacy CTA */}
            <div className="glass-card backdrop-blur-xl bg-gradient-to-br from-green-500/10 to-cyan-500/10 border border-green-500/30 rounded-3xl p-8 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300">
              <div>
                <div className="text-5xl mb-4">🛡️</div>
                <h3 className="text-2xl font-bold text-white mb-3">Gizliliğiniz Güvende</h3>
                <p className="text-gray-400 leading-relaxed">
                  Mesajlarınız analiz sonrası silinir. AI eğitiminde kullanılmaz. KVKK uyumlu. Tüm sorularınızın yanıtı SSS'de.
                </p>
              </div>
              <Link
                to="/faq"
                className="mt-6 inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-semibold transition-colors group"
              >
                Gizlilik SSS →
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
