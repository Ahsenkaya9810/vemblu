/* =====================================================================
   UYGULAMA MANTIĞI — Normalde değiştirmenize gerek yok (metinler veri.js'te).
   Doğrudan bir aramayı açmak için adresin sonuna #q=kalp krizi yazabilirsiniz.
   Bir sonucun sayfasını açmak için: #q=kalp krizi&s=0 (0 = ilk sonuç)
   ===================================================================== */
(function () {
  const $ = (s) => document.querySelector(s);
  const kucuk = (s) => s.trim().toLocaleLowerCase("tr-TR").replace(/\s+/g, " ");
  const kacis = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const BUYUTEC = '<svg viewBox="0 0 24 24"><path d="M15.5 14h-.8l-.3-.3A6.5 6.5 0 1 0 14 15.5l.3.3v.8l5 5 1.5-1.5-5-5zm-6 0a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9z"/></svg>';

  // aramaları küçük harfli anahtarla eşle
  const tablo = {};
  Object.keys(ARAMALAR).forEach((k) => (tablo[kucuk(k)] = ARAMALAR[k]));

  if (AYARLAR.karanlikMod) document.body.classList.add("karanlik");
  document.title = AYARLAR.marka;
  const logoHtml = [...AYARLAR.marka].map((h) => `<span>${h}</span>`).join("");
  document.querySelectorAll(".logo").forEach((l) => (l.innerHTML = logoHtml));
  document.querySelectorAll(".buyutec").forEach((b) => (b.outerHTML = BUYUTEC));

  if (AYARLAR.sahteDurumCubugu) {
    $("#durum").innerHTML = `<span>${AYARLAR.durumCubuguSaat}</span><span>5G<span class="pil"></span></span>`;
  } else $("#durum").remove();

  $("#sekmeler").innerHTML = AYARLAR.sekmeler.map((s, i) => `<span class="${i === 0 ? "aktif" : ""}">${s}</span>`).join("");

  // ÇEKİM: Arama geçmişi ve otomatik öneriler tamamen kapalıdır.
  // Oyuncu sadece arama kutusuna yazar, Enter/Ara ile sonuçlara gider.
  const anaInput = $("#anaInput");
  const oneriler = $("#oneriler");
  oneriler.innerHTML = "";

  // formlar
  $("#anaForm").addEventListener("submit", (e) => { e.preventDefault(); if (anaInput.value.trim()) ara(anaInput.value); });
  $("#ustForm").addEventListener("submit", (e) => { e.preventDefault(); if ($("#ustInput").value.trim()) ara($("#ustInput").value); });
  document.querySelectorAll(".kutu").forEach((k) => {
    const i = k.querySelector("input");
    const guncelle = () => k.classList.toggle("dolu", !!i.value);
    i.addEventListener("input", guncelle);
    k.querySelector(".temizle").addEventListener("click", () => { i.value = ""; guncelle(); i.focus(); });
  });
  $("#ustLogo").addEventListener("click", () => { location.hash = ""; });

  function ara(q) {
    location.hash = "q=" + encodeURIComponent(q.trim());
  }

  function goster() {
    const m = location.hash.match(/q=([^&]*)/);
    if (!m) {
      document.body.classList.remove("sonucta", "sayfada");
      anaInput.value = ""; $("#anaForm .kutu").classList.remove("dolu");
      oneriler.innerHTML = "";
      return;
    }
    const q = decodeURIComponent(m[1]);
    const sm = location.hash.match(/&s=(\d+)/);
    document.body.classList.remove("sayfada");
    if (sm) { sayfaGoster(q, +sm[1]); return; }
    document.body.classList.add("sonucta");
    $("#ustInput").value = q; $("#ustInput").blur();
    $("#ustForm .kutu").classList.add("dolu");
    const veri = tablo[kucuk(q)] || VARSAYILAN;

    // Her sorguda makul ama senaryodaki olayı doğrudan doğrulamayan sonuçlar.
    // Üç küçük görsel telefon ekranında tek sıra halinde açılır.
    const haberler = (veri.sonuclar && veri.sonuclar.length) ? veri.sonuclar : VARSAYILAN.sonuclar;
    $("#sayi").style.display = "block";
    $("#sayi").textContent = veri.sonucSayisi || VARSAYILAN.sonucSayisi;
    const fotograf = (h,i) => h.gorsel || ["gorseller/sakarya-kaza.jpg","gorseller/yagmur-trafik.jpg","gorseller/viyaduk-cekici.jpg"][i%3];
    const galeri = `<section class="mini-gorseller" aria-label="İlgili görseller"><div class="mini-baslik">Görseller <span>İlgili görsellere göz atın</span></div><div class="mini-sira">${haberler.slice(0,3).map((h,i)=>`<button class="mini-kart" type="button" data-i="${i}"><img src="${kacis(fotograf(h,i))}" alt="${kacis(h.baslik)}"><small>${kacis(h.baslik)}</small></button>`).join('')}</div></section>`;
    $("#sonuclar").innerHTML = haberler.map((h,i)=>`
      <div class="sonuc-kart" data-i="${i}">
        <div class="site"><div class="favikon">${kacis(h.site[0])}</div>
          <div><b>${kacis(h.site)}</b><small>${kacis(h.adres)}</small></div></div>
        <h3>${kacis(h.baslik)}</h3>
        <p>${kacis(h.ozet)}</p>
      </div>${i === 0 ? galeri : ''}`).join('');
    window.scrollTo(0, 0);
  }

  // sonuca dokununca: içeriği olan sonuç sitenin sayfasını açar
  $("#sonuclar").addEventListener("click", (e) => {
    const k = e.target.closest(".sonuc-kart, .mini-kart"); if (!k) return;
    const q = decodeURIComponent(location.hash.match(/q=([^&]*)/)[1]);
    const s = ((tablo[kucuk(q)] || VARSAYILAN).sonuclar || VARSAYILAN.sonuclar)[k.dataset.i];
    if (s && s.icerik) location.hash = "q=" + encodeURIComponent(q) + "&s=" + k.dataset.i;
  });

  function sayfaGoster(q, i) {
    const grup = tablo[kucuk(q)] || VARSAYILAN;
    const s = grup && grup.sonuclar && grup.sonuclar[i];
    if (!s || !s.icerik) { location.hash = 'q=' + encodeURIComponent(q); return; }
    document.body.classList.remove('sonucta');
    document.body.classList.add('sayfada');
    const bilgi = s.icerik;
    const tema = (typeof MAKALE_KIMLIKLERI !== 'undefined' && MAKALE_KIMLIKLERI[s.site]) ||
      {logo:s.site.slice(0,2).toUpperCase(),stil:'rehber',slogan:'Güncel bilgiler',menu:['Sağlık','Rehber'],yazar:'Editör'};
    const foto = s.gorsel || ((typeof MAKALE_FOTOGRAFLARI !== 'undefined' && MAKALE_FOTOGRAFLARI[kucuk(q)] || [])[i]) || 'gorseller/acil-servis.jpg';
    const diger = grup.sonuclar.map((haber,j)=>({haber,j})).filter(x => x.j !== i && x.haber.icerik).slice(0,3);
    const tarih = bilgi.tarih || '2026';
    const saglik = /kalp|sağlık|hekim|aile|saat dünyası|yaşam defteri/i.test(s.site);
    const saat = s.site === 'Sağlık Rehberim' ? '09:40' : (s.site === 'Hekim Sözlük' ? '11:15' : '14:20');
    document.querySelector('#sayfa').innerHTML = `
      <div class="haber-kabuk ${tema.stil}">
        <div class="haber-mini">${kacis(s.site)} <span>${saglik ? "SAĞLIK & YAŞAM" : "GÜNDEM & HABER"}</span></div>
        <header class="haber-ust">
          <button type="button" class="haber-geri" id="geri" aria-label="Arama sonuçlarına dön">‹</button>
          <div class="haber-kimlik"><div class="haber-logo">${kacis(tema.logo)}</div>
            <div><strong>${kacis(s.site)}</strong><small>${kacis(tema.slogan)}</small></div></div>
          <span class="haber-menu" aria-hidden="true">☰</span>
        </header>
        <nav class="haber-nav">${tema.menu.map(m=>`<span>${kacis(m)}</span>`).join('')}</nav>
        <article class="haber-article">
          <div class="haber-konum">ANA SAYFA <span>›</span> ${saglik ? "SAĞLIK" : "GÜNDEM"} <span>›</span> ${kacis(s.kategori || 'BİLGİLENDİRME')}</div>
          <div class="haber-kategori">${kacis(s.kategori || 'SAĞLIK')}</div>
          <h1>${kacis(s.baslik)}</h1>
          <p class="haber-spot">${kacis(s.ozet)}</p>
          <div class="haber-yazar"><span class="haber-yazar-ikon">${kacis(tema.logo[0])}</span>
            <span><b>${kacis(tema.yazar)}</b><small>${kacis(tarih)} &nbsp; · &nbsp; ${saat} &nbsp; · &nbsp; 3 dk okuma</small></span>
            <span class="haber-paylas">↗ &nbsp; ○</span></div>
          <figure class="haber-gorsel"><img src="${foto}" alt="Habere eşlik eden temsili fotoğraf" loading="eager">
            <figcaption>Temsili görsel · Editoryal arşiv</figcaption></figure>
          <div class="haber-icerik">
            <div class="haber-metin">${bilgi.paragraflar.map(p=>`<p>${kacis(p)}</p>`).join('')}
              ${saglik ? `<aside class="haber-bilgi">Kalp krizi şüphesinde zaman kaybetmeden 112 Acil Çağrı Merkezi aranmalıdır.</aside>` : ""}
              <div class="haber-etiket">${(s.etiketler || (saglik ? ['Kalp krizi','Sağlık','Bilgi'] : ['Gündem','Yerel','Trafik'])).map(t=>`<span>${kacis(t)}</span>`).join('')}</div>
            </div>
            <aside class="haber-sidebar"><div class="haber-sidebar-baslik">${saglik ? "SAĞLIK DOSYASI" : "GÜNDEM"}</div><p>${saglik ? "Uzman görüşleri, güncel bilgiler ve ilk yardım rehberi." : "Şehirden ve bölgeden güncel gelişmeler."}</p>
              <div class="haber-reklam"><small>REKLAM</small><strong>Gündemi<br>yakından takip edin.</strong><span>Gündem • Yaşam • Haber</span></div>
              <div class="haber-sidebar-baslik">ÇOK OKUNANLAR</div>
              ${diger.map(x=>`<button class="haber-ilgili" data-ilgili="${x.j}">${kacis(x.haber.baslik)}</button>`).join('')}</aside>
          </div>
          <section class="haber-devam"><h2>İlginizi çekebilir</h2><div class="haber-devam-grid">
            ${diger.map(x=>`<button class="haber-ilgili-kart" data-ilgili="${x.j}"><span>${saglik ? "SAĞLIK" : "HABER"}</span><b>${kacis(x.haber.baslik)}</b><small>${kacis(x.haber.site)}</small></button>`).join('')}
          </div></section>
        </article><footer class="haber-footer"><b>${kacis(s.site)}</b><span>© 2026 · Kurgusal yayın</span></footer>
      </div>`;
    document.querySelector('#geri').onclick = () => { location.hash = 'q=' + encodeURIComponent(q); };
    document.querySelectorAll('[data-ilgili]').forEach(el=>el.onclick=()=>{
      location.hash = 'q=' + encodeURIComponent(q) + '&s=' + el.dataset.ilgili;
      if (Number(el.dataset.ilgili) === i) window.scrollTo(0,0);
    });
    window.scrollTo(0, 0);
  }

  window.addEventListener("hashchange", goster);
  goster();
})();
