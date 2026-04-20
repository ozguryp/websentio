# Sentio Web - Netlify Deployment Guide

## 🚀 Netlify'a Deploy Etme

Bu proje Netlify platformu için optimize edilmiştir.

### Otomatik Deployment (Önerilen)

1. **GitHub/GitLab Repository'nizi Netlify'a Bağlayın**
   - [Netlify Dashboard](https://app.netlify.com/) açın
   - "Add new site" > "Import an existing project" seçin
   - GitHub/GitLab hesabınızı bağlayın
   - Repository'nizi seçin

2. **Build Ayarları (Otomatik Algılanır)**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 20

3. **Deploy!**
   - "Deploy site" butonuna tıklayın
   - Her push'ta otomatik deploy olacak

### Manuel Deployment

```bash
# Netlify CLI'yi yükleyin
npm install -g netlify-cli

# Login olun
netlify login

# Deploy edin
netlify deploy --prod
```

### Netlify Ayarları

Netlify Dashboard'da kontrol edilmesi gerekenler:

#### Build & Deploy Settings
- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Node version**: 20 (Environment variables'da NODE_VERSION=20)

#### Domain Settings
- Custom domain ekleyebilirsiniz
- HTTPS otomatik aktif olur

### Dosya Yapısı

```
websentio1/
├── netlify.toml          # Netlify yapılandırması
├── public/
│   └── _redirects        # SPA routing için redirects
├── dist/                 # Build çıktısı (otomatik oluşur)
└── src/                  # Kaynak kodlar
```

### Environment Variables

Şu anda environment variable kullanılmıyor. İleride gerekirse:

1. Netlify Dashboard > Site settings > Environment variables
2. Key-value çiftlerini ekleyin
3. Redeploy edin

### Özellikler

✅ **SPA Routing**: Tüm route'lar index.html'e yönlendirilir
✅ **Otomatik HTTPS**: SSL sertifikası otomatik
✅ **CDN**: Global CDN ile hızlı yükleme
✅ **Optimize Build**: React vendor dosyaları ayrı chunk
✅ **Form Handling**: Netlify Forms kullanılabilir (ileride)

### Performans Optimizasyonları

- ✅ React vendor dosyaları ayrı chunk (daha iyi cache)
- ✅ Sourcemap kapalı (daha küçük build)
- ✅ Gzip compression (Netlify otomatik)
- ✅ HTTP/2 push (Netlify otomatik)

### Sorun Giderme

#### Build Hatası
```bash
# Local'de test edin
npm run build
npm run preview
```

#### Routing Çalışmıyor
- `netlify.toml` ve `public/_redirects` dosyalarının olduğundan emin olun
- Redeploy yapın

#### Yavaş Yükleme
- Netlify Analytics'i kontrol edin
- CDN cache'i temizleyin: Site settings > Build & deploy > Post processing > Clear cache

### Custom Domain Ekleme

1. Netlify Dashboard > Domain settings
2. "Add custom domain" tıklayın
3. Domain'inizi girin (örn: sentiocoach.com)
4. DNS kayıtlarını güncelleyin:
   ```
   A Record: 75.2.60.5
   CNAME: your-site.netlify.app
   ```

### İletişim

- **Email**: sentiocoach@gmail.com
- **Instagram**: https://www.instagram.com/sentiocoach/

### Faydalı Linkler

- [Netlify Docs](https://docs.netlify.com/)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#netlify)
- [React Router on Netlify](https://docs.netlify.com/routing/redirects/rewrites-proxies/#history-pushstate-and-single-page-apps)

---

## 📦 Build Komutu

```bash
npm run build
```

Build çıktısı `dist/` klasöründe oluşur.

## 🧪 Preview

```bash
npm run preview
```

Local'de production build'i test edin (http://localhost:4173)
