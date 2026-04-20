import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// LocalStorage'dan beğeni sayılarını al
const getLikesFromStorage = () => {
  const stored = localStorage.getItem('blogLikes');
  return stored ? JSON.parse(stored) : {};
};

// LocalStorage'a beğeni sayılarını kaydet
const saveLikesToStorage = (likes: Record<string, number>) => {
  localStorage.setItem('blogLikes', JSON.stringify(likes));
};

// Kullanıcının beğendiği yazıları al
const getLikedPostsFromStorage = () => {
  const stored = localStorage.getItem('likedPosts');
  return stored ? JSON.parse(stored) : [];
};

// Kullanıcının beğendiği yazıları kaydet
const saveLikedPostsToStorage = (likedPosts: string[]) => {
  localStorage.setItem('likedPosts', JSON.stringify(likedPosts));
};

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('Tümü');
  const [likes, setLikes] = useState<Record<string, number>>(getLikesFromStorage);
  const [likedPosts, setLikedPosts] = useState<string[]>(getLikedPostsFromStorage);

  // Likes değiştiğinde localStorage'a kaydet
  useEffect(() => {
    saveLikesToStorage(likes);
  }, [likes]);

  // Liked posts değiştiğinde localStorage'a kaydet
  useEffect(() => {
    saveLikedPostsToStorage(likedPosts);
  }, [likedPosts]);

  const handleLike = (slug: string) => {
    // Eğer kullanıcı bu yazıyı daha önce beğendiyse, işlem yapma
    if (likedPosts.includes(slug)) {
      return;
    }

    setLikes(prev => ({
      ...prev,
      [slug]: (prev[slug] || 0) + 1
    }));

    setLikedPosts(prev => [...prev, slug]);
  };

  const posts = [
    {
      title: 'İlişkilerde Kırmızı Bayraklar',
      excerpt: 'Görmezden gelinmemesi gereken 7 kırmızı bayrak. Sağlıklı bir ilişki için dikkat edilmesi gerekenler.',
      date: '20 Şubat 2026',
      category: 'İlişkiler',
      readTime: '6 dk',
      gradient: 'from-red-500/20 to-orange-500/20',
      emoji: '🚩',
      slug: 'iliskilerde-kirmizi-bayraklar'
    },
    {
      title: 'İlişkilerde İletişimin Önemi',
      excerpt: 'Sağlıklı bir ilişkinin temeli etkili iletişimden geçer. İletişim kurmanın en iyi yollarını keşfedin.',
      date: '15 Şubat 2026',
      category: 'İlişkiler',
      readTime: '5 dk',
      gradient: 'from-cyan-500/20 to-blue-500/20',
      emoji: '💬',
      slug: 'iliskilerde-iletisimin-onemi'
    },
    {
      title: 'Duygusal Zeka ve İlişkiler',
      excerpt: 'Duygusal zekanızı geliştirerek ilişkilerinizi nasıl güçlendirebileceğinizi öğrenin.',
      date: '10 Şubat 2026',
      category: 'Gelişim',
      readTime: '4 dk',
      gradient: 'from-purple-500/20 to-pink-500/20',
      emoji: '🧠',
      slug: 'duygusal-zeka-ve-iliskiler'
    },
    {
      title: 'Çiftlerde Çatışma Yönetimi',
      excerpt: 'Her ilişkide çatışma yaşanır. Önemli olan bu çatışmaları nasıl yönettiğinizdir.',
      date: '5 Şubat 2026',
      category: 'İlişkiler',
      readTime: '6 dk',
      gradient: 'from-blue-500/20 to-cyan-500/20',
      emoji: '🤝',
      slug: 'ciftlerde-catisma-yonetimi'
    },
    {
      title: 'Burç Uyumu: Bilim mi, Eğlence mi?',
      excerpt: 'Astroloji ve ilişkiler hakkında bilmeniz gereken her şey.',
      date: '1 Şubat 2026',
      category: 'Astroloji',
      readTime: '3 dk',
      gradient: 'from-yellow-500/20 to-orange-500/20',
      emoji: '⭐',
      slug: 'burc-uyumu-bilim-mi-eglence-mi'
    },
    {
      title: 'Yapay Zeka ve İlişki Danışmanlığı',
      excerpt: 'Modern teknoloji ilişki danışmanlığını nasıl değiştiriyor?',
      date: '28 Ocak 2026',
      category: 'Teknoloji',
      readTime: '7 dk',
      gradient: 'from-green-500/20 to-emerald-500/20',
      emoji: '🤖',
      slug: 'yapay-zeka-ve-iliski-danismanligi'
    },
    {
      title: 'İlk Randevuda Dikkat Edilmesi Gerekenler',
      excerpt: 'İlk izlenim önemlidir. İlk randevunuzu unutulmaz kılmak için ipuçları.',
      date: '25 Ocak 2026',
      category: 'Flört',
      readTime: '4 dk',
      gradient: 'from-pink-500/20 to-rose-500/20',
      emoji: '💕',
      slug: 'ilk-randevuda-dikkat-edilmesi-gerekenler'
    },
    {
      title: 'Yapay Zeka ile İlişki Analizi Nasıl Yapılır?',
      excerpt: 'Mesajlarınızın arkasındaki duyguları, niyetleri ve ilişki dinamiklerini yapay zeka ile nasıl okuyabilirsiniz? Adım adım rehber.',
      date: '10 Nisan 2026',
      category: 'Teknoloji',
      readTime: '8 dk',
      gradient: 'from-cyan-500/20 to-indigo-500/20',
      emoji: '🔍',
      slug: 'yapay-zeka-ile-iliski-analizi-nasil-yapilir'
    },
    {
      title: 'Toksik İlişkiler Nasıl Anlaşılır?',
      excerpt: 'Toksik bir ilişkide olduğunuzu fark etmek zor olabilir. İşte sizi yıpratan ilişkilerin 8 net belirtisi ve çıkış yolları.',
      date: '5 Nisan 2026',
      category: 'İlişkiler',
      readTime: '7 dk',
      gradient: 'from-orange-500/20 to-red-500/20',
      emoji: '⚠️',
      slug: 'toksik-iliskiler-nasil-anlasilir'
    },
    {
      title: 'Mesajlaşmada Duygusal Mesafe: Soğuk Mesajları Okumak',
      excerpt: '"Tamam", "Olur", "Neyse" — kısa mesajlar ne anlama gelir? Mesajlaşma dilindeki duygusal mesafeyi anlamanın yolları.',
      date: '1 Nisan 2026',
      category: 'İletişim',
      readTime: '5 dk',
      gradient: 'from-blue-500/20 to-purple-500/20',
      emoji: '💭',
      slug: 'mesajlasmada-duygusal-mesafe'
    }
  ];

  const categories = ['Tümü', 'İlişkiler', 'Gelişim', 'Astroloji', 'Teknoloji', 'Flört', 'İletişim'];

  return (
    <div className="min-h-screen py-20 bg-gray-900 relative overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-48 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            İçerik Vitrini
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            İlişkiler, kişisel gelişim ve daha fazlası hakkında faydalı içerikler.
          </p>
        </div>

        {/* Category Filters - Underline Style */}
        <div className="flex flex-wrap gap-8 justify-center mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative pb-2 text-lg font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'text-cyan-400'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              {category}
              {activeCategory === category && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]"></span>
              )}
            </button>
          ))}
        </div>

        {/* Hero Blog Post - Full Width */}
        <div className="mb-8">
          {(() => {
            const filteredPosts = activeCategory === 'Tümü' ? posts : posts.filter(p => p.category === activeCategory);
            const heroPost = filteredPosts[0];
            if (!heroPost) return <p className="text-center text-gray-400 py-12">Bu kategoride henüz yazı yok.</p>;
            return (
          <Link to={`/blog/${heroPost.slug}`}>
            <article className="glass-card bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl rounded-3xl border border-cyan-500/30 overflow-hidden group cursor-pointer hover:border-cyan-500/60 transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
                <div className="relative aspect-video lg:aspect-square rounded-2xl bg-gradient-to-br from-cyan-500/30 to-blue-500/30 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-9xl opacity-20">{heroPost.emoji}</span>
                  </div>
                  <div className="absolute top-4 right-4 glass-card bg-gray-900/50 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
                    {heroPost.readTime} okuma
                  </div>
                </div>
                
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-4 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-sm font-semibold border border-cyan-500/30">
                      {heroPost.category}
                    </span>
                    <span className="text-sm text-gray-400">{heroPost.date}</span>
                  </div>
                  
                  <h2 className="text-4xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">
                    {heroPost.title}
                  </h2>
                  
                  <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                    {heroPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-cyan-400 hover:text-blue-400 font-semibold text-lg transition-all group-hover:gap-4">
                      Devamını Oku
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleLike(heroPost.slug);
                      }}
                      disabled={likedPosts.includes(heroPost.slug)}
                      className={`flex items-center gap-2 transition-all glass-card backdrop-blur-xl px-4 py-2 rounded-xl ${
                        likedPosts.includes(heroPost.slug)
                          ? 'bg-red-500/20 border border-red-500/50 text-red-400 cursor-not-allowed'
                          : 'bg-gray-800/40 text-gray-400 hover:text-red-400 hover:bg-red-500/10'
                      }`}
                    >
                      <span className="text-2xl">{likedPosts.includes(heroPost.slug) ? '❤️' : '🤍'}</span>
                      <span className="text-lg font-semibold">{likes[heroPost.slug] || 0}</span>
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </Link>
            );
          })()}
        </div>

        {/* Blog Grid - Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {(activeCategory === 'Tümü' ? posts : posts.filter(p => p.category === activeCategory)).slice(1).map((post, index) => (
            <Link key={index} to={`/blog/${post.slug}`}>
              <article className="glass-card bg-gray-800/40 backdrop-blur-xl rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden group cursor-pointer">
                {/* Abstract Gradient Background with Watermark Emoji */}
                <div className={`relative aspect-video bg-gradient-to-br ${post.gradient} overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-8xl opacity-20">{post.emoji}</span>
                  </div>
                  <div className="absolute top-3 right-3 glass-card bg-gray-900/50 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">
                    {post.readTime}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-cyan-400 font-semibold">{post.category}</span>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-cyan-400 hover:text-blue-400 font-semibold flex items-center transition-all text-sm group-hover:gap-2">
                      Devamını Oku
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleLike(post.slug);
                      }}
                      disabled={likedPosts.includes(post.slug)}
                      className={`flex items-center gap-1 transition-all ${
                        likedPosts.includes(post.slug)
                          ? 'text-red-400 cursor-not-allowed'
                          : 'text-gray-400 hover:text-red-400'
                      }`}
                    >
                      <span className="text-lg">{likedPosts.includes(post.slug) ? '❤️' : '🤍'}</span>
                      <span className="text-sm font-semibold">{likes[post.slug] || 0}</span>
                    </button>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mb-20">
          <button className="glass-card bg-gray-800/40 backdrop-blur-xl hover:bg-gray-700/40 px-8 py-3 rounded-xl font-semibold transition-all duration-300 border border-gray-700/50 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]">
            Daha Fazla Yükle
          </button>
        </div>

        {/* Newsletter Section with Gradient Border */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl"></div>
          <div className="relative glass-card bg-gray-800/40 backdrop-blur-xl rounded-3xl p-12 border-2 border-transparent bg-clip-padding">
            <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-purple-500/50 via-cyan-500/50 to-blue-500/50 -z-10" style={{ WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }}></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Bültenimize Katılın
                </h2>
                <p className="text-gray-400 mb-6">
                  İlişkiler ve kişisel gelişim hakkında en güncel içerikleri e-posta ile alın.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="E-posta adresiniz"
                  className="flex-1 px-4 py-3 rounded-xl glass-card bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 focus:border-cyan-500 focus:outline-none transition-all duration-300 focus:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                />
                <button className="bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 rounded-xl font-semibold hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all duration-300 whitespace-nowrap hover:scale-105">
                  Abone Ol
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
