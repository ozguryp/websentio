import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="min-h-screen py-20" style={{ background: 'linear-gradient(180deg, #050810 0%, #0A101E 100%)' }}>
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Hakkımızda
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Sentio, ilişkileri güçlendirmek ve insanların birbirlerini daha iyi anlamalarına yardımcı olmak için geliştirildi.
          </p>
        </div>

        <div className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 backdrop-blur-xl bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-4">
                <span className="text-cyan-400 text-sm font-semibold font-mono">VİZYONUMUZ</span>
              </div>
              <h2 className="text-4xl font-extrabold tracking-tight text-white">
                İlişkileri <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">güçlendirmek</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                İlişkiler hayatın en önemli parçalarından biridir. Ancak bazen karşımızdaki kişiyi anlamak, 
                duygularını çözmek ve doğru iletişim kurmak zor olabilir.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Sentio, yapay zeka teknolojisinin gücünü kullanarak insanların ilişkilerini daha sağlıklı, 
                mutlu ve güçlü hale getirmelerine yardımcı olmayı amaçlar.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Amacımız, herkesin ilişkilerinde daha <span className="text-cyan-400 font-semibold">bilinçli</span>, 
                <span className="text-cyan-400 font-semibold"> anlayışlı</span> ve 
                <span className="text-cyan-400 font-semibold"> empatik</span> olmasını sağlamaktır.
              </p>
            </div>
            <div className="relative perspective-1000">
              <div className="backdrop-blur-xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-3xl p-12 border border-cyan-500/20"
                   style={{ 
                     transform: 'rotateY(-5deg) rotateX(2deg)',
                     boxShadow: '0 0 60px rgba(0, 242, 255, 0.15)'
                   }}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl blur-2xl"></div>
                  <div className="relative aspect-square backdrop-blur-xl bg-white/[0.03] rounded-2xl flex items-center justify-center border border-white/10">
                    <div className="text-center space-y-4">
                      <div className="relative inline-block">
                        <div className="absolute inset-0 bg-cyan-500/30 rounded-full blur-xl animate-pulse"></div>
                        <svg className="relative w-32 h-32 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full w-3/4 mx-auto animate-pulse"></div>
                        <div className="h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full w-1/2 mx-auto animate-pulse delay-100"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-32">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 backdrop-blur-xl bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
              <span className="text-purple-400 text-sm font-semibold font-mono">DEĞERLERİMİZ</span>
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Temel Değerlerimiz
              </span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative backdrop-blur-xl bg-white/[0.03] rounded-3xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-cyan-500/0 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center backdrop-blur-md border border-cyan-500/30 group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Gizlilik</h3>
                <p className="text-gray-400 leading-relaxed">
                  Verilerinizin gizliliği bizim için en önemli önceliktir. Tüm bilgileriniz şifreli ve güvenli bir şekilde saklanır.
                </p>
              </div>
            </div>

            <div className="group relative backdrop-blur-xl bg-white/[0.03] rounded-3xl p-8 border border-white/10 hover:border-pink-500/50 transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-pink-500/0 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-pink-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center backdrop-blur-md border border-pink-500/30 group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Empati</h3>
                <p className="text-gray-400 leading-relaxed">
                  İnsanların duygularını anlamak ve onlara yardımcı olmak için empatiyle yaklaşırız.
                </p>
              </div>
            </div>

            <div className="group relative backdrop-blur-xl bg-white/[0.03] rounded-3xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-purple-500/0 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center backdrop-blur-md border border-purple-500/30 group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">İnovasyon</h3>
                <p className="text-gray-400 leading-relaxed">
                  En son teknolojileri kullanarak sürekli gelişir ve kullanıcılarımıza en iyi deneyimi sunarız.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative perspective-1000 order-2 lg:order-1">
              <div className="backdrop-blur-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-3xl p-12 border border-blue-500/20"
                   style={{ 
                     transform: 'rotateY(5deg) rotateX(2deg)',
                     boxShadow: '0 0 60px rgba(59, 130, 246, 0.15)'
                   }}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-2xl"></div>
                  <div className="relative aspect-square backdrop-blur-xl bg-white/[0.03] rounded-2xl flex items-center justify-center border border-white/10">
                    <div className="text-center space-y-6">
                      <div className="relative inline-block">
                        <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-xl animate-pulse"></div>
                        <svg className="relative w-32 h-32 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div className="grid grid-cols-3 gap-3">
                        <div className="h-12 backdrop-blur-md bg-cyan-500/10 rounded-xl border border-cyan-500/20 flex items-center justify-center">
                          <span className="text-cyan-400 text-2xl">👨‍💻</span>
                        </div>
                        <div className="h-12 backdrop-blur-md bg-purple-500/10 rounded-xl border border-purple-500/20 flex items-center justify-center">
                          <span className="text-purple-400 text-2xl">🧠</span>
                        </div>
                        <div className="h-12 backdrop-blur-md bg-blue-500/10 rounded-xl border border-blue-500/20 flex items-center justify-center">
                          <span className="text-blue-400 text-2xl">💡</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="inline-block px-4 py-2 backdrop-blur-xl bg-blue-500/10 border border-blue-500/20 rounded-full mb-4">
                <span className="text-blue-400 text-sm font-semibold font-mono">EKİBİMİZ</span>
              </div>
              <h2 className="text-4xl font-extrabold tracking-tight text-white">
                Uzman <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Ekibimiz</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Sentio ekibi, <span className="text-cyan-400 font-semibold">yapay zeka</span>, 
                <span className="text-purple-400 font-semibold"> psikoloji</span> ve 
                <span className="text-blue-400 font-semibold"> yazılım geliştirme</span> alanlarında uzman profesyonellerden oluşur.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Amacımız, teknolojinin gücünü insanların mutluluğu için kullanmak ve ilişkileri güçlendirmektir.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Her gün yüzlerce kullanıcıya hizmet vererek onların daha mutlu ilişkiler yaşamalarına yardımcı oluyoruz.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">5000+</div>
                  <div className="text-sm text-gray-400">Mutlu Kullanıcı</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">50K+</div>
                  <div className="text-sm text-gray-400">Analiz Yapıldı</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">4.3/5</div>
                  <div className="text-sm text-gray-400">Kullanıcı Puanı</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative backdrop-blur-xl rounded-3xl p-16 text-center overflow-hidden"
             style={{
               background: 'linear-gradient(135deg, rgba(0, 242, 255, 0.05) 0%, rgba(112, 0, 255, 0.05) 100%)',
               border: '1px solid rgba(0, 242, 255, 0.2)'
             }}>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
          </div>
          <div className="relative z-10">
            <div className="inline-block mb-6">
              <div className="text-6xl mb-4">💬</div>
            </div>
            <h2 className="text-4xl font-extrabold mb-4 text-white">
              Sizin için <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">buradayız</span>
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
              Sorularınız veya önerileriniz mi var? Size yardımcı olmaktan mutluluk duyarız.
            </p>
            <Link
              to="/contact"
              className="inline-block relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative px-10 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl font-bold text-lg hover:scale-105 transition-transform">
                İletişime Geçin
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


