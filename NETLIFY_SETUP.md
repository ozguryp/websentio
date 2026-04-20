# 🚀 Netlify Kurulum Rehberi - Eski Preprocessing Hatası Çözümü

## ⚠️ Sorun
"Bu proje, kullanım dışı bırakılmakta olan eski bir ön işleme özelliğini kullanmaktadır"

## ✅ Çözüm Adımları

### 1. Netlify Dashboard Ayarları

#### A. Build Settings
1. Netlify Dashboard'a gidin
2. **Site Settings > Build & Deploy > Build settings**
3. "Edit settings" butonuna tıklayın
4. Şu ayarları yapın:

```
Build command: npm run build
Publish directory: dist
Functions directory: (boş bırakın)
```

#### B. Environment Variables
1. **Site Settings > Environment variables**
2. "Add a variable" tıklayın
3. Ekleyin:
   - Key: `NODE_VERSION`
   - Value: `20`

#### C. Eski Özellikleri Kapatın
1. **Site Settings > Build & Deploy > Post processing**
2. **Asset optimization** bölümünde:
   - "Bundle CSS" → KAPALI
   - "Minify CSS" → KAPALI
   - "Minify JS" → KAPALI
   - "Pretty URLs" → AÇIK (isteğe bağlı)

> **Neden?** Vite zaten bu optimizasyonları yapıyor. Netlify'ın eski preprocessing'i çakışmaya neden oluyor.

### 2. Deploy Ayarları

#### A. Deploy Contexts
**Site Settings > Build & Deploy > Deploy contexts**

Production branch: `main` (veya `master`)

```toml
[context.production]
  command = "npm run build"
  publish = "dist"

[context.deploy-preview]
  command = "npm run build"
  publish = "dist"
```

#### B. Build Hooks (Opsiyonel)
Otomatik deploy için webhook oluşturabilirsiniz.

### 3. Dosya Kontrolü

Projenizde şu dosyaların olduğundan emin olun:

✅ `netlify.toml` - Netlify yapılandırması
✅ `public/_redirects` - SPA routing
✅ `.nvmrc` - Node version
✅ `vite.config.ts` - Vite optimizasyonları

### 4. Yeniden Deploy

1. **Deploys** sekmesine gidin
2. "Trigger deploy" > "Clear cache and deploy site"
3. Build log'ları izleyin

### 5. Doğrulama

Deploy tamamlandıktan sonra:

✅ Site açılıyor mu?
✅ Routing çalışıyor mu? (örn: /about, /blog)
✅ Form gönderimi çalışıyor mu?
✅ Instagram linkleri açılıyor mu?

## 🔍 Sorun Giderme

### Build Hatası Alıyorsanız

```bash
# Local'de test edin
npm clean-install
npm run build
npm run preview
```

### "Page Not Found" Hatası

- `public/_redirects` dosyasının olduğundan emin olun
- İçeriği: `/*    /index.html   200`

### Yavaş Yükleme

1. **Site Settings > Build & Deploy > Post processing**
2. "Asset optimization" tamamen kapalı olmalı
3. Cache'i temizleyin ve redeploy yapın

### Hala Eski Preprocessing Uyarısı

1. Netlify Support'a ticket açın
2. Şunu söyleyin: "Please disable legacy preprocessing for my site"
3. Site URL'nizi verin

## 📊 Beklenen Build Çıktısı

```
✓ 59 modules transformed
dist/index.html                    0.98 kB
dist/assets/index-B_m72Cub.css    51.00 kB
dist/assets/react-vendor.js       45.98 kB
dist/assets/index.js             344.22 kB
✓ built in ~2s
```

## 🎯 Performans İpuçları

### Cache Stratejisi
Netlify otomatik olarak şu header'ları ekler:
- HTML: `Cache-Control: public, max-age=0, must-revalidate`
- Assets: `Cache-Control: public, max-age=31536000, immutable`

### CDN
Netlify global CDN kullanır, ek yapılandırma gerekmez.

### HTTPS
Otomatik SSL sertifikası aktif olur.

## 📞 Destek

Sorun devam ederse:

1. **Netlify Community**: https://answers.netlify.com/
2. **Netlify Support**: support@netlify.com
3. **Build Log'ları**: Deploys > Son deploy > Deploy log

## ✨ Başarılı Deploy Sonrası

Site URL'niz: `https://your-site-name.netlify.app`

Custom domain eklemek için:
1. **Domain settings > Add custom domain**
2. DNS kayıtlarını güncelleyin
3. SSL otomatik aktif olur

---

**Son Güncelleme**: 24 Şubat 2026
**Proje**: Sentio Web
**Email**: sentiocoach@gmail.com
