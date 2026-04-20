import { Link } from 'react-router-dom';

const plans = [
  {
    name: 'FREE',
    subtitle: 'Ücretsiz',
    price: '0',
    priceLabel: null,
    tagline: 'Temel analizlerle keşfetmeye başla',
    description: 'Sentio\'yu tanımak için ideal başlangıç',
    features: [
      { text: 'Günlük 3 analiz hakkı', strong: false },
      { text: 'Reklamlı kullanım', strong: false },
      { text: 'Yüzeysel sonuçlar (detay yok)', strong: false },
      { text: 'Temel duygu analizi', strong: false },
    ],
    badge: null,
    popular: false,
    isFree: true,
    buttonText: 'Ücretsiz Başla',
    buttonStyle: 'ghost',
    valueHint: null,
  },
  {
    name: 'PREMIUM',
    subtitle: '49 ₺/ay',
    price: '49',
    priceLabel: '₺/ay',
    tagline: 'İlişkini daha iyi anlamaya başla',
    description: 'Günlük kullanım için en mantıklı seçim',
    features: [
      { text: 'Sınırsız analiz', strong: true },
      { text: 'Reklamsız kullanım', strong: false },
      { text: 'Detaylı analizler & raporlar', strong: false },
      { text: 'Kapsamlı ilişki analizi', strong: false },
      { text: 'Geçmiş analiz kaydı', strong: false },
    ],
    badge: 'Mantıklı Seçim',
    popular: false,
    isFree: false,
    buttonText: 'Premium\'a Geç',
    buttonStyle: 'secondary',
    valueHint: 'Free\'den %300 daha fazla özellik',
  },
  {
    name: 'PREMIUM+',
    subtitle: '99 ₺/ay',
    price: '99',
    priceLabel: '₺/ay',
    tagline: 'İlişkini aktif olarak iyileştir',
    description: 'Tam güç: AI koç + kişisel öneriler',
    features: [
      { text: 'Sınırsız analiz', strong: true },
      { text: 'Reklamsız kullanım', strong: false },
      { text: 'AI ilişki koçu (chat destekli)', strong: true },
      { text: 'Kişiye özel öneriler', strong: true },
      { text: 'Duygusal mesaj yorumlama', strong: false },
      { text: 'Haftalık ilişki raporu', strong: false },
      { text: 'Öncelikli destek', strong: false },
    ],
    badge: '⭐ BEST VALUE',
    popular: true,
    isFree: false,
    buttonText: 'Premium+\'a Başla',
    buttonStyle: 'primary',
    valueHint: 'En çok tercih edilen plan',
  },
];

const trustItems = [
  { icon: '⭐', label: '10.000+ kullanıcı' },
  { icon: '🤖', label: 'AI destekli analiz' },
  { icon: '🔒', label: 'Gizlilik garantisi' },
  { icon: '📱', label: 'iOS & Android' },
];

export default function Pricing() {
  return (
    <div className="min-h-screen py-20" style={{ background: 'linear-gradient(180deg, #050810 0%, #0A101E 100%)' }}>
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/4 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-purple-500/4 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Fiyatlandırma
            </span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            İhtiyacınıza uygun planı seçin ve ilişkinizi güçlendirmeye bugün başlayın.
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-3xl p-8 transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-b from-purple-500/10 to-blue-500/10 border-2 border-purple-500/40 shadow-[0_0_30px_-5px_rgba(112,0,255,0.25)]'
                  : plan.isFree
                  ? 'bg-white/[0.02] border border-white/8'
                  : 'bg-white/[0.03] border border-white/10 hover:border-cyan-500/30 transition-colors'
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className={`px-5 py-1.5 rounded-full text-sm font-bold whitespace-nowrap ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-[0_0_15px_rgba(112,0,255,0.4)]'
                      : 'bg-cyan-500/20 border border-cyan-500/40 text-cyan-400'
                  }`}>
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan name & tagline */}
              <div className="mb-6 mt-2">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className={`text-xl font-bold ${plan.isFree ? 'text-gray-300' : 'text-white'}`}>
                    {plan.name}
                  </h3>
                </div>
                <p className={`text-sm ${plan.isFree ? 'text-gray-500' : 'text-gray-400'}`}>
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-2">
                {plan.isFree ? (
                  <span className="text-5xl font-extrabold text-gray-300">Ücretsiz</span>
                ) : (
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-extrabold text-white">{plan.price}</span>
                    <span className="text-gray-400 text-lg">{plan.priceLabel}</span>
                  </div>
                )}
              </div>

              {/* Value hint */}
              {plan.valueHint ? (
                <p className="text-xs font-semibold text-cyan-400 mb-6">{plan.valueHint}</p>
              ) : (
                <div className="mb-6" />
              )}

              {/* Tagline */}
              <p className={`text-sm font-medium mb-6 italic ${
                plan.popular ? 'text-cyan-300' : plan.isFree ? 'text-gray-500' : 'text-gray-300'
              }`}>
                "{plan.tagline}"
              </p>

              {/* CTA Button */}
              <button className={`w-full py-3.5 rounded-xl font-bold text-base transition-all duration-300 mb-8 ${
                plan.buttonStyle === 'primary'
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:shadow-[0_0_20px_rgba(0,242,255,0.35)] hover:scale-[1.02]'
                  : plan.buttonStyle === 'secondary'
                  ? 'bg-white/8 border border-white/20 text-white hover:bg-white/12 hover:border-cyan-500/40'
                  : 'bg-transparent border border-white/10 text-gray-400 hover:border-white/20 hover:text-gray-300'
              }`}>
                {plan.buttonText}
              </button>

              {/* Divider */}
              <div className={`w-full h-px mb-6 ${plan.isFree ? 'bg-white/5' : 'bg-white/8'}`} />

              {/* Features */}
              <ul className="space-y-3 flex-1">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      plan.popular
                        ? 'bg-cyan-500/20'
                        : plan.isFree
                        ? 'bg-white/8'
                        : 'bg-white/10'
                    }`}>
                      <svg className={`w-2.5 h-2.5 ${
                        plan.popular ? 'text-cyan-400' : plan.isFree ? 'text-gray-500' : 'text-gray-400'
                      }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className={`text-sm leading-snug ${
                      f.strong
                        ? 'text-white font-semibold'
                        : plan.isFree
                        ? 'text-gray-500'
                        : 'text-gray-300'
                    }`}>
                      {f.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust Bar */}
        <div className="flex flex-wrap items-center justify-center gap-8 mb-16 py-6 border-y border-white/5">
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-gray-400">
              <span className="text-xl">{item.icon}</span>
              <span className="text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </div>

        {/* SSS Banner */}
        <div className="mb-10 text-center">
          <p className="text-gray-500 mb-2 text-sm">Aklınızda sorular mı var?</p>
          <Link
            to="/faq"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors group text-sm"
          >
            Sıkça Sorulan Sorular sayfamıza göz atın
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Bottom CTA */}
        <div className="relative rounded-3xl p-12 text-center overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(0,242,255,0.04) 0%, rgba(112,0,255,0.04) 100%)',
            border: '1px solid rgba(0,242,255,0.15)'
          }}>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-cyan-500/6 to-purple-500/6 rounded-full blur-3xl"></div>
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl font-extrabold mb-3 text-white">Hâlâ emin değil misiniz?</h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Sorularınız için bizimle iletişime geçin. Size yardımcı olmaktan mutluluk duyarız.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3.5 rounded-xl font-bold transition-all duration-300 border border-cyan-500/40 hover:border-cyan-500 hover:shadow-[0_0_20px_rgba(0,242,255,0.2)] hover:scale-105 text-white"
              style={{ background: 'rgba(0,242,255,0.05)' }}
            >
              İletişime Geçin
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
