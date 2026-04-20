export default function Terms() {
  return (
    <div className="min-h-screen py-20 bg-gray-900 relative overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Hizmet Şartları
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
            Bu Hizmet Şartları, Sentiocoach uygulamasını kullanan tüm kullanıcılar için geçerlidir. 
            Uygulamayı kullanarak bu şartları kabul etmiş sayılırsınız.
          </p>

          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-purple-400 flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-purple-400 to-cyan-400 rounded-full"></span>
              1. Hizmet Tanımı
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Sentiocoach; eğlence ve yaşam tarzı kategorisinde, ilişki tavsiyeleri, burç yorumları ve 
              analizler sunan bir mobil uygulamadır.
            </p>
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4">
              <p className="text-gray-300 text-sm">
                <span className="text-purple-400 font-semibold">Önemli:</span> Uygulama eğlence amaçlıdır ve 
                profesyonel danışmanlık hizmeti sunmaz.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-purple-400 flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-purple-400 to-cyan-400 rounded-full"></span>
              2. Kullanım Koşulları
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Kullanıcı, uygulamayı kullanırken aşağıdaki kurallara uymayı kabul eder:
            </p>
            <ul className="space-y-2 ml-6">
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-purple-400 mt-1">•</span>
                <span>Uygulamayı hukuka aykırı amaçlarla kullanmamak</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-purple-400 mt-1">•</span>
                <span>Başkalarının haklarını ihlal etmemek</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-purple-400 mt-1">•</span>
                <span>Uygulamanın işleyişini bozacak davranışlarda bulunmamak</span>
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-purple-400 flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-purple-400 to-cyan-400 rounded-full"></span>
              3. Hesap Oluşturma
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Kullanıcı, uygulamayı aşağıdaki yöntemlerle kullanabilir:
            </p>
            <ul className="space-y-2 ml-6">
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-purple-400 mt-1">•</span>
                <span>Google ile giriş yaparak</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-purple-400 mt-1">•</span>
                <span>Misafir girişi (anonim) ile</span>
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-purple-400 flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-purple-400 to-cyan-400 rounded-full"></span>
              4. Ücretlendirme
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Uygulama ücretsiz indirilebilir. Bazı özellikler için uygulama içi satın alma seçenekleri sunulabilir.
            </p>
            <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-4">
              <p className="text-gray-300 text-sm">
                Ödemeler ilgili uygulama mağazası (Google Play Store / Apple App Store) altyapısı üzerinden gerçekleştirilir.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-purple-400 flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-purple-400 to-cyan-400 rounded-full"></span>
              5. İçeriklerin Niteliği
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Uygulamada sunulan içerikler:
            </p>
            <ul className="space-y-2 ml-6">
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-purple-400 mt-1">•</span>
                <span>Bilgilendirme ve eğlence amaçlıdır</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="text-purple-400 mt-1">•</span>
                <span>Profesyonel danışmanlık (psikolojik, hukuki, tıbbi) yerine geçmez</span>
              </li>
            </ul>
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 mt-4">
              <p className="text-gray-300 text-sm">
                <span className="text-red-400 font-semibold">Uyarı:</span> Ciddi psikolojik veya ilişki sorunları için 
                mutlaka profesyonel yardım alınmalıdır.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-purple-400 flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-purple-400 to-cyan-400 rounded-full"></span>
              6. Bildirimler
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Kullanıcı, uygulamayı kullanarak bildirim almayı kabul eder. Bildirimler cihaz ayarlarından kapatılabilir.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-purple-400 flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-purple-400 to-cyan-400 rounded-full"></span>
              7. Fikri Mülkiyet
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Uygulamadaki tüm yazılım, tasarım ve içerikler Sentiocoach'e aittir. 
              İzinsiz kopyalanamaz ve dağıtılamaz.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-purple-400 flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-purple-400 to-cyan-400 rounded-full"></span>
              8. Hesabın Silinmesi
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Kullanıcı hesabını dilediği zaman uygulama içinden <span className="text-purple-400 font-semibold">Ayarlar → Hesabımı Sil</span> 
              seçeneğini kullanarak silebilir.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-purple-400 flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-purple-400 to-cyan-400 rounded-full"></span>
              9. Sorumluluk Reddi
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Uygulamada sunulan içeriklere dayanarak alınan kararlardan doğabilecek zararlardan geliştirici sorumlu tutulamaz.
            </p>
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
              <p className="text-gray-300 text-sm">
                <span className="text-yellow-400 font-semibold">Dikkat:</span> Kullanıcı, uygulamayı kendi sorumluluğunda kullanır.
              </p>
            </div>
          </section>

          {/* Section 10 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-purple-400 flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-purple-400 to-cyan-400 rounded-full"></span>
              10. Değişiklikler
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Bu Hizmet Şartları gerekli görüldüğünde güncellenebilir. Güncel metin uygulama içinde yayınlanır.
            </p>
          </section>

          {/* Contact */}
          <section className="space-y-4 pt-8 border-t border-gray-700">
            <h2 className="text-2xl font-bold text-purple-400 flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-purple-400 to-cyan-400 rounded-full"></span>
              İletişim
            </h2>
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4">
              <p className="text-gray-300 mb-2">
                Sorularınız için bizimle iletişime geçebilirsiniz:
              </p>
              <a href="mailto:sentiocoach@gmail.com" className="text-purple-400 hover:text-purple-300 font-semibold flex items-center gap-2">
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
