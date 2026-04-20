import { useState } from 'react';
import { Link } from 'react-router-dom';

const subjects = [
  { value: '', label: 'Konu seç (isteğe bağlı)' },
  { value: 'general', label: '💬 Genel Soru' },
  { value: 'support', label: '🔧 Teknik Destek' },
  { value: 'billing', label: '💳 Faturalandırma' },
  { value: 'feedback', label: '💡 Geri Bildirim' },
  { value: 'account-deletion', label: '🗑️ Hesap Silme' },
  { value: 'bug-report', label: '🐛 Hata Bildirme' },
  { value: 'partnership', label: '🤝 İş Ortaklığı' },
  { value: 'other', label: '📌 Diğer' },
];

const faqSuggestions = [
  { q: 'Mesajlarım güvende mi?', href: '/faq' },
  { q: 'Aboneliği nasıl iptal ederim?', href: '/faq' },
  { q: 'Verilerim silinebilir mi?', href: '/faq' },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[${formData.subject || 'Genel'}] ${formData.name}`);
    const body = encodeURIComponent(
      `İsim: ${formData.name}\nE-posta: ${formData.email}\nKonu: ${formData.subject || 'Belirtilmedi'}\n\nMesaj:\n${formData.message}`
    );
    window.location.href = `mailto:sentiocoach@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-[500px] h-[500px] bg-cyan-500/6 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-48 w-[400px] h-[400px] bg-purple-500/6 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/25 rounded-full px-4 py-1.5 text-green-400 text-xs font-semibold mb-5">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            Ortalama yanıt süresi: 2–6 saat
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Takıldığın bir şey mi var?
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Hemen yaz, çözelim.
            </span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Soru, öneri veya sorun — ekibimiz gerçekten okuyor ve yanıtlıyor.
          </p>
        </div>

        {/* Hızlı Erişim */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
          <a href="mailto:sentiocoach@gmail.com"
            className="glass-card bg-white/[0.03] border border-white/8 rounded-2xl p-4 flex items-center gap-3 hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all group">
            <div className="w-10 h-10 bg-cyan-500/15 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-500">Doğrudan yaz</p>
              <p className="text-white text-sm font-medium">sentiocoach@gmail.com</p>
            </div>
          </a>

          <Link to="/faq"
            className="glass-card bg-white/[0.03] border border-white/8 rounded-2xl p-4 flex items-center gap-3 hover:border-purple-500/40 hover:bg-purple-500/5 transition-all group">
            <div className="w-10 h-10 bg-purple-500/15 rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="text-lg">🛡️</span>
            </div>
            <div>
              <p className="text-xs text-gray-500">Cevap burada olabilir</p>
              <p className="text-white text-sm font-medium">Sıkça Sorulan Sorular →</p>
            </div>
          </Link>

          <a href="https://www.instagram.com/sentiocoach/" target="_blank" rel="noopener noreferrer"
            className="glass-card bg-white/[0.03] border border-white/8 rounded-2xl p-4 flex items-center gap-3 hover:border-pink-500/40 hover:bg-pink-500/5 transition-all group">
            <div className="w-10 h-10 bg-pink-500/15 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-500">Instagram'da bul</p>
              <p className="text-white text-sm font-medium">@sentiocoach →</p>
            </div>
          </a>
        </div>

        {/* Ana Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Form — 3/5 */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="glass-card bg-gradient-to-br from-cyan-500/8 to-blue-500/8 border border-cyan-500/25 rounded-3xl p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
                <div className="text-6xl mb-5">💌</div>
                <h3 className="text-2xl font-bold text-white mb-2">Mesajın ulaştı!</h3>
                <p className="text-gray-400 mb-6 max-w-xs">Genellikle 2–6 saat içinde geri dönüyoruz. Sabırsızlıkla bekliyoruz.</p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', subject: '', message: '' }); }}
                  className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold transition-colors"
                >
                  Yeni mesaj gönder →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card bg-white/[0.03] border border-white/8 rounded-3xl p-8 space-y-5">

                {/* FAQ önerileri — mesaj yazarken */}
                {formData.message.length > 10 && (
                  <div className="bg-blue-500/8 border border-blue-500/20 rounded-xl p-3">
                    <p className="text-xs text-blue-400 font-medium mb-2">Bunu mu sormak istedin?</p>
                    <div className="flex flex-wrap gap-2">
                      {faqSuggestions.map((s) => (
                        <Link key={s.q} to={s.href}
                          className="text-xs bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-blue-400/40 px-3 py-1 rounded-full transition-all">
                          {s.q}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Ad + Email yan yana */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 mb-1.5">Adın</label>
                    <input
                      type="text" name="name" value={formData.name} onChange={handleChange}
                      onFocus={() => setFocused('name')} onBlur={() => setFocused('')}
                      required placeholder="Adın"
                      className={`w-full px-4 py-3 bg-gray-900/60 rounded-xl border transition-all text-white placeholder-gray-600 text-sm outline-none ${
                        focused === 'name' ? 'border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.12)]' : 'border-white/8 hover:border-white/15'
                      }`}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 mb-1.5">E-posta</label>
                    <input
                      type="email" name="email" value={formData.email} onChange={handleChange}
                      onFocus={() => setFocused('email')} onBlur={() => setFocused('')}
                      required placeholder="ornek@email.com"
                      className={`w-full px-4 py-3 bg-gray-900/60 rounded-xl border transition-all text-white placeholder-gray-600 text-sm outline-none ${
                        focused === 'email' ? 'border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.12)]' : 'border-white/8 hover:border-white/15'
                      }`}
                    />
                  </div>
                </div>

                {/* Konu — isteğe bağlı */}
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1.5">
                    Konu <span className="text-gray-600 font-normal">(isteğe bağlı)</span>
                  </label>
                  <select
                    name="subject" value={formData.subject} onChange={handleChange}
                    onFocus={() => setFocused('subject')} onBlur={() => setFocused('')}
                    className={`w-full px-4 py-3 bg-gray-900/60 rounded-xl border transition-all text-white text-sm outline-none ${
                      focused === 'subject' ? 'border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.12)]' : 'border-white/8 hover:border-white/15'
                    }`}
                  >
                    {subjects.map(s => (
                      <option key={s.value} value={s.value} className="bg-gray-900">{s.label}</option>
                    ))}
                  </select>
                </div>

                {/* Mesaj */}
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1.5">Mesajın</label>
                  <textarea
                    name="message" value={formData.message} onChange={handleChange}
                    onFocus={() => setFocused('message')} onBlur={() => setFocused('')}
                    required rows={5} placeholder="Ne konuda yardımcı olabiliriz?"
                    className={`w-full px-4 py-3 bg-gray-900/60 rounded-xl border transition-all resize-none text-white placeholder-gray-600 text-sm outline-none ${
                      focused === 'message' ? 'border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.12)]' : 'border-white/8 hover:border-white/15'
                    }`}
                  />
                </div>

                {/* Submit + güven */}
                <div>
                  <button type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 py-3.5 rounded-xl font-bold text-base hover:scale-[1.01] hover:shadow-[0_0_25px_rgba(34,211,238,0.3)] transition-all duration-300">
                    Destek Ekibine Yaz
                  </button>
                  <div className="flex items-center justify-center gap-4 mt-3">
                    <p className="text-xs text-gray-500 text-center">Genellikle 2–6 saat içinde dönüş yapıyoruz</p>
                  </div>
                  {/* Güven — butona yakın */}
                  <div className="flex items-center justify-center gap-5 mt-4">
                    <span className="flex items-center gap-1.5 text-xs text-gray-500">
                      <span>🔒</span> Gizliliğiniz güvende
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-gray-500">
                      <span>🤝</span> İnsan ekibi yanıtlıyor
                    </span>
                  </div>
                </div>
              </form>
            )}
          </div>

          {/* Sağ Kolon — 2/5 */}
          <div className="lg:col-span-2 space-y-5">

            {/* Daha hızlı çözüm */}
            <div className="glass-card bg-white/[0.03] border border-white/8 rounded-2xl p-5">
              <h3 className="text-white font-bold mb-1 flex items-center gap-2">
                <span>⚡</span> Daha hızlı çözüm almak için
              </h3>
              <p className="text-xs text-gray-500 mb-4">Bu bilgileri eklersen daha hızlı yardımcı olabiliriz</p>
              <ul className="space-y-2.5">
                {[
                  'Hangi özelliği kullandığını belirt',
                  'Hata varsa ekran görüntüsü ekle',
                  'Cihaz ve işletim sistemi bilgini paylaş',
                  'Abonelik sorunlarında sipariş numaranı yaz',
                ].map((tip, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-gray-400 text-sm">
                    <span className="w-5 h-5 rounded-full bg-white/5 text-gray-500 flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">{i + 1}</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            {/* Canlı destek bubble */}
            <div className="glass-card bg-gradient-to-br from-cyan-500/8 to-blue-500/8 border border-cyan-500/20 rounded-2xl p-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                  <span className="text-lg">👋</span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm mb-1">Şu an aktifiz</p>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    Genellikle 1–2 saat içinde yanıtlıyoruz. Bot değil, gerçek bir ekip.
                  </p>
                </div>
              </div>
            </div>

            {/* KVKK */}
            <div className="flex items-start gap-2.5 px-1">
              <span className="text-base mt-0.5">🛡️</span>
              <p className="text-xs text-gray-500 leading-relaxed">
                Kişisel verileriniz KVKK kapsamında korunmaktadır.{' '}
                <Link to="/kvkk" className="text-gray-400 hover:text-white underline transition-colors">
                  KVKK Aydınlatma Metni
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
