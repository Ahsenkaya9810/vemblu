/* =====================================================================
   VEMBLU — VERİ DOSYASI. Bütün metinler BURADAN değişir.
   Tüm yayın isimleri bu proje için özgün türetilmiştir; gerçek haber sitelerinin markaları kullanılmaz.
   Görünür adreslerde gerçek yayına yönlenmeyen .example alan adı kullanılır.
   ---------------------------------------------------------------------
   Her arama için sonuclar dizisi kullanılır; sonuç bulunamadı ekranı yoktur.
   Bir sonuca "icerik" eklerseniz, o sonuca dokununca sitenin sayfası açılır.
   Aramalar büyük/küçük harf fark etmeden eşleşir ("KALP KRİZİ" = "kalp krizi").
   Listede olmayan bir şey aranırsa en alttaki VARSAYILAN kullanılır.
   ===================================================================== */

const AYARLAR = {
  marka: "Vemblu",             // Arama motorunun adı
  karanlikMod: true,           // Gece sahnesi: true = koyu ekran, false = beyaz ekran
  sahteDurumCubugu: false,     // true = en üstte sahte saat/şarj çubuğu
  durumCubuguSaat: "03:12",
  sekmeler: ["Tümü", "Haberler", "Görseller", "Videolar", "Haritalar"],
};

/* Çekim notu: Arama geçmişi ve otomatik tamamlama tamamen kapalıdır. */

/* ---- Tekrar kullanılan sağlık sitesi sayfaları ---- */
const SAYFA_BELIRTI = {
  tarih: "12 Ekim 2026",
  paragraflar: [
    "Kalp krizi, kalp kasını besleyen koroner damarlardan birinin tıkanması sonucu kalbin bir bölümünün yeterli kan ve oksijen alamaması durumudur. Tıbbi adıyla miyokard enfarktüsü olarak bilinir.",
    "En sık görülen belirti göğüs ortasında baskı, sıkışma ya da yanma hissidir. Ağrı sol kola, çeneye, boyuna veya sırta yayılabilir. Soğuk terleme, nefes darlığı, mide bulantısı ve baş dönmesi de eşlik edebilir.",
    "Belirtiler her zaman şiddetli olmayabilir. Özellikle kadınlarda, yaşlılarda ve diyabet hastalarında yorgunluk, hazımsızlık hissi gibi daha sessiz belirtiler görülebilir.",
    "Kalp krizinden şüphelenildiğinde vakit kaybetmeden 112 Acil Çağrı Merkezi aranmalıdır. Tedaviye ne kadar erken başlanırsa kalp kasındaki hasar o kadar azalır.",
  ],
};

const ARAMALAR = {
  /* ---- Senaryodaki aramalar ---- */
  "viyadük kalp krizi": { sonucYok: true },
  "yenişehir kalp krizi": { sonucYok: true },
  "kalp krizi hırsızlık": { sonucYok: true },

  "kalp krizi": {
    sonucSayisi: "Yaklaşık 4.380.000 sonuç (0,38 saniye)",
    sonuclar: [
      { site: "Lunvera Rehber", adres: "lunverarehber.example › kalp-krizi",
        baslik: "Kalp Krizi Nedir? Belirtileri ve İlk Yardım",
        ozet: "Göğüste baskı hissi, sol kola yayılan ağrı, soğuk terleme ve nefes darlığı kalp krizinin en sık görülen belirtileri arasındadır.",
        icerik: SAYFA_BELIRTI },
      { site: "Hekvora Sözlük", adres: "hekvoraszlk.example › kardiyoloji",
        baslik: "Kalp krizi (miyokard enfarktüsü) nedir, neden olur?",
        ozet: "Kalp kasını besleyen damarlardan birinin tıkanmasıyla oluşur. Risk faktörleri arasında sigara, yüksek tansiyon, kolesterol ve stres yer alır.",
        icerik: {
          tarih: "3 Eylül 2026",
          paragraflar: [
            "Miyokard enfarktüsü, halk arasında kalp krizi olarak bilinen ve kalp kasının bir bölümünün kansız kalarak hasar görmesiyle ortaya çıkan acil bir durumdur.",
            "Damar içinde zamanla biriken yağ ve kolesterol plakları çatlayabilir. Bu bölgede oluşan pıhtı damarı tamamen tıkayarak kalp krizine yol açar.",
            "Sigara kullanımı, yüksek tansiyon, şeker hastalığı, yüksek kolesterol, hareketsiz yaşam, aşırı kilo ve yoğun stres en önemli risk faktörleri arasındadır.",
          ] } },
      { site: "Veldora Aile", adres: "veldoraaile.example › ilk-yardim",
        baslik: "Kalp krizi geçiren birine ilk yardım nasıl yapılır?",
        ozet: "Hemen 112'yi arayın. Kişiyi yarı oturur pozisyona getirin, sıkan giysilerini gevşetin ve yalnız bırakmayın.",
        icerik: {
          tarih: "21 Haziran 2026",
          paragraflar: [
            "Kalp krizi belirtileri gösteren bir kişiyle karşılaştığınızda ilk yapmanız gereken 112'yi aramaktır.",
            "Kişiyi yarı oturur pozisyona getirin ve sakin kalmasını sağlayın. Yaka, kemer gibi sıkan giysileri gevşetin.",
            "Kişi bilincini kaybeder ve nefes almazsa, eğitim aldıysanız kalp masajına başlayın ve sağlık ekipleri gelene kadar devam edin.",
          ] } },
      { site: "Lunvera Bülten", adres: "lunverablten.example › korunma",
        baslik: "Kalp krizinden korunmanın 7 yolu",
        ozet: "Düzenli yürüyüş, tuzu azaltmak, sigarayı bırakmak ve yılda bir kontrol yaptırmak riski önemli ölçüde düşürüyor." },
      { site: "Lunvera Rehber", adres: "lunverarehber.example › kadinlarda",
        baslik: "Kadınlarda kalp krizi belirtileri farklı mı?",
        ozet: "Kadınlarda göğüs ağrısı yerine yorgunluk, sırt ağrısı ve mide bulantısı gibi belirtiler daha sık görülebiliyor." },
    ],
  },

  "kalp krizi saat": {
    sonucSayisi: "Yaklaşık 912.000 sonuç (0,41 saniye)",
    sonuclar: [
      { site: "Lunvera Rehber", adres: "lunverarehber.example › kalp-krizi-saati",
        baslik: "Kalp krizi en çok hangi saatlerde görülür?",
        ozet: "Araştırmalara göre kalp krizleri en sık sabahın erken saatlerinde, uyanmayı izleyen ilk saatlerde görülüyor.",
        icerik: {
          tarih: "8 Ağustos 2026",
          paragraflar: [
            "Yapılan araştırmalar, kalp krizlerinin günün her saatinde eşit dağılmadığını gösteriyor. Vakaların önemli bir kısmı sabah 06.00 ile 12.00 arasında görülüyor.",
            "Uzmanlar bunun nedenini sabah saatlerinde artan stres hormonları, yükselen tansiyon ve kanın pıhtılaşmaya daha yatkın olmasıyla açıklıyor.",
            "Risk grubundaki kişilerin sabah saatlerinde ani ve ağır efordan kaçınması öneriliyor.",
          ] } },
      { site: "Tenkora Saat", adres: "tenkorasaat.example › nabiz",
        baslik: "Akıllı saatler kalp krizini önceden haber verebilir mi?",
        ozet: "Nabız ve ritim ölçümü yapan saatler bazı düzensizlikleri fark edebilir; ancak kalp krizi teşhisi koymaz." },
      { site: "Hekvora Sözlük", adres: "hekvoraszlk.example › altin-saat",
        baslik: "Kalp krizinde 'altın saat' nedir?",
        ozet: "Belirtilerin başlamasından sonraki ilk bir saat, tedavinin en etkili olduğu kritik zaman dilimi olarak kabul ediliyor." },
    ],
  },
};


/* ===============================================================
   SAHNE 7 — KAZA / KALP KRİZİ ARAMA EKLERİ
   Sadece haber sayfasını geliştiren isteğe bağlı alanlar:
   gorsel, kategori, etiketler, spot, vurguRengi.
   Ana Vemblu arama arayüzü yukarıdaki orijinal veriyi kullanır.
   =============================================================== */
ARAMALAR["kalp krizi"].sonuclar[0].gorsel = "gorseller/ekg-inceleme.jpg";
ARAMALAR["kalp krizi"].sonuclar[0].kategori = "KARDİYOLOJİ";
ARAMALAR["kalp krizi"].sonuclar[0].etiketler = ["Kalp krizi", "Belirtiler", "Acil müdahale"];
ARAMALAR["kalp krizi"].sonuclar[0].vurguRengi = "#176c80";
ARAMALAR["kalp krizi"].sonuclar[1].gorsel = "gorseller/ekg-inceleme.jpg";
ARAMALAR["kalp krizi"].sonuclar[1].kategori = "HEKİM DOSYASI";
ARAMALAR["kalp krizi"].sonuclar[1].vurguRengi = "#344f80";
ARAMALAR["kalp krizi"].sonuclar[2].gorsel = "gorseller/acil-servis.jpg";
ARAMALAR["kalp krizi"].sonuclar[2].kategori = "İLK YARDIM";
ARAMALAR["kalp krizi"].sonuclar[2].vurguRengi = "#23898c";
ARAMALAR["kalp krizi saat"].sonuclar[0].gorsel = "gorseller/hastane-koridor.jpg";
ARAMALAR["kalp krizi saat"].sonuclar[0].kategori = "ARAŞTIRMA";
ARAMALAR["kalp krizi saat"].sonuclar[0].vurguRengi = "#ab6745";
// Kalan genel arama sonuçları da açılabilir olsun.
ARAMALAR["kalp krizi"].sonuclar[3].icerik = {tarih:"4 Ekim 2026",paragraflar:[
"Kalp ve damar hastalıkları açısından riskin azaltılmasında sigara kullanmamak, düzenli fiziksel aktivite ve dengeli beslenme önemli rol oynar.",
"Kan basıncı, kan şekeri ve kolesterolün hekim önerisi doğrultusunda izlenmesi, kişiye özel risk değerlendirmesinin bir parçasıdır.",
"Göğüs ağrısı, soğuk terleme veya nefes darlığı gibi ani belirtilerde korunma önerileri yerine acil yardım alınmalıdır." ]};
ARAMALAR["kalp krizi"].sonuclar[3].gorsel="gorseller/ekg-inceleme.jpg";
ARAMALAR["kalp krizi"].sonuclar[3].kategori="KORUYUCU SAĞLIK";
ARAMALAR["kalp krizi"].sonuclar[4].icerik={tarih:"17 Eylül 2026",paragraflar:[
"Kalp krizi belirtileri herkeste aynı şekilde görülmeyebilir. Göğüs ağrısı sık bir belirti olmakla birlikte, bazı kişilerde nefes darlığı, bulantı ve belirgin yorgunluk öne çıkabilir.",
"Kadınlarda çene, sırt veya mide bölgesine yayılan rahatsızlık da yaşanabilir. Belirtiler kişiden kişiye değişir.",
"Kalp krizinden şüpheleniliyorsa belirtilerin geçmesini beklemeden 112 aranmalıdır." ]};
ARAMALAR["kalp krizi"].sonuclar[4].gorsel="gorseller/acil-servis.jpg";
ARAMALAR["kalp krizi"].sonuclar[4].kategori="SAĞLIK REHBERİ";
ARAMALAR["kalp krizi saat"].sonuclar[1].icerik={tarih:"22 Eylül 2026",paragraflar:[
"Akıllı saatler kalp ritmi ve nabızla ilgili bazı ölçümler yapabilir. Ancak bunlar kalp krizi tanısı koymak için kullanılmaz.",
"Anormal bir ölçüm veya uyarı, sağlık profesyoneli tarafından değerlendirilmelidir. Ciddi belirtiler varsa saat verisini beklemek yerine acil yardım çağrılmalıdır." ]};
ARAMALAR["kalp krizi saat"].sonuclar[1].gorsel="gorseller/hastane-koridor.jpg";
ARAMALAR["kalp krizi saat"].sonuclar[1].kategori="TEKNOLOJİ VE SAĞLIK";
ARAMALAR["kalp krizi saat"].sonuclar[2].icerik={tarih:"30 Ağustos 2026",paragraflar:[
"Kalp krizinde erken tıbbi müdahale büyük önem taşır. Halk arasında 'altın saat' ifadesi, ilk dakikalarda yardım çağrılmasının önemini anlatmak için kullanılır.",
"Göğüs ağrısı, nefes darlığı veya aniden gelişen şüpheli belirtilerde beklemek yerine 112 aranmalıdır." ]};
ARAMALAR["kalp krizi saat"].sonuclar[2].gorsel="gorseller/acil-servis.jpg";
ARAMALAR["kalp krizi saat"].sonuclar[2].kategori="ACİL SAĞLIK";

/* Listede olmayan bir arama yapılırsa ne çıksın? */
const VARSAYILAN = { sonucYok: false, sonuclar: [] };

/* Sahne 7 final: yalnızca sonuçtan açılan makalelerin yayın kimlikleri ve fotoğrafları.
   Arama sonuçlarının başlık, sıra ve bulunamadı davranışı değiştirilmedi. */
const MAKALE_KIMLIKLERI = {
  "Lunvera Rehber": {logo:"LR", stil:"rehber", slogan:"Sağlıklı yaşam, doğru bilgi", menu:["Sağlık", "Hastalıklar", "Yaşam", "Uzman Görüşü"], yazar:"Sağlık Servisi"},
  "Hekvora Sözlük": {logo:"HS", stil:"klinik", slogan:"Klinik bilgiler ve hekim görüşleri", menu:["Kardiyoloji", "Tanı ve Tedavi", "Tıp Sözlüğü"], yazar:"Tıbbi İçerik Ekibi"},
  "Veldora Aile": {logo:"VA", stil:"gazete", slogan:"Gündem ve yaşam", menu:["Güncel", "Sağlık", "Yaşam", "Rehber"], yazar:"Haber Merkezi"},
  "Lunvera Bülten": {logo:"LB", stil:"klinik", slogan:"Kalp sağlığına dair", menu:["Korunma", "Araştırmalar", "Rehber"], yazar:"Yayın Kurulu"},
  "Tenkora Saat": {logo:"TS", stil:"gazete", slogan:"Teknoloji ve yaşam", menu:["Teknoloji", "İnceleme", "Sağlık"], yazar:"Teknoloji Editörü"},
};
const MAKALE_FOTOGRAFLARI = {
  "kalp krizi": ["gorseller/acil-servis.jpg","gorseller/ekg-inceleme.jpg","gorseller/acil-servis.jpg","gorseller/hastane-koridor.jpg","gorseller/ekg-inceleme.jpg"],
  "kalp krizi saat": ["gorseller/hastane-koridor.jpg","gorseller/ekg-inceleme.jpg","gorseller/acil-servis.jpg"]
};


/* ====================================================================
   23 KASIM — ERSEN BEY / SANAT REVİZESİ (SAHNE 7)
   Aramada Hıdır ile ilgili kesin sonuç yok; "sonuç bulunamadı" da yok.
   Her sorguda birbirine yakın ama olaya ait olmayan KURGUSAL yayınlar var.
   İlk sonucun altında 3'lü görsel şeridi gösterilir.
   Tüm görseller bu film için hazırlanmış temsili yapay görsellerdir.
   ==================================================================== */
const KAZA_GORSELLERI = ["gorseller/sakarya-kaza.jpg", "gorseller/yagmur-trafik.jpg", "gorseller/viyaduk-cekici.jpg"];
const KAZA_GORSEL_BASLIKLARI = ["Sakarya'da zincirleme kaza", "Yağış trafikte etkili oldu", "Viyadükte araç kaldırma çalışması"];
const KAZA_SONUCLARI = [
  {site:"Zervika Ajans", adres:"zervikaajans.example › gundem › sakarya", baslik:"Sakarya'da zincirleme trafik kazası: Ulaşım bir süre aksadı", ozet:"Yağışın etkili olduğu karayolunda birden fazla aracın karıştığı kazanın ardından trafik ekipleri çalışma başlattı.", gorsel:KAZA_GORSELLERI[0], kategori:"GÜNDEM / TRAFİK", icerik:{tarih:"14 Kasım 2026",paragraflar:["Sakarya'da yağışın etkisini artırdığı saatlerde meydana gelen zincirleme trafik kazası, karayolunda ulaşımın yavaşlamasına neden oldu.","İhbar üzerine bölgeye trafik ve yol yardım ekipleri yönlendirildi. Araçların yoldan kaldırılması için çalışma başlatılırken sürücüler alternatif güzergâhlara yönlendirildi.","Yetkililer yağışlı havalarda takip mesafesinin korunması ve hızın yol koşullarına göre ayarlanması gerektiğini hatırlattı."]}},
  {site:"Venzaro Kent", adres:"venzarokent.example › trafik", baslik:"İstanbul'da sabah saatlerinde trafik yoğunluğu arttı", ozet:"Ana arterlerde oluşan araç kuyrukları özellikle bağlantı yollarında sürücülere zor anlar yaşattı.", gorsel:KAZA_GORSELLERI[1], kategori:"ŞEHİR / ULAŞIM", icerik:{tarih:"8 Kasım 2026",paragraflar:["İstanbul'da sabah saatlerinde yağış ve artan araç sayısı nedeniyle bazı ana güzergâhlarda trafik yoğunluğu yaşandı.","Sürücüler belirli noktalarda uzun süre beklerken ulaşım ekipleri yolları açık tutmak için çalışmalarını sürdürdü.","Trafik ekipleri kaygan zemin ve düşük görüş mesafesine karşı dikkatli olunması çağrısında bulundu."]}},
  {site:"Seravik Trafik", adres:"seraviktrafik.example › viyaduk", baslik:"Viyadük bağlantı yolunda araç arızası: Kısa süreli şerit daralması", ozet:"Arızalanan otomobilin çekiciye alınması sırasında ekipler bölgede kontrollü geçiş sağladı.", gorsel:KAZA_GORSELLERI[2], kategori:"ULAŞIM / SON DAKİKA", icerik:{tarih:"3 Kasım 2026",paragraflar:["Şehir içi bağlantı yolunda arızalanan bir araç nedeniyle ekipler kısa süreli güvenlik önlemi aldı.","Yol yardım ekiplerinin çalışması sırasında bir şerit kontrollü olarak kullanıldı. Araç çekiciye alınarak yol trafiğe açıldı.","Ulaşım yetkilileri sürücülerin yol üzerindeki ikaz işaretlerine uymalarını istedi."]}},
];
const BOLGE_SONUCLARI = [
  {site:"Miralto Yerel",adres:"miraltoyerel.example › yerel",baslik:"Yenişehir'de sağlık taraması programına yoğun ilgi",ozet:"İlçe genelinde düzenlenen sağlık bilgilendirme etkinliğinde kalp ve damar sağlığıyla ilgili broşürler dağıtıldı.",gorsel:"gorseller/hastane-koridor.jpg",kategori:"YEREL / SAĞLIK",icerik:{tarih:"10 Kasım 2026",paragraflar:["Yenişehir'de düzenlenen sağlık etkinliğinde vatandaşlara temel sağlık kontrolleri ve düzenli muayenenin önemi anlatıldı.","Program kapsamında kalp ve damar sağlığının korunmasına yönelik bilgilendirme yapıldı.","Etkinliğin farklı mahallelerde sürdürülmesi planlanıyor."]}},
  {site:"Tavrika Marmara",adres:"tavrikamarmara.example › yerel",baslik:"Yenişehir çevre yolunda akşam saatlerinde yoğunluk",ozet:"Kavşak ve bağlantı yollarında artan araç trafiği nedeniyle geçişlerde yavaşlama görüldü.",gorsel:KAZA_GORSELLERI[1],kategori:"TRAFİK",icerik:KAZA_SONUCLARI[1].icerik},
  {site:"Veldora Defter",adres:"veldoradefter.example › saglik",baslik:"Kalp sağlığını korumak için günlük alışkanlıklar",ozet:"Düzenli hareket, yeterli uyku ve dengeli beslenmenin kalp sağlığı üzerindeki rolü anlatılıyor.",gorsel:"gorseller/ekg-inceleme.jpg",kategori:"SAĞLIK",icerik:{tarih:"7 Ekim 2026",paragraflar:["Kalp damar sağlığını desteklemek için günlük yaşam alışkanlıkları önem taşıyor.","Düzenli fiziksel hareket ve kontroller kişiye özel risklerin izlenmesine yardımcı olabiliyor.","Ani göğüs ağrısı ve nefes darlığı gibi şüpheli yakınmalarda acil yardım çağrılmalıdır."]}},
];
ARAMALAR["viyadük kalp krizi"] = {sonucSayisi:"Yaklaşık 8.420 sonuç (0,32 saniye)", sonuclar:KAZA_SONUCLARI};
ARAMALAR["yenişehir kalp krizi"] = {sonucSayisi:"Yaklaşık 10.600 sonuç (0,36 saniye)",sonuclar:[BOLGE_SONUCLARI[0],BOLGE_SONUCLARI[2],KAZA_SONUCLARI[0]]};
ARAMALAR["kalp krizi hırsızlık"] = {sonucSayisi:"Yaklaşık 6.190 sonuç (0,37 saniye)",sonuclar:[
 {site:"Kavronix Dosya", adres:"kavronixdosya.example › asayis",baslik:"Otoparkta araç hırsızlığı iddiası üzerine inceleme",ozet:"Mahalle sakinlerinin ihbarı üzerine ekipler çevredeki güvenlik kameralarını incelemeye aldı.",gorsel:KAZA_GORSELLERI[2],kategori:"ASAYİŞ",icerik:{tarih:"11 Kasım 2026",paragraflar:["Bir otoparkta park halindeki otomobilin yerinde bulunamadığını belirten sürücü durumu ekiplere bildirdi.","Ekipler çevredeki kamera kayıtlarını incelemeye aldı. Olayla ilgili araştırma sürüyor.","Güvenlik uzmanları araçların mümkün olduğunca aydınlatılmış alanlara park edilmesini öneriyor."]}},
 KAZA_SONUCLARI[0], BOLGE_SONUCLARI[2]]};
// Önceden var olan genel sağlık aramalarının da sonuçları 3 küçük görselle tamamlanır.
ARAMALAR["kalp krizi"].sonuclar.forEach((h,i)=>{if(!h.gorsel || h.gorsel.endsWith('.svg')) h.gorsel=["gorseller/acil-servis.jpg","gorseller/ekg-inceleme.jpg","gorseller/hastane-koridor.jpg"][i%3];});
ARAMALAR["kalp krizi saat"].sonuclar.forEach((h,i)=>{if(!h.gorsel || h.gorsel.endsWith('.svg')) h.gorsel=["gorseller/hastane-koridor.jpg","gorseller/ekg-inceleme.jpg","gorseller/acil-servis.jpg"][i%3];});
const TUM_SORGULAR = Object.values(ARAMALAR).flatMap(g=>g.sonuclar||[]);
const VARSAYILAN_KAZA = {sonucSayisi:"Yaklaşık 9.200 sonuç (0,39 saniye)",sonuclar:KAZA_SONUCLARI};

Object.assign(VARSAYILAN,VARSAYILAN_KAZA);

Object.assign(MAKALE_KIMLIKLERI,{
 "Zervika Ajans":{logo:"ZA",stil:"gazete",slogan:"Marmara'dan güncel haberler",menu:["Gündem","Trafik","Şehir","Yaşam"],yazar:"Haber Merkezi"},
 "Venzaro Kent":{logo:"VK",stil:"gazete",slogan:"Şehrin nabzı",menu:["Gündem","Şehir","Ulaşım"],yazar:"Kent Haber Servisi"},
 "Seravik Trafik":{logo:"ST",stil:"gazete",slogan:"Yol, ulaşım ve şehir gündemi",menu:["Gündem","Trafik","Yerel"],yazar:"Ulaşım Editörü"},
 "Miralto Yerel":{logo:"MY",stil:"gazete",slogan:"Yenişehir'den gelişmeler",menu:["Yerel","Sağlık","Gündem"],yazar:"Yerel Haberler"},
 "Tavrika Marmara":{logo:"TM",stil:"gazete",slogan:"Bölgeden haberler",menu:["Yerel","Gündem","Ulaşım"],yazar:"Haber Merkezi"},
 "Veldora Defter":{logo:"VD",stil:"rehber",slogan:"Yaşam ve sağlık",menu:["Sağlık","Yaşam","Rehber"],yazar:"Yaşam Editörü"},
 "Kavronix Dosya":{logo:"KD",stil:"gazete",slogan:"Günün haberleri",menu:["Gündem","Asayiş","Şehir"],yazar:"Haber Merkezi"}
});


/* ================================================================
   23.11 — SON ÇEKİM REVİZESİ
   Her sorgu kendi en belirgin anahtar kelimesine göre haber çıkarır.
   Haberler Hıdır'ın aradığı olayı anlatmaz. Arama geçmişi kapalıdır.
   ================================================================ */
const KALP_HABERLERI = [
  {site:'Lunvera Sağlık',adres:'lunverasalk.example › kardiyoloji',baslik:'Kalp krizi belirtileri her hastada aynı görülmeyebilir',ozet:'Uzmanlar göğüs baskısı, soğuk terleme ve nefes darlığı gibi belirtiler için erken müdahalenin önemini vurguluyor.',gorsel:'gorseller/acil-servis.jpg',kategori:'SAĞLIK',icerik:{tarih:'15 Kasım 2026',paragraflar:['Kalp krizi, kalp kasını besleyen damarlardaki kan akışının bozulmasıyla ortaya çıkan acil bir sağlık sorunudur.','Göğüste baskı, soğuk terleme ve nefes darlığı belirtiler arasında bulunabilir. Her hastanın belirtileri aynı olmayabilir.','Şüpheli belirtilerde vakit kaybetmeden 112 Acil Çağrı Merkezi aranmalıdır.']}},
  {site:'Hekvora Bülten',adres:'hekvorablten.example › kalp-sagligi',baslik:'Kardiyoloji uzmanlarından kalp damar sağlığı uyarısı',ozet:'Düzenli kontrol ve erken tanı konusunda yapılan bilgilendirmeler kamuoyuyla paylaşıldı.',gorsel:'gorseller/ekg-inceleme.jpg',kategori:'KARDİYOLOJİ',icerik:{tarih:'12 Kasım 2026',paragraflar:['Kardiyoloji uzmanları kalp ve damar sağlığını korumada bireysel risklerin değerlendirilmesi gerektiğini belirtiyor.','Kan basıncı, kan şekeri ve kolesterol kontrollerinin hekim önerisiyle yapılması tavsiye ediliyor.','Ani gelişen göğüs ağrısı gibi yakınmalarda acil yardım çağrılmalıdır.']}},
  {site:'Veldora Yaşam',adres:'veldorayaam.example › acil',baslik:'Acil servise başvurulması gereken kalp belirtileri',ozet:'Göğüs ağrısı ve nefes darlığı yaşayan kişilerin sağlık hizmetine erişimde gecikmemesi gerektiği hatırlatıldı.',gorsel:'gorseller/hastane-koridor.jpg',kategori:'SAĞLIK REHBERİ',icerik:{tarih:'7 Kasım 2026',paragraflar:['Kalp kaynaklı olabilecek bazı yakınmalar acil değerlendirme gerektirebilir.','Göğüs ağrısı, nefes darlığı, ani terleme ve baygınlık hissi durumlarında gecikmeden acil yardım istenmelidir.','Bu tür belirtiler farklı nedenlerle ortaya çıkabileceğinden tanı sağlık profesyonellerince konulmalıdır.']}}
];
const YENISEHIR_KALP_HABERLERI = [
  {site:'Nerovia Yenişehir',adres:'neroviayeniehir.example › saglik',baslik:'Yenişehir’de kalp sağlığına dikkat çekildi',ozet:'İlçede düzenlenen sağlık bilgilendirme toplantısında kalp ve damar hastalıklarında erken tanı anlatıldı.',gorsel:'gorseller/hastane-koridor.jpg',kategori:'YEREL / SAĞLIK',icerik:{tarih:'13 Kasım 2026',paragraflar:['Yenişehir’de gerçekleştirilen bilgilendirme programında kalp ve damar sağlığı konusunda genel bilgiler paylaşıldı.','Katılımcılara düzenli kontroller ve sağlık kuruluşlarına başvurunun önemi anlatıldı.']}},
  KALP_HABERLERI[1], KALP_HABERLERI[0]
];
const HIRSIZLIK_HABERLERI = [
  {site:'Kavronix Asayiş',adres:'kavronixasayi.example › haber',baslik:'Otoparkta araç hırsızlığı şüphesi: Kameralar inceleniyor',ozet:'Park halindeki aracın kaybolduğu ihbarı üzerine ekipler güvenlik kamera kayıtlarını incelemeye aldı.',gorsel:'gorseller/otopark.jpg',kategori:'ASAYİŞ',icerik:{tarih:'17 Kasım 2026',paragraflar:['Bir otoparkta park halindeki aracı yerinde bulamayan sürücü durumu ekiplere bildirdi.','Güvenlik kamerası görüntülerinin incelenmesi için çalışma başlatıldı. Olayla ilgili araştırmalar sürüyor.']}},
  {site:'Venzaro Haber',adres:'venzarohaber.example › asayis',baslik:'İş yerinden hırsızlık iddiasıyla ilgili soruşturma başlatıldı',ozet:'Gece saatlerinde gerçekleştiği öne sürülen olayın ardından çevredeki iş yerlerinin kamera görüntüleri toplandı.',gorsel:'gorseller/gece-sokak.jpg',kategori:'ASAYİŞ',icerik:{tarih:'9 Kasım 2026',paragraflar:['Bir iş yerinde hırsızlık yapıldığı ihbarı üzerine güvenlik güçleri inceleme başlattı.','Çevredeki iş yerlerinin güvenlik kamerası görüntüleri araştırılıyor.']}},
  {site:'Solmira Posta',adres:'solmiraposta.example › guvenlik',baslik:'Polisten vatandaşlara hırsızlığa karşı tedbir uyarısı',ozet:'Ekipler kapı güvenliği, aydınlatma ve şüpheli durumların bildirilmesi konusunda hatırlatmada bulundu.',gorsel:'gorseller/guvenlik.jpg',kategori:'GÜVENLİK',icerik:{tarih:'5 Kasım 2026',paragraflar:['Emniyet birimleri ev ve iş yerlerinde alınabilecek temel güvenlik önlemleriyle ilgili bilgilendirmede bulundu.','Aydınlatma, güvenlik sistemleri ve şüpheli olayların bildirilmesi konularında vatandaşlara hatırlatma yapıldı.']}}
];
const SAAT_KALP_HABERLERI = [
  {site:'Lunvera Sağlık',adres:'lunverasalk.example › kalp-saat',baslik:'Kalp krizi belirtileri günün hangi saatlerinde artabiliyor?',ozet:'Günün farklı saatlerindeki fizyolojik değişimler ve kalp sağlığı arasındaki ilişki değerlendirildi.',gorsel:'gorseller/hastane-koridor.jpg',kategori:'KARDİYOLOJİ',icerik:{tarih:'16 Kasım 2026',paragraflar:['Kalp ve damar olaylarının gün içerisindeki dağılımı üzerine farklı çalışmalar yapılmaktadır.','Uzmanlar belirti geliştiğinde saatten bağımsız olarak acil yardım çağrılmasının önemini vurguluyor.']}},
  {site:'Tenkora Teknoloji',adres:'tenkorateknoloji.example › akilli-saat',baslik:'Akıllı saatlerin kalp ritmi takibindeki rolü',ozet:'Giyilebilir cihazlar bazı kalp ritmi değişimlerini gösterebilse de kalp krizi tanısı koyamıyor.',gorsel:'gorseller/ekg-inceleme.jpg',kategori:'TEKNOLOJİ',icerik:{tarih:'11 Kasım 2026',paragraflar:['Akıllı saatler bazı fizyolojik verileri kaydedebilir.','Bu cihazlar tıbbi muayenenin yerini tutmaz ve kalp krizi tanısı koyamaz.']}},
  KALP_HABERLERI[2]
];
// Oyuncunun aradığı özgül viyadük olayı bulunmaz; benzer kalp haberleri gösterilir.
ARAMALAR['viyadük kalp krizi'] = {sonucSayisi:'Yaklaşık 18.400 sonuç (0,39 saniye)',sonuclar:[...KALP_HABERLERI, KAZA_SONUCLARI[0]]};
// Doğru senaryo sorgusu: YENİŞEHİR KALP KRİZİ (eski 'yenişehir kalp' kaldırıldı).
ARAMALAR['yenişehir kalp krizi'] = {sonucSayisi:'Yaklaşık 9.610 sonuç (0,36 saniye)',sonuclar:YENISEHIR_KALP_HABERLERI};
ARAMALAR['kalp krizi hırsızlık'] = {sonucSayisi:'Yaklaşık 7.320 sonuç (0,40 saniye)',sonuclar:HIRSIZLIK_HABERLERI};
ARAMALAR['kalp krizi saat'] = {sonucSayisi:'Yaklaşık 24.700 sonuç (0,41 saniye)',sonuclar:SAAT_KALP_HABERLERI};
ARAMALAR['kalp krizi'] = {sonucSayisi:'Yaklaşık 62.900 sonuç (0,32 saniye)',sonuclar:KALP_HABERLERI};
// Genel/sürpriz aramalar için de haber sayfası: boş sonuç hiçbir zaman gösterilmez.
VARSAYILAN.sonuclar = [KAZA_SONUCLARI[0],KALP_HABERLERI[0],HIRSIZLIK_HABERLERI[0]];
Object.assign(MAKALE_KIMLIKLERI,{
  'Lunvera Sağlık':{logo:'LS',stil:'rehber',slogan:'Sağlıkta güncel gelişmeler',menu:['Sağlık','Kardiyoloji','Rehber'],yazar:'Sağlık Editörü'},
  'Hekvora Bülten':{logo:'HB',stil:'klinik',slogan:'Tıptan haberler',menu:['Sağlık','Araştırma','Kardiyoloji'],yazar:'Hekvora Bülten Servisi'},
  'Veldora Yaşam':{logo:'VY',stil:'rehber',slogan:'Sağlıklı yaşam haberleri',menu:['Sağlık','Yaşam','Hastalıklar'],yazar:'Yayın Ekibi'},
  'Nerovia Yenişehir':{logo:'NY',stil:'gazete',slogan:'Yerelden haberler',menu:['Yerel','Sağlık','Gündem'],yazar:'Yerel Haber Servisi'},
  'Kavronix Asayiş':{logo:'KA',stil:'gazete',slogan:'Asayiş ve güvenlik',menu:['Asayiş','Gündem','Şehir'],yazar:'Asayiş Servisi'},
  'Venzaro Haber':{logo:'VH',stil:'gazete',slogan:'Bölgenin gündemi',menu:['Gündem','Asayiş','Yerel'],yazar:'Haber Merkezi'},
  'Solmira Posta':{logo:'SP',stil:'gazete',slogan:'Şehirden haberler',menu:['Güncel','Asayiş','Yaşam'],yazar:'Haber Merkezi'},
  'Tenkora Teknoloji':{logo:'TT',stil:'klinik',slogan:'Teknoloji ve tıp',menu:['Teknoloji','Sağlık','İnceleme'],yazar:'Teknoloji Editörü'}
});


/* ================================================================
   ERSEN BEY — KESİN İÇERİK REVİZESİ
   Her arama, anahtar sözcüğün konusuna göre AÇILABİLİR KURGUSAL
   HABERLER getirir. Vemblu ana tasarımı ve boş açılış korunur.
   ================================================================ */
const YENI_VIYADUK_HABERLERI = [
 {site:'Zervika Yol',adres:'zervikayol.example › trafik › sakarya',baslik:'Sakarya’da zincirleme kaza: Birden fazla araç birbirine girdi',ozet:'Yağış nedeniyle kayganlaşan yolda yaşanan zincirleme kazanın ardından ekipler trafiği kontrollü olarak sağladı.',gorsel:'gorseller/sakarya-kaza.jpg',kategori:'TRAFİK / KAZA',icerik:{tarih:'18 Kasım 2026',paragraflar:['Sakarya’da yağışın etkili olduğu bir kara yolu güzergâhında çok sayıda aracın karıştığı zincirleme trafik kazası yaşandı.','Kazanın ardından bölgeye trafik ve sağlık ekipleri sevk edildi. Hasarlı araçların kaldırılması için çalışma başlatıldı.','Ekipler sürücüleri takip mesafesi ve yol koşullarına uygun hız konusunda uyardı.']}},
 {site:'Maventra Gündem',adres:'maventragndem.example › gundem › trafik',baslik:'Sürücü direksiyon başında kalp krizi geçirdi, aile otomobili bariyere çarptı',ozet:'Ailesiyle yolculuk yapan sürücünün aniden fenalaşması üzerine otomobil kontrolden çıktı. Sağlık ekipleri bölgeye sevk edildi.',gorsel:'gorseller/aile-otomobili-kaza.jpg',kategori:'GÜNDEM / TRAFİK',icerik:{tarih:'6 Kasım 2026',paragraflar:['Ailesiyle birlikte seyahat eden bir sürücü, yolculuk sırasında aniden fenalaştı. Otomobilin kontrolden çıkması üzerine araç yol kenarındaki bariyere çarptı.','Çevredeki sürücülerin ihbarı üzerine sağlık ve trafik ekipleri olay yerine yönlendirildi. Araçta bulunan aile üyeleri kontrol amacıyla sağlık ekiplerine teslim edildi.','Olayın kesin nedenine ilişkin incelemenin sürdüğü bildirildi.']}},
 {site:'Seravik Trafik',adres:'seraviktrafik.example › yerel › ulasim',baslik:'Viyadük bağlantısında araç kazası sonrası trafik yavaşladı',ozet:'Hasar gören otomobilin çekiciyle kaldırılması sırasında bağlantı yolunda geçici yoğunluk oluştu.',gorsel:'gorseller/yagmur-trafik.jpg',kategori:'YOL / ULAŞIM',icerik:{tarih:'2 Kasım 2026',paragraflar:['Bir viyadük bağlantı yolunda otomobilin karıştığı maddi hasarlı kazanın ardından ekipler güvenlik önlemi aldı.','Araç çekici yardımıyla yoldan kaldırılırken bir şeritte trafik kontrollü sağlandı.','Ulaşım kısa süre sonra normal akışına döndü.']}},
 {site:'Lunvera Sağlık',adres:'lunverasalk.example › saglik',baslik:'Direksiyon başında ani rahatsızlık: Uzmanlardan sürücülere uyarı',ozet:'Göğüs ağrısı ve ani fenalık belirtilerinin araç kullanırken ortaya çıkması halinde güvenli şekilde durulması gerektiği hatırlatıldı.',gorsel:'gorseller/acil-servis.jpg',kategori:'SAĞLIK / TRAFİK',icerik:{tarih:'10 Kasım 2026',paragraflar:['Sürüş sırasında ortaya çıkabilecek ani rahatsızlıklar hem sürücü hem de trafikteki diğer kişiler için risk oluşturabilir.','Göğüs ağrısı, soğuk terleme ve nefes darlığı gibi belirtilerde güvenli bir yere durup 112 Acil Çağrı Merkezinden yardım istenmesi önemlidir.']}}
];
const YENI_YENISEHIR_HABERLERI = [
 {site:'Nerovia Yenişehir',adres:'neroviayeniehir.example › saglik',baslik:'Yenişehir’de fenalaşan vatandaş kalp krizi şüphesiyle hastaneye kaldırıldı',ozet:'İlçe merkezinde aniden rahatsızlanan kişiye sağlık ekipleri ilk müdahaleyi yaptı.',gorsel:'gorseller/acil-servis.jpg',kategori:'YENİŞEHİR / SAĞLIK',icerik:{tarih:'19 Kasım 2026',paragraflar:['Yenişehir ilçe merkezinde aniden fenalaşan bir vatandaş için çevredekiler tarafından sağlık ekiplerine haber verildi.','Olay yerine gelen ekipler, kalp krizi şüphesiyle ilk değerlendirmeyi yaparak hastayı ileri tetkik için hastaneye sevk etti.','Sağlık yetkilileri şüpheli göğüs ağrısı durumunda acil çağrı yapılması gerektiğini hatırlattı.']}},
 {site:'Miralto Yerel',adres:'miraltoyerel.example › yerel',baslik:'Yenişehir’de kalp krizi belirtileri konusunda bilgilendirme yapıldı',ozet:'Sağlık çalışanları erken müdahale ve acil servise zamanında başvurmanın önemini anlattı.',gorsel:'gorseller/ekg-inceleme.jpg',kategori:'YEREL / KARDİYOLOJİ',icerik:{tarih:'13 Kasım 2026',paragraflar:['Yenişehir’de düzenlenen bilgilendirme buluşmasında kalp krizi belirtileri ele alındı.','Uzmanlar göğüste baskı, nefes darlığı ve soğuk terleme gibi belirtilerin ihmal edilmemesi gerektiğini belirtti.','Etkinlikte risk gruplarında düzenli kontrollerin önemi de hatırlatıldı.']}},
 {site:'Tavrika Bölge',adres:'tavrikablge.example › yenisehir',baslik:'Yenişehir’de acil serviste kalp rahatsızlıklarına yönelik farkındalık çalışması',ozet:'İlçede sağlık kuruluşuna başvuran vatandaşlara kalp krizi belirtilerine ilişkin bilgilendirici materyal dağıtıldı.',gorsel:'gorseller/hastane-koridor.jpg',kategori:'YENİŞEHİR / YAŞAM',icerik:{tarih:'5 Kasım 2026',paragraflar:['Yenişehir’de bir sağlık kuruluşunda kalp damar hastalıkları ve acil belirtiler hakkında bilgilendirme gerçekleştirildi.','Bilgilendirmede erken teşhis, uygun sağlık başvurusu ve 112 Acil Çağrı Merkezi üzerinden yardım istemenin önemi vurgulandı.']}}
];
ARAMALAR['viyadük kalp krizi'] = {sonucSayisi:'Yaklaşık 18.400 sonuç (0,39 saniye)',sonuclar:YENI_VIYADUK_HABERLERI};
ARAMALAR['yenişehir kalp krizi'] = {sonucSayisi:'Yaklaşık 9.610 sonuç (0,36 saniye)',sonuclar:YENI_YENISEHIR_HABERLERI};
// Son üç sorguyu yalnızca ilgili haber türleriyle tut.
ARAMALAR['kalp krizi'] = {sonucSayisi:'Yaklaşık 62.900 sonuç (0,32 saniye)',sonuclar:KALP_HABERLERI};
ARAMALAR['kalp krizi saat'] = {sonucSayisi:'Yaklaşık 24.700 sonuç (0,41 saniye)',sonuclar:SAAT_KALP_HABERLERI};
ARAMALAR['kalp krizi hırsızlık'] = {sonucSayisi:'Yaklaşık 7.320 sonuç (0,40 saniye)',sonuclar:HIRSIZLIK_HABERLERI};
Object.assign(MAKALE_KIMLIKLERI,{
 'Zervika Yol':{logo:'ZY',stil:'gazete',slogan:'Ulaşım ve trafik gündemi',menu:['Gündem','Trafik','Bölge'],yazar:'Trafik Haber Servisi'},
 'Maventra Gündem':{logo:'MG',stil:'gazete',slogan:'Günün gelişmeleri',menu:['Manşet','Gündem','Yaşam'],yazar:'Gündem Servisi'},
 'Tavrika Bölge':{logo:'TB',stil:'gazete',slogan:'Bölge haberleri',menu:['Yerel','Sağlık','Gündem'],yazar:'Yerel Haberler'}
});
