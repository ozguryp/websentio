import { useState } from 'react';
import { Link } from 'react-router-dom';

const faqData = [
  {
    category: '🔒 Gizlilik & Veri Güvenliği',
    color: 'from-purple-500/10 to-pink-500/10',
    border: 'border-purple-500/30',
    accent: 'text-purple-400',
    questions: [
      {
        q: 'Mesajlarım analiz edildikten sonra silinuyor mu?',
        a: 'Evet. Sentio\'ya yapıştırdığınız mesajlar yalnızca analiz işlemi sırasında işlenir ve sunucularımızda kalıcı olarak saklanmaz. Analiz tamamlandıktan sonra içerik sistemden temizlenir. Yalnızca analiz sonuçları (duygu skoru, özet vb.) hesabınıza bağlı olarak tutulur.',
        highlight: true
      },
      {
        q: 'Mesajlarım anonim mi tutuluyor?',
        a: 'Analiz için gönderdiğiniz mesaj içerikleri hesabınızla ilişkilendirilmez ve üçüncü taraflarla paylaşılmaz. Kimlik bilgileriniz (ad, e-posta) ile mesaj içerikleri birbirinden ayrı tutulur. Analitik amaçlı kullanılan veriler anonimleştirilmiş istatistiksel formattadır.',
        highlight: true
      },
      {
        q: 'AI modelleri mesaj verilerimle eğitiliyor mu?',
        a: 'Hayır. Sentio\'ya gönderdiğiniz mesajlar, yapay zeka modellerinin eğitiminde kullanılmaz. Kullandığımız AI altyapısı (OpenAI/Google) ile veri işleme anlaşmalarımız, kullanıcı verilerinin model eğitiminde kullanılmasını açıkça yasaklamaktadır.',
        highlight: true
      },
      {
        q: 'Verilerim şifreleniyor mu?',
        a: 'Evet. Uygulama ile sunucularımız arasındaki tüm veri iletimi TLS/SSL şifrelemesiyle korunur. Firebase altyapısı üzerinde saklanan veriler Google\'ın güvenlik standartlarıyla şifrelenir. Ek olarak hassas kullanıcı verileri uygulama katmanında da şifrelenir.',
      },
      {
        q: 'Verilerimi kimlerle paylaşıyorsunuz?',
        a: 'Kişisel verileriniz yalnızca hizmetin işleyişi için zorunlu olan teknik altyapı sağlayıcılarıyla (Google Firebase, OneSignal, RevenueCat, AdMob) paylaşılır. Bu şirketler dışında hiçbir üçüncü tarafla verileriniz satılmaz veya pazarlama amaçlı paylaşılmaz.',
      },
    ]
  },
  {
    category: '📋 KVKK & Yasal Haklar',
    color: 'from-green-500/10 to-cyan-500/10',
    border: 'border-green-500/30',
    accent: 'text-green-400',
    questions: [
      {
        q: 'KVKK kapsamında hangi haklarım var?',
        a: '6698 sayılı KVKK kapsamında; verilerinizin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme, yanlış verilerin düzeltilmesini isteme, silinmesini talep etme ve otomatik işleme itiraz etme haklarına sahipsiniz. Taleplerinizi sentiocoach@gmail.com adresine iletebilirsiniz.',
      },
      {
        q: 'Verilerimin silinmesini nasıl talep edebilirim?',
        a: 'İki yol mevcuttur: (1) Uygulama içinde Ayarlar → Hesabımı Sil seçeneğiyle tüm verilerinizi anında silebilirsiniz. (2) sentiocoach@gmail.com adresine e-posta göndererek veri silme talebinde bulunabilirsiniz. Talepler 30 gün içinde sonuçlandırılır.',
      },
      {
        q: 'Verilerim yurt dışına aktarılıyor mu?',
        a: 'Evet, kullandığımız teknik altyapı sağlayıcılarının (Google, OneSignal vb.) sunucuları yurt dışında bulunduğundan verileriniz yurt dışına aktarılabilmektedir. Bu aktarım KVKK\'nın 9. maddesi kapsamında açık rızanıza dayanılarak gerçekleştirilmektedir.',
      },
    ]
  },
  {
    category: '🤖 Yapay Zeka & Analiz',
    color: 'from-cyan-500/10 to-blue-500/10',
    border: 'border-cyan-500/30',
    accent: 'text-cyan-400',
    questions: [
      {
        q: 'Sentio hangi AI teknolojisini kullanıyor?',
        a: 'Sentio, büyük dil modelleri (LLM) tabanlı yapay zeka altyapısı kullanmaktadır. Mesajlarınız bu modeller aracılığıyla duygu analizi, niyet tespiti ve ilişki dinamikleri açısından değerlendirilir. Kullandığımız modeller sürekli güncellenmekte ve iyileştirilmektedir.',
      },
      {
        q: 'Analiz sonuçları ne kadar doğru?',
        a: 'Sentio\'nun analizleri yüksek doğruluk oranına sahip olsa da yapay zeka mükemmel değildir. Sonuçlar bir rehber niteliğindedir; kesin gerçek olarak değil, ilişkinizi anlamlandırmanıza yardımcı bir perspektif olarak değerlendirilmelidir. Önemli kararlar için profesyonel destek almanızı öneririz.',
      },
      {
        q: 'Ekran görüntüsü yüklediğimde ne oluyor?',
        a: 'Yüklediğiniz ekran görüntüsü OCR (optik karakter tanıma) teknolojisiyle metne dönüştürülür, ardından AI analizi yapılır. Görsel dosya analiz sonrasında sunucularımızda saklanmaz. Yalnızca çıkarılan metin içeriği analiz sürecinde geçici olarak işlenir.',
      },
    ]
  },
  {
    category: '📱 Uygulama Hakkında',
    color: 'from-indigo-500/10 to-purple-500/10',
    border: 'border-indigo-500/30',
    accent: 'text-indigo-400',
    questions: [
      {
        q: 'Bu uygulama tam olarak ne yapıyor?',
        a: 'Sentio; mesajlarınızı, yaşadığınız ilişki durumlarını ve iletişim tarzınızı yapay zeka ile analiz ederek daha sağlıklı kararlar almanıza rehberlik eder. Kesin yargılar vermez, farklı olasılıkları ve bakış açılarını sunar.',
      },
      {
        q: 'Psikolog ya da terapist yerine geçiyor mu?',
        a: 'Hayır. Sentio profesyonel psikolojik danışmanlık veya terapi hizmeti sunmaz. İlişki farkındalığı kazandırmayı ve düşünmenize yardımcı olmayı amaçlayan bir dijital koçtur. Ciddi psikolojik destek ihtiyacında bir uzmana başvurmanızı öneririz.',
      },
      {
        q: 'Kimler için uygundur?',
        a: 'Flört edenler, ilişkisi olanlar, evli veya uzun süreli ilişkisi olanlar, yeni ayrılmış kişiler — kendini ve ilişkilerini daha iyi anlamak isteyen herkes için uygundur. İlişkiniz olması da şart değil; yeni tanıştığınız birini anlamak için de kullanabilirsiniz.',
      },
      {
        q: 'Analizler ne kadar doğru?',
        a: 'Analizler istatistiksel ve dilsel verilere dayanır. Ancak insan ilişkileri karmaşıktır; sonuçlar kesin doğru değil, yol gösterici olarak değerlendirilmelidir. Uygulama size farklı bakış açıları sunar, karar her zaman size aittir.',
      },
      {
        q: 'Bu bir fal veya burç uygulaması mı?',
        a: 'Hayır. Burç uyumu yalnızca eğlenceli bir ek analizdir. Ana analizler iletişim biçimi, mesaj tonu ve duygu durumuna dayanır.',
      },
    ]
  },
  {
    category: '💳 Abonelik & Ödeme',
    color: 'from-blue-500/10 to-indigo-500/10',
    border: 'border-blue-500/30',
    accent: 'text-blue-400',
    questions: [
      {
        q: 'Ücretsiz planda ne kadar kullanabiliyorum?',
        a: 'Ücretsiz planda her ay sınırlı sayıda analiz hakkı sunulmaktadır. Temel mesaj analizi ve duygu tespiti özelliklerine erişebilirsiniz. Daha fazla analiz ve gelişmiş özellikler için Premium veya Pro plana geçebilirsiniz.',
      },
      {
        q: 'Aboneliğimi istediğim zaman iptal edebilir miyim?',
        a: 'Evet, aboneliğinizi istediğiniz zaman App Store veya Google Play üzerinden iptal edebilirsiniz. İptal işlemi mevcut dönem sonunda geçerli olur; kalan süre için ücret iadesi yapılmaz.',
      },
      {
        q: 'Ödeme bilgilerim güvende mi?',
        a: 'Ödeme işlemleri tamamen App Store (Apple) ve Google Play (Google) altyapısı üzerinden gerçekleştirilir. Sentio, kredi kartı veya ödeme bilgilerinize hiçbir şekilde erişmez veya saklamaz.',
      },
    ]
  },
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggle = (key: string) => {
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen py-20 bg-gray-900 relative overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Sıkça Sorulan Sorular
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Gizlilik, güvenlik ve uygulama hakkında merak ettiğiniz her şey burada.
          </p>
        </div>

        {/* Privacy Trust Banner */}
        <div className="glass-card bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/30 rounded-2xl p-6 mb-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="text-4xl">🛡️</div>
            <div className="flex-1">
              <h2 className="text-white font-bold text-lg mb-1">Gizliliğiniz Bizim Önceliğimiz</h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                İlişki mesajları en mahrem verilerinizdir. Sentio olarak bu sorumluluğun farkındayız.
                Mesajlarınız analiz sonrası silinir, AI eğitiminde kullanılmaz ve anonim tutulur.
              </p>
            </div>
            <div className="flex flex-col gap-2 flex-shrink-0">
              <Link to="/kvkk" className="text-xs bg-green-500/20 border border-green-500/40 text-green-400 px-3 py-1.5 rounded-lg hover:bg-green-500/30 transition text-center font-medium">
                KVKK Metni →
              </Link>
              <Link to="/privacy" className="text-xs bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 px-3 py-1.5 rounded-lg hover:bg-cyan-500/30 transition text-center font-medium">
                Gizlilik Politikası →
              </Link>
            </div>
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-10">
          {faqData.map((category, catIdx) => (
            <div key={catIdx}>
              <h2 className={`text-xl font-bold mb-4 ${category.accent}`}>{category.category}</h2>
              <div className={`glass-card bg-gradient-to-br ${category.color} border ${category.border} rounded-2xl overflow-hidden`}>
                {category.questions.map((item, qIdx) => {
                  const key = `${catIdx}-${qIdx}`;
                  const isOpen = openItems[key];
                  return (
                    <div key={qIdx} className={qIdx !== 0 ? 'border-t border-white/5' : ''}>
                      <button
                        onClick={() => toggle(key)}
                        className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 hover:bg-white/5 transition-colors"
                      >
                        <div className="flex items-start gap-3">
                          {item.highlight && (
                            <span className="flex-shrink-0 mt-0.5 w-2 h-2 rounded-full bg-gradient-to-br from-purple-400 to-cyan-400 mt-2"></span>
                          )}
                          <span className={`font-medium text-white ${!item.highlight ? 'ml-5' : ''}`}>{item.q}</span>
                        </div>
                        <svg
                          className={`w-5 h-5 flex-shrink-0 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                          fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-5">
                          <p className="text-gray-300 leading-relaxed text-sm ml-5">{item.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center glass-card bg-gray-800/40 border border-gray-700/50 rounded-2xl p-8">
          <p className="text-gray-300 mb-2 text-lg font-medium">Sorunuzu burada bulamadınız mı?</p>
          <p className="text-gray-400 text-sm mb-6">Gizlilik veya güvenlik konusundaki her sorunuzu yanıtlamaktan memnuniyet duyarız.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:sentiocoach@gmail.com"
              className="bg-gradient-to-r from-purple-500 to-cyan-500 px-6 py-3 rounded-xl font-semibold text-white hover:scale-105 transition-transform"
            >
              E-posta Gönder
            </a>
            <Link
              to="/contact"
              className="glass-card bg-white/5 border border-white/10 px-6 py-3 rounded-xl font-semibold text-white hover:border-white/20 transition"
            >
              İletişim Formu
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
