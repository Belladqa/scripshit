// PRELOADER
window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    setTimeout(() => {
        preloader.classList.add("hide");
    }, 1500);
});

// Backsound Web
    const overlay = document.getElementById("musicOverlay");
    const startBtn = document.getElementById("startMusic");
    const audio = document.getElementById("bgMusic");
    const musicBtn = document.getElementById("musicBtn");

    startBtn.addEventListener("click", () => {
      audio.play();
      overlay.style.display = "none";
      musicBtn.style.display = "block";
    });

    musicBtn.addEventListener("click", () => {
      if (audio.paused) {
        audio.play();
        musicBtn.textContent = "❚❚";
      } else {
        audio.pause();
        musicBtn.textContent = "▶︎";
      }
    }); 

// NAV STAY
const navStay = document.querySelectorAll(".nav-stay");
const navObser = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            navStay.forEach(nav=>{
                nav.classList.remove("active");
                if(document.querySelector(nav.dataset.target)===entry.target){
                    nav.classList.add("active");
                    nav.classList.remove("show-label");
                    void nav.offsetWidth;
                    nav.classList.add("show-label");
                    clearTimeout(nav.timer);
                    nav.timer=setTimeout(()=>{
                        nav.classList.remove("show-label");
                    },1000);
                }
            });
        }
    });
},{
    threshold:.2
});
navStay.forEach(nav=>{
    const target=document.querySelector(nav.dataset.target);
    if(target){
        navObser.observe(target);
    }
});

navStay.forEach(nav => {
    nav.addEventListener("click", () => {
        console.log("Klik:", nav.dataset.target);
        const target = document.querySelector(nav.dataset.target);
        if(target){
            target.scrollIntoView({
                behavior:"smooth",
                block:"start"
            });
        }
    });
});

const navToggle=document.querySelector(".nav-toggle");
const storyNav=document.querySelector(".story-nav");
if(navToggle){
    navToggle.addEventListener("click",()=>{
        storyNav.classList.toggle("open");
        document.body.classList.toggle("nav-open");
        navToggle.classList.toggle("open");
        navToggle.innerHTML=
            storyNav.classList.contains("open")
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';
    });
}

const triggerSection = document.querySelector(".bg-sec2");
window.addEventListener("scroll", () => {
    const triggerPoint = triggerSection.offsetTop;
    if(window.scrollY >= triggerPoint - 100){
        storyNav.classList.add("show");
        navToggle.classList.add("show");
    }else{
        storyNav.classList.remove("show");
        navToggle.classList.remove("show");
    }
});

// PEREMPATAN JALAN (SECTION 4)
    let texts = ["Percintaan", "Karir", "Keuangan", `Tujuan Hidup`];

    let tujuan = document.querySelector(".tujuan");
    let keuangan = document.querySelector(".keuangan");
    let karir = document.querySelector(".karir");
    let percintaan = document.querySelector(".percintaan");

    let index = 0;

    tujuan.style.setProperty("--dynamic-text", `"${texts[2]}"`);
    keuangan.style.setProperty("--dynamic-text", `"${texts[1]}"`);
    karir.style.setProperty("--dynamic-text", `"${texts[0]}"`);
    percintaan.style.setProperty("--dynamic-text", `"${texts[3]}"`);
    
    tujuan.classList.add("show");
    keuangan.classList.add("show");
    karir.classList.add("show");
    percintaan.classList.add("show");

    setInterval(() => {
      tujuan.classList.remove("show");
      keuangan.classList.remove("show");
      karir.classList.remove("show");
      percintaan.classList.remove("show");

      setTimeout(() => {
        tujuan.style.setProperty("--dynamic-text", `"${texts[(index+3) % texts.length]}"`);
        keuangan.style.setProperty("--dynamic-text", `"${texts[(index+2) % texts.length]}"`);
        karir.style.setProperty("--dynamic-text", `"${texts[(index+1) % texts.length]}"`);
        percintaan.style.setProperty("--dynamic-text", `"${texts[(index+0) % texts.length]}"`);

        tujuan.classList.add("show");
        keuangan.classList.add("show");
        karir.classList.add("show");
        percintaan.classList.add("show");

        index = (index + 1) % texts.length;
      }, 700);
    }, 2300);

// EFEK MENGETIK SECTION 5
    let text = "Quarter Life Crisis adalah fase kebingungan, kecemasan, dan krisis identitas yang biasanya muncul saat seseorang memasuki masa dewasa awal ditandai dengan pertanyaan besar tentang hidup.";
    let indexSec5 = 0;
    let speed = 25;
    let typingEl = document.getElementById("typing");

    function getColorForIndexSec5(i) {
      if (i < 19) return "#C80B0B"; 
      return "#704FDE";
    }

    function typeWriter() {
      if (indexSec5 < text.length) {
        let span = `<span style="color:${getColorForIndexSec5(indexSec5)}">${text[indexSec5]}</span>`;
        typingEl.innerHTML += span;
        indexSec5++;
        setTimeout(typeWriter, speed);
      }
    }

// CLICK ELEMENT FOR SECTION 7
document.addEventListener('DOMContentLoaded', function () {

  function getResponsiveConfig(type) {
    const w = window.innerWidth;

    if (type === 'sec8') {
      if (w <= 375)  return { x: 77, y: -38 };
      if (w <= 450)  return { x: 90, y: -48 };
      if (w <= 600)  return { x: 110, y: -55 };
      if (w <= 780)  return { x: 170, y: -90 };
      if (w <= 991)  return { x: 180, y: -90 };
      if (w <= 1024) return { x: 140, y: -70 };
      if (w <= 1300) return { x: 155, y: -70 };
      if (w <= 1440) return { x: 180, y: -70 };
      if (w <= 1550) return { x: 175, y: -70 };
      return           { x: 220, y: -110 };
    }

    if (type === 'sec9') {
      if (w <= 375)  return { x: 11.5, y: -40 };
      if (w <= 450)  return { x: 14, y: -50 };
      if (w <= 600)  return { x: 15, y: -58 };
      if (w <= 780)  return { x: 22, y: -73 };
      if (w <= 991)  return { x: 26, y: -75 };
      if (w <= 1024) return { x: 15, y: -60 };
      if (w <= 1440) return { x: 10, y: -70 };
      return           { x: 15, y: -85 };
    }

    if (type === 'sec10') {
      if (w <= 375)  return { x: 70, y: 33 };
      if (w <= 450)  return { x: 125, y: 40 };
      if (w <= 600)  return { x: 160, y: 50 };
      if (w <= 780)  return { x: 190, y: 50 };
      if (w <= 991)  return { x: 200, y: 70 };
      if (w <= 1024) return { x: 150, y: 70 };
      if (w <= 1440) return { x: 140, y: 70 };
      return           { x: 210, y: 80 };
    }

    if (type === 'sec11') {
      if (w <= 375)  return { x: 70, y: 110 };
      if (w <= 450)  return { x: 70, y: 115 };
      if (w <= 600)  return { x: 90, y: 140 };
      if (w <= 780)  return { x: 130, y: 190 };
      if (w <= 991)  return { x: 140, y: 225 };
      if (w <= 1024) return { x: 120, y: 170 };
      if (w <= 1440) return { x: 120, y: 230 };
      return           { x: 140, y: 250 };
    }

    if (type === 'sec14') {
      if (w <= 375)  return { x: 30, y: 100 };
      if (w <= 450)  return { x: 30, y: 85 };
      if (w <= 600)  return { x: 40, y: 130 };
      if (w <= 780)  return { x: 50, y: 160 };
      if (w <= 991)  return { x: 60, y: 200 };
      if (w <= 1024) return { x: 47, y: 200 };
      if (w <= 1440) return { x: 30, y: 200 };
      return           { x: 40, y: 250 };
    }

    if (type === 'sec15') {
      if (w <= 375)  return { x: 25, y: 50 };
      if (w <= 450)  return { x: 30, y: 65 };
      if (w <= 600)  return { x: 43, y: 90 };
      if (w <= 780)  return { x: 53, y: 110 };
      if (w <= 991)  return { x: 60, y: 120 };
      if (w <= 1024) return { x: 45, y: 130 };
      if (w <= 1440) return { x: 40, y: 150 };
      return           { x: 48, y: 150 };
    }

    return { x: 280, y: -120 };
  }

  const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

  //  CLICK LOGIC
  const wrappers = document.querySelectorAll('.jalanTanya-wrapper');
  if (!wrappers.length) return;

  wrappers.forEach((element) => {

    const type = element.dataset.qtype || 'sec7';
    let { x: maxDragX, y: maxLiftY } = getResponsiveConfig(type);

    window.addEventListener('resize', () => {
      const cfg = getResponsiveConfig(type);
      maxDragX = cfg.x;
      maxLiftY = cfg.y;
    });

    let opened = false;
    let moveVal = 0;

    element.setAttribute('click', 'false');
    element.style.touchAction = 'none';

    const section = element.closest('section');
    const solution = section ? section.querySelector('.sec7-solution') : null;
    const defaults = section ? section.querySelectorAll('.sec7-default') : [];

    function render() {
      element.style.setProperty('--drag-x', `${moveVal}px`);
    }

    function updateUI() {
      const progress = Math.max(0, Math.min(moveVal / maxDragX, 1));

      defaults.forEach(el => {
        el.style.opacity = 1 - progress;
        el.style.transform = `translateY(${progress * -8}px)`;
        el.style.filter = `blur(${progress * 6}px)`;
      });

      if (solution) {
        solution.style.opacity = progress;
        solution.style.transform = `translateY(${(1 - progress) * 14}px)`;
        solution.style.filter = `blur(${(1 - progress) * 10}px)`;
      }

      const scale = 1 - (progress * 0.2);
      element.style.setProperty('--drag-scale', scale);

      const lift = progress * maxLiftY;
      element.style.setProperty('--drag-y', `${lift}px`);
    }

    element.addEventListener('click', () => {

      if (moveVal === 0) {
        moveVal = maxDragX;
      } else {
        moveVal = 0;
      }

      render();
      updateUI();

    });

    render();
    updateUI();
  });
});

// data target & data image html
const image = document.getElementById("emotionImage");
document.querySelectorAll('.emotion-btn').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    image.style.opacity = 0;

    setTimeout(() => {
      image.src = btn.dataset.image;
      image.style.opacity = 1;
    }, 300);
    document.querySelector(btn.dataset.target)
      .scrollIntoView({behavior:'smooth'});
  });
});

// Pop up petunjuk
    const section5 = document.getElementById("popupsec");
    const popup = document.getElementById("popup");
    const closeBtn = document.getElementById("closePopup");

    let popupShown = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {

            // Masuk ke section
            if (entry.isIntersecting && !popupShown) {
                popup.style.display = "block";
                popupShown = true;
            }

            // Keluar dari section
            if (!entry.isIntersecting) {
                popupShown = false;
            }

        });
    }, {
        threshold: 0.5
    });

    observer.observe(section5);

    closeBtn.addEventListener("click", () => {
      popup.style.display = "none";
    });

// Show Help Consult
const btnBantuan = document.getElementById("btnBantuan");
const bantuanContainer = document.getElementById("bantuanContainer");

btnBantuan.addEventListener("click", () => {

    bantuanContainer.classList.toggle("show");

    if(bantuanContainer.classList.contains("show")){
        btnBantuan.innerHTML =
        '<i class="fa-solid fa-xmark me-2"></i>Tutup Bantuan';
    }else{
        btnBantuan.innerHTML =
        '<i class="fa-solid fa-hand-holding-heart me-2"></i>Cari Bantuan';
    }

});

// Transisi logo
    window.addEventListener("scroll", () => {
        const logo = document.querySelector(".logo");

        if(window.scrollY >= document.querySelector(".bg-sec3").offsetTop){
            logo.classList.add("active");
        }else{
            logo.classList.remove("active");
        }
    });

// SET ALL PARALLAX EFFECTS
    let wScroll = 0;
    let ticking = false;
    let typewriterStarted = false;
    let webHeight, winHeight, sec1Top, sec1Height = 0;

    function cacheLayout(){
      webHeight = $(document).height();
      winHeight = $(window).height();
      const $sec1 = $(".bg-sec2");
      if($sec1.length){
          sec1Top = $sec1.offset().top;
          sec1Height = $sec1.height();
      }
    }

    $(window).scroll(function(){
      wScroll = $(this).scrollTop();

      if (!ticking) {
        window.requestAnimationFrame(function () {
          responsiveEffect(wScroll);
          ticking = false;
        });
        ticking = true;
      }
    });

    // window.addEventListener("resize", function(){
    //   responsiveEffect($(window).scrollTop());
    // });
    window.addEventListener("load", () => {
      cacheLayout();
      responsiveEffect($(window).scrollTop());
    });
    window.addEventListener("resize", () => {
      cacheLayout();
      responsiveEffect($(window).scrollTop());
    });

    // Cache element
    const $priaSwipe = $(".pria-swipe");
    const $wanitaSwipe = $(".wanita-swipe");
    const $quarter = $(".quarter");
    const $quarter2 = $(".quarter2");
    const $txtSec1 = $(".txt-sec1");
    const $pohon = $(".pohon");
    const $pohonFlip = $(".pohon-flip");
    const $pohonPohon = $(".pohonpohon");
    const $daun = $(".daun");
    const $swipeRight = $(".swipe2-righthalf");
    const $swipeLeft = $(".swipe2-lefthalf"); 
    const $qlcmb = $(".qlcmb");
    const $p2sec2 = $(".p2sec2");
    const $fsk = $(".fsk");
    const $priaSec4 = $(".pria-sec4");
    const $w150 = $(".w-150");
    const $dampak = $(".dampak");
    const $validasi = $(".validasi");

    responsiveEffect($(window).scrollTop());
    
    function responsiveEffect(wScroll) {
      // Global
      // var webHeight = $(document).height();
      // var winHeight = $(window).height(); 
      var scrollPercent = (wScroll / (webHeight - winHeight))*100;

      console.log(+ scrollPercent.toFixed(2) +"%");
      
      // Section 2
      // var sec1 = $('.bg-sec2');
      // var start1 = sec1.offset().top;
      // var end1 = start1+sec1.height();
      var start1 = sec1Top;
      var end1 = sec1Top + sec1Height;
      var progSec1 = (wScroll - start1)/(end1-start1);
      progSec1 = Math.max(0,Math.min(progSec1,1));

      // Limit scroll percent for each element
      var limRight576 = Math.min(scrollPercent, 4.1);
      var limRight375 = Math.min(scrollPercent, 5.2);
      var limLeft375 = Math.min(scrollPercent, 5.4);
      var limSwipeX = Math.min (scrollPercent, 6.5);
      var limpohon = Math.min(scrollPercent, 7);
      var limRight1440 = Math.min(scrollPercent, 7.7);
      var limRight = Math.min(scrollPercent, 9);
      var limLeft = Math.min(scrollPercent, 9.2);
      var limdaun = Math.min(scrollPercent, 10);
      var limLeft990 = Math.min(scrollPercent, 10.3);
      var menScrollX450 = Math.min(scrollPercent, 10.5);
      var limRight990 = Math.min(scrollPercent, 10.7);
      var menScrollY375 = Math.min(scrollPercent, 14);
      var lim1024 = Math.min(scrollPercent, 15.5);
      var menScrollX990 = Math.min(scrollPercent, 17.7);
      var menScrollY450 = Math.min(scrollPercent, 18.2);
      var menScrollX = Math.min(scrollPercent, 19);
      var menScrollY = Math.min(scrollPercent, 20);
      var limQuarter = Math.min(scrollPercent, 50);

      // Scale for pria section 4
      var menScale = Math.min((-80 + wScroll * 0.1), 110);
      var menScale375 = Math.max(100, (220 - wScroll * 0.05));
      var menScale780 = Math.max(110, (310 - wScroll * 0.07));
      var menScale1250 = Math.max(120, (250 - wScroll * 0.1));
      var menScale990 = Math.max(135, (470 - wScroll * 0.15));
      var menScale576 = Math.max(110, (280 - wScroll * 0.07));

      // Opacity for pria section 4     
      function menOpacity(scrollPercent) {
        if(scrollPercent < 4.3) return 0;
        if(scrollPercent < 5.2) return 1;
        if(scrollPercent < 7) return 0;
        return 1; 
      }
      function menOpacity576(scrollPercent) {
        if(scrollPercent < 5.5) return 0;
        if(scrollPercent < 6.7) return 1;
        if(scrollPercent < 8.6) return 0;
        return 1; 
      }
      function menOpacity2(scrollPercent) {
        if(scrollPercent < 5.5) return 0;
        if(scrollPercent < 7.1) return 1;
        if(scrollPercent < 8.9) return 0;
        return 1; 
      }
      function menOpacity991(scrollPercent) {
        if(scrollPercent < 7.2) return 0;
        if(scrollPercent < 10) return 1;
        if(scrollPercent < 13) return 0;
        return 1; 
      }
      function menOpacity375(scrollPercent) {
        if(scrollPercent < 7.2) return 0;
        if(scrollPercent < 11) return 1;
        if(scrollPercent < 13.8) return 0;
        return 1; 
      }
      function menOpacity611(scrollPercent) {
        if(scrollPercent < 4) return 0;
        if(scrollPercent < 8.5) return 1;
        if(scrollPercent < 11.4) return 0;
        return 1; 
      }
      function menOpacity450(scrollPercent) {
        if(scrollPercent < 11.5) return 0;
        if(scrollPercent < 13) return 1;
        if(scrollPercent < 16.5) return 0;
        return 1; 
      }

      // Opacity background fixed
      function bgfixed(scrollPercent) {
        if(scrollPercent < 0) return 0;
        if(scrollPercent < 8.4) return 1;
        if(scrollPercent < 36) return 0.15;
        return 0; 
      }
      function bgfixed2(scrollPercent) {
        if(scrollPercent < 0) return 0;
        if(scrollPercent < 6.4) return 1;
        if(scrollPercent < 36) return 0.15;
        return 0; 
      }

      if (window.matchMedia("(max-width: 375px) and (max-height: 667px)").matches) {
        // Section 1
        $wanitaSwipe.css({
          'transform': `translate3d(${-75}%, ${203+limQuarter*150}%, 0) scale(${180}%)`,
          'opacity': (scrollPercent >= 3.7 ? 0 : 1)
        });
        $priaSwipe.css({
          'transform': `translate3d(${-145}%, ${185+limQuarter*150}%, 0) scale(${180}%)`,
          'opacity': (scrollPercent >= 3.7 ? 0 : 1)
        });
        $quarter.css({
          'position' : 'fixed',
          'transform' : `translate3d(${19}%, ${-890-limQuarter*250}%, 0) scale(${170}%)`,
          'opacity': (scrollPercent >= 0.9 ? 0 : 1)
        }); 
        $quarter2.css({
          'position' : 'fixed',
          'transform' : `translate3d(${27}%, ${-300-limQuarter*94}%, 0) scale(${170}%)`,
          'opacity': (scrollPercent >= 0.9 ? 0 : 1)
        }); 
        $pohon.css({
          'transform' : `translate3d(${29-limpohon*0.5}%, ${190+limpohon*0.6}%, 0) scale(${248 + (limpohon*0.5)}%)`,
          'opacity': (scrollPercent >= 6.1 ? 0.15 : 1)
        }); 
        $pohonFlip.css({
          'transform' : `translate3d(${-1+limpohon*0.5}%, ${185-limpohon*0.6}%, 0) scaleX(-1) scale(${155 + (limpohon*0.5)}%)`,
          'opacity': (scrollPercent >= 6.1 ? 0.15 : 1)
        }); 
        $pohonPohon.css({
          'transform' : `translate3d(0, ${210-limpohon*0}%, 0) scale(${300 + (limdaun * 2.7)}%)`  ,
          'opacity': (scrollPercent >= 6.1 ? 0.15 : 1)
        }); 
        $daun.css({
          'transform' : `translate3d(0, ${-215-limdaun*0.5}%, 0) scale(${200 + (limdaun * 2.7)}%)`,
          'opacity': (scrollPercent >= 6.1 ? 0.15 : 1)
        });

        // Section 2
        $swipeRight.css({
          'transform' : `translate3d(${155-limRight375*27}%, 0, 0) rotate(180deg) scale(${75 + (scrollPercent * 1)}%)`
        });
        $swipeLeft.css({
          'transform' : `translate3d(${-155+limLeft375*27}%, 10%, 0) scale(${75 + (scrollPercent * 1)}%)`
        });
        $qlcmb.css({
          'transform' : `scale(${140 + (wScroll * 0)}%) translate3d(0, ${30}%, 0)`,
          'opacity': (scrollPercent >= 0.7 ? 1 : 0)
        });
        $p2sec2.css({
          'transform' : `translate3d(0, ${-40}%, 0)`,
          'opacity': (scrollPercent >= 1 ? 1 : 0)
        });
        $fsk.css({
          'transform' : `translate3d(0, ${-340+wScroll*0.65}%, 0) scale(${58 + (wScroll * 0.15)}%)`, 'text-shadow': ('1px 1px 1px rgb(0, 0, 0.1)') ,
          'opacity': (scrollPercent >= 1 ? 1 : 0)
        });
        $('.img-sec2 .position-start').css({
          'transform' : `scale(${57 + (wScroll * 0.1)}) translate3d(${149-wScroll*0.25}%, ${-37+wScroll*0.05}%, 0)`
        });
        $('.img-sec2 .position-end').css({
          'transform' : `scale(${57 + (wScroll * 0.1)}) translate3d(${-155+wScroll*0.25}%, ${-37+wScroll*0.05}%, 0)`
        });

        // Section 3
        $priaSec4.css({
          'transform': `translate3d(${-68 + menScrollX450*8}%, ${-1560 + Math.min(scrollPercent, 7.4)*215}%, 0) scale(${menScale375}%)`,
           'opacity': menOpacity(scrollPercent)
        });

        // Section 5    
        if(scrollPercent >= 6.8 && !typewriterStarted) {
          typewriterStarted = true;
          typeWriter();
          $('.cursor').css('opacity', scrollPercent >= 6.8 ? 1 : 0);
        }

        // Section 7
        $w150.css({
          'transform' : `translate3d(${-29}%, ${85}%, 0)`
        });

        // Section 17
        $dampak.css({
          'transform' : `translate3d(${-28}%, ${175}%, 0)`
        });
      } else if (window.matchMedia("(max-width: 375px) and (max-height: 755px)").matches) {
        // Section 1
        $wanitaSwipe.css({
          'transform' : `translate3d(${-75}%, ${262+limQuarter*150}%, 0) scale(${180}%)`,
          'opacity': (scrollPercent >= 3.7 ? 0 : 1)
        });
        $priaSwipe.css({
          'transform' : `translate3d(${-145}%, ${240+limQuarter*150}%, 0) scale(${180}%)`,
          'opacity': (scrollPercent >= 3.7 ? 0 : 1)
        });
        $quarter.css({
          'position' : 'fixed',
          'transform' : `translate3d(${19}%, ${-870-limQuarter*500}%, 0) scale(${170}%)`,
          'opacity': (scrollPercent >= 0.8 ? 0 : 1)
        }); 
        $quarter2.css({
          'position' : 'fixed',
          'transform' : `translate3d(${27}%, ${-300-limQuarter*170}%, 0) scale(${170}%)`,
          'opacity': (scrollPercent >= 0.8 ? 0 : 1)
        }); 
        $pohon.css({
          'transform' : `translate3d(${29-limpohon*0.5}%, ${230+limpohon*0.6}%, 0) scale(${248 + (limpohon*0.5)}%)`,
          'opacity': (scrollPercent >= 6.1 ? 0.15 : 1)
        }); 
        $pohonFlip.css({
          'transform' : `translate3d(${-1+limpohon*0.5}%, ${215-limpohon*0.6}%, 0) scaleX(-1) scale(${155 + (limpohon*0.5)}%)`,
          'opacity': (scrollPercent >= 6.1 ? 0.15 : 1)
        }); 
        $pohonPohon.css({
          'transform' : `translate3d(0, ${240-limpohon*0}%, 0) scale(${300 + (limdaun * 2.7)}%)`  ,
          'opacity': (scrollPercent >= 6.1 ? 0.15 : 1)
        }); 
        $daun.css({
          'transform' : `translate3d(0, ${-280-limdaun*0.5}%, 0) scale(${200 + (limdaun * 2.7)}%)`,
          'opacity': (scrollPercent >= 6.1 ? 0.15 : 1)
        });

        // Section 2
        $swipeRight.css({
          'transform' : `translate3d(${155-limRight375*27}%, 0, 0) rotate(180deg) scale(${75 + (scrollPercent * 1)}%)`
        });
        $swipeLeft.css({
          'transform' : `translate3d(${-155+limLeft375*27}%, 10%, 0) scale(${75 + (scrollPercent * 1)}%)`
        });
        $qlcmb.css({
          'transform' : `scale(${140 + (wScroll * 0)}%) translate(0, ${30}%)`,
          'opacity': (scrollPercent >= 0.8 ? 1 : 0)
        });
        $p2sec2.css({
          'opacity': (scrollPercent >= 0.8 ? 1 : 0)
        });
        $fsk.css({
          'transform' : `translate3d(0, ${-220+wScroll*0.65}%, 0) scale(${58 + (wScroll * 0.15)}%)`, 'text-shadow': ('1px 1px 1px rgb(0, 0, 0.1)') ,
          'opacity': (scrollPercent >= 0.8 ? 1 : 0)
        });
        $('.img-sec2 .position-start').css({
          'transform' : `scale(${57 + (wScroll * 0.1)}) translate(${149-wScroll*0.25}%, ${-37+wScroll*0.05}%)`
        });
        $('.img-sec2 .position-end').css({
          'transform' : `scale(${57 + (wScroll * 0.1)}) translate(${-155+wScroll*0.25}%, ${-37+wScroll*0.05}%)`
        });

        // Section 3
        $priaSec4.css({
          'transform': `translate3d(${-68 + menScrollX450*8}%, ${-1560 + limRight1440*205}%, 0) scale(${menScale375}%)`,
           'opacity': menOpacity(scrollPercent)
        });

        // Section 5    
        if(scrollPercent >= 6.8 && !typewriterStarted) {
          typewriterStarted = true;
          typeWriter();
          $('.cursor').css('opacity', scrollPercent >= 6.8 ? 1 : 0);
        }

        // Section 7
        $w150.css({
          'transform' : `translate3d(${-29}%, ${80}%, 0)`
        });

        // Section 17
        $dampak.css({
          'transform' : `translate3d(${-28}%, ${160}%, 0)`
        });
      } else if (window.matchMedia("(max-width: 375px) and (max-height: 850px)").matches) {
        // Section 1
        $wanitaSwipe.css({
          'transform' : `translate3d(${-75}%, ${300+limQuarter*150}%, 0) scale(${180}%)`,
          'opacity': (scrollPercent >= 3.7 ? 0 : 1)
        });
        $priaSwipe.css({
          'transform' : `translate3d(${-145}%, ${280+limQuarter*150}%, 0) scale(${180}%)`,
          'opacity': (scrollPercent >= 3.7 ? 0 : 1)
        });
        $quarter.css({
          'position' : 'fixed',
          'transform' : `translate3d(${19}%, ${-1350-limQuarter*500}%, 0) scale(${170}%)`,
          'opacity': (scrollPercent >= 0.8 ? 0 : 1)
        }); 
        $quarter2.css({
          'position' : 'fixed',
          'transform' : `translate3d(${27}%, ${-500-limQuarter*170}%, 0) scale(${170}%)`,
          'opacity': (scrollPercent >= 0.8 ? 0 : 1)
        }); 
        $pohon.css({
          'transform' : `translate3d(${29-limpohon*0.5}%, ${285+limpohon*0.6}%, 0) scale(${248 + (limpohon*0.5)}%)`,
          'opacity': (scrollPercent >= 6.1 ? 0.15 : 1)
        }); 
        $pohonFlip.css({
          'transform' : `translate3d(${-1+limpohon*0.5}%, ${247-limpohon*0.6}%, 0) scaleX(-1) scale(${155 + (limpohon*0.5)}%)`,
          'opacity': (scrollPercent >= 6.1 ? 0.15 : 1)
        }); 
        $pohonPohon.css({
          'transform' : `translate3d(0, ${290-limpohon*0}%, 0) scale(${300 + (limdaun * 2.7)}%)`,
          'opacity': (scrollPercent >= 6.1 ? 0.15 : 1)
        }); 
        $daun.css({
          'transform' : `translate3d(0, ${-320-limdaun*0.5}%, 0) scale(${200 + (limdaun * 2.7)}%)`,
          'opacity': (scrollPercent >= 6.1 ? 0.15 : 1)
        });
        $('.sec1 .orange.text-shadow').css({
          'text-shadow': ('1px 1px 1px rgb(255, 255, 255)')
        });

        // Section 2
        $swipeRight.css({
          'transform' : `translate3d(${155-limRight375*27}%, 0, 0) rotate(180deg) scale(${75 + (scrollPercent * 1)}%)`
        });
        $swipeLeft.css({
          'transform' : `translate3d(${-155+limLeft375*27}%, 10%, 0) scale(${75 + (scrollPercent * 1)}%)`
        });
        $qlcmb.css({
          'transform' : `scale(${140 + (wScroll * 0)}%) translate3d(0, ${-30}%, 0)`,
          'opacity': (scrollPercent >= 0.8 ? 1 : 0)
        });
        $p2sec2.css({
          'transform' : `translate3d(0, ${-60}%, 0)`,
          'opacity': (scrollPercent >= 0.8 ? 1 : 0)
        });
        $fsk.css({
          'transform' : `translate3d(0, ${-220+wScroll*0.65}%, 0) scale(${70 + (wScroll * 0.15)}%)`, 'text-shadow': ('1px 1px 1px rgb(0, 0, 0.1)') ,
          'opacity': (scrollPercent >= 0.8 ? 1 : 0)
        });
        $('.img-sec2 .position-start').css({
          'transform' : `scale(${57 + (wScroll * 0.1)}) translate3d(${149-wScroll*0.25}%, ${-37+wScroll*0.05}%, 0)`
        });
        $('.img-sec2 .position-end').css({
          'transform' : `scale(${57 + (wScroll * 0.1)}) translate3d(${-155+wScroll*0.25}%, ${-37+wScroll*0.05}%, 0)`
        });

        // Section 3
        $priaSec4.css({
          'transform': `translate3d(${-68 + menScrollX450*8}%, ${-1560 + limRight1440*205}%, 0) scale(${menScale375}%)`,
           'opacity': menOpacity(scrollPercent)
        });

        // Section 5    
        if(scrollPercent >= 6.8 && !typewriterStarted) {
          typewriterStarted = true;
          typeWriter();
          $('.cursor').css('opacity', scrollPercent >= 6.8 ? 1 : 0);
        }

        // Section 7
        $w150.css({
          'transform' : `translate3d(${-29}%, ${70}%, 0)`
        });

        // Section 17
        $dampak.css({
          'transform' : `translate3d(${-28}%, ${155}%, 0)`
        });
      } else if (window.matchMedia("(max-width: 375px) and (max-height: 945px)").matches) {
        // Section 1
        $wanitaSwipe.css({
          'transform' : `translate3d(${-75}%, ${365+limQuarter*150}%, 0) scale(${180}%)`,
          'opacity': (scrollPercent >= 3.7 ? 0 : 1)
        });
        $priaSwipe.css({
          'transform' : `translate3d(${-145}%, ${340+limQuarter*150}%, 0) scale(${180}%)`,
          'opacity': (scrollPercent >= 3.7 ? 0 : 1)
        });
        $quarter.css({
          'position' : 'fixed',
          'transform' : `translate3d(${19}%, ${-1350-limQuarter*900}%, 0) scale(${170}%)`,
          'opacity': (scrollPercent >= 0.8 ? 0 : 1)
        }); 
        $quarter2.css({
          'position' : 'fixed',
          'transform' : `translate3d(${27}%, ${-500-limQuarter*330}%, 0) scale(${170}%)`,
          'opacity': (scrollPercent >= 0.8 ? 0 : 1)
        }); 
        $pohon.css({
          'transform' : `translate3d(${29-limpohon*0.5}%, ${320+limpohon*0.6}%, 0) scale(${248 + (limpohon*0.5)}%)`,
          'opacity': (scrollPercent >= 6.1 ? 0.15 : 1)
        }); 
        $pohonFlip.css({
          'transform' : `translate3d(${-1+limpohon*0.5}%, ${285-limpohon*0.6}%, 0) scaleX(-1) scale(${155 + (limpohon*0.5)}%)`,
          'opacity': (scrollPercent >= 6.1 ? 0.15 : 1)
        }); 
        $pohonPohon.css({
          'transform' : `translate3d(0, ${340-limpohon*0}%, 0) scale(${300 + (limdaun * 2.7)}%)`,
          'opacity': (scrollPercent >= 6.1 ? 0.15 : 1)
        }); 
        $daun.css({
          'transform' : `translate3d(0, ${-360-limdaun*0.5}%, 0) scale(${200 + (limdaun * 2.7)}%)`,
          'opacity': (scrollPercent >= 6.1 ? 0.15 : 1)
        });
        $('.sec1 .orange.text-shadow').css({
          'text-shadow': ('1px 1px 1px rgb(255, 255, 255)')
        });

        // Section 2
        $swipeRight.css({
          'transform' : `translate3d(${155-limRight375*27}%, 0, 0) rotate(180deg) scale(${75 + (scrollPercent * 1)}%)`
        });
        $swipeLeft.css({
          'transform' : `translate3d(${-155+limLeft375*27}%, 10%, 0) scale(${75 + (scrollPercent * 1)}%)`
        });
        $qlcmb.css({
          'transform' : `scale(${140 + (wScroll * 0)}%) translate3d(0, ${-30}%, 0)`,
          'opacity': (scrollPercent >= 0.4 ? 1 : 0)
        });
        $p2sec2.css({
          'transform' : `translate3d(0, ${-60}%, 0)`,
          'opacity': (scrollPercent >= 0.4 ? 1 : 0)
        });
        $fsk.css({
          'transform' : `translate3d(0, ${-220+wScroll*0.65}%, 0) scale(${70 + (wScroll * 0.15)}%)`, 'text-shadow': ('1px 1px 1px rgb(0, 0, 0.1)') ,
          'opacity': (scrollPercent >= 0.4 ? 1 : 0)
        });
        $('.img-sec2 .position-start').css({
          'transform' : `scale(${57 + (wScroll * 0.1)}) translate3d(${149-wScroll*0.25}%, ${-37+wScroll*0.05}%, 0)`
        });
        $('.img-sec2 .position-end').css({
          'transform' : `scale(${57 + (wScroll * 0.1)}) translate3d(${-155+wScroll*0.25}%, ${-37+wScroll*0.05}%, 0)`
        });

        // Section 3
        $priaSec4.css({
          'transform': `translate3d(${-68 + menScrollX450*8}%, ${-1560 + limRight1440*205}%, 0) scale(${menScale375}%)`,
           'opacity': menOpacity(scrollPercent)
        });

        // Section 5    
        if(scrollPercent >= 6.8 && !typewriterStarted) {
          typewriterStarted = true;
          typeWriter();
          $('.cursor').css('opacity', scrollPercent >= 6.8 ? 1 : 0);
        }

        // Section 7
        $w150.css({
          'transform' : `translate3d(${-29}%, ${85}%, 0)`
        });

        // Section 17
        $dampak.css({
          'transform' : `translate3d(${-28}%, ${170}%, 0)`
        });
      } else if (window.matchMedia("(max-width: 400px)").matches) {
        // Section 1
        $wanitaSwipe.css({
          'transform' : `translate3d(${-75}%, ${270+limQuarter*120}%, 0) scale(${180}%)`,
          'opacity': (scrollPercent >= 3.7 ? 0 : 1)
        });
        $priaSwipe.css({
          'transform' : `translate3d(${-145}%, ${270+limQuarter*120}%, 0) scale(${180}%)`,
          'opacity': (scrollPercent >= 3.7 ? 0 : 1)
        });
        $quarter.css({
          'position' : 'fixed',
          'transform' : `translate3d(${10}%, ${-1050-limQuarter*94}%, 0) scale(${120}%)`,
          'opacity': (scrollPercent >= 1.6 ? 0 : 1)
        }); 
        $quarter2.css({
          'position' : 'fixed',
          'transform' : `translate3d(${10}%, ${-400-limQuarter*34}%, 0) scale(${120}%)`,
          'opacity': (scrollPercent >= 1.6 ? 0 : 1)
        }); 
        $pohon.css({
          'transform' : `translate3d(${25}%, ${230+limpohon*1}%, 0) scale(${220 + (limpohon*1)}%)`,
          'opacity': (scrollPercent >= 7 ? 0.15 : 1)
        }); 
        $pohonFlip.css({
          'transform' : `translate3d(${-5+limpohon*0.5}%, ${215-limpohon*1}%, 0) scaleX(-1) scale(${155 + (limpohon*1)}%)`,
          'opacity': (scrollPercent >= 7 ? 0.15 : 1)
        }); 
        $pohonPohon.css({
          'transform' : `translate3d(0, ${230}%, 0) scale(${300 + (limdaun * 2.7)}%)`,
          'opacity': (scrollPercent >= 7 ? 0.15 : 1)
        }); 
        $daun.css({
          'transform' : `translate3d(0, ${-270-limdaun*0.5}%, 0) scale(${200 + (limdaun * 2.7)}%)`,
          'opacity': bgfixed2(scrollPercent)
        });

        // Section 2
        $swipeRight.css({
          'transform' : `translate3d(${145-limRight576*35}%, 0, 0) rotate(180deg)`
        });
        $swipeLeft.css({
          'transform' : `translate3d(${-145+limRight576*35}%, 0, 0)`
        });
        $qlcmb.css({
          'transform' : `translate3d(0, ${90}%, 0) scale(${140}%)`,
          'opacity': (scrollPercent >= 0.9 ? 1 : 0)
        });
        $p2sec2.css({
          'transform' : `translate3d(0, ${100}%, 0)`, 'text-shadow': ('1px 1px 5px rgb(255, 255, 255)'),
          'opacity': (scrollPercent >= 1.3 ? 1 : 0)
        });
        $fsk.css({
          'transform' : `translate3d(0, ${-130+wScroll*0.45}%, 0) scale(${30 + (wScroll * 0.15)}%)`, 'text-shadow': ('1px 1px 1px rgb(0, 0, 0.1)') ,
          'opacity': (scrollPercent >= 1.3 ? 1 : 0)
        });

        // Section 3
        $priaSec4.css({
          'transform': `translate3d(${-82 + menScrollX450*8}%, ${-1850 + limLeft*205}%, 0) scale(${menScale576}%)`,
           'opacity': menOpacity576(scrollPercent)
        });

        // Section 5    
        if(scrollPercent >= 7.8 && !typewriterStarted) {
          typewriterStarted = true;
          typeWriter();
          $('.cursor').css('opacity', scrollPercent >= 7.8 ? 1 : 0);
        }

        // Section 7
        $w150.css({
          'transform' : `translate3d(${-29}%, ${60}%, 0)`
        });

        // Section 17         
        $dampak.css({
          'transform' : `translate3d(${26}%, ${133}%, 0)`
        });
      } else if (window.matchMedia("(max-width: 430px) and (max-height: 800px)").matches) {
        // Section 1
        $wanitaSwipe.css({
          'transform' : `translate3d(${-75}%, ${220+limQuarter*120}%, 0) scale(${180}%)`,
          'opacity': (scrollPercent >= 3.7 ? 0 : 1)
        });
        $priaSwipe.css({
          'transform' : `translate3d(${-145}%, ${220+limQuarter*120}%, 0) scale(${180}%)`,
          'opacity': (scrollPercent >= 3.7 ? 0 : 1)
        });
        $quarter.css({
          'position' : 'fixed',
          'transform' : `translate3d(${10}%, ${-1120-limQuarter*94}%, 0) scale(${120}%)`,
          'opacity': (scrollPercent >= 1.15 ? 0 : 1)
        }); 
        $quarter2.css({
          'position' : 'fixed',
          'transform' : `translate3d(${10}%, ${-420-limQuarter*34}%, 0) scale(${120}%)`,
          'opacity': (scrollPercent >= 1.15 ? 0 : 1)
        }); 
        $pohon.css({
          'transform' : `translate3d(${25}%, ${210+limpohon*1.5}%, 0) scale(${195 + (limpohon*1.5)}%)`,
          'opacity': (scrollPercent >= 7 ? 0.15 : 1)
        }); 
        $pohonFlip.css({
          'transform' : `translate3d(${-5+limpohon*0.5}%, ${215-limpohon*1.5}%, 0) scaleX(-1) scale(${155 + (limpohon*1.5)}%)`,
          'opacity': (scrollPercent >= 7 ? 0.15 : 1)
        }); 
        $pohonPohon.css({
          'transform' : `translate3d(0, ${230}%, 0) scale(${300 + (limdaun * 2.7)}%)`,
          'opacity': (scrollPercent >= 7 ? 0.15 : 1)
        }); 
        $daun.css({
          'transform' : `translate3d(0, ${-250-limdaun*0.5}%, 0) scale(${200 + (limdaun * 2.7)}%)`,
          'opacity': bgfixed2(scrollPercent)
        });

        // Section 2
        $swipeRight.css({
          'transform' : `translate3d(${145-limRight576*35}%, 0, 0) rotate(180deg)`
        });
        $swipeLeft.css({
          'transform' : `translate3d(${-145+limRight576*35}%, 0, 0)`
        });
        $qlcmb.css({
          'transform' : `translate3d(0, ${90}%, 0) scale(${140}%)`,
          'opacity': (scrollPercent >= 0.9 ? 1 : 0)
        });
        $p2sec2.css({
          'transform' : `translate3d(0, ${100}%, 0)`, 'text-shadow': ('1px 1px 5px rgb(255, 255, 255)'),
          'opacity': (scrollPercent >= 1.3 ? 1 : 0)
        });
        $fsk.css({
          'transform' : `translate3d(0, ${-150+wScroll*0.45}%, 0) scale(${30 + (wScroll * 0.15)}%)`, 'text-shadow': ('1px 1px 1px rgb(0, 0, 0.1)') ,
          'opacity': (scrollPercent >= 1.3 ? 1 : 0)
        });

        // Section 3
        $priaSec4.css({
          'transform': `translate3d(${-82 + menScrollX450*8}%, ${-1850 + limLeft*205}%, 0) scale(${menScale576}%)`,
           'opacity': menOpacity576(scrollPercent)
        });

        // Section 5    
        if(scrollPercent >= 7.8 && !typewriterStarted) {
          typewriterStarted = true;
          typeWriter();
          $('.cursor').css('opacity', scrollPercent >= 7.8 ? 1 : 0);
        }

        // Section 7
        $w150.css({
          'transform' : `translate3d(${-29}%, ${50}%, 0)`
        });

        // Section 17         
        $dampak.css({
          'transform' : `translate3d(${26}%, ${120}%, 0)`
        });

      } else if (window.matchMedia("(max-width: 430px) and (min-height: 801px)").matches) {
        // Section 1
        $wanitaSwipe.css({
          'transform' : `translate3d(${-75}%, ${300+limQuarter*120}%, 0) scale(${180}%)`,
          'opacity': (scrollPercent >= 3.7 ? 0 : 1)
        });
        $priaSwipe.css({
          'transform' : `translate3d(${-145}%, ${300+limQuarter*120}%, 0) scale(${180}%)`,
          'opacity': (scrollPercent >= 3.7 ? 0 : 1)
        });
        $quarter.css({
          'position' : 'fixed',
          'transform' : `translate3d(${10}%, ${-1120-limQuarter*400}%, 0) scale(${120}%)`,
          'opacity': (scrollPercent >= 1.15 ? 0 : 1)
        }); 
        $quarter2.css({
          'position' : 'fixed',
          'transform' : `translate3d(${10}%, ${-440-limQuarter*140}%, 0) scale(${120}%)`,
          'opacity': (scrollPercent >= 1.15 ? 0 : 1)
        }); 
        $pohon.css({
          'transform' : `translate3d(${25}%, ${250+limpohon*1.5}%, 0) scale(${195 + (limpohon*1.5)}%)`,
          'opacity': (scrollPercent >= 7 ? 0.15 : 1)
        }); 
        $pohonFlip.css({
          'transform' : `translate3d(${-5+limpohon*0.5}%, ${225-limpohon*1.5}%, 0) scaleX(-1) scale(${155 + (limpohon*1.5)}%)`,
          'opacity': (scrollPercent >= 7 ? 0.15 : 1)
        }); 
        $pohonPohon.css({
          'transform' : `translate3d(0, ${240}%, 0) scale(${300 + (limdaun * 2.7)}%)`,
          'opacity': (scrollPercent >= 7 ? 0.15 : 1)
        }); 
        $daun.css({
          'transform' : `translate3d(0, ${-270-limdaun*0.5}%, 0) scale(${200 + (limdaun * 2.7)}%)`,
          'opacity': bgfixed2(scrollPercent)
        });

        // Section 2
        $swipeRight.css({
          'transform' : `translate3d(${145-limRight576*35}%, 0, 0) rotate(180deg)`
        });
        $swipeLeft.css({
          'transform' : `translate3d(${-145+limRight576*35}%, 0, 0)`
        });
        $qlcmb.css({
          'transform' : `translate3d(0, ${90}%, 0) scale(${140}%)`,
          'opacity': (scrollPercent >= 0.3 ? 1 : 0)
        });
        $p2sec2.css({
          'transform' : `translate3d(0, ${120}%, 0)`, 'text-shadow': ('1px 1px 5px rgb(255, 255, 255)'),
          'opacity': (scrollPercent >= 0.7 ? 1 : 0)
        });
        $fsk.css({
          'transform' : `translate3d(0, ${-80+wScroll*0.45}%, 0) scale(${30 + (wScroll * 0.15)}%)`, 'text-shadow': ('1px 1px 1px rgb(0, 0, 0.1)') ,
          'opacity': (scrollPercent >= 1 ? 1 : 0)
        });

        // Section 3
        $priaSec4.css({
          'transform': `translate3d(${-82 + menScrollX450*8}%, ${-1850 + limLeft*205}%, 0) scale(${menScale576}%)`,
           'opacity': menOpacity576(scrollPercent)
        });

        // Section 5    
        if(scrollPercent >= 7.8 && !typewriterStarted) {
          typewriterStarted = true;
          typeWriter();
          $('.cursor').css('opacity', scrollPercent >= 7.8 ? 1 : 0);
        }

        // Section 7
        $w150.css({
          'transform' : `translate3d(${-29}%, ${42}%, 0)`
        });

        // Section 17         
        $dampak.css({
          'transform' : `translate3d(${26}%, ${110}%, 0)`
        });

      } else if (window.matchMedia("(max-width: 450px)").matches) {
        // Section 1
        $wanitaSwipe.css({
          'transform' : `translate3d(${-75}%, ${200+limQuarter*120}%, 0) scale(${180}%)`,
          'opacity': (scrollPercent >= 3.7 ? 0 : 1)
        });
        $priaSwipe.css({
          'transform' : `translate3d(${-145}%, ${200+limQuarter*120}%, 0) scale(${180}%)`,
          'opacity': (scrollPercent >= 3.7 ? 0 : 1)
        });
        $quarter.css({
          'position' : 'fixed',
          'transform' : `translate3d(${10}%, ${-920-limQuarter*174}%, 0) scale(${120}%)`,
          'opacity': (scrollPercent >= 1.15 ? 0 : 1)
        }); 
        $quarter2.css({
          'position' : 'fixed',
          'transform' : `translate3d(${10}%, ${-350-limQuarter*64}%, 0) scale(${120}%)`,
          'opacity': (scrollPercent >= 1.15 ? 0 : 1)
        }); 
        $pohon.css({
          'transform' : `translate3d(${25}%, ${210+limpohon*1.5}%, 0) scale(${195 + (limpohon*1.5)}%)`,
          'opacity': (scrollPercent >= 7 ? 0.15 : 1)
        }); 
        $pohonFlip.css({
          'transform' : `translate3d(${-5+limpohon*0.5}%, ${215-limpohon*1.5}%, 0) scaleX(-1) scale(${155 + (limpohon*1.5)}%)`,
          'opacity': (scrollPercent >= 7 ? 0.15 : 1)
        }); 
        $pohonPohon.css({
          'transform' : `translate3d(0, ${230}%, 0) scale(${300 + (limdaun * 2.7)}%)`,
          'opacity': (scrollPercent >= 7 ? 0.15 : 1)
        }); 
        $daun.css({
          'transform' : `translate3d(0, ${-190-limdaun*0.5}%, 0) scale(${200 + (limdaun * 2.7)}%)`,
          'opacity': bgfixed2(scrollPercent)
        });

        // Section 2
        $swipeRight.css({
          'transform' : `translate3d(${145-limRight576*35}%, 0, 0) rotate(180deg)`
        });
        $swipeLeft.css({
          'transform' : `translate3d(${-145+limRight576*35}%, 0, 0)`
        });
        $qlcmb.css({
          'transform' : `translate3d(0, ${120}%, 0) scale(${140}%)`,
          'opacity': (scrollPercent >= 0.9 ? 1 : 0)
        });
        $p2sec2.css({
          'transform' : `translate3d(0, ${140}%, 0)`, 'text-shadow': ('1px 1px 5px rgb(255, 255, 255)'),
          'opacity': (scrollPercent >= 1.85 ? 1 : 0)
        });
        $fsk.css({
          'transform' : `translate3d(0, ${-140+wScroll*0.45}%, 0) scale(${30 + (wScroll * 0.15)}%)`, 'text-shadow': ('1px 1px 1px rgb(0, 0, 0.1)') ,
          'opacity': (scrollPercent >= 2 ? 1 : 0)
        });

        // Section 3
        $priaSec4.css({
          'transform': `translate3d(${-82 + menScrollX450*8}%, ${-1850 + limLeft*205}%, 0) scale(${menScale576}%)`,
           'opacity': menOpacity576(scrollPercent)
        });

        // Section 5    
        if(scrollPercent >= 7.8 && !typewriterStarted) {
          typewriterStarted = true;
          typeWriter();
          $('.cursor').css('opacity', scrollPercent >= 7.8 ? 1 : 0);
        }

        // Section 7
        $w150.css({
          'transform' : `translate3d(${-28.5}%, ${38}%, 0)`
        });

        // Section 17         
        $dampak.css({
          'transform' : `translate3d(${26}%, ${110}%, 0)`
        });
      } else if (window.matchMedia("(max-width: 485px)").matches) {
        // Section 1
        $wanitaSwipe.css({
          'transform' : `translate3d(${-75}%, ${200+limQuarter*120}%, 0) scale(${180}%)`,
          'opacity': (scrollPercent >= 3.7 ? 0 : 1)
        });
        $priaSwipe.css({
          'transform' : `translate3d(${-145}%, ${200+limQuarter*120}%, 0) scale(${180}%)`,
          'opacity': (scrollPercent >= 3.7 ? 0 : 1)
        });
        $quarter.css({
          'position' : 'fixed',
          'transform' : `translate3d(${10}%, ${-920-limQuarter*94}%, 0) scale(${120}%)`,
          'opacity': (scrollPercent >= 1.15 ? 0 : 1)
        }); 
        $quarter2.css({
          'position' : 'fixed',
          'transform' : `translate3d(${10}%, ${-350-limQuarter*34}%, 0) scale(${120}%)`,
          'opacity': (scrollPercent >= 1.15 ? 0 : 1)
        }); 
        $pohon.css({
          'transform' : `translate3d(${25}%, ${210+limpohon*1.5}%, 0) scale(${195 + (limpohon*1.5)}%)`,
          'opacity': (scrollPercent >= 7 ? 0.15 : 1)
        }); 
        $pohonFlip.css({
          'transform' : `translate3d(${-5+limpohon*0.5}%, ${215-limpohon*1.5}%, 0) scaleX(-1) scale(${155 + (limpohon*1.5)}%)`,
          'opacity': (scrollPercent >= 7 ? 0.15 : 1)
        }); 
        $pohonPohon.css({
          'transform' : `translate3d(0, ${230}%, 0) scale(${300 + (limdaun * 2.7)}%)`,
          'opacity': (scrollPercent >= 7 ? 0.15 : 1)
        }); 
        $daun.css({
          'transform' : `translate3d(0, ${-250-limdaun*0.5}%, 0) scale(${200 + (limdaun * 2.7)}%)`,
          'opacity': bgfixed2(scrollPercent)
        });

        // Section 2
        $swipeRight.css({
          'transform' : `translate3d(${145-limRight576*35}%, 0, 0) rotate(180deg)`
        });
        $swipeLeft.css({
          'transform' : `translate3d(${-145+limRight576*35}%, 0, 0)`
        });
        $qlcmb.css({
          'transform' : `translate3d(0, ${90}%, 0) scale(${140}%)`,
          'opacity': (scrollPercent >= 0.9 ? 1 : 0)
        });
        $p2sec2.css({
          'transform' : `translate3d(0, ${100}%, 0)`, 'text-shadow': ('1px 1px 5px rgb(255, 255, 255)'),
          'opacity': (scrollPercent >= 1.3 ? 1 : 0)
        });
        $fsk.css({
          'transform' : `translate3d(0, ${-150+wScroll*0.45}%, 0) scale(${30 + (wScroll * 0.15)}%)`, 'text-shadow': ('1px 1px 1px rgb(0, 0, 0.1)') ,
          'opacity': (scrollPercent >= 1.3 ? 1 : 0)
        });

        // Section 3
        $priaSec4.css({
          'transform': `translate3d(${-82 + menScrollX450*8}%, ${-1850 + limLeft*205}%, 0) scale(${menScale576}%)`,
           'opacity': menOpacity576(scrollPercent)
        });

        // Section 5    
        if(scrollPercent >= 7.8 && !typewriterStarted) {
          typewriterStarted = true;
          typeWriter();
          $('.cursor').css('opacity', scrollPercent >= 7.8 ? 1 : 0);
        }

        // Section 7
        $w150.css({
          'transform' : `translate3d(${-29}%, ${30}%, 0)`
        });

        // Section 17         
        $dampak.css({
          'transform' : `translate3d(${26}%, ${110}%, 0)`
        });
      } else if (window.matchMedia("(max-width: 550px) and (max-height: 730px)").matches) {
        // Section 1
        $wanitaSwipe.css({
          'transform' : `translate3d(${-75}%, ${120+limQuarter*128}%, 0) scale(${150 - (wScroll * 0.0)}%)`,
          'opacity': (scrollPercent >= 8.4 ? 0 : 1)
        });
        $priaSwipe.css({
          'transform' : `translate3d(${-145}%, ${120+limQuarter*128}%, 0) scale(${150 - (wScroll * 0.0)}%)`,
          'opacity': (scrollPercent >= 8.4 ? 0 : 1)
        });
        $quarter.css({
          'position' : 'fixed',
          'transform' : `translate3d(0, ${-680-limQuarter*204}%, 0) scale(${100}%)`,
          'opacity': (scrollPercent >= 1.1 ? 0 : 1)
        }); 
        $quarter2.css({
          'position' : 'fixed',
          'transform' : `translate3d(0, ${-260-limQuarter*74}%, 0) scale(${100}%)`,
          'opacity': (scrollPercent >= 1.1 ? 0 : 1)
        }); 
        $pohon.css({
          'transform' : `translate3d(${10}%, ${140+limpohon*1.5}%, 0) scale(${125 + (limpohon*1.5)}%)`,
          'opacity': (scrollPercent >= 8.4 ? 0.15 : 1) 
        }); 
        $pohonFlip.css({
          'transform' : `translate3d(${-10+limpohon*0.5}%, ${135-limpohon*1.5}%, 0) scaleX(-1) scale(${135 + (limpohon*1.5)}%)`,
          'opacity': (scrollPercent >= 8.4 ? 0.15 : 1)
        }); 
        $pohonPohon.css({
          'transform' : `translate3d(0, ${200}%, 0) scale(${250 + (limdaun * 2.7)}%)`,
          'opacity': (scrollPercent >= 8.4 ? 0.15 : 1)
        }); 
        $daun.css({
          'transform' : `translate3d(0, ${-140-limdaun*0.5}%, 0) scale(${200 + (limdaun * 2.7)}%)`,
          'opacity': bgfixed(scrollPercent)
        });

        // Section 2
        $swipeRight.css({
          'transform' : `translate3d(${106-limRight990*10}%, 0, 0) rotate(180deg)`
        });
        $swipeLeft.css({
          'transform' : `translate3d(${-103+limLeft990*10}%, 0, 0)`
        });
        $qlcmb.css({
          'transform' : `scale(${150}%) translate3d(0, ${-55+wScroll*0.05}%, 0)`,
          'opacity': (scrollPercent >= 0.65 ? 1 : 0)
        });
        $p2sec2.css({
          'transform' : `translate3d(0, ${-130}%, 0) scale(${130}%)`,
          'opacity': (scrollPercent >= 1 ? 1 : 0)
        });
        $fsk.css({
          'transform' : `translate3d(0, ${-400+wScroll*0.75}%, 0) scale(${60 + (wScroll * 0.17)}%)`, 'text-shadow': ('1px 1px 1px rgb(0, 0, 0.1)') ,
          'opacity': (scrollPercent >= 1.2 ? 1 : 0)
        });

        // Section 3
        $priaSec4.css({
          'transform': `translate3d(${-82 + menScrollX450*8}%, ${-1665 + limLeft*185}%, 0) scale(${menScale576}%)`,
           'opacity': menOpacity2(scrollPercent)
        });

        // Section 5    
        if(scrollPercent >= 9.2 && !typewriterStarted) {
          typewriterStarted = true;
          typeWriter();
          $('.cursor').css('opacity', scrollPercent >= 9.2 ? 1 : 0);
        }

        // Section 7
        $w150.css({
          'transform' : `translate3d(${-29}%, ${10}%, 0)`
        });

        // Section 17         
        $dampak.css({
          'transform' : `translate3d(${26}%, ${65}%, 0)`
        });
      } else if (window.matchMedia("(max-width: 550px) and (max-height: 825px)").matches) {
        // Section 1
        $wanitaSwipe.css({
          'transform' : `translate3d(${-75}%, ${140+limQuarter*128}%, 0) scale(${180 - (wScroll * 0.0)}%)`,
          'opacity': (scrollPercent >= 8.4 ? 0 : 1)
        });
        $priaSwipe.css({
          'transform' : `translate3d(${-145}%, ${140+limQuarter*128}%, 0) scale(${180 - (wScroll * 0.0)}%)`,
          'opacity': (scrollPercent >= 8.4 ? 0 : 1)
        });
        $quarter.css({
          'position' : 'fixed',
          'transform' : `translate3d(0, ${-770-limQuarter*284}%, 0) scale(${100}%)`,
          'opacity': (scrollPercent >= 1.1 ? 0 : 1)
        }); 
        $quarter2.css({
          'position' : 'fixed',
          'transform' : `translate3d(0, ${-300-limQuarter*104}%, 0) scale(${100}%)`,
          'opacity': (scrollPercent >= 1.1 ? 0 : 1)
        }); 
        $pohon.css({
          'transform' : `translate3d(${17}%, ${170+limpohon*1.5}%, 0) scale(${165 + (limpohon*1.5)}%)`,
          'opacity': (scrollPercent >= 8.4 ? 0.15 : 1) 
        }); 
        $pohonFlip.css({
          'transform' : `translate3d(${limpohon*0.5}%, ${145-limpohon*1.5}%, 0) scaleX(-1) scale(${125 + (limpohon*1.5)}%)`,
          'opacity': (scrollPercent >= 8.4 ? 0.15 : 1)
        }); 
        $pohonPohon.css({
          'transform' : `translate3d(0, ${200}%, 0) scale(${250 + (limdaun * 2.7)}%)`,
          'opacity': (scrollPercent >= 8.4 ? 0.15 : 1)
        }); 
        $daun.css({
          'transform' : `translate3d(0, ${-165-limdaun*0.5}%, 0) scale(${200 + (limdaun * 2.7)}%)`,
          'opacity': bgfixed(scrollPercent)
        });

        // Section 2
        $swipeRight.css({
          'transform' : `translate3d(${106-limRight990*10}%, 0, 0) rotate(180deg)`
        });
        $swipeLeft.css({
          'transform' : `translate3d(${-103+limLeft990*10}%, 0, 0)`
        });
        $qlcmb.css({
          'transform' : `scale(${150}%) translate3d(0, ${-55+wScroll*0.05}%, 0)`,
          'opacity': (scrollPercent >= 0.65 ? 1 : 0)
        });
        $p2sec2.css({
          'transform' : `translate3d(0, ${-130}%, 0) scale(${130}%)`,
          'opacity': (scrollPercent >= 1 ? 1 : 0)
        });
        $fsk.css({
          'transform' : `translate3d(0, ${-400+wScroll*0.75}%, 0) scale(${60 + (wScroll * 0.17)}%)`, 'text-shadow': ('1px 1px 1px rgb(0, 0, 0.1)') ,
          'opacity': (scrollPercent >= 1.2 ? 1 : 0)
        });

        // Section 3
        $priaSec4.css({
          'transform': `translate3d(${-82 + menScrollX450*8}%, ${-1665 + limLeft*185}%, 0) scale(${menScale576}%)`,
           'opacity': menOpacity2(scrollPercent)
        });

        // Section 5    
        if(scrollPercent >= 9.2 && !typewriterStarted) {
          typewriterStarted = true;
          typeWriter();
          $('.cursor').css('opacity', scrollPercent >= 9.2 ? 1 : 0);
        }

        // Section 7
        $w150.css({
          'transform' : `translate3d(${-29}%, ${10}%, 0)`
        });

        // Section 17         
        $dampak.css({
          'transform' : `translate3d(${26}%, ${65}%, 0)`
        });
      } else if (window.matchMedia("(max-width: 550px) and (max-height: 960px)").matches) {
        // Section 1
        $wanitaSwipe.css({
          'transform' : `translate3d(${-75}%, ${200+limQuarter*88}%, 0) scale(${180 - (wScroll * 0.0)}%)`,
          'opacity': (scrollPercent >= 8.4 ? 0 : 1)
        });
        $priaSwipe.css({
          'transform' : `translate3d(${-145}%, ${200+limQuarter*88}%, 0) scale(${180 - (wScroll * 0.0)}%)`,
          'opacity': (scrollPercent >= 8.4 ? 0 : 1)
        });
        $quarter.css({
          'position' : 'fixed',
          'transform' : `translate3d(0, ${-830-limQuarter*454}%, 0) scale(${100}%)`,
          'opacity': (scrollPercent >= 1 ? 0 : 1)
        }); 
        $quarter2.css({
          'position' : 'fixed',
          'transform' : `translate3d(0, ${-340-limQuarter*154}%, 0) scale(${100}%)`,
          'opacity': (scrollPercent >= 1 ? 0 : 1)
        }); 
        $pohon.css({
          'transform' : `translate3d(${17}%, ${200+limpohon*1.5}%, 0) scale(${165 + (limpohon*1.5)}%)`,
          'opacity': (scrollPercent >= 8.4 ? 0.15 : 1)
        }); 
        $pohonFlip.css({
          'transform' : `translate3d(${limpohon*0.5}%, ${165-limpohon*1.5}%, 0) scaleX(-1) scale(${125 + (limpohon*1.5)}%)`,
          'opacity': (scrollPercent >= 8.4 ? 0.15 : 1)
        }); 
        $pohonPohon.css({
          'transform' : `translate3d(0, ${200}%, 0) scale(${250 + (limdaun * 2.7)}%)`,
          'opacity': (scrollPercent >= 8.4 ? 0.15 : 1)
        }); 
        $daun.css({
          'transform' : `translate3d(0, ${-205-limdaun*0.5}%, 0) scale(${200 + (limdaun * 2.7)}%)`,
          'opacity': bgfixed(scrollPercent)
        });

        // Section 2
        $swipeRight.css({
          'transform' : `translate3d(${106-limRight990*10}%, 0, 0) rotate(180deg)`
        });
        $swipeLeft.css({
          'transform' : `translate3d(${-103+limLeft990*10}%, 0, 0)`
        });
        $qlcmb.css({
          'transform' : `scale(${130}%) translate3d(0, ${-55+wScroll*0.05}%, 0)`,
          'opacity': (scrollPercent >= 0.3 ? 1 : 0)
        });
        $p2sec2.css({
          'transform' : `translate3d(0, ${-130}%, 0) scale(${130}%)`,
          'opacity': (scrollPercent >= 0.85 ? 1 : 0)
        });
        $fsk.css({
          'transform' : `translate3d(0, ${-400+wScroll*0.75}%, 0) scale(${60 + (wScroll * 0.17)}%)`, 'text-shadow': ('1px 1px 1px rgb(0, 0, 0.1)') ,
          'opacity': (scrollPercent >= 1.2 ? 1 : 0)
        });

        // Section 3
        $priaSec4.css({
          'transform': `translate3d(${-82 + menScrollX450*8}%, ${-1665 + limLeft*185}%, 0) scale(${menScale576}%)`,
           'opacity': menOpacity576(scrollPercent)
        });

        // Section 5    
        if(scrollPercent >= 8.6 && !typewriterStarted) {
          typewriterStarted = true;
          typeWriter();
          $('.cursor').css('opacity', scrollPercent >= 8.6 ? 1 : 0);
        }

        // Section 7
        $w150.css({
          'transform' : `translate3d(${-29}%, ${10}%, 0)`
        });

        // Section 17         
        $dampak.css({
          'transform' : `translate3d(${26}%, ${65}%, 0)`
        });
      } else if (window.matchMedia("(max-width: 550px) and (min-height: 961px)").matches) {
        // Section 1
        $wanitaSwipe.css({
          'transform' : `translate3d(${-75}%, ${260+limQuarter*110}%, 0) scale(${180}%)`,
          'opacity': (scrollPercent >= 3.7 ? 0 : 1)
        });
        $priaSwipe.css({
          'transform' : `translate3d(${-145}%, ${260+limQuarter*110}%, 0) scale(${180}%)`,
          'opacity': (scrollPercent >= 3.7 ? 0 : 1)
        });
        $quarter.css({
          'position' : 'fixed',
          'transform' : `translate3d(${10}%, ${-1330-limQuarter*94}%, 0) scale(${120}%)`,
          'opacity': (scrollPercent >= 1.15 ? 0 : 1)
        }); 
        $quarter2.css({
          'position' : 'fixed',
          'transform' : `translate3d(${10}%, ${-500-limQuarter*34}%, 0) scale(${120}%)`,
          'opacity': (scrollPercent >= 1.15 ? 0 : 1)
        }); 
        $pohon.css({
          'transform' : `translate3d(${20}%, ${210+limpohon*2}%, 0) scale(${200 + (limpohon*2)}%)`,
          'opacity': (scrollPercent >= 6.4 ? 0.15 : 1)
        }); 
        $pohonFlip.css({
          'transform' : `translate3d(${-5+limpohon*0.5}%, ${180-limpohon*2}%, 0) scaleX(-1) scale(${155 + (limpohon*2)}%)`,
          'opacity': (scrollPercent >= 6.4 ? 0.15 : 1)
        }); 
        $pohonPohon.css({
          'transform' : `translate3d(0, ${260}%, 0) scale(${200 + (limdaun * 2.7)}%)`,
          'opacity': (scrollPercent >= 6.4 ? 0.15 : 1)
        }); 
        $daun.css({
          'transform' : `translate3d(0, ${-245-limdaun*0.5}%, 0) scale(${200 + (limdaun * 2.7)}%)`,
          'opacity': bgfixed2(scrollPercent)
        });

        // Section 2
        $swipeRight.css({
          'transform' : `translate3d(${85-limRight576*20}%, 0, 0) rotate(180deg)`
        });
        $swipeLeft.css({
          'transform' : `translate3d(${-85+limRight576*20}%, 0, 0)`
        });
        $qlcmb.css({
          'transform' : `scale(${150}%) translate3d(0, ${-20}%, 0)`,
          'opacity': (scrollPercent >= 0.17 ? 1 : 0)
        });
        $p2sec2.css({
          'transform' : `translate3d(0, ${-60}%, 0) scale(${130}%)`, 'text-shadow': ('1px 1px 5px rgb(255, 255, 255)') ,
          'opacity': (scrollPercent >= 0.6 ? 1 : 0)
        });
        $fsk.css({
          'transform' : `translate3d(0, ${-200+wScroll*0.45}%, 0) scale(${60 + (wScroll * 0.15)}%)`, 'text-shadow': ('1px 1px 1px rgb(0, 0, 0.1)') ,
          'opacity': (scrollPercent >= 0.8 ? 1 : 0)
        });

        // Section 3
        $priaSec4.css({
          'transform': `translate3d(${-82 + menScrollX450*8}%, ${-1605 + (Math.min(scrollPercent, 8.8))*185}%, 0) scale(${menScale576}%)`,
           'opacity': menOpacity576(scrollPercent)
        });

        // Section 5    
        if(scrollPercent >= 7.4 && !typewriterStarted) {
          typewriterStarted = true;
          typeWriter();
          $('.cursor').css('opacity', scrollPercent >= 7.4 ? 1 : 0);
        }

        // Section 7
        $w150.css({
          'transform' : `translate3d(${-29}%, ${13}%, 0)`
        });

        // Section 17         
        $dampak.css({
          'transform' : `translate3d(${26}%, ${65}%, 0)`
        });
      } else if (window.matchMedia("(max-width: 630px)").matches) {
        // Section 1
        $wanitaSwipe.css({
          'transform' : `translate3d(${-75}%, ${140+limQuarter*74}%, 0) scale(${180 - (wScroll * 0.0)}%)` ,
          'opacity': (scrollPercent >= 8.4 ? 0 : 1)
        });
        $priaSwipe.css({
          'transform' : `translate3d(${-145}%, ${140+limQuarter*74}%, 0) scale(${180 - (wScroll * 0.0)}%)`,
          'opacity': (scrollPercent >= 8.4 ? 0 : 1)
        });
        $quarter.css({
          'position' : 'fixed',
          'transform' : `translate3d(0, ${-830-limQuarter*94}%, 0) scale(${100}%)`,
          'opacity': (scrollPercent >= 1.2 ? 0 : 1)
        }); 
        $quarter2.css({
          'position' : 'fixed',
          'transform' : `translate3d(0, ${-310-limQuarter*34}%, 0) scale(${100}%)`,
          'opacity': (scrollPercent >= 1.2 ? 0 : 1)
        }); 
        $pohon.css({
          'transform' : `translate3d(${14}%, ${150+limpohon*1.5}%, 0) scale(${155 + (limpohon*1.5)}%)`,
          'opacity': (scrollPercent >= 8.4 ? 0.15 : 1)
        }); 
        $pohonFlip.css({
          'transform' : `translate3d(${4+limpohon*0.5}%, ${135-limpohon*1.5}%, 0) scaleX(-1) scale(${125 + (limpohon*1.5)}%)`,
          'opacity': (scrollPercent >= 8.4 ? 0.15 : 1)
        }); 
        $pohonPohon.css({
          'transform' : `translate3d(0, ${140}%, 0) scale(${200 + (limdaun * 2.7)}%)`,
          'opacity': (scrollPercent >= 8.4 ? 0.15 : 1)
        }); 
        $daun.css({
          'transform' : `translate3d(0, ${-115-limdaun*0.5}%, 0) scale(${200 + (limdaun * 2.7)}%)`,
          'opacity': bgfixed(scrollPercent)
        });

        // Section 2
        $swipeRight.css({
          'transform' : `translate3d(${106-limRight990*10}%, 0, 0) rotate(180deg)`  
        });
        $swipeLeft.css({
          'transform' : `translate3d(${-103+limLeft990*10}%, 0, 0)`
        });
        $qlcmb.css({
          'transform' : `scale(${120}%) translate3d(0, ${-85+wScroll*0.05}%, 0)`,
          'opacity': (scrollPercent >= 0.5 ? 1 : 0)
        });
        $p2sec2.css({
          'transform' : `translate3d(0, ${-220}%, 0) scale(${130}%)`,
          'opacity': (scrollPercent >= 1.1 ? 1 : 0)
        });
        $fsk.css({
          'transform' : `translate3d(0, ${-550+wScroll*0.75}%, 0) scale(${40 + (wScroll * 0.17)}%)`, 'text-shadow': ('1px 1px 1px rgb(0, 0, 0.1)') ,
          'opacity': (scrollPercent >= 1.2 ? 1 : 0)
        });

        // Section 3
        $priaSec4.css({
          'transform': `translate3d(${-80 + menScrollX450*7}%, ${-1255 + (Math.min(scrollPercent, 11.6))*110}%, 0) scale(${menScale780}%)`,
           'opacity': menOpacity611(scrollPercent)
        });

        // Section 5 
        if(scrollPercent >= 11 && !typewriterStarted) {
          typewriterStarted = true;
          typeWriter();
          $('.cursor').css('opacity', scrollPercent >= 11 ? 1 : 0);
        }

        // Section 7
        $w150.css({
          'transform' : `translate3d(${40}%, ${100}%, 0) scale(${1.5})`
        });

        // Section 17         
        $dampak.css({
          'transform' : `translate3d(${-40}%, ${137}%, 0) scale(${1.5})`
        });
       
      } else if (window.matchMedia("(max-width: 780px)").matches) {
        // Section 1
        $wanitaSwipe.css({
          'transform' : 'translate('+ (-75) + '%, '+ (140+limQuarter*54) +'%) scale('+ (130 - (wScroll * 0.0)) +'%)',
          'opacity': (scrollPercent >= 8.4 ? 0 : 1)
        });
        $priaSwipe.css({
          'transform' : 'translate('+ (-145) + '%, '+ (140+limQuarter*54) +'%) scale('+ (130 - (wScroll * 0.0)) +'%)',
          'opacity': (scrollPercent >= 8.4 ? 0 : 1)
        });
        $quarter.css({
          'position' : 'fixed',
          'transform' : 'translate(0, '+ (-850-limQuarter*94) +'%) scale('+ (100) +'%)',
          'opacity': (scrollPercent >= 1.5 ? 0 : 1)
        }); 
        $quarter2.css({
          'position' : 'fixed',
          'transform' : 'translate(0, '+ (-315-limQuarter*34) +'%) scale('+ (100) +'%)',
          'opacity': (scrollPercent >= 1.5 ? 0 : 1)
        }); 
        $pohon.css({
          'transform' : 'translate('+ (14) + '%, '+ (140+limpohon*1.5) +'%) scale('+ (155 + (limpohon*1.5)) +'%)',
          'opacity': (scrollPercent >= 8.4 ? 0.15 : 1)
        }); 
        $pohonFlip.css({
          'transform' : 'translate('+ (4+limpohon*0.5) + '%, '+ (115-limpohon*1.5) +'%) scaleX(-1) scale('+ (125 + (limpohon*1.5)) +'%)',
          'opacity': (scrollPercent >= 8.4 ? 0.15 : 1)
        }); 
        $pohonPohon.css({
          'transform' : 'translate(0, '+ (140) +'%) scale('+ (200 + (limdaun * 2.7)) +'%)',
          'opacity': (scrollPercent >= 8.4 ? 0.15 : 1)
        }); 
        $daun.css({
          'transform' : 'translate(0, '+ (-115-limdaun*0.5) +'%) scale('+ (200 + (limdaun * 2.7)) +'%)',
          'opacity': bgfixed(scrollPercent)
        });

        // Section 2
        $swipeRight.css({
          'transform' : 'translate('+ (106-limRight990*10)+'%, 0) rotate(180deg)'
        });
        $swipeLeft.css({
          'transform' : 'translate('+ (-103+limLeft990*10)+'%, 0)'
        });
        $qlcmb.css({
          'transform' : 'scale('+ (120) +'%) translate(0, '+ (-85+wScroll*0.05) +'%)',
          'opacity': (scrollPercent >= 0.5 ? 1 : 0)
        });
        $p2sec2.css({
          'transform' : 'translate(0, '+ (-185)+'%) scale('+ (130) +'%)',
          'opacity': (scrollPercent >= 1.4 ? 1 : 0)
        });
        $fsk.css({
          'transform' : 'translate(0, '+ (-450+wScroll*0.6) +'%) scale('+ (40 + (wScroll * 0.17)) +'%)', 'text-shadow': ('1px 1px 1px rgb(0, 0, 0.1)') ,
          'opacity': (scrollPercent >= 1.2 ? 1 : 0)
        });

        // Section 3
        $priaSec4.css({
          'transform': 'translate(' + (-110 + menScrollX450*10) + '%, ' + (-1165 + menScrollY375*85) + '%) scale('+ menScale780 +'%)',
           'opacity': menOpacity375(scrollPercent)
        });

        // Section 5 
        if(scrollPercent >= 14 && !typewriterStarted) {
          typewriterStarted = true;
          typeWriter();
          $('.cursor').css('opacity', scrollPercent >= 14 ? 1 : 0);
        }

        // Section 7
        $w150.css({
          'transform' : 'translate3d(0, '+ (26) +'%, 0)'
        });

        // Section 16       
        $validasi.css({
          'transform' : 'translate3d(0, 0, 0)'
        });

        // Section 17         
        $dampak.css({
          'transform' : 'translate3d('+ (24) +'%, '+ (62) +'%, 0)'
        });

      } else if (window.matchMedia("(max-width: 991px) and (max-height: 1200px)").matches) {
        // Section 1
        $wanitaSwipe.css({
          'transform' : 'translate3d('+ (-75) + '%, '+ (150+limQuarter*54) +'%, 0) scale('+ (150 - (wScroll * 0.0)) +'%)',
          'opacity': (scrollPercent >= 8.4 ? 0 : 1)
        });
        $priaSwipe.css({
          'transform' : 'translate3d('+ (-145) + '%, '+ (150+limQuarter*54) +'%, 0) scale('+ (150 - (wScroll * 0.0)) +'%)',
          'opacity': (scrollPercent >= 8.4 ? 0 : 1)
        });
        $quarter.css({
          'position' : 'fixed',
          'transform' : 'translate3d(0, '+ (-870-limQuarter*150) +'%, 0) scale('+ (100) +'%)',
          'opacity': (scrollPercent >= 0.5 ? 0 : 1)
        }); 
        $quarter2.css({
          'position' : 'fixed',
          'transform' : 'translate3d(0, '+ (-320-limQuarter*54) +'%, 0) scale('+ (100) +'%)',
          'opacity': (scrollPercent >= 0.5 ? 0 : 1)
        }); 
        $pohon.css({
          'transform' : 'translate3d('+ (14) + '%, '+ (130+limpohon*0.6) +'%, 0) scale('+ (155 + (limpohon*0.5)) +'%)',
          'opacity': (scrollPercent >= 8.4 ? 0.15 : 1)
        }); 
        $pohonFlip.css({
          'transform' : 'translate3d('+ (4+limpohon*0.5) + '%, '+ (95-limpohon*0.6) +'%, 0) scaleX(-1) scale('+ (125 + (limpohon*0.5)) +'%)',
          'opacity': (scrollPercent >= 8.4 ? 0.15 : 1)
        }); 
        $pohonPohon.css({
          'transform' : 'translate3d(0, '+ (140-limpohon*0) +'%, 0) scale('+ (200 + (limdaun * 2.7)) +'%)',
          'opacity': (scrollPercent >= 8.4 ? 0.15 : 1)
        }); 
        $daun.css({
          'transform' : 'translate3d(0, '+ (-135-limdaun*0.5) +'%, 0) scale('+ (200 + (limdaun * 2.7)) +'%)',
          'opacity': bgfixed(scrollPercent)
        });

        // Section 2
        $swipeRight.css({
          'transform' : 'translate3d('+ (106-limRight990*10)+'%, 0, 0) rotate(180deg)'
        });
        $swipeLeft.css({
          'transform' : 'translate3d('+ (-103+limLeft990*10)+'%, 0, 0)'
        });
        $qlcmb.css({
          'transform' : 'scale('+ (140 + (wScroll * 0)) +'%) translate3d(0, '+ (-100+wScroll*0.05) +'%, 0)',
          'opacity': (scrollPercent >= 0.5 ? 1 : 0)
        });
        $p2sec2.css({
          'transform' : 'translate3d(0, '+ (-190)+'%, 0) scale('+ (150 + (wScroll * 0)) +'%)',
          'opacity': (scrollPercent >= 1 ? 1 : 0)
        });
        $fsk.css({
          'transform' : 'translate3d(0, '+ (-400+wScroll*0.5) +'%, 0) scale('+ (40 + (wScroll * 0.17)) +'%)', 'text-shadow': ('1px 1px 1px rgb(0, 0, 0.1)') ,
          'opacity': (scrollPercent >= 1.2 ? 1 : 0)
        });
        $('.img-sec2 .position-start').css({
          'transform' : 'scale('+ (25 + (wScroll * 0.1)) +'%) translate3d('+ (120-wScroll*0.1) + '%, '+ (-85+wScroll*0.05) +'%, 0)'
        });
        $('.img-sec2 .position-end').css({
          'transform' : 'scale('+ (25 + (wScroll * 0.1)) +'%) translate3d('+ (-123+wScroll*0.1) + '%, '+ (-85+wScroll*0.05) +'%, 0)'
        });

        // Section 3
        $priaSec4.css({
          'transform': 'translate3d(' + (-135 + menScrollX450*13) + '%, ' + (-1270 + menScrollY375*95) + '%, 0) scale('+ menScale990 +'%)',
           'opacity': menOpacity991(scrollPercent)
        });

        // Section 5 
        if(scrollPercent >= 13.1 && !typewriterStarted) {
          typewriterStarted = true;
          typeWriter();
          $('.cursor').css('opacity', scrollPercent >= 13.1 ? 1 : 0);
        }

        // Section 7
        $w150.css({
          'transform' : 'translate3d(0, '+ (23) +'%, 0)'
        });

        // Section 16       
        $validasi.css({
          'transform' : 'translate3d(0, '+ (3) +'%, 0)'
        });

        // Section 17         
        $dampak.css({
          'transform' : 'translate3d('+ (40-limdaun*0) +'%, '+ (110-limdaun*0) +'%, 0) scale('+ (165 - (wScroll * 0.0)) +'%)'
        });
      } else if (window.matchMedia("(max-width: 991px) and (min-height: 1201px)").matches) {
        // Section 1
        $wanitaSwipe.css({
          'transform' : 'translate3d('+ (-75) + '%, '+ (180+limQuarter*54) +'%, 0) scale('+ (150 - (wScroll * 0.0)) +'%)',
          'opacity': (scrollPercent >= 8.4 ? 0 : 1)
        });
        $priaSwipe.css({
          'transform' : 'translate3d('+ (-145) + '%, '+ (180+limQuarter*54) +'%, 0) scale('+ (150 - (wScroll * 0.0)) +'%)',
          'opacity': (scrollPercent >= 8.4 ? 0 : 1)
        });
        $quarter.css({
          'position' : 'fixed',
          'transform' : 'translate3d(0, '+ (-1000-limQuarter*150) +'%, 0) scale('+ (100) +'%)',
          'opacity': (scrollPercent >= 1.2 ? 0 : 1)
        }); 
        $quarter2.css({
          'position' : 'fixed',
          'transform' : 'translate3d(0, '+ (-370-limQuarter*54) +'%, 0) scale('+ (100) +'%)',
          'opacity': (scrollPercent >= 1.2 ? 0 : 1)
        }); 
        $pohon.css({
          'transform' : 'translate3d('+ (14) + '%, '+ (160+limpohon*0.6) +'%, 0) scale('+ (155 + (limpohon*0.5)) +'%)',
          'opacity': (scrollPercent >= 8.4 ? 0.15 : 1)
        }); 
        $pohonFlip.css({
          'transform' : 'translate3d('+ (4+limpohon*0.5) + '%, '+ (95-limpohon*0.6) +'%, 0) scaleX(-1) scale('+ (125 + (limpohon*0.5)) +'%)',
          'opacity': (scrollPercent >= 8.4 ? 0.15 : 1)
        }); 
        $pohonPohon.css({
          'transform' : 'translate3d(0, '+ (140-limpohon*0) +'%, 0) scale('+ (200 + (limdaun * 2.7)) +'%)',
          'opacity': (scrollPercent >= 8.4 ? 0.15 : 1)
        }); 
        $daun.css({
          'transform' : 'translate3d(0, '+ (-160-limdaun*0.5) +'%, 0) scale('+ (200 + (limdaun * 2.7)) +'%)',
          'opacity': bgfixed(scrollPercent)
        });

        // Section 2
        $swipeRight.css({
          'transform' : 'translate3d('+ (106-limRight990*10)+'%, 0, 0) rotate(180deg)'
        });
        $swipeLeft.css({
          'transform' : 'translate3d('+ (-103+limLeft990*10)+'%, 0, 0)'
        });
        $qlcmb.css({
          'transform' : 'scale('+ (140 + (wScroll * 0)) +'%) translate3d(0, '+ (-100+wScroll*0.05) +'%, 0)',
          'opacity': (scrollPercent >= 0.5 ? 1 : 0)
        });
        $p2sec2.css({
          'transform' : 'translate3d(0, '+ (-190)+'%, 0) scale('+ (150 + (wScroll * 0)) +'%)',
          'opacity': (scrollPercent >= 0.5 ? 1 : 0)
        });
        $fsk.css({
          'transform' : 'translate3d(0, '+ (-180+wScroll*0.1) +'%, 0) scale('+ (40 + (wScroll * 0.55)) +'%)', 'text-shadow': ('1px 1px 1px rgb(0, 0, 0.1)') ,
          'opacity': (scrollPercent >= 0.8 ? 1 : 0)
        });
        $('.img-sec2 .position-start').css({
          'transform' : 'scale('+ (25 + (wScroll * 0.1)) +'%) translate3d('+ (120-wScroll*0.1) + '%, '+ (-85+wScroll*0.05) +'%, 0)'
        });
        $('.img-sec2 .position-end').css({
          'transform' : 'scale('+ (25 + (wScroll * 0.1)) +'%) translate3d('+ (-123+wScroll*0.1) + '%, '+ (-85+wScroll*0.05) +'%, 0)'
        });

        // Section 3
        $priaSec4.css({
          'transform': 'translate3d(' + (-135 + menScrollX450*13) + '%, ' + (-1270 + menScrollY375*95) + '%, 0) scale('+ menScale990 +'%)',
           'opacity': menOpacity991(scrollPercent)
        });

        // Section 5 
        if(scrollPercent >= 13.1 && !typewriterStarted) {
          typewriterStarted = true;
          typeWriter();
          $('.cursor').css('opacity', scrollPercent >= 13.1 ? 1 : 0);
        }

        // Section 7
        $w150.css({
          'transform' : 'translate3d(0, '+ (19) +'%, 0)'
        });

        // Section 16       
        $validasi.css({
          'transform' : 'translate3d(0, '+ (3) +'%, 0)'
        });

        // Section 17         
        $dampak.css({
          'transform' : 'translate3d('+ (40-limdaun*0) +'%, '+ (110-limdaun*0) +'%, 0) scale('+ (165 - (wScroll * 0.0)) +'%)'
        });
      } else if (window.matchMedia("(max-width: 1024px) and (max-height: 650px)").matches) {
        // Section 1
        $priaSwipe.css({
          'transform' : 'translate3d('+ (-20-limRight576*28) + '%, '+ (15+limQuarter*35.3) +'%, 0) scale('+ (90 - (wScroll * 0.015)) +'%)',
          'opacity': (scrollPercent >= 6.9 ? 0 : 1)
        });
        $wanitaSwipe.css({
          'transform' : 'translate3d('+ (-20-limRight576*19) + '%, '+ (15+limQuarter*35.3) +'%, 0) scale('+ (90 - (wScroll * 0.015)) +'%)',
          'opacity': (scrollPercent >= 6.9 ? 0 : 1)
        });
        $quarter.css({
          'position' : 'fixed',
          'transform' : 'translate3d('+ (-18-wScroll*0.048) + '%, '+ (55+limQuarter*74) +'%, 0) scale('+ (90 - (wScroll * 0.03)) +'%)',
          'opacity': (scrollPercent >= 4.2 ? 0 : 1)
        }); 
        $quarter2.css({
          'position' : 'fixed',
          'transform' : 'translate3d('+ (-25-wScroll*0.035) + '%, '+ (limQuarter*15) +'%, 0) scale('+ (60 - (wScroll * 0.045)) +'%)',
          'opacity': (scrollPercent >= 4.2 ? 0 : 1)
        }); 
        $pohon.css({
          'transform' : 'translate3d('+ (3-limpohon*0.5) + '%, '+ (15+limpohon*0.6) +'%, 0) scale('+ (115 + (limpohon*0.5)) +'%)',
          'opacity': (scrollPercent >= 12 ? 0.15 : 1)
        }); 
        $pohonFlip.css({
          'transform' : 'translate3d('+ (4+limpohon*0.5) + '%, '+ (5-limpohon*0.6) +'%, 0) scaleX(-1)',
          'opacity': (scrollPercent >= 12 ? 0.15 : 1)
        }); 
        $pohonPohon.css({
          'transform' : 'translate3d(0, '+ (24) +'%, 0) scale('+ (100 + (limdaun * 2.7)) +'%)',
          'opacity': (scrollPercent >= 12 ? 0.15 : 1)
        }); 
        $daun.css({
          'transform' : 'translate3d(0, '+ (-35-limdaun*0.5) +'%, 0)',
          'opacity': bgfixed(scrollPercent)
        });

        // Section 2
        $swipeRight.css({
          'transform' : 'translate3d('+ (100-limRight1440*13)+'%, 0, 0) rotate(180deg)'
        });
        $swipeLeft.css({
          'transform' : 'translate3d('+ (-100+limRight1440*13)+'%, 0, 0)'
        });
        $qlcmb.css({
          'opacity': (scrollPercent >= 4.2 ? 1 : 0)
        });
        $p2sec2.css({
          'transform' : 'translate3d(0, '+ (-30) +'%, 0) scale('+ (70) +'%)', 'opacity': (scrollPercent >= 4.4 ? 1 : 0)
        });
        $fsk.css({
          'transform' : 'translate3d(0, '+ (-450+wScroll*0.5) +'%, 0) scale('+ (-30 + (wScroll * 0.105)) +'%)',
          'opacity': (scrollPercent >=4.2 ? 1 : 0)
        });

        // Section 3
        $priaSec4.css({
          'transform': 'translate3d(' + (-770 + menScrollY375*55) + '%, ' + (-915 + menScrollY375*69) + '%, 0) scale('+ menScale1250 +'%)',
           'opacity': (scrollPercent >= 10 ? 1 : 0)
        });

        // Section 5 
        if(scrollPercent >= 16.8 && !typewriterStarted) {
          typewriterStarted = true;
          typeWriter();
          $('.cursor').css('opacity', scrollPercent >= 16.8 ? 1 : 0);
        }

        // Section 7
        $w150.css({
          'transform' : 'translate3d('+ (0) +'%, '+ (80) +'%, 0)'
        });

        // Section 17
        $dampak.css({
          'transform' : 'translate3d(0, '+ (80)+'%, 0) scale(' + (100) + '%)'
        });
      } else if (window.matchMedia("(max-width: 1024px) and (min-height: 651px)").matches) {
        // Section 1
        $wanitaSwipe.css({
          'transform' : 'translate3d('+ (-75) + '%, '+ (180+limQuarter*44) +'%, 0) scale('+ (175 - (wScroll * 0.0)) +'%)',
          'opacity': (scrollPercent >= 8.4 ? 0 : 1)
        });
        $priaSwipe.css({
          'transform' : 'translate3d('+ (-145) + '%, '+ (180+limQuarter*44) +'%, 0) scale('+ (175 - (wScroll * 0.0)) +'%)',
          'opacity': (scrollPercent >= 8.4 ? 0 : 1)
        });
        $quarter.css({
          'position' : 'fixed',
          'transform' : 'translate3d(0, '+ (-920-limQuarter*180) +'%, 0) scale('+ (100) +'%)',
          'opacity': (scrollPercent >= 0.7 ? 0 : 1)
        }); 
        $quarter2.css({
          'position' : 'fixed',
          'transform' : 'translate3d(0, '+ (-255-limQuarter*54) +'%, 0) scale('+ (100) +'%)',
          'opacity': (scrollPercent >= 0.7 ? 0 : 1)
        }); 
        $pohon.css({
          'transform' : 'translate3d('+ (14) + '%, '+ (140+limpohon*0.6) +'%, 0) scale('+ (140 + (limpohon*0.5)) +'%)',
          'opacity': (scrollPercent >= 8.4 ? 0.15 : 1)
        }); 
        $pohonFlip.css({
          'transform' : 'translate3d('+ (limpohon*0.5) + '%, '+ (105-limpohon*0.6) +'%, 0) scaleX(-1) scale('+ (125 + (limpohon*0.5)) +'%)',
          'opacity': (scrollPercent >= 8.4 ? 0.15 : 1)
        }); 
        $pohonPohon.css({
          'transform' : 'translate3d(0, '+ (140-limpohon*0) +'%, 0) scale('+ (200 + (limdaun * 2.7)) +'%)',
          'opacity': (scrollPercent >= 8.4 ? 0.15 : 1)
        }); 
        $daun.css({
          'transform' : 'translate3d(0, '+ (-130-limdaun*0.5) +'%, 0) scale('+ (200 + (limdaun * 2.7)) +'%)',
          'opacity': bgfixed(scrollPercent)
        });

        // Section 2
        $swipeRight.css({
          'transform' : 'translate3d('+ (106-limRight990*10)+'%, 0, 0) rotate(180deg)'
        });
        $swipeLeft.css({
          'transform' : 'translate3d('+ (-103+limLeft990*10)+'%, 0, 0)'
        });
        $qlcmb.css({
          'transform' : 'scale('+ (140 + (wScroll * 0)) +'%) translate3d(0, '+ (-80-wScroll*0.25) +'%, 0)',
          'opacity': (scrollPercent >= 0.5 ? 1 : 0)
        });
        $p2sec2.css({
          'transform' : 'translate3d(0, '+ (-250)+'%, 0) scale('+ (150 + (wScroll * 0)) +'%)',
          'opacity': (scrollPercent >= 0.5 ? 1 : 0)
        });
        $fsk.css({
          'transform' : 'translate3d(0, '+ (-280+wScroll*0.1) +'%, 0) scale('+ (52 + (wScroll * 0.2)) +'%)', 'text-shadow': ('1px 1px 1px rgb(0, 0, 0.1)') ,
          'opacity': (scrollPercent >= 0.8 ? 1 : 0)
        });
        $('.img-sec2 .position-start').css({
          'transform' : 'scale('+ (25 + (wScroll * 0.1)) +'%) translate3d('+ (120-wScroll*0.1) + '%, '+ (-85+wScroll*0.05) +'%, 0)'
        });
        $('.img-sec2 .position-end').css({
          'transform' : 'scale('+ (25 + (wScroll * 0.1)) +'%) translate3d('+ (-123+wScroll*0.1) + '%, '+ (-85+wScroll*0.05) +'%, 0)'
        });

        // Section 3
        $priaSec4.css({
          'transform': 'translate3d(' + (-770 + menScrollY375*55) + '%, ' + (-915 + menScrollY375*70) + '%, 0) scale('+ menScale1250 +'%)',
           'opacity': (scrollPercent >= 1 ? 1 : 0)
        });

        // Section 5 
        if(scrollPercent >= 12.3 && !typewriterStarted) {
          typewriterStarted = true;
          typeWriter();
          $('.cursor').css('opacity', scrollPercent >= 12.3 ? 1 : 0);
        }

        // Section 7
        $w150.css({
          'transform' : 'translate3d('+ (-30) +'%, '+ (50) +'%, 0) scale('+ (185) +'%)'
        });

        // Section 17        
        $dampak.css({
          'transform' : 'translate3d('+ (30-limdaun*0.5) +'%, '+ (68-limdaun*0.5) +'%, 0) scale('+ (155) +'%)'
        });
      } else if (window.matchMedia("(max-width: 1300px) and (max-height: 600px)").matches) {
        // Section 1
        $priaSwipe.css({
          'transform' : 'translate3d('+ (-35-limRight576*35) + '%, '+ (-5+limQuarter*35.3) +'%, 0) scale('+ (108 - (wScroll * 0.02)) +'%)',
          'opacity': (scrollPercent >= 10 ? 0 : 1)
        });
        $wanitaSwipe.css({
          'transform' : 'translate3d('+ (-20-limRight576*19) + '%, '+ (-5+limQuarter*35.3) +'%, 0) scale('+ (108 - (wScroll * 0.02)) +'%)',
          'opacity': (scrollPercent >= 10 ? 0 : 1)
        });
        $quarter.css({
          'position' : 'fixed',
          'transform' : 'translate3d('+ (-5-wScroll*0.059) + '%, '+ (limQuarter*62) +'%, 0) scale('+ (90 - (wScroll * 0.03)) +'%)',
          'opacity': (scrollPercent >= 4.2 ? 0 : 1)
        }); 
        $quarter2.css({
          'position' : 'fixed',
          'transform' : 'translate3d('+ (-5-wScroll*0.055) + '%, '+ (15+limQuarter*15) +'%, 0) scale('+ (90 - (wScroll * 0.06)) +'%)',
          'opacity': (scrollPercent >= 4.2 ? 0 : 1)
        }); 
        $pohon.css({
          'transform' : 'translate3d('+ (2-limpohon*0.5) + '%, '+ (7+limpohon*0.6) +'%, 0) scale('+ (100 + (limpohon*0.5)) +'%)',
          'opacity': (scrollPercent >= 14.1 ? 0.15 : 1)
        }); 
        $pohonFlip.css({
          'transform' : 'translate3d('+ (limpohon*0.5) + '%, '+ (-limpohon*0.6) +'%, 0) scaleX(-1)',
          'opacity': (scrollPercent >= 14.1 ? 0.15 : 1)
        }); 
        $pohonPohon.css({
          'transform' : 'translate3d('+ (2) + '%, '+ (24) +'%, 0) scale('+ (100 + (limdaun * 2.7)) +'%)',
          'opacity': (scrollPercent >= 14.1 ? 0.15 : 1)
        }); 
        $daun.css({
          'transform' : 'translate3d(0, '+ (-1-limdaun*0.5) +'%, 0)', 
          'opacity': bgfixed(scrollPercent)
        });

        // Section 2
        $swipeRight.css({
          'transform' : 'translate3d('+ (100-limRight1440*13)+'%, 0, 0) rotate(180deg)'
        });
        $swipeLeft.css({
          'transform' : 'translate3d('+ (-100+limRight1440*13)+'%, 0, 0)'
        });
        $qlcmb.css({
          'opacity': (scrollPercent >= 4.2 ? 1 : 0)
        });
        $p2sec2.css({
          'transform' : 'translate3d(0, '+ (-70) +'%, 0 ) scale('+ (70) +'%)', 'opacity': (scrollPercent >= 4.4 ? 1 : 0)
        });
        $fsk.css({
          'transform' : 'translate3d(0, '+ (-430+wScroll*0.35) +'%, 0) scale('+ (-30 + (wScroll * 0.105)) +'%)',
          'opacity': (scrollPercent >= 4.2 ? 1 : 0)
        });

        // Section 3
        $priaSec4.css({
          'transform': 'translate3d(' + (-730 + menScrollY375*50) + '%, ' + (-815 + menScrollY375*63) + '%, 0) scale('+ menScale1250 +'%)',
           'opacity': (scrollPercent >= 9 ? 1 : 0)
        });

        // Section 5 
        if(scrollPercent >= 16.6 && !typewriterStarted) {
          typewriterStarted = true;
          typeWriter();
          $('.cursor').css('opacity', scrollPercent >= 16.6 ? 1 : 0);
        }

        // Section 7
        $w150.css({
          'transform' : 'translate3d('+ (0) +'%, '+ (34) +'%, 0)'
        });

        // Section 17
        $dampak.css({
          'transform' : 'translate3d(0, '+ (20)+'%, 0) scale(' + (100 + (wScroll*0)) + '%)'
        });
      } else if (window.matchMedia("(max-width: 1300px) and (min-height: 601px)").matches) {
        // Section 1
        $priaSwipe.css({
          'transform': `translate3d(${-35-limRight576*35}%, ${35+limQuarter*35.3}%, 0) scale(${108 - (wScroll * 0.02)}%)`,
          'opacity': (scrollPercent >= 10 ? 0 : 1)
        });
        $wanitaSwipe.css({
          'transform' : `translate3d(${-20-limRight576*19}%, ${35+limQuarter*35.3}%, 0) scale(${108 - (wScroll * 0.02)}%)`,
          'opacity': (scrollPercent >= 10 ? 0 : 1)
        });
        $quarter.css({
          'position' : 'fixed',
          'transform' : `translate3d(${-5-wScroll*0.059}%, ${limQuarter*62}%, 0) scale(${90 - (wScroll * 0.03)}%)`,
          'opacity': (scrollPercent >= 4 ? 0 : 1)
        }); 
        $quarter2.css({
          'position' : 'fixed',
          'transform' : `translate3d(${-5-wScroll*0.055}%, ${limQuarter*15}%, 0) scale(${90 - (wScroll * 0.06)}%)`,
          'opacity': (scrollPercent >= 4 ? 0 : 1)
        }); 
        $pohon.css({
          'transform' : `translate3d(${2-limpohon*0.5}%, ${15+limpohon*0.6}%, 0) scale(${100 + (limpohon*0.5)}%)`,
          'opacity': (scrollPercent >= 14.1 ? 0.15 : 1)
        }); 
        $pohonFlip.css({
          'transform' : `translate3d(${limpohon*0.5}%, ${-limpohon*0.6}%, 0) scaleX(-1)`,
          'opacity': (scrollPercent >= 14.1 ? 0.15 : 1)
        }); 
        $pohonPohon.css({
          'transform' : `translate3d(${2}%, ${24}%, 0) scale(${100 + (limdaun * 2.7)}%)`,
          'opacity': (scrollPercent >= 14.1 ? 0.15 : 1)
        }); 
        $daun.css({
          'transform' : `translate3d(0, ${-30-limdaun*0.5}%, 0)`,
          'opacity': bgfixed(scrollPercent)
        });

        // Section 2
        $swipeRight.css({
          'transform' : `translate3d(${100-limRight1440*13}%, 0, 0) rotate(180deg)` 
        });
        $swipeLeft.css({
          'transform' : `translate3d(${-100+limRight1440*13}%, 0, 0)`
        });
        $qlcmb.css({
          'transform' : `translate3d(0, ${50}%, 0)`,
          'opacity': (scrollPercent >= 4 ? 1 : 0)
        });
        $p2sec2.css({
          'transform' : `scale(${70}%)`, 'opacity': (scrollPercent >= 4.2 ? 1 : 0)
        });
        $fsk.css({
          'transform' : `translate3d(0, ${-330+wScroll*0.35}%, 0) scale(${-30 + (wScroll * 0.105)}%)`,
          'opacity': (scrollPercent >= 4.2 ? 1 : 0)
        });

        // Section 3
        $priaSec4.css({
          'transform': `translate3d(${-710 + menScrollY375*50}%, ${-755 + (Math.min(scrollPercent, 13))*63}%, 0) scale(${menScale1250}%)`,
           'opacity': (scrollPercent >= 9 ? 1 : 0)
        });

        // Section 5 
        if(scrollPercent >= 15.9 && !typewriterStarted) {
          typewriterStarted = true;
          typeWriter();
          $('.cursor').css('opacity', scrollPercent >= 15.9 ? 1 : 0);
        }

        // Section 7
        $w150.css({
          'transform' : `translate3d(${0}%, ${31}%, 0)`
        });

        // Section 17
        $dampak.css({
          'transform' : `translate3d(0, ${20}%, 0) scale(${100 + (wScroll*0)}%)`
        });
      } else if (window.matchMedia("(max-width: 1440px)").matches) {
        // Section 1
        $priaSwipe.css({
          'transform' : `translate3d(${-35-wScroll*0.11}%, ${-5+limQuarter*35.3}%, 0) scale(${108 - (wScroll * 0.03)}%)`,
          'opacity': (scrollPercent >= 10 ? 0 : 1)
        });
        $wanitaSwipe.css({
          'transform' : `translate3d(${-20-wScroll*0.13}%, ${-5+limQuarter*35.3}%, 0) scale(${108 - (wScroll * 0.03)}%)`,
          'opacity': (scrollPercent >= 10 ? 0 : 1)
        });
        $quarter.css({
          'position' : 'fixed',
          'transform' : `translate3d(${-8-wScroll*0.029}%, ${limQuarter*39}%, 0) scale(${100 - (wScroll * 0.02)}%)`,
          'opacity': (scrollPercent >= 5 ? 0 : 1)
        }); 
        $quarter2.css({
          'position' : 'fixed',
          'transform' : `translate3d(${-5-wScroll*0.033}%, ${15+limQuarter*10}%, 0) scale(${100 - (wScroll * 0.045)}%)`,
          'opacity': (scrollPercent >= 5 ? 0 : 1)
        }); 
        $pohon.css({
          'transform' : `translate3d(${2-limpohon*0.5}%, ${7+limpohon*0.6}%, 0) scale(${100 + (limpohon*0.5)}%)`,
          'opacity': (scrollPercent >= 14.8 ? 0.15 : 1)
        }); 
        $pohonFlip.css({
          'transform' : `translate3d(${limpohon*0.5}%, ${-limpohon*0.6}%, 0) scaleX(-1)`,
          'opacity': (scrollPercent >= 14.8 ? 0.15 : 1)
        }); 
        $pohonPohon.css({
          'transform' : `translate3d(${2}%, ${-4}%, 0) scale(${100 + (limdaun * 2.7)}%)`,
          'opacity': (scrollPercent >= 14.8 ? 0.15 : 1)
        }); 
        $daun.css({
          'transform' : `translate3d(0%, ${0-limdaun*0.5}%, 0)`,
          'opacity': bgfixed(scrollPercent)
        });

        // Section 2
        $swipeRight.css({
          'transform' : `translate3d(${100-limRight1440*13}%, 0, 0) rotate(180deg)`
        });
        $swipeLeft.css({
          'transform' : `translate3d(${-100+limRight1440*13}%, 0, 0)` 
        });
        $qlcmb.css({
          'transform' : `translate3d(0, ${50}%, 0)`,
          'opacity': (scrollPercent >= 5 ? 1 : 0)
        });
        $p2sec2.css({
          'transform' : `translate3d(0, ${-10}%, 0) scale(${70}%)`,
          'opacity': (scrollPercent >= 5.2 ? 1 : 0)
        });
        $fsk.css({
          'transform' : `translate3d(0, ${-370+wScroll*0.3}%, 0) scale(${-30 + (wScroll * 0.105)}%)`,
          'opacity': (scrollPercent >= 5 ? 1 : 0)
        });

        // Section 3
        $priaSec4.css({
          'transform': `translate3d(${-700 + menScrollY375*47}%, ${-815 + menScrollY375*63}%, 0) scale(${menScale1250}%)`,
           'opacity': (scrollPercent >= 10 ? 1 : 0)
        });

        // Section 5 
        if(scrollPercent >= 17.8 && !typewriterStarted) {
          typewriterStarted = true;
          typeWriter();
          $('.cursor').css('opacity', scrollPercent >= 17.8 ? 1 : 0);
        }

        // Section 7
        $w150.css({
          'transform' : `translate3d(${0}%, ${27}%, 0)` 
        });
      } else if (window.matchMedia("(max-width: 1550px)").matches) {
        // Section 1
        $priaSwipe.css({
          'transform': `translate3d(${-20-limSwipeX*22.3}%, ${10+limQuarter*29.6}%, 0) scale(${100 - (wScroll * 0.015)}%)`,
          'opacity': (scrollPercent >= 12 ? 0 : 1)
        });
        $wanitaSwipe.css({
          'transform': `translate3d(${-20-limSwipeX*14.3}%, ${10+limQuarter*29.55}%, 0) scale(${100 - (wScroll * 0.015)}%)`,
          'opacity': (scrollPercent >= 10 ? 0 : 1)
        });
        $quarter.css({
          'position' : 'fixed',
          'transform' : `translate3d(${-wScroll*0.044}%, ${limQuarter*10}%, 0) scale(${100 - (wScroll * 0.035)}%)`,
          'opacity': (scrollPercent >= 5.2 ? 0 : 1)
        }); 
        $quarter2.css({
          'position' : 'fixed',
          'transform' : `translate3d(${-wScroll*0.038}%, ${15-limQuarter*1.5}%, 0) scale(${100 - (wScroll * 0.045)}%)`,
          'opacity': (scrollPercent >= 5.2 ? 0 : 1)
        }); 
        $txtSec1.css({
          'transform' : `translate3d(${20}%, ${300+limQuarter*100}%, 0)`
        });
        $pohon.css({
          'transform' : `translate3d(${-limpohon*0.5}%, ${+limpohon*0.6}%, 0) scale(${100 + (limpohon*0.5)}%)`,
           'opacity': (scrollPercent >= 15.8 ? 0.15 : 1)
        }); 
        $pohonFlip.css({
          'transform' : `translate3d(${limpohon*0.5}%, ${-limpohon*0.6}%, 0) scaleX(-1)`,
           'opacity': (scrollPercent >= 15.8 ? 0.15 : 1)
        }); 
        $pohonPohon.css({
          'transform' : `scale(${100 + (limdaun * 2.7)}%)`,
           'opacity': (scrollPercent >= 15.8 ? 0.15 : 1)
        }); 
        $daun.css({
          'transform' : `translate3d(0, ${-limdaun*0.5}%, 0)`,
           'opacity': bgfixed(scrollPercent)
        });

        // Section 2
        $swipeRight.css({
          'transform' : `translate3d(${100-limRight*10.9}%, 0, 0) rotate(180deg)`
        });
        $swipeLeft.css({
          'transform' : `translate3d(${-100+limLeft*10.9}%, 0, 0)`
        });
        $qlcmb.css({
          'transform' : `translate3d(0, ${50}%, 0)`, 'opacity': (scrollPercent >= 5.2 ? 1 : 0)
        });
        $p2sec2.css({
          'transform' : `scale(${80}%)`, 'opacity': (scrollPercent >= 5.5 ? 1 : 0)
        });
        $fsk.css({
          'transform' : `translate3d(0, ${-500+wScroll*0.45}%, 0) scale(${-40 + (wScroll * 0.1)}%)`,
          'opacity': (scrollPercent >= 5.5 ? 1 : 0)
        });

        // Section 3
        $priaSec4.css({
          'transform': `translate3d(${-550 + menScrollX990*30.7}%, ${-565 + menScrollY450*37}%, 0) scale(${menScale}%)`,
           'opacity': (scrollPercent >= 10.5 ? 1 : 0)
        });

        // Section 5    
        if(scrollPercent >= 19.5 && !typewriterStarted) {
          typewriterStarted = true;
          typeWriter();
          $('.cursor').css('opacity', scrollPercent >= 19.5 ? 1 : 0);
        }

        // Section 7
        $w150.css({
          'transform' : 'translate('+ (0) +'%, '+ (22) +'%)'
        });
      } else { // DEFAULT
        // Section 1
        $priaSwipe.css({
          'transform': `translate3d(${-20-limSwipeX*21.6}%, ${10+limQuarter*26.6}%, 0) scale(${100 - (wScroll * 0.005)}%)`,
          'opacity': (scrollPercent >= 10 ? 0 : 1)
        });
        $wanitaSwipe.css({
          'transform': `translate3d(${-22-limSwipeX*13.6}%, ${10+limQuarter*26.65}%, 0) scale(${100 - (wScroll * 0.005)}%)`,
          'opacity': (scrollPercent >= 10 ? 0 : 1)
        });
        $quarter.css({
          'position' : 'fixed',
          'transform': `translate3d(${-wScroll*0.045}%, ${5+limQuarter*8}%, 0) scale(${100 - (wScroll * 0.04)}%)`,
          'opacity': (scrollPercent >= 6.2 ? 0 : 1)
        }); 
        $quarter2.css({
          'position' : 'fixed',
          'transform' : `translate3d(${-wScroll*0.035}%, ${15-limQuarter*2.3}%, 0) scale(${100 - (wScroll * 0.04)}%)`,
          'opacity': (scrollPercent >= 6.2 ? 0 : 1)
        }); 
        $txtSec1.css({
          'transform' : `translate3d(${31}%, ${130+limQuarter*100}%, 0)`
        });
        $pohon.css({
          'transform' : `translate3d(${limpohon*0.4}%, ${+limpohon*0.6}%, 0) scale(${100 + (limpohon*0.7)}%)`,
          'opacity': (scrollPercent >= 18 ? 0.15 : 1)
        }); 
        $pohonFlip.css({
          'transform' : `translate3d(${-limpohon*0.3}%, ${-limpohon*0.6}%, 0) scaleX(-1)`,
          'opacity': (scrollPercent >= 18 ? 0.15 : 1)
        }); 
        $pohonPohon.css({
          'transform' : `scale(${100 + (limdaun * 2.7)}%)`,
          'opacity': (scrollPercent >= 18 ? 0.15 : 1)
        }); 
        $daun.css({
          'transform' : `translate3d(0, ${-limdaun*0.5}%, 0)`,
          'opacity': bgfixed(scrollPercent)
        });

        // Section 2
        $swipeRight.css({
          'transform' : `translate3d(${100-limRight*10.9}%, 0, 0) rotate(180deg)`
        });
        $swipeLeft.css({
          'transform' : `translate3d(${-100+limLeft*10.9}%, 0, 0)`
        });
        $qlcmb.add($p2sec2).css({
          'transform' : `translate3d(0, ${65}%, 0)`, 'opacity': (scrollPercent >= 6.2 ? 1 : 0)
        });
        $fsk.css({
          'transform' : `translate3d(0, ${-400+wScroll*0.4}%, 0) scale(${-30 + (wScroll * 0.1)}%)`,
          'opacity': (scrollPercent >= 6 ? 1 : 0)
        });

        // Section 3
        $priaSec4.css({
          'transform': `translate3d(${-630 + menScrollX*33}%, ${-540 + menScrollY*32.5}%, 0) scale(${menScale}%)`,
           'opacity': (scrollPercent >= 12 ? 1 : 0)
        });

        // Section 5    
        if(scrollPercent >= 21.5 && !typewriterStarted) {
          typewriterStarted = true;
          typeWriter();
          $('.cursor').css('opacity', scrollPercent >= 21.5 ? 1 : 0);
        }
      }
    }

// VUE CARD SECTION 16
Vue.config.devtools = true;

Vue.component('card', {
  template: `
    <div class="card-wrap"
    @mousemove="handleMouseMove"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    ref="card">
      <div class="card" :style="cardStyle">
        <div class="card-bg" :style="[cardBgTransform, cardBgImage]"></div>
        <div class="card-info">
          <slot name="header"></slot>
          <slot name="content"></slot>
        </div>
      </div>
    </div>`,
  mounted() {
      this.width = this.$refs.card.offsetWidth;
      this.height = this.$refs.card.offsetHeight;
  },
  props: ['dataImage'],
  data: () => ({
      width: 0,
      height: 0,
      mouseX: 0,
      mouseY: 0,
      mouseLeaveDelay: null
  }),
  computed: {
      mousePX() { return this.mouseX / this.width },
      mousePY() { return this.mouseY / this.height },
      cardStyle() {
      const rX = Math.max(Math.min(this.mousePY * -35, 15), -15);
      const rY = Math.max(Math.min(this.mousePX * 35, 15), -15);

      return {
          transform: `
          rotateX(${rX}deg)
          rotateY(${rY}deg)
          `
      };
      },
      cardBgTransform() {
      const tX = this.mousePX * -38;
      const tY = this.mousePY * -38;

      return {
          transform: `
          translateX(${tX}px)
          translateY(${tY}px)
          translateZ(-40px)
          scale(1.25)
          `
      };
      },
      cardBgImage() {
      return { backgroundImage: `url(${this.dataImage})` };
      }
  },
  methods: {
      handleMouseMove(e) {
      this.mouseX = e.pageX - this.$refs.card.offsetLeft - this.width / 2;
      this.mouseY = e.pageY - this.$refs.card.offsetTop - this.height / 2;
      },
      handleMouseEnter() {
      clearTimeout(this.mouseLeaveDelay);
      },
      handleMouseLeave() {
      this.mouseLeaveDelay = setTimeout(() => {
          this.mouseX = 0;
          this.mouseY = 0;
      }, 1000);
      }
  }
  });

new Vue({ el: '#app' });
