# Sentio - AI İlişki Koçu Web Sitesi

Yapay zeka destekli ileri seviye ilişki koçu platformu.

## 🚀 Özellikler

- ✨ Modern ve premium AI tasarım
- 💬 Mesaj analizi ve ilişki değerlendirmesi
- 🌟 Burç uyumu analizi
- 📱 Responsive tasarım
- 🎨 Glassmorphism ve neon efektler
- 📝 Blog sistemi
- 💳 Fiyatlandırma planları
- 📧 İletişim formu (mailto entegrasyonu)

## 🛠️ Teknolojiler

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **React Router** - Routing
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## 📦 Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Development server'ı başlat
npm run dev

# Production build
npm run build

# Build'i preview et
npm run preview
```

## 🌐 Deployment

Bu proje **Netlify** için optimize edilmiştir.

### Hızlı Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

### Manuel Deploy

Detaylı deployment rehberi için [DEPLOYMENT.md](./DEPLOYMENT.md) dosyasına bakın.

**Kısa özet:**
1. GitHub repository'nizi Netlify'a bağlayın
2. Build ayarları otomatik algılanır
3. Deploy!

## 📁 Proje Yapısı

```
websentio1/
├── public/              # Static dosyalar
│   ├── _redirects      # Netlify redirects
│   └── *.png           # Görseller
├── src/
│   ├── components/     # React bileşenleri
│   ├── pages/          # Sayfa bileşenleri
│   ├── App.tsx         # Ana uygulama
│   └── main.tsx        # Entry point
├── netlify.toml        # Netlify yapılandırması
└── vite.config.ts      # Vite yapılandırması
```

## 📄 Sayfalar

- **Ana Sayfa** (`/`) - Hero, özellikler, uygulama görselleri
- **Özellikler** (`/features`) - Detaylı özellik listesi
- **Fiyatlandırma** (`/pricing`) - Üyelik planları ve SSS
- **Hakkımızda** (`/about`) - Şirket bilgileri
- **Blog** (`/blog`) - İlişki ve psikoloji yazıları
- **İletişim** (`/contact`) - İletişim formu
- **Gizlilik Politikası** (`/privacy`)
- **Hizmet Şartları** (`/terms`)

## 🎨 Tasarım Özellikleri

- Premium AI estetiği
- Glassmorphism efektler
- Neon glow ve gradient'ler
- Smooth animasyonlar
- Dark mode tasarım
- Bento Grid layout

## 📧 İletişim

- **Email**: sentiocoach@gmail.com
- **Instagram**: [@sentiocoach](https://www.instagram.com/sentiocoach/)

## 📝 Lisans

© 2026 Sentio. Tüm hakları saklıdır.

## 🔧 Geliştirme

```bash
# Lint kontrolü
npm run lint

# Type check
npx tsc --noEmit
```

## 🚀 Production Build Özellikleri

- ✅ Optimize edilmiş chunk'lar
- ✅ React vendor ayrı bundle
- ✅ Gzip compression
- ✅ SPA routing
- ✅ SEO friendly
