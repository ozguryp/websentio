export default function Privacy() {
  return (
    <div className="min-h-screen py-20 bg-gray-900 relative overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Gizlilik Politikası
          </h1>
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <span className="font-semibold">Sentiocoach</span>
            <span>•</span>
            <span>Son güncelleme: 26.02.2026</span>
          </div>
        </div>

        {/* Content */}
        <div className="glass-card bg-gray-800/40 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-gray-700/50 space-y-8">
          <p className="text-gray-300 text-lg leading-relaxed">
            Sentiocoach uygulaması olarak kullanıcılarımızın kişisel verilerinin gizliliğine önem veriyoruz. 
            Bu politika, hangi verilerin toplandığını, nasıl kullanıldığını ve nasıl korunduğunu açıklamaktadır.
          </p>

          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-cyan-400 flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full"></span>
              1. Toplanan Kişisel Veriler
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Uygulama kapsamında aşağıdaki kişisel veriler toplanabilir:
            </p>
            <ul className="space-y-2 ml-6">
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Ad ve soyad (Google ile giriş yapıldığında)</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>E-posta adresi (Google ile giriş yapıldığında)</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Cinsiyet</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Yaş</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Profil fotoğrafı (kullanıcı isterse)</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Uygulama içi kullanım verileri (analitik veriler)</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Cihaz bilgileri ve bildirim token bilgileri</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Fotoğraflara erişim izni (kullanıcı onayıyla)</span>
              </li>
            </ul>
            <p className="text-gray-400 text-sm italic">
              Not: Telefon numarası ve konum bilgisi toplanmamaktadır.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-cyan-400 flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full"></span>
              2. Verilerin Toplanma Yöntemi
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Kişisel veriler aşağıdaki yöntemlerle toplanır:
            </p>
            <ul className="space-y-2 ml-6">
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Google ile giriş</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Uygulama içi formlar</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Otomatik sistemler (Firebase, analitik servisler)</span>
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-cyan-400 flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full"></span>
              3. Verilerin İşlenme Amaçları
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Toplanan veriler şu amaçlarla kullanılır:
            </p>
            <ul className="space-y-2 ml-6">
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Kullanıcı hesabı oluşturmak ve yönetmek</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Kullanıcıyla iletişime geçmek (destek talepleri)</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Bildirim göndermek (OneSignal)</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Reklam ve pazarlama faaliyetleri (AdMob)</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>İstatistik ve analiz (Firebase Analytics, RevenueCat)</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Uygulama içi satın alma süreçlerini yönetmek</span>
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-cyan-400 flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full"></span>
              4. Verilerin Paylaşılması
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Kişisel verileriniz aşağıdaki hizmet sağlayıcılarla paylaşılabilir:
            </p>
            <ul className="space-y-2 ml-6">
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Google Firebase & Google Cloud</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>OneSignal</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>AdMob</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>RevenueCat</span>
              </li>
            </ul>
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 mt-4">
              <p className="text-gray-300 text-sm">
                <span className="text-blue-400 font-semibold">Önemli:</span> Bu servislerin sunucuları yurt dışında bulunabilir. 
                Bu nedenle kişisel verileriniz yurt dışına aktarılabilir.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-cyan-400 flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full"></span>
              5. Hukuki Dayanak
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Kişisel verileriniz aşağıdaki hukuki sebeplere dayanılarak işlenmektedir:
            </p>
            <ul className="space-y-2 ml-6">
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Hizmetin sunulması için zorunlu olması</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Kullanıcının açık rızası</span>
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-cyan-400 flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full"></span>
              6. Hesap ve Veri Silme
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Kullanıcı, uygulama içindeki <span className="text-cyan-400 font-semibold">Ayarlar → Hesabımı Sil</span> seçeneğini 
              kullanarak hesabını ve kişisel verilerini silebilir.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-cyan-400 flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full"></span>
              7. Veri Güvenliği
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Kişisel verilerinizin güvenliği için teknik ve idari tedbirler alınmaktadır. 
              Yetkisiz erişim, kayıp ve kötüye kullanımı önlemek için gerekli önlemler uygulanır.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-cyan-400 flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full"></span>
              8. Çocukların Gizliliği
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Uygulama 18 yaş altındaki kullanıcılar için özel olarak tasarlanmamıştır. 
              18 yaş altı kullanıcıların ebeveyn izni olmadan uygulamayı kullanmamaları önerilir.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-cyan-400 flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full"></span>
              9. Kullanıcı Hakları (KVKK)
            </h2>
            <p className="text-gray-300 leading-relaxed">
              KVKK kapsamında kullanıcılar aşağıdaki haklara sahiptir:
            </p>
            <ul className="space-y-2 ml-6">
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Verilerinin işlenip işlenmediğini öğrenme</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Verilerinin düzeltilmesini veya silinmesini isteme</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span>İşlemeye itiraz etme</span>
              </li>
            </ul>
            <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-4 mt-4">
              <p className="text-gray-300">
                Taleplerinizi aşağıdaki e-posta adresi üzerinden iletebilirsiniz:
              </p>
              <a href="mailto:sentiocoach@gmail.com" className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-2 mt-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                sentiocoach@gmail.com
              </a>
            </div>
          </section>

          {/* Section 10 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-cyan-400 flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full"></span>
              10. Politika Değişiklikleri
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Bu Gizlilik Politikası gerektiğinde güncellenebilir. Güncel metin uygulama içinde yayınlanır.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
