export default function Cookies() {
  return (
    <div className="min-h-screen py-20 bg-gray-900 relative overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
            Çerez Politikası
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
            Bu Çerez Politikası, Sentiocoach uygulamasında kullanılan çerezler (cookies) ve benzeri teknolojiler 
            hakkında bilgi vermek amacıyla hazırlanmıştır.
          </p>

          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-orange-400 flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-orange-400 to-yellow-400 rounded-full"></span>
              1. Çerez (Cookie) Nedir?
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Çerezler, bir uygulama veya web sitesi tarafından cihazınıza kaydedilen küçük metin dosyalarıdır. 
              Bu dosyalar sayesinde kullanıcı tercihleri hatırlanabilir ve hizmet daha verimli sunulabilir.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-orange-400 flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-orange-400 to-yellow-400 rounded-full"></span>
              2. Kullanılan Çerez Türleri
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Sentiocoach uygulamasında aşağıdaki çerez türleri kullanılmaktadır:
            </p>

            <div className="space-y-4">
              {/* Zorunlu Çerezler */}
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
                <h3 className="text-lg font-semibold text-red-400 mb-2">a) Zorunlu Çerezler</h3>
                <p className="text-gray-300 text-sm">
                  Uygulamanın temel işlevlerinin çalışması için gereklidir. (Oturum yönetimi, güvenlik vb.)
                </p>
              </div>

              {/* Analitik Çerezler */}
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
                <h3 className="text-lg font-semibold text-blue-400 mb-2">b) Analitik Çerezler</h3>
                <p className="text-gray-300 text-sm">
                  Uygulamanın nasıl kullanıldığını analiz etmek için kullanılır. (Firebase Analytics)
                </p>
              </div>

              {/* Reklam Çerezleri */}
              <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4">
                <h3 className="text-lg font-semibold text-purple-400 mb-2">c) Reklam ve Pazarlama Çerezleri</h3>
                <p className="text-gray-300 text-sm">
                  Kullanıcıya ilgi alanına uygun reklamlar göstermek amacıyla kullanılır. (AdMob)
                </p>
              </div>

              {/* İşlevsel Çerezler */}
              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
                <h3 className="text-lg font-semibold text-green-400 mb-2">d) İşlevsel Çerezler</h3>
                <p className="text-gray-300 text-sm">
                  Kullanıcı tercihlerini (dil, tema vb.) hatırlamak için kullanılır.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-orange-400 flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-orange-400 to-yellow-400 rounded-full"></span>
              3. Çerezlerin Kullanım Amaçları
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Çerezler aşağıdaki amaçlarla kullanılmaktadır:
            </p>
            <ul className="space-y-2 ml-6">
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-orange-400 mt-1">•</span>
                <span>Uygulamanın düzgün çalışmasını sağlamak</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-orange-400 mt-1">•</span>
                <span>Performans ölçümü yapmak</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-orange-400 mt-1">•</span>
                <span>Kullanıcı deneyimini geliştirmek</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-orange-400 mt-1">•</span>
                <span>Reklam ve pazarlama faaliyetlerini yürütmek</span>
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-orange-400 flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-orange-400 to-yellow-400 rounded-full"></span>
              4. Çerezlerin Kontrolü
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Kullanıcılar çerez kullanımını aşağıdaki yöntemlerle kontrol edebilir veya engelleyebilir:
            </p>
            <ul className="space-y-2 ml-6">
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-orange-400 mt-1">•</span>
                <span>Tarayıcı ayarları üzerinden</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-orange-400 mt-1">•</span>
                <span>Mobil cihaz ayarları üzerinden</span>
              </li>
            </ul>
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 mt-4">
              <p className="text-gray-300 text-sm">
                <span className="text-yellow-400 font-semibold">Uyarı:</span> Bazı çerezlerin devre dışı bırakılması, 
                uygulamanın bazı özelliklerinin çalışmamasına neden olabilir.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-orange-400 flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-orange-400 to-yellow-400 rounded-full"></span>
              5. Üçüncü Taraf Çerezleri
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Uygulamada üçüncü taraf hizmet sağlayıcıların çerezleri kullanılabilir:
            </p>
            <ul className="space-y-2 ml-6">
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-orange-400 mt-1">•</span>
                <span>Google</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-orange-400 mt-1">•</span>
                <span>Firebase</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-orange-400 mt-1">•</span>
                <span>AdMob</span>
              </li>
            </ul>
            <p className="text-gray-400 text-sm mt-4">
              Bu çerezler ilgili hizmet sağlayıcıların kendi gizlilik politikalarına tabidir.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-orange-400 flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-orange-400 to-yellow-400 rounded-full"></span>
              6. Politika Güncellemeleri
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Bu Çerez Politikası gerektiğinde güncellenebilir. Güncel metin uygulama içinde yayınlanır.
            </p>
          </section>

          {/* Contact */}
          <section className="space-y-4 pt-8 border-t border-gray-700">
            <h2 className="text-2xl font-bold text-orange-400 flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-orange-400 to-yellow-400 rounded-full"></span>
              İletişim
            </h2>
            <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-4">
              <p className="text-gray-300 mb-2">
                Çerez politikası hakkında sorularınız için:
              </p>
              <a href="mailto:sentiocoach@gmail.com" className="text-orange-400 hover:text-orange-300 font-semibold flex items-center gap-2">
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
