export default function KVKK() {
  return (
    <div className="min-h-screen py-20 bg-gray-900 relative overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            KVKK Aydınlatma Metni
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
            Bu Aydınlatma Metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, 
            Sentiocoach uygulamasını kullanan kullanıcıların kişisel verilerinin işlenmesine ilişkin olarak 
            bilgilendirilmesi amacıyla hazırlanmıştır.
          </p>

          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-green-400 flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-green-400 to-cyan-400 rounded-full"></span>
              1. Veri Sorumlusu
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Bu kapsamda veri sorumlusu:
            </p>
            <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
              <p className="text-gray-300 font-semibold mb-2">Sentiocoach (Bireysel Geliştirici)</p>
              <a href="mailto:sentiocoach@gmail.com" className="text-green-400 hover:text-green-300 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                sentiocoach@gmail.com
              </a>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-green-400 flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-green-400 to-cyan-400 rounded-full"></span>
              2. İşlenen Kişisel Veriler
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Aşağıdaki kişisel veriler işlenmektedir:
            </p>
            <ul className="space-y-2 ml-6">
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span>Ad ve soyad</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span>E-posta adresi</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span>Cinsiyet</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span>Yaş</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span>Profil fotoğrafı (kullanıcı isterse)</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span>Uygulama kullanım verileri</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span>Cihaz bilgileri</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span>Bildirim (push notification) için kullanılan teknik veriler</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span>Fotoğraflara erişim izni kapsamında seçilen görseller</span>
              </li>
            </ul>
            <p className="text-gray-400 text-sm italic mt-4">
              Not: Telefon numarası ve konum bilgisi işlenmemektedir.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-green-400 flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-green-400 to-cyan-400 rounded-full"></span>
              3. Kişisel Verilerin İşlenme Amaçları
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Kişisel verileriniz şu amaçlarla işlenmektedir:
            </p>
            <ul className="space-y-2 ml-6">
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span>Kullanıcı hesabı oluşturmak ve yönetmek</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span>Kullanıcıyla iletişim kurmak</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span>Bildirim göndermek (OneSignal)</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span>Reklam ve pazarlama faaliyetleri yürütmek (AdMob)</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span>İstatistik ve analiz yapmak (Firebase Analytics, RevenueCat)</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span>Uygulama içi satın alma süreçlerini yürütmek</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span>Hizmet kalitesini artırmak</span>
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-green-400 flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-green-400 to-cyan-400 rounded-full"></span>
              4. Kişisel Verilerin Aktarılması
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Kişisel verileriniz aşağıdaki hizmet sağlayıcılarıyla paylaşılabilmektedir:
            </p>
            <ul className="space-y-2 ml-6">
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span>Google Firebase & Google Cloud</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span>OneSignal</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span>AdMob</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span>RevenueCat</span>
              </li>
            </ul>
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 mt-4">
              <p className="text-gray-300 text-sm">
                <span className="text-yellow-400 font-semibold">Dikkat:</span> Bu hizmet sağlayıcıların sunucuları yurt dışında bulunabilir. 
                Bu nedenle kişisel verileriniz yurt dışına aktarılabilmektedir.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-green-400 flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-green-400 to-cyan-400 rounded-full"></span>
              5. Hukuki Sebep
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Kişisel verileriniz aşağıdaki hukuki sebeplerine dayanılarak işlenmektedir:
            </p>
            <ul className="space-y-2 ml-6">
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span>Kanunlarda açıkça öngörülmesi</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span>Sözleşmenin kurulması ve ifasıyla doğrudan doğruya ilgili olması</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span>Açık rızanızın bulunması</span>
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-green-400 flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-green-400 to-cyan-400 rounded-full"></span>
              6. Kişisel Veri Toplamanın Yöntemi
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Kişisel verileriniz aşağıdaki yöntemlerle toplanmaktadır:
            </p>
            <ul className="space-y-2 ml-6">
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span>Google ile giriş</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span>Misafir giriş sistemi</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span>Uygulama içi işlemler</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span>Otomatik yollarla (analitik ve altyapı servisleri)</span>
              </li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-green-400 flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-green-400 to-cyan-400 rounded-full"></span>
              7. KVKK Kapsamındaki Haklarınız
            </h2>
            <p className="text-gray-300 leading-relaxed">
              KVKK'nın 11. maddesi kapsamında kullanıcılar aşağıdaki haklara sahiptir:
            </p>
            <ul className="space-y-3 ml-6">
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span>Kişisel verilerinin işlenip işlenmediğini öğrenme</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span>İşlenmişse buna ilişkin bilgi talep etme</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span>Amacına uygun kullanılıp kullanılmadığını öğrenme</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span>Eksik veya yanlış işlenmişse düzeltilmesini isteme</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span>Silinmesini veya yok edilmesini isteme</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span>Otomatik sistemler ile analiz edilmesi sonucu aleyhe bir sonucun ortaya çıkmasına itiraz etme</span>
              </li>
            </ul>
            <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 mt-4">
              <p className="text-gray-300 mb-2">
                Bu haklarınıza ilişkin taleplerinizi aşağıdaki e-posta adresine iletebilirsiniz:
              </p>
              <a href="mailto:sentiocoach@gmail.com" className="text-green-400 hover:text-green-300 font-semibold flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                sentiocoach@gmail.com
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
