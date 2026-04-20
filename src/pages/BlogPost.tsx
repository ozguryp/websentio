import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

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

interface BlogPostData {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  category: string;
  emoji: string;
  content: {
    intro: string;
    sections: {
      title: string;
      content: string;
      points?: string[];
    }[];
    conclusion: string;
  };
}

const blogPosts: Record<string, BlogPostData> = {
  'iliskilerde-iletisimin-onemi': {
    id: 'iliskilerde-iletisimin-onemi',
    title: 'İlişkilerde İletişimin Önemi',
    subtitle: 'İlişkilerin Gizli Kahramanı: Sadece Konuşmak Değil, Anlaşılmak',
    date: '15 Şubat 2026',
    readTime: '5 dk',
    category: 'İlişkiler',
    emoji: '💬',
    content: {
      intro: 'Bir ilişkiyi ayakta tutan şey sadece sevgi midir? Sevgi, temeldir; ancak o temelin üzerine sağlam bir bina inşa etmek için etkili iletişim şarttır. Çoğu ilişki, taraflar birbirini sevmediği için değil, birbirini "duyamadığı" için yıpranır.',
      sections: [
        {
          title: 'İletişim Neden Bu Kadar Önemli?',
          content: 'İletişim, partnerinizle aranızdaki görünmez bir köprüdür. Bu köprü bakımsız kaldığında, mesafeler artar ve duygusal kopuşlar başlar. İşte iletişimin hayati önem taşıdığı 3 ana nokta:',
          points: [
            'Güven İnşası: Düşüncelerinizi ve hislerinizi dürüstçe paylaştığınızda, belirsizlikler ortadan kalkar. Belirsizliğin olmadığı yerde güven çiçek açar.',
            'Çatışma Yönetimi: Tartışmalar kaçınılmazdır. Ancak iyi bir iletişim, tartışmayı bir "savaş" olmaktan çıkarıp "sorun çözme seansına" dönüştürür.',
            'Duygusal Yakınlık: Sadece günün nasıl geçtiğini anlatmak değil, korkularını ve hayallerini paylaşmak bağları derinleştirir.'
          ]
        },
        {
          title: 'Sağlıklı Bir İletişim İçin Altın Kurallar',
          content: 'Blog okuyucularının hayatına hemen dokunacak birkaç pratik ipucu:',
          points: [
            '"Sen" Yerine "Ben" Dilini Kullanın: "Sen beni hep ihmal ediyorsun" demek yerine, "Son zamanlarda kendimi biraz yalnız hissediyorum ve seninle vakit geçirmeye ihtiyaç duyuyorum" demeyi deneyin. Suçlama biter, çözüm başlar.',
            'Aktif Dinleme Yapın: Partneriniz konuşurken vereceğiniz cevabı düşünmeyi bırakın. Sadece ne hissettiğini anlamaya odaklanın. Bazen sadece "Anlıyorum, bu seni üzmüş olmalı" demek, binlerce tavsiyeden daha değerlidir.',
            'Vücut Dilini Hafife Almayın: Kelimeler %7 ise, ses tonu ve vücut dili geri kalan büyük pastadır. Göz teması kurmak ve telefonları bir kenara bırakmak "Sana değer veriyorum" demenin en kısa yoludur.'
          ]
        }
      ],
      conclusion: 'İlişkinizdeki iletişimi güçlendirmek bir gecede olmaz; bu bir yolculuktur. Bugün partnerinize sadece "Günün nasıl geçti?" diye sormak yerine, "Bugün seni en çok ne gülümsetti?" diye sormayı deneyin. Farkı göreceksiniz.'
    }
  },
  'duygusal-zeka-ve-iliskiler': {
    id: 'duygusal-zeka-ve-iliskiler',
    title: 'Duygusal Zekâ ve İlişkiler',
    subtitle: 'İlişkilerin Görünmez Gücü: Duygusal Zekâ (EQ)',
    date: '10 Şubat 2026',
    readTime: '4 dk',
    category: 'Gelişim',
    emoji: '🧠',
    content: {
      intro: 'Bir ilişkide sadece "mantıklı" olmak yetmez. Çoğu zaman partnerimizin ne söylediğinden çok, ne hissettiğini anlamak gerekir. İşte tam bu noktada devreye Duygusal Zekâ giriyor. Duygusal zekâsı yüksek bir ilişki, fırtınalara karşı en dayanıklı olanıdır.',
      sections: [
        {
          title: 'Duygusal Zekâ İlişkiye Ne Katar?',
          content: 'Duygusal zekâ, sadece kendi hislerimizi kontrol etmek değil, aynı zamanda partnerimizin duygusal dünyasına bir pencere açabilmektir.',
          points: [
            'Öz Farkındalık: Kendi tetikleyicilerinizi bilmektir. "Şu an neden sinirliyim? Gerçekten ona mı kızdım, yoksa iş yerindeki stresimi mi yansıtıyorum?" diyebilmek büyük bir fark yaratır.',
            'Empati: Partnerinizin ayakkabılarıyla birkaç adım yürüyebilmektir. Onun bakış açısını haklı bulmasanız bile, o anki duygusunu (üzüntü, korku, hayal kırıklığı) kabul etmektir.',
            'Duygusal Düzenleme: Tartışma anında yükselen öfkeyi kontrol edip, yapıcı kalabilme becerisidir.'
          ]
        },
        {
          title: 'Partnerinizle Duygusal Bağı Güçlendirmenin Yolları',
          content: 'İlişkinizde EQ seviyesini artırmak için şu adımları izleyebilirsiniz:',
          points: [
            'Duygu Sözlüğünüzü Genişletin: "Kötü hissediyorum" yerine "Bugün biraz değersizleşmiş hissettim" veya "Huzursuzum" gibi daha spesifik ifadeler kullanın.',
            'Yargılamadan Dinleyin: Partneriniz size bir sorununu anlattığında hemen çözüm üretmeye çalışmayın. Çözümden önce duygusal onay verin: "Bu durumun seni ne kadar yorduğunu görebiliyorum."',
            'Küçük İşaretleri Okuyun: Duygusal zekâ, kelimelerin ötesine bakmaktır. Partnerinizin bakışındaki bir hüzün veya ses tonundaki bir titreme, aslında bir yardım çağrısı olabilir.'
          ]
        }
      ],
      conclusion: 'IQ sizi bir araya getirebilir ama ilişkinin ömrünü belirleyen EQ\'dur. Duygusal zekânın düşük olduğu ilişkilerde genellikle "Savunmacılık" ve "Duvar Örme" görülür. Oysa yüksek EQ, savunma kalkanlarını indirip partnerinize "Seni görüyorum ve yanındayım" demenizi sağlar.'
    }
  },
  'ciftlerde-catisma-yonetimi': {
    id: 'ciftlerde-catisma-yonetimi',
    title: 'Çiftlerde Çatışma Yönetimi',
    subtitle: 'Fırtınalı Denizlerde Yön Bulmak',
    date: '5 Şubat 2026',
    readTime: '6 dk',
    category: 'İlişkiler',
    emoji: '🤝',
    content: {
      intro: 'Her ilişkide anlaşmazlıklar olur; bu bir gerçek. Önemli olan, bu anlaşmazlıkların ilişkiyi yıpratmasına izin vermeden, onları büyüme fırsatlarına dönüştürebilmektir. Çatışma, ilişkinin sonu değil, daha iyiye gitmesi için bir adımdır, yeter ki doğru yönetilsin.',
      sections: [
        {
          title: 'Çatışma Neden Kaçınılmazdır?',
          content: 'İki farklı birey, iki farklı bakış açısı, iki farklı geçmiş… Fikir ayrılıkları yaşamamız doğaldır. Aslında çatışma, ilişkiye dair neyin önemli olduğunu, hangi sınırların aşıldığını ve hangi ihtiyaçların karşılanmadığını gösteren bir sinyaldir.'
        },
        {
          title: 'Sağlıklı Bir Çatışma Yönetimi İçin Temel Kurallar',
          content: 'Çatışmayı bir savaşa çevirmeden, yapıcı bir diyaloga dönüştürmek için şu adımları atabilirsiniz:',
          points: [
            'Duygusal Boşalma Yerine Duygu İfade Etme: "Sen hep böylesin!" demek yerine, "Bu durum beni kırdı/hayal kırıklığına uğrattı" demeyi öğrenin.',
            'Sakin Kalın: Tartışmaların harareti yükseldiğinde, "mola" istemekten çekinmeyin. "Şu an çok sinirliyim ve mantıklı konuşamayabilirim, 20 dakika sonra sakinleşince konuşmaya devam edelim mi?" demek, durumu daha da kötüleştirmeyi engeller.',
            'Soruna Odaklanın, Kişiliğe Değil: Tartışma konusundan sapıp "Senin zaten huyun bu!" gibi kişisel saldırılara geçmek, çatışmayı çözümsüz hale getirir.'
          ]
        },
        {
          title: 'Çatışmayı Bir Fırsata Çevirmek',
          content: 'Her çatışmadan bir ders çıkarın:',
          points: [
            'Ortak Bir Zemin Arayın: Her iki tarafın da ihtiyaçlarını karşılayacak bir çözüm bulmaya çalışın.',
            'Affetmeyi Bilin: Tartışma bittiğinde, konuyu kapatın. Geçmiş tartışmaları tekrar gündeme getirmek, iyileşmeyi engeller.',
            'Öğrenin ve Büyüyün: "Bu tartışmadan ne öğrendik? Bir dahaki sefere daha farklı ne yapabiliriz?" gibi sorular sormak, ilişkinizi gelecekteki zorluklara karşı daha dirençli hale getirir.'
          ]
        }
      ],
      conclusion: 'İlişkinizdeki çatışmalar, sizi ayrı düşürmek için değil, birbirinize daha yakın olmak için birer davettir. Unutmayın, düşmanınız partneriniz değil, tartışılan konudur.'
    }
  },
  'burc-uyumu-bilim-mi-eglence-mi': {
    id: 'burc-uyumu-bilim-mi-eglence-mi',
    title: 'Burç Uyumu: Bilim mi, Eğlence mi?',
    subtitle: 'İlişkilerin Gizli Pusulası',
    date: '1 Şubat 2026',
    readTime: '3 dk',
    category: 'Astroloji',
    emoji: '⭐',
    content: {
      intro: 'Sosyal medyada gördüğümüz "Bu burçlar asla anlaşamaz!" veya "Mükemmel ikili!" başlıkları… Flört ettiğimiz kişinin burcunu öğrenince içten içe "Acaba anlaşır mıyız?" diye düşünmek… Burç uyumu, ilişkilerde sıkça karşımıza çıkan, bazen ciddiye aldığımız, bazen de sadece eğlence olarak gördüğümüz bir konu.',
      sections: [
        {
          title: 'Burç Uyumu Fenomeni Nereden Geliyor?',
          content: 'Astroloji, binlerce yıldır insanların evreni ve kendilerini anlamak için kullandığı kadim bir sistem. Doğduğumuz anda Güneş, Ay ve gezegenlerin gökyüzündeki konumlarının kişiliğimiz ve kaderimiz üzerinde etkili olduğuna inanılır.'
        },
        {
          title: 'Bilimsel Gerçeklik mi, Kişisel İnanç mı?',
          content: 'Modern bilim, astrolojik iddiaları destekleyecek herhangi bir kanıt sunmamaktadır. Ancak burç uyumu tamamen anlamsız mı?',
          points: [
            'Eğlence ve Sohbet Başlatıcı: Burçlar, flört aşamasında veya arkadaşlarla sohbet ederken harika bir eğlence kaynağıdır.',
            'Kişisel Yansıtma: Bazen burç yorumları, kendi içimizde farkında olmadığımız özellikleri görmemize yardımcı olabilir.',
            'Plasebo Etkisi: "Burçlarımız çok uyumlu" inancıyla başlanan bir ilişkide, bu beklenti çiftin pozitif yönlere daha fazla odaklanmasına neden olabilir.'
          ]
        }
      ],
      conclusion: 'Burç uyumu, ilişkilerinize keyifli bir renk katabilir. Ancak bir ilişkinin derinliğini belirleyen asıl faktörler; iletişim becerileri, duygusal zekâ, karşılıklı saygı ve ortak değerlerdir. Unutmayın, yıldızlar size bir yol çizebilir ama o yolda nasıl yürüyeceğinize dair kararları daima siz verirsiniz.'
    }
  },
  'yapay-zeka-ve-iliski-danismanligi': {
    id: 'yapay-zeka-ve-iliski-danismanligi',
    title: 'Yapay Zeka ve İlişki Danışmanlığı',
    subtitle: 'Geleceğin Aşk Reçetesi',
    date: '28 Ocak 2026',
    readTime: '7 dk',
    category: 'Teknoloji',
    emoji: '🤖',
    content: {
      intro: 'Eskiden ilişki sorunları için en yakın dosta danışılır ya da bir uzmanın kapısı çalınırdı. Bugün ise cebimizdeki telefonlar, sadece kiminle tanışacağımızı değil, o kişiyle nasıl konuşmamız gerektiğini de söylemeye başladı. Peki, Yapay Zekâ (YZ) gerçekten kalpten anlar mı?',
      sections: [
        {
          title: 'Yapay Zekâ İlişkilerde Neleri Değiştiriyor?',
          content: 'Yapay zekâ, bir algoritmadan fazlası haline gelerek ilişkilerin farklı evrelerinde devreye giriyor:',
          points: [
            'İletişim Koçluğu: Bazı uygulamalar, partnerinize yazdığınız mesajın tonunu analiz ederek "fazla agresif" veya "soğuk" olduğunuzu söyleyebiliyor.',
            'Veri Odaklı Analiz: İlişki takip uygulamaları, tartışma sıklığınızı veya birlikte geçirdiğiniz kaliteli vakti takip ederek size "ilişki sağlığı karnesi" çıkarabiliyor.',
            '7/24 Erişilebilirlik: YZ tabanlı sohbet botları gecenin bir yarısı yaşadığınız bir kıskançlık kriziyle ilgili size anında sakinleştirici tavsiyeler verebiliyor.'
          ]
        },
        {
          title: 'Bir Algoritma Empati Kurabilir mi?',
          content: 'Burada kritik bir soru ortaya çıkıyor:',
          points: [
            'Objektif Bakış: YZ veriye dayalıdır. Sizin ve partnerinizin dil kullanımındaki kalıpları fark ederek, her ikinizin de göremediği kör noktaları objektif bir şekilde önünüze koyabilir.',
            'İnsan Dokunuşunun Eksikliği: Bir makine, gözyaşındaki hüznü veya bir gülümsemedeki içtenliği bir insan kadar derinden hissedemez.'
          ]
        },
        {
          title: 'Yapay Zekâyı İlişkinizde Nasıl Verimli Kullanabilirsiniz?',
          content: 'YZ\'yi bir "karar verici" değil, bir "yardımcı araç" olarak görmek en sağlıklısıdır:',
          points: [
            'Farkındalık İçin Kullanın: "Ben genelde hangi konularda savunmaya geçiyorum?" gibi soruları YZ ile analiz etmek, öz farkındalığınızı artırabilir.',
            'Hazır Taslaklara Dikkat: YZ\'nin yazdığı bir özür mesajını kopyalayıp yapıştırmak yerine, ondan aldığınız ilhamla kendi cümlelerinizi kurun.',
            'Dijital Detoksu Unutmayın: İlişkiyi analiz eden bir ekranın başında çok vakit geçirmek, partnerinizin gözlerinin içine bakmayı unutturmamalı.'
          ]
        }
      ],
      conclusion: 'Yapay zekâ size harika bir harita sunabilir, ancak o yolda yürüyecek olan; hisseden, hata yapan ve seven yine sizsiniz. Samimiyet, algoritmalardan daha güçlüdür.'
    }
  },
  'ilk-randevuda-dikkat-edilmesi-gerekenler': {
    id: 'ilk-randevuda-dikkat-edilmesi-gerekenler',
    title: 'İlk Randevuda Dikkat Edilmesi Gerekenler',
    subtitle: 'Dijital İlk İzlenim: İlk Mesajda Yapılan 5 Büyük Hata',
    date: '25 Ocak 2026',
    readTime: '4 dk',
    category: 'Flört',
    emoji: '💕',
    content: {
      intro: 'Birini beğendiniz, profiline baktınız ve kalbiniz hızla çarpmaya başladı. Klavyenin başına geçtiniz... Durun! Gönder tuşuna basmadan önce bu yazıyı okumanız, belki de o muhteşem randevunun biletidir. İşte istatistiklerin ve sosyal psikolojinin ışığında, ilk mesajda sınıfta bırakan o hatalar:',
      sections: [
        {
          title: 'İlk Mesajda Yapılan 5 Büyük Hata',
          content: 'Bu hataları yapmamaya özen gösterin:',
          points: [
            'Sadece "Selam" veya "Merhaba" Yazmak: En yaygın ve en sıkıcı hata. Çözüm: Profilindeki bir detaydan bahsedin. "Fotoğraftaki kitap harika, sonu seni de şaşırttı mı?" gibi bir soru, kapıyı ardına kadar açar.',
            'Aşırı Fiziksel İltifat Yağmuru: "Çok güzelsin" gibi cümleler ilk mesajda genellikle samimiyetsiz algılanır. Çözüm: Karakterine veya ortak bir zevkinize odaklanan komplimanlar her zaman daha etkileyicidir.',
            'Copy-Paste Mesajlar: Herkes özel hissetmek ister. İnsanlar "genel geçer" mesajları bir kilometre öteden tanırlar. Çözüm: Mesajın içine sadece ona özel bir kelime veya detay serpiştirin.',
            'İlk Mesajda Hayat Hikayesini Anlatmak: Aşırı uzun mesajlar karşı tarafı boğabilir. Çözüm: Kısa, öz ve cevap vermesi kolay bir soruyla başlayın. 2-3 cümle idealdir.',
            'Yazım Kurallarını Katletmek: "Nbr", "Slm" gibi kısaltmalar ciddiyetsiz bir imaj çizer. Çözüm: En azından cümlelerin büyük harfle başladığından ve kelimelerin doğru yazıldığından emin olun.'
          ]
        }
      ],
      conclusion: 'Karşı taraf mesajınızı okuduğunda şunu hissetmeli: "Bu kişi benim profilimi gerçekten incelemiş ve sadece benimle konuşmak için bu cümleyi kurmuş." Unutmayın: İlk mesaj bir evlilik teklifi değil, sadece keyifli bir sohbetin başlangıç vuruşudur. Rahat olun, kendiniz olun ama biraz da stratejik davranın!'
    }
  },
  'iliskilerde-kirmizi-bayraklar': {
    id: 'iliskilerde-kirmizi-bayraklar',
    title: 'İlişkilerde Kırmızı Bayraklar',
    subtitle: 'Dur ve Düşün: Görmezden Gelinmemesi Gereken 7 Kırmızı Bayrak',
    date: '20 Şubat 2026',
    readTime: '6 dk',
    category: 'İlişkiler',
    emoji: '🚩',
    content: {
      intro: 'Aşkın ilk evrelerinde, o meşhur "pembe gözlükler" takılıyken bazen en bariz uyarı levhalarını bile çiçek bahçesi sanabiliyoruz. Ancak "Kırmızı Bayraklar" (Red Flags), bir ilişkinin sağlıklı ilerleyemeyeceğinin öncül sinyalleridir. İşte partnerinizde gördüğünüzde durup tekrar düşünmenizi gerektiren o işaretler:',
      sections: [
        {
          title: 'Görmezden Gelinmemesi Gereken 7 Kırmızı Bayrak',
          content: 'Bu işaretleri fark ettiğinizde durup düşünmelisiniz:',
          points: [
            'Sınırlarınıza Saygı Duymamak: "Hayır" dediğiniz bir konuda sizi ikna etmeye çalışıyor veya "Şaka yapıyorum, ne kadar hassassın" diyerek sınırlarınızı küçümsüyorsa bu büyük bir tehlike işaretidir. Sınırların olmadığı yerde, kişisel alan ve saygı hızla yok olur.',
            'Sürekli Mağdur Rolünü Oynamak: Eski sevgilileri hep "deli", iş arkadaşları hep "kötü", ailesi ise hep "anlayışsız" mı? Eğer bir insan hayatındaki hiçbir sorunda kendi payını görmüyor ve sürekli başkalarını suçluyorsa, bir sonraki "suçlu" büyük ihtimalle siz olacaksınız.',
            '"Love Bombing" (Aşk Bombardımanı): İlişkinin henüz ilk haftasında "Sen benim ruh eşimsin", "Sensiz yaşayamam" gibi aşırı yoğun iltifatlar ve vaatler bir romantizm gösterisi değil, bir manipülasyon taktiği olabilir. Hızlı başlayan, genellikle hızlı ve hasarlı biter.',
            'Gaslighting: Gerçekliğinizi Sorgulatmak: Yaşadığınız bir olayı anlattığınızda "Öyle bir şey olmadı", "Uyduruyorsun" veya "Çok abartıyorsun" diyerek sizin kendi hafızanızdan ve mantığınızdan şüphe etmenize neden oluyorsa, orada duygusal bir istismar var demektir.',
            'Sosyal Çevrenizden İzolasyon: Ailenizle veya arkadaşlarınızla vakit geçirmenizi eleştiriyor, "Onlar seni anlamıyor, sadece ben yanındayım" diyerek sizi yalnızlaştırıyorsa, bu kontrol kurma çabasıdır. Sağlıklı bir partner, sosyal bağlarınızı destekler.',
            'Öfke Kontrol Sorunları: Onun yanında konuşurken sürekli "Acaba şimdi neye kızacak?" diye düşünerek kelimelerinizi seçmek zorunda kalıyorsanız, o ilişkide huzurdan çok korku hakimdir. Öfke patlamaları, ileride daha büyük şiddet eğilimlerinin habercisi olabilir.',
            'Gizemli Olmak ile Yalan Söylemek Arasındaki İnce Çizgi: Küçük yalanlar büyük güvensizliklerin temelidir. Telefonunu sürekli saklaması, basit sorulara kaçamak cevaplar vermesi veya hayatındaki boşlukları dolduramamanız, dürüstlük ilkesinin ihlal edildiğini gösterir.'
          ]
        }
      ],
      conclusion: 'Kırmızı bayrakları fark ettiğinizde kendinize şu soruyu sorun: "Bu kişinin hiç değişmeyeceğini bilseydim, bu hayatı yaşamaya devam etmek ister miydim?" Çünkü insanlar, siz istediğiniz için değil, kendileri istediği zaman değişirler. Unutmayın: Kırmızı bayraklar, bir sonraki durakta inmeniz gerektiğini söyleyen dur tabelalarıdır. Onları yeşile boyamaya çalışmak sadece sizin zamanınızı ve ruhunuzu tüketir.'
    }
  },
  'yapay-zeka-ile-iliski-analizi-nasil-yapilir': {
    id: 'yapay-zeka-ile-iliski-analizi-nasil-yapilir',
    title: 'Yapay Zeka ile İlişki Analizi Nasıl Yapılır?',
    subtitle: 'Mesajlarınızın Arkasındaki Gerçeği Okumak',
    date: '10 Nisan 2026',
    readTime: '8 dk',
    category: 'Teknoloji',
    emoji: '🔍',
    content: {
      intro: 'Bir mesaj aldınız. Kısa, soğuk, belirsiz. "Tamam." İki kelime, ama içinde ne var? Kızgınlık mı, ilgisizlik mi, yoksa sadece meşguliyet mi? İşte tam bu noktada yapay zeka devreye giriyor. Artık mesajlarınızı sadece okumakla kalmayıp, arkasındaki duyguları, niyetleri ve ilişki dinamiklerini analiz etmek mümkün.',
      sections: [
        {
          title: 'Yapay Zeka İlişki Analizinde Ne Yapar?',
          content: 'Yapay zeka tabanlı ilişki analizi araçları, doğal dil işleme (NLP) teknolojisini kullanarak mesajları birden fazla boyutta değerlendirir:',
          points: [
            'Duygu Analizi (Sentiment Analysis): Mesajın genel tonu pozitif mi, negatif mi, nötr mü? "Harika, görüşürüz" ile "Tamam, görüşürüz" arasındaki farkı tespit eder.',
            'Niyet Tespiti: Mesajın arkasındaki amacı okur. Kaçınma mı var, yakınlaşma isteği mi, sınır koyma mı?',
            'Bağlam Analizi: Tek bir mesajı değil, konuşmanın bütününü değerlendirerek örüntüleri tespit eder.',
            'İletişim Stili Eşleşmesi: İki kişinin mesajlaşma ritmi, kelime seçimi ve yanıt süreleri arasındaki uyumu ölçer.'
          ]
        },
        {
          title: 'Sentio ile Adım Adım Analiz',
          content: 'Sentio uygulamasıyla bir ilişki analizini nasıl yapacağınızı öğrenin:',
          points: [
            '1. Mesajı Yapıştırın veya Ekran Görüntüsü Yükleyin: Analiz etmek istediğiniz konuşmayı uygulamaya aktarın. Sentio, hem metin hem de görsel formatı destekler.',
            '2. Analiz Türünü Seçin: Duygu analizi, niyet tespiti, ilişki dinamiği veya yanıt önerisi gibi seçeneklerden birini belirleyin.',
            '3. Sonuçları Okuyun: Yapay zeka size mesajın duygusal tonunu, olası niyetleri ve ilişki sağlığına dair içgörüleri sunar.',
            '4. Önerileri Değerlendirin: Sentio, nasıl yanıt verebileceğinize dair somut öneriler de sunar — ama son kararı her zaman siz verirsiniz.'
          ]
        },
        {
          title: 'Yapay Zeka Analizinin Sınırları',
          content: 'Dürüst olmak gerekirse, yapay zeka her şeyi bilemez:',
          points: [
            'Bağlamı Siz Bilirsiniz: Yapay zeka mesajı okur, ama o kişiyle yaşadığınız geçmişi, ses tonunu, yüz ifadesini bilemez.',
            'Kesin Gerçek Değil, Olasılık: Analiz sonuçları ihtimaller sunar. "%78 pasif-agresif ton" demek, kesin bir yargı değil, istatistiksel bir değerlendirmedir.',
            'Araç Olarak Kullanın: Yapay zekayı bir karar verici değil, düşüncelerinizi netleştiren bir ayna olarak görün.'
          ]
        }
      ],
      conclusion: 'Yapay zeka ile ilişki analizi, sizi daha bilinçli bir iletişimci yapar. Mesajların arkasındaki örüntüleri görmek, hem kendinizi hem de partnerinizi daha iyi anlamanızı sağlar. Sentio tam da bu amaçla tasarlandı: Sizi değiştirmek için değil, daha net görmek için.'
    }
  },
  'toksik-iliskiler-nasil-anlasilir': {
    id: 'toksik-iliskiler-nasil-anlasilir',
    title: 'Toksik İlişkiler Nasıl Anlaşılır?',
    subtitle: 'Sizi Yıpratan İlişkilerin 8 Net Belirtisi',
    date: '5 Nisan 2026',
    readTime: '7 dk',
    category: 'İlişkiler',
    emoji: '⚠️',
    content: {
      intro: '"Onu seviyorum ama yanındayken kendimi iyi hissetmiyorum." Bu cümleyi kendinize söylediyseniz, durmanın zamanı gelmiş olabilir. Toksik bir ilişkide olduğunuzu fark etmek zordur çünkü sevgi gerçektir — ama sevgi tek başına yeterli değildir. İşte sizi yıpratan bir ilişkide olduğunuzun 8 net belirtisi.',
      sections: [
        {
          title: 'Toksik İlişkinin 8 Belirtisi',
          content: 'Bu belirtilerden birkaçını tanıyorsanız, ilişkinizi yeniden değerlendirmenin zamanı gelmiş olabilir:',
          points: [
            'Sürekli Yorgunluk ve Tükenme: O kişiyle vakit geçirdikten sonra enerjinizin bittiğini, kendinizi boşalmış hissetttiğinizi fark ediyorsunuz. Sağlıklı ilişkiler enerji verir; toksik ilişkiler ise alır.',
            'Yürüyen Yumurta Kabuğu Hissi: Onun yanında ne söyleyeceğinizi, nasıl davranacağınızı sürekli hesaplıyorsunuz. "Buna kızar mı?", "Bunu yanlış anlar mı?" soruları zihninizdeki sabit kiracılar haline geldi.',
            'Özür Döngüsü: Sürekli siz özür diliyorsunuz — bazen ne için özür dilediğinizi bile bilmeden. Suçluluk duygusu ilişkinin ana rengi haline geldi.',
            'İzolasyon: Arkadaşlarınızdan ve ailenizden uzaklaştığınızı fark ediyorsunuz. Ya partner bunu istiyor ya da onun tepkisinden korktuğunuz için sosyal hayatınızı kendiniz kısıtlıyorsunuz.',
            'Tutarsız Sıcaklık-Soğukluk Döngüsü: Bir gün her şey mükemmel, ertesi gün derin bir soğukluk. Bu "ödül-ceza" döngüsü sizi sürekli tetikte tutar ve bağımlılık yaratır.',
            'Başarılarınız Küçümseniyor: Bir şey başardığınızda gerçek bir sevinç görmüyorsunuz. Aksine, başarılarınız görmezden geliniyor, eleştiriliyor ya da kendi başarılarıyla gölgeleniyor.',
            'Fiziksel Belirtiler: Baş ağrısı, uyku sorunları, iştah değişiklikleri... Beden, zihnin söyleyemediğini söyler. Kronik stres fiziksel olarak kendini gösterir.',
            'Kendinizi Kaybetme: "Ben eskiden böyle değildim" diyorsunuz. Hobilerinizdeki ilgi azaldı, özgüveniniz düştü, kim olduğunuzu unutmaya başladınız.'
          ]
        },
        {
          title: 'Toksik İlişkiden Çıkış Yolları',
          content: 'Fark etmek ilk adımdır. Sonrası için:',
          points: [
            'Güvendiğiniz Birine Açılın: Yalnız taşımayın. Bir arkadaşınıza, aile üyenize veya bir uzmana durumu anlatın.',
            'Sınırlarınızı Belirleyin: Neye "evet", neye "hayır" diyeceğinizi netleştirin. Sınır koymak bencillik değil, öz saygıdır.',
            'Profesyonel Destek Alın: Bir terapist veya ilişki danışmanı, bu süreçte size rehberlik edebilir.',
            'Kendinize Zaman Tanıyın: Toksik bir ilişkiden çıkmak kolay değildir. Kendinize karşı sabırlı ve şefkatli olun.'
          ]
        }
      ],
      conclusion: 'Toksik bir ilişkide kalmak için "ama onu seviyorum" yeterli bir sebep değildir. Kendinizi sevmek de en az onu sevmek kadar önemlidir. Sizi büyüten, destekleyen ve olduğunuz gibi kabul eden bir ilişki hak ediyorsunuz. Sentio\'nun analiz araçları, ilişkinizdeki örüntüleri daha net görmenize yardımcı olabilir — ama en önemli adımı atmak size kalmış.'
    }
  },
  'mesajlasmada-duygusal-mesafe': {
    id: 'mesajlasmada-duygusal-mesafe',
    title: 'Mesajlaşmada Duygusal Mesafe: Soğuk Mesajları Okumak',
    subtitle: '"Tamam", "Olur", "Neyse" — Bu Mesajlar Ne Anlama Gelir?',
    date: '1 Nisan 2026',
    readTime: '5 dk',
    category: 'İletişim',
    emoji: '💭',
    content: {
      intro: 'Telefona bakıyorsunuz. Saatlerdir beklediğiniz yanıt geldi: "Tamam." Tek kelime. Ne emoji, ne açıklama, ne de devam ettirme isteği. İçinizde bir şeyler sıkışıyor. "Ne demek istedi? Kızgın mı? Umursamıyor mu?" Dijital çağda mesajlaşma, ilişkilerin yeni dili oldu — ama bu dil çoğu zaman yanlış okunuyor.',
      sections: [
        {
          title: 'Kısa Mesajların Arkasındaki Anlamlar',
          content: 'Her kısa mesaj soğukluk anlamına gelmez. Bağlamı okumak önemlidir:',
          points: [
            '"Tamam" / "Olur": En çok yanlış anlaşılan mesajlar. Bazen gerçekten sadece onay anlamına gelir. Ama sürekli bu tür yanıtlar geliyorsa ve eskiden daha uzun yazıyorsa, bir mesafe oluşmuş olabilir.',
            '"Neyse": Genellikle bir konuyu kapatma isteğinin işareti. Tartışma ortamında kullanıldığında pasif-agresif bir ton taşıyabilir; günlük konuşmada ise sadece geçiş ifadesi olabilir.',
            'Geç Yanıtlar + Kısa Cevaplar: Bu kombinasyon, tek başına bir mesajdan çok daha güçlü bir sinyal verir. Ritim değişmişse, bir şeyler değişmiş demektir.',
            'Emoji Yokluğu: Normalde emoji kullanan biri aniden bırakmışsa, bu duygusal bir çekilmenin işareti olabilir. Emojiler dijital iletişimde duygusal sıcaklığın taşıyıcısıdır.'
          ]
        },
        {
          title: 'Duygusal Mesafeyi Doğru Okumak İçin 3 Kural',
          content: 'Mesajları yorumlarken şu kuralları aklınızda tutun:',
          points: [
            'Kişinin Temel Mesajlaşma Stilini Bilin: Bazı insanlar doğası gereği kısa yazar. "Tamam" onlar için normal bir yanıttır. Değişimi fark etmek için önce normalin ne olduğunu bilmeniz gerekir.',
            'Tek Mesajdan Sonuç Çıkarmayın: Bir mesaj değil, bir örüntü arayın. Bir haftalık iletişime bakın. Genel tablo ne söylüyor?',
            'Varsayım Yerine Soru Sorun: "Soğuk davranıyorsun" demek yerine, "Son zamanlarda biraz farklı hissediyorum, her şey yolunda mı?" diye sormak hem daha doğru hem de daha bağlayıcıdır.'
          ]
        },
        {
          title: 'Yapay Zeka Bu Konuda Nasıl Yardımcı Olur?',
          content: 'Sentio gibi araçlar, mesajlaşma örüntülerini analiz ederek size somut içgörüler sunar:',
          points: [
            'Ton Değişimi Tespiti: Konuşmanın başı ile sonu arasındaki duygusal ton farkını ölçer.',
            'Yanıt Süresi Analizi: Mesajlaşma ritmindeki değişimleri fark eder.',
            'Kelime Seçimi Analizi: Kullanılan kelimelerin duygusal yükünü değerlendirir ve genel bir "ilişki sıcaklığı" skoru sunar.'
          ]
        }
      ],
      conclusion: 'Dijital iletişimde her boşluk bir anlam taşımaz, her kısa mesaj soğukluk değildir. Ama örüntüler asla yalan söylemez. Mesajları okurken hem empatiyi hem de nesnel bir bakışı bir arada tutmak, ilişkinizdeki gerçek dinamikleri anlamanın en sağlıklı yoludur. Sentio, bu nesnel bakışı size sunmak için burada.'
    }
  }
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPosts[slug] : null;
  const [likeCount, setLikeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  // Component mount olduğunda localStorage'dan beğeni sayısını ve beğeni durumunu al
  useEffect(() => {
    if (slug) {
      const likes = getLikesFromStorage();
      const likedPosts = getLikedPostsFromStorage();
      
      setLikeCount(likes[slug] || 0);
      setIsLiked(likedPosts.includes(slug));
    }
  }, [slug]);

  const handleLike = () => {
    if (!slug || isLiked) return; // Eğer zaten beğenilmişse işlem yapma
    
    const likes = getLikesFromStorage();
    const likedPosts = getLikedPostsFromStorage();
    
    const newCount = (likes[slug] || 0) + 1;
    
    likes[slug] = newCount;
    saveLikesToStorage(likes);
    
    likedPosts.push(slug);
    saveLikedPostsToStorage(likedPosts);
    
    setLikeCount(newCount);
    setIsLiked(true);
  };

  if (!post) {
    return (
      <div className="min-h-screen py-20 bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Blog yazısı bulunamadı</h1>
          <Link to="/blog" className="text-cyan-400 hover:text-cyan-300">
            Blog sayfasına dön
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 bg-gray-900 relative overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Back Button */}
        <Link 
          to="/blog" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors mb-8 group"
        >
          <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Bloga Geri Dön
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="px-4 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-sm font-semibold border border-cyan-500/30">
              {post.category}
            </span>
            <span className="text-gray-400 text-sm">{post.date}</span>
            <span className="text-gray-400 text-sm">• {post.readTime} okuma</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white leading-tight">
            {post.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-cyan-400 font-light leading-relaxed">
            {post.subtitle}
          </p>
        </div>

        {/* Featured Image */}
        <div className="mb-12 glass-card backdrop-blur-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl p-20 border border-cyan-500/30 flex items-center justify-center">
          <span className="text-9xl">{post.emoji}</span>
        </div>

        {/* Content */}
        <article className="prose prose-invert prose-lg max-w-none">
          {/* Intro */}
          <p className="text-xl text-gray-300 leading-relaxed mb-12 first-letter:text-5xl first-letter:font-bold first-letter:text-cyan-400 first-letter:mr-2 first-letter:float-left">
            {post.content.intro}
          </p>

          {/* Sections */}
          {post.content.sections.map((section, index) => (
            <div key={index} className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full"></span>
                {section.title}
              </h2>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {section.content}
              </p>

              {section.points && (
                <div className="space-y-6 ml-4">
                  {section.points.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-4 glass-card backdrop-blur-xl bg-gray-800/40 p-6 rounded-2xl border border-gray-700/50">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(34,211,238,0.4)]">
                        <span className="text-white font-bold">{idx + 1}</span>
                      </div>
                      <p className="text-gray-300 leading-relaxed flex-1">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Conclusion */}
          <div className="mt-12 glass-card backdrop-blur-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-3xl p-8 border border-cyan-500/30">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-3xl">💡</span>
              Sonuç: Küçük Adımlar, Büyük Farklar
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              {post.content.conclusion}
            </p>
          </div>
        </article>

        {/* Share Section */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <p className="text-gray-400 mb-2">Bu yazıyı beğendin mi?</p>
              <div className="flex items-center gap-3">
                <button 
                  onClick={handleLike}
                  disabled={isLiked}
                  className={`glass-card backdrop-blur-xl px-6 py-3 rounded-xl border transition-all flex items-center gap-2 ${
                    isLiked 
                      ? 'bg-red-500/20 border-red-500/50 shadow-[0_0_20px_rgba(239,68,68,0.3)] cursor-not-allowed' 
                      : 'bg-gray-800/40 border-gray-700/50 hover:border-cyan-500/50 hover:bg-cyan-500/10'
                  }`}
                >
                  <span className="text-xl">
                    {isLiked ? '❤️' : '🤍'}
                  </span>
                  <span className="text-white font-semibold">{likeCount} Beğeni</span>
                </button>
                <button className="glass-card backdrop-blur-xl bg-gray-800/40 px-6 py-3 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all flex items-center gap-2">
                  <span>💬</span>
                  <span className="text-white font-semibold">Yorum Yap</span>
                </button>
              </div>
            </div>
            <div>
              <p className="text-gray-400 mb-2">Paylaş</p>
              <div className="flex items-center gap-3">
                <a 
                  href="https://www.instagram.com/sentiocoach/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass-card backdrop-blur-xl bg-gray-800/40 rounded-xl border border-gray-700/50 hover:border-pink-500/50 hover:bg-gradient-to-br hover:from-pink-600 hover:to-purple-600 hover:shadow-[0_0_20px_rgba(236,72,153,0.5)] transition-all flex items-center justify-center group"
                >
                  <svg className="w-5 h-5 text-pink-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                    <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <button className="w-10 h-10 glass-card backdrop-blur-xl bg-gray-800/40 rounded-xl border border-gray-700/50 hover:border-gray-900 hover:bg-black transition-all flex items-center justify-center group">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-white mb-8">İlgili Yazılar</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.values(blogPosts)
              .filter(p => p.id !== post.id && p.category === post.category)
              .slice(0, 2)
              .map((relatedPost) => (
                <Link key={relatedPost.id} to={`/blog/${relatedPost.id}`} className="glass-card backdrop-blur-xl bg-gray-800/40 rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all group">
                  <div className="text-4xl mb-4">{relatedPost.emoji}</div>
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {relatedPost.title}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {relatedPost.content.intro.substring(0, 100)}...
                  </p>
                </Link>
              ))}
            {Object.values(blogPosts)
              .filter(p => p.id !== post.id && p.category === post.category).length === 0 && 
              Object.values(blogPosts)
                .filter(p => p.id !== post.id)
                .slice(0, 2)
                .map((relatedPost) => (
                  <Link key={relatedPost.id} to={`/blog/${relatedPost.id}`} className="glass-card backdrop-blur-xl bg-gray-800/40 rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all group">
                    <div className="text-4xl mb-4">{relatedPost.emoji}</div>
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {relatedPost.title}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {relatedPost.content.intro.substring(0, 100)}...
                    </p>
                  </Link>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}
