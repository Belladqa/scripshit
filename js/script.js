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
    let text = "Quarter Life Crisis adalah proses transisi menjadi dewasa,";
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

// DRAG ELEMENT FOR SECTION 7
document.addEventListener('DOMContentLoaded', function () {

  function getResponsiveConfig(type) {
    const w = window.innerWidth;

    if (type === 'sec8') {
      if (w <= 375)  return { x: 77, y: -38 };
      if (w <= 450)  return { x: 90, y: -48 };
      if (w <= 576)  return { x: 110, y: -55 };
      if (w <= 780)  return { x: 170, y: -90 };
      if (w <= 991)  return { x: 200, y: -90 };
      if (w <= 1024) return { x: 140, y: -70 };
      return           { x: 220, y: -110 };
    }

    if (type === 'sec9') {
      if (w <= 375)  return { x: 11.5, y: -40 };
      if (w <= 450)  return { x: 14, y: -50 };
      if (w <= 576)  return { x: 15, y: -58 };
      if (w <= 780)  return { x: 22, y: -73 };
      if (w <= 991)  return { x: 26, y: -84 };
      if (w <= 1024) return { x: 15, y: -60 };
      return           { x: 15, y: -85 };
    }

    if (type === 'sec10') {
      if (w <= 375)  return { x: 70, y: 33 };
      if (w <= 450)  return { x: 125, y: 40 };
      if (w <= 576)  return { x: 160, y: 50 };
      if (w <= 780)  return { x: 190, y: 50 };
      if (w <= 991)  return { x: 240, y: 70 };
      if (w <= 1024) return { x: 150, y: 70 };
      return           { x: 210, y: 80 };
    }

    if (type === 'sec11') {
      if (w <= 375)  return { x: 70, y: 110 };
      if (w <= 450)  return { x: 70, y: 115 };
      if (w <= 576)  return { x: 90, y: 140 };
      if (w <= 780)  return { x: 130, y: 190 };
      if (w <= 991)  return { x: 180, y: 225 };
      if (w <= 1024) return { x: 120, y: 170 };
      return           { x: 140, y: 250 };
    }

    if (type === 'sec14') {
      if (w <= 375)  return { x: 30, y: 100 };
      if (w <= 450)  return { x: 30, y: 85 };
      if (w <= 576)  return { x: 40, y: 130 };
      if (w <= 780)  return { x: 50, y: 160 };
      if (w <= 991)  return { x: 60, y: 200 };
      if (w <= 1024) return { x: 47, y: 200 };
      return           { x: 40, y: 250 };
    }

    if (type === 'sec15') {
      if (w <= 375)  return { x: 25, y: 50 };
      if (w <= 450)  return { x: 30, y: 65 };
      if (w <= 576)  return { x: 43, y: 90 };
      if (w <= 780)  return { x: 53, y: 110 };
      if (w <= 991)  return { x: 60, y: 120 };
      if (w <= 1024) return { x: 45, y: 130 };
      return           { x: 48, y: 150 };
    }

    return { x: 280, y: -120 };
  }

  const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

  //  DRAG LOGIC
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

    let moveVal = 0;
    let startX = 0;
    let isDragging = false;

    element.setAttribute('draggable', 'false');
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

    element.addEventListener('pointerdown', (e) => {
      isDragging = true;
      startX = e.clientX;
      element.classList.add('dragging');
      element.setPointerCapture(e.pointerId);
      e.preventDefault();
    });

    element.addEventListener('pointermove', (e) => {
      if (!isDragging) return;

      const dx = e.clientX - startX;
      startX = e.clientX;

      moveVal = clamp(moveVal + dx, 0, maxDragX);
      render();
      updateUI();
    });

    element.addEventListener('pointerup', (e) => {
      isDragging = false;
      element.classList.remove('dragging');
      element.releasePointerCapture(e.pointerId);
    });

    element.addEventListener('pointercancel', () => {
      isDragging = false;
      element.classList.remove('dragging');
    });

    render();
    updateUI();
  });
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
        musicBtn.textContent = "❚❚ Pause";
      } else {
        audio.pause();
        musicBtn.textContent = "▶︎ Music";
      }
    }); 

// Pop up petunjuk
    const section5 = document.getElementById("popupsec");
    const popup = document.getElementById("popup");
    const closeBtn = document.getElementById("closePopup");

    let popupShown = false;

    window.addEventListener("scroll", () => {
      const rect = section5.getBoundingClientRect();

      if (rect.top < window.innerHeight * 0.5 && !popupShown) {
        popup.style.display = "block";
        popupShown = true;
      }
    });

    closeBtn.addEventListener("click", () => {
      popup.style.display = "none";
    });

// Auto scroll section
let sections = document.querySelectorAll(".snap-section");

let isScrolling = false;
let lastIndex = 0;

window.addEventListener("scroll", () => {

  if (isScrolling) return;

  let scrollY = window.scrollY;

  let currentIndex = 0;
  let minDistance = Infinity;

  sections.forEach((section, index) => {
    let distance = Math.abs(section.offsetTop - scrollY);
    if (distance < minDistance) {
      minDistance = distance;
      currentIndex = index;
    }
  });

  if (currentIndex !== lastIndex) {

    isScrolling = true;

    sections[currentIndex].scrollIntoView({
      behavior: "smooth"
    });

    lastIndex = currentIndex;

    setTimeout(() => {
      isScrolling = false;
    }, 600);
  }
});

// SET ALL PARALLAX EFFECTS
    let wScroll = 0;
    let ticking = false;
    let typewriterStarted = false;

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

    window.addEventListener("resize", function(){
      responsiveEffect($(window).scrollTop());
    });

    responsiveEffect($(window).scrollTop());
    
    function responsiveEffect(wScroll) {
      // Global
      var webHeight = $(document).height();
      var winHeight = $(window).height(); 
      var scrollPercent = (wScroll / (webHeight - winHeight))*100;

      console.log(+ scrollPercent.toFixed(2) +"%");
      
      // Section 2
      var sec1 = $('.bg-sec2');
      var start1 = sec1.offset().top;
      var end1 = start1+sec1.height();
      var progSec1 = (wScroll - start1)/(end1-start1);
      progSec1 = Math.max(0,Math.min(progSec1,1));

      //1440+
      var limRight = Math.min(scrollPercent, 9);
      var limLeft = Math.min(scrollPercent, 9.2);
      var menScrollX = Math.min(scrollPercent, 24);
      var menScrollY = Math.min(scrollPercent, 26);
      var menScale = Math.min((-80 + wScroll * 0.1), 110);

      //1440
      var limRight1440 = Math.min(scrollPercent, 7.7);
      var limLeft1440 = Math.min(scrollPercent, 7.7);
      var menScale1250 = Math.max(120, (250 - wScroll * 0.1));
      var menScrollX1440 = Math.min(scrollPercent, 22.5);
      var menScrollY1440 = Math.min(scrollPercent, 22);

      //990      
      var limRight990 = Math.min(scrollPercent, 10.7);
      var limLeft990 = Math.min(scrollPercent, 10.3);
      var menScrollX990 = Math.min(scrollPercent, 17.7);
      var menScrollY990 = Math.min(scrollPercent, 27.8);
      var menScale990 = Math.max(135, (470 - wScroll * 0.1));
      function menOpacity990(scrollPercent) {
        if(scrollPercent < 16.5) return 0;
        if(scrollPercent < 21) return 1;
        if(scrollPercent < 26) return 0;
        return 1; 
      }

      //780      
      var limRight780 = Math.min(scrollPercent, 6.55);
      var limLeft780 = Math.min(scrollPercent, 6.4);
      var menScale780 = Math.max(110, (330 - wScroll * 0.07));
      var menScrollX780 = Math.min(scrollPercent, 17.5);
      var menScrollY780 = Math.min(scrollPercent, 25.3);
      function menOpacity780(scrollPercent) {
        if(scrollPercent < 14.7) return 0;
        if(scrollPercent < 19.8) return 1;
        if(scrollPercent < 24) return 0;
        return 1; 
      }

      //576
      var limRight576 = Math.min(scrollPercent, 4.1);
      var limLeft576 = Math.min(scrollPercent, 4.1);
      var menScale576 = Math.max(110, (280 - wScroll * 0.07));
      function menOpacity576(scrollPercent) {
        if(scrollPercent < 12.5) return 0;
        if(scrollPercent < 15.2) return 1;
        if(scrollPercent < 18.5) return 0;
        return 1; 
      }

      //450      
      var menScrollX450 = Math.min(scrollPercent, 10.5);
      var menScrollY450 = Math.min(scrollPercent, 19.3);
      var menScale576 = Math.max(100, (280 - wScroll * 0.07));
      function menOpacity450(scrollPercent) {
        if(scrollPercent < 11.5) return 0;
        if(scrollPercent < 15) return 1;
        if(scrollPercent < 18.5) return 0;
        return 1; 
      }

      //375
      var limRight375 = Math.min(scrollPercent, 5.2);
      var limLeft375 = Math.min(scrollPercent, 5.4);
      var menScrollY375 = Math.min(scrollPercent, 16.3);
      var menScale375 = Math.max(100, (220 - wScroll * 0.05));
      function menOpacity375(scrollPercent) {
        if(scrollPercent < 7.2) return 0;
        if(scrollPercent < 12) return 1;
        if(scrollPercent < 15.7) return 0;
        return 1; 
      }

      var limSwipe = Math.min (scrollPercent, 50);
      var limQuarter = Math.min(scrollPercent, 50);
      var limtxtSec1 = Math.min(scrollPercent, 50);
      var limpohon = Math.min(scrollPercent, 7);
      var limpohon2 = Math.min(scrollPercent, 10);
      var limdaun = Math.min(scrollPercent, 10);

      if (window.matchMedia("(max-width: 375px)").matches) {
        // Section 1
        $('.wanita-swipe').css({
          'transform' : 'translate('+ (-5+wScroll*0.2) + '%, '+ (25.5+limSwipe*40) +'%) scale('+ (90 - (wScroll * 0)) +'%)'
        });
        $('.pria-swipe').css({
          'transform' : 'translate('+ (5-wScroll*0.2) + '%, '+ (26+limSwipe*40) +'%) scale('+ (90 - (wScroll * 0)) +'%)'
        });
        $('.quarter').css({
          'transform' : 'translate('+ (17+wScroll*0) + '%, '+ (-150-limQuarter*165) +'%) scale('+ (120 - (wScroll * 0)) +'%)',
          'opacity': (scrollPercent >= 5.1 ? 0 : 1)
        }); 
        $('.txt-sec1').css({
          'transform' : 'translate('+ (wScroll*0) + '%, '+ (160-limtxtSec1*0) +'%) scale('+ (125 - (wScroll * 0)) +'%)',
          'opacity': (scrollPercent >= 5.1 ? 0 : 1)
        });
        $('.pohon').css({
          'transform' : 'translate('+ (29-wScroll*0) + '%, '+ (190+limSwipe*0) +'%) scale('+ (248 + (limpohon*0.5)) +'%)'
        }); 
        $('.pohon-flip').css({
          'transform' : 'translate('+ (-1+limpohon*0.5) + '%, '+ (185-limpohon*0.6) +'%) scaleX(-1) scale('+ (155 + (limpohon*0)) +'%)'
        }); 
        $('.pohonpohon').css({
          'transform' : 'translate(0, '+ (210-limpohon*0) +'%) scale('+ (300 + (limpohon2 * 2.7)) +'%)'
        }); 
        $('.daun').css({
          'transform' : 'translate(0, '+ (-215-limdaun*0.5) +'%) scale('+ (200 + (limpohon2 * 2.7)) +'%)'
        });

        // Section 2
        $('.swipe2-righthalf').css({
          'transform' : 'translate('+ (155-limRight375*27)+'%, 0) rotate(180deg) scale('+ (75 + (scrollPercent * 1)) +'%)'
        });
        $('.swipe2-lefthalf').css({
          'transform' : 'translate('+ (-155+limLeft375*27)+'%, 10%) scale('+ (75 + (scrollPercent * 1)) +'%)'
        });
        $('.qlcmb').css({
          'transform' : 'scale('+ (140 + (wScroll * 0)) +'%)'
        });
        $('.p2sec2').css({
          'transform' : 'translate(0, '+ (-30)+'%)'
        });
        $('.fsk').css({
          'transform' : 'translate(0, '+ (-350+wScroll*0.45) +'%) scale('+ (15 + (wScroll * 0.15)) +'%)',
          'opacity': (scrollPercent >= 4 ? 1 : 0)
        });
        $('.img-sec2 .position-start').css({
          'transform' : 'scale('+ (57 + (wScroll * 0.1)) +'%) translate('+ (149-wScroll*0.25) + '%, '+ (-37+wScroll*0.05) +'%)',
          'opacity' : (scrollPercent >= 4 ? 1 : 0)
        });
        $('.img-sec2 .position-end').css({
          'transform' : 'scale('+ (57 + (wScroll * 0.1)) +'%) translate('+ (-155+wScroll*0.25) + '%, '+ (-37+wScroll*0.05) +'%)',
          'opacity' : (scrollPercent >= 4 ? 1 : 0)
        });

        // Section 3
        $('.pria-sec4').css({
          'transform': 'translate(' + (-600 + menScrollX450*57) + '%, ' + (-1755 + menScrollY375*110) + '%) scale('+ menScale375 +'%)',
           'opacity': menOpacity375(scrollPercent)
        });

        // Section 5    
        if(scrollPercent >= 15 && !typewriterStarted) {
          typewriterStarted = true;
          typeWriter();
          $('.cursor').css('opacity', scrollPercent >= 15 ? 1 : 0);
        }
      } else if (window.matchMedia("(max-width: 450px)").matches) {
        // Section 1
        $('.wanita-swipe').css({
          'transform' : 'translate('+ (-5+wScroll*0.2) + '%, '+ (45.5+limSwipe*40) +'%) scale('+ (90 - (wScroll * 0)) +'%)'
        });
        $('.pria-swipe').css({
          'transform' : 'translate('+ (5-wScroll*0.2) + '%, '+ (46+limSwipe*40) +'%) scale('+ (90 - (wScroll * 0)) +'%)'
        });
        $('.quarter').css({
          'transform' : 'translate('+ (17+wScroll*0) + '%, '+ (-200-limQuarter*155) +'%) scale('+ (120 - (wScroll * 0)) +'%)',
          'opacity': (scrollPercent >= 5.1 ? 0 : 1)
        }); 
        $('.txt-sec1').css({
          'transform' : 'translate('+ (wScroll*0) + '%, '+ (140-limtxtSec1*0) +'%) scale('+ (125 - (wScroll * 0)) +'%)',
          'opacity': (scrollPercent >= 5.1 ? 0 : 1)
        });
        $('.pohon').css({
          'transform' : 'translate('+ (25-wScroll*0) + '%, '+ (200+limSwipe*0) +'%) scale('+ (225 + (limpohon*0.5)) +'%)'
        }); 
        $('.pohon-flip').css({
          'transform' : 'translate('+ (-5+limpohon*0.5) + '%, '+ (185-limpohon*0.6) +'%) scaleX(-1) scale('+ (155 + (limpohon*0)) +'%)'
        }); 
        $('.pohonpohon').css({
          'transform' : 'translate(0, '+ (200-limpohon*0) +'%) scale('+ (300 + (limpohon2 * 2.7)) +'%)'
        }); 
        $('.daun').css({
          'transform' : 'translate(0, '+ (-225-limdaun*0.5) +'%) scale('+ (200 + (limpohon2 * 2.7)) +'%)'
        });

        // Section 2
        $('.swipe2-righthalf').css({
          'transform' : 'translate('+ (145-limRight576*35)+'%, 0) rotate(180deg)'
        });
        $('.swipe2-lefthalf').css({
          'transform' : 'translate('+ (-145+limLeft576*35)+'%, 0)'
        });
        $('.qlcmb').css({
          'transform' : 'scale('+ (140 + (wScroll * 0)) +'%)'
        });
        $('.p2sec2').css({
          'transform' : 'translate(0, '+ (-30)+'%)'
        });
        $('.fsk').css({
          'transform' : 'translate(0, '+ (-580+wScroll*0.7) +'%) scale('+ (15 + (wScroll * 0.1)) +'%)',
          'opacity': (scrollPercent >= 5 ? 1 : 0)
        });
        $('.img-sec2 .position-start').css({
          'transform' : 'scale('+ (57 + (wScroll * 0.09)) +'%) translate('+ (70-wScroll*0.1) + '%, '+ (-240+wScroll*0.2) +'%)'
        });
        $('.img-sec2 .position-end').css({
          'transform' : 'scale('+ (57 + (wScroll * 0.09)) +'%) translate('+ (-70+wScroll*0.1) + '%, '+ (-240+wScroll*0.2) +'%)'
        });

        // Section 3
        $('.pria-sec4').css({
          'transform': 'translate(' + (-780 + menScrollX450*73.7) + '%, ' + (-2080 + menScrollY450*110) + '%) scale('+ menScale576 +'%)',
           'opacity': menOpacity450(scrollPercent)
        });

        // Section 5    
        if(scrollPercent >= 18.5 && !typewriterStarted) {
          typewriterStarted = true;
          typeWriter();
          $('.cursor').css('opacity', scrollPercent >= 18.5 ? 1 : 0);
        }
      } else if (window.matchMedia("(max-width: 600px)").matches) {
        // Section 1
        $('.wanita-swipe').css({
          'transform' : 'translate('+ (-5+wScroll*0.2) + '%, '+ (53.5+limSwipe*40) +'%) scale('+ (90 - (wScroll * 0)) +'%)'
        });
        $('.pria-swipe').css({
          'transform' : 'translate('+ (5-wScroll*0.2) + '%, '+ (53+limSwipe*40) +'%) scale('+ (90 - (wScroll * 0)) +'%)'
        });
        $('.quarter').css({
          'transform' : 'translate('+ (17+wScroll*0) + '%, '+ (-240-limQuarter*110) +'%) scale('+ (120 - (wScroll * 0)) +'%)',
          'opacity': (scrollPercent >= 5.1 ? 0 : 1)
        }); 
        $('.txt-sec1').css({
          'transform' : 'translate('+ (wScroll*0) + '%, '+ (150-limtxtSec1*0) +'%) scale('+ (125 - (wScroll * 0)) +'%)',
          'opacity': (scrollPercent >= 5.1 ? 0 : 1)
        });
        $('.pohon').css({
          'transform' : 'translate('+ (20-wScroll*0) + '%, '+ (210+limSwipe*0) +'%) scale('+ (200 + (limpohon*0.5)) +'%)'
        }); 
        $('.pohon-flip').css({
          'transform' : 'translate('+ (-5+limpohon*0.5) + '%, '+ (180-limpohon*0.6) +'%) scaleX(-1) scale('+ (155 + (limpohon*0)) +'%)'
        }); 
        $('.pohonpohon').css({
          'transform' : 'translate(0, '+ (180-limpohon*0) +'%) scale('+ (300 + (limpohon2 * 2.7)) +'%)'
        }); 
        $('.daun').css({
          'transform' : 'translate(0, '+ (-135-limdaun*0.5) +'%) scale('+ (200 + (limpohon2 * 2.7)) +'%)'
        });

        // Section 2
        $('.swipe2-righthalf').css({
          'transform' : 'translate('+ (85-limRight576*20)+'%, 0) rotate(180deg)'
        });
        $('.swipe2-lefthalf').css({
          'transform' : 'translate('+ (-85+limLeft576*20)+'%, 0)'
        });
        $('.qlcmb').css({
          'transform' : 'scale('+ (150 + (wScroll * 0)) +'%) translate(0, '+ (30)+'%)'
        });
        $('.p2sec2').css({
          'transform' : 'translate(0, '+ (80)+'%) scale('+ (130 + (wScroll * 0)) +'%)'
        });
        $('.fsk').css({
          'transform' : 'translate(0, '+ (-320+wScroll*0.45) +'%) scale('+ (-20 + (wScroll * 0.15)) +'%)',
          'opacity': (scrollPercent >= 5 ? 1 : 0)
        });
        $('.img-sec2 .position-start').css({
          'transform' : 'scale('+ (65 + (wScroll * 0.07)) +'%) translate('+ (75-wScroll*0.1) + '%, '+ (-127+wScroll*0.1) +'%)'
        });
        $('.img-sec2 .position-end').css({
          'transform' : 'scale('+ (65 + (wScroll * 0.07)) +'%) translate('+ (-75+wScroll*0.1) + '%, '+ (-127+wScroll*0.1) +'%)'
        });

        // Section 3
        $('.pria-sec4').css({
          'transform': 'translate(' + (-280 + menScrollX450*26) + '%, ' + (-1860 + menScrollY450*98) + '%) scale('+ menScale576 +'%)',
           'opacity': menOpacity576(scrollPercent)
        });

        // Section 5    
        if(scrollPercent >= 20 && !typewriterStarted) {
          typewriterStarted = true;
          typeWriter();
          $('.cursor').css('opacity', scrollPercent >= 20 ? 1 : 0);
        }
      } else if (window.matchMedia("(max-width: 780px)").matches) {
        // Section 1
        $('.wanita-swipe').css({
          'transform' : 'translate('+ (-5+wScroll*0.2) + '%, '+ (19.5+limSwipe*10) +'%) scale('+ (90 - (wScroll * 0)) +'%)'
        });
        $('.pria-swipe').css({
          'transform' : 'translate('+ (5-wScroll*0.2) + '%, '+ (20+limSwipe*10) +'%) scale('+ (90 - (wScroll * 0)) +'%)'
        });
        $('.quarter').css({
          'transform' : 'translate('+ (17+wScroll*0) + '%, '+ (-170-limQuarter*70) +'%) scale('+ (120 - (wScroll * 0)) +'%)',
          'opacity': (scrollPercent >= 5.1 ? 0 : 1)
        }); 
        $('.txt-sec1').css({
          'transform' : 'translate('+ (wScroll*0) + '%, '+ (120-limtxtSec1*0) +'%) scale('+ (125 - (wScroll * 0)) +'%)',
          'opacity': (scrollPercent >= 5.1 ? 0 : 1)
        });
        $('.pohon').css({
          'transform' : 'translate('+ (14-wScroll*0) + '%, '+ (125+limSwipe*0) +'%) scale('+ (175 + (limpohon*0.5)) +'%)'
        }); 
        $('.pohon-flip').css({
          'transform' : 'translate('+ (-5+limpohon*0.5) + '%, '+ (115-limpohon*0.6) +'%) scaleX(-1) scale('+ (155 + (limpohon*0)) +'%)'
        }); 
        $('.pohonpohon').css({
          'transform' : 'translate(0, '+ (110-limpohon*0) +'%) scale('+ (300 + (limpohon2 * 2.7)) +'%)'
        }); 
        $('.daun').css({
          'transform' : 'translate(0, '+ (-125-limdaun*0.5) +'%) scale('+ (200 + (limpohon2 * 2.7)) +'%)'
        });

        // Section 2
        $('.swipe2-righthalf').css({
          'transform' : 'translate('+ (135-limRight780*21)+'%, 0) rotate(180deg)'
        });
        $('.swipe2-lefthalf').css({
          'transform' : 'translate('+ (-135+limLeft780*21)+'%, 0)'
        });
        $('.qlcmb').css({
          'transform' : 'scale('+ (140 + (wScroll * 0)) +'%)'
        });
        $('.p2sec2').css({
          'transform' : 'translate(0, '+ (-30)+'%)'
        });
        $('.fsk').css({
          'transform' : 'translate(0, '+ (-735+wScroll*0.6) +'%) scale('+ (-30 + (wScroll * 0.1)) +'%)',
          'opacity': (scrollPercent >= 7.5 ? 1 : 0)
        });
        $('.img-sec2 .position-start').css({
          'transform' : 'scale('+ (59 + (wScroll * 0.05)) +'%) translate('+ (105-wScroll*0.1) + '%, '+ (-85+wScroll*0.05) +'%)'
        });
        $('.img-sec2 .position-end').css({
          'transform' : 'scale('+ (59 + (wScroll * 0.05)) +'%) translate('+ (-105+wScroll*0.1) + '%, '+ (-85+wScroll*0.05) +'%)'
        });

        // Section 3
        $('.pria-sec4').css({
          'transform': 'translate(' + (-300 + menScrollX780*17) + '%, ' + (-1362 + menScrollY780*55) + '%) scale('+ menScale780 +'%)',
           'opacity': menOpacity780(scrollPercent)
        });

        // Section 5 
        if(scrollPercent >= 25.5 && !typewriterStarted) {
          typewriterStarted = true;
          typeWriter();
          $('.cursor').css('opacity', scrollPercent >= 25.5 ? 1 : 0);
        }
      } else if (window.matchMedia("(max-width: 991px)").matches) {
        // Section 1
        $('.wanita-swipe').css({
          'transform' : 'translate('+ (-5+wScroll*0.17) + '%, 0)'
        });
        $('.pria-swipe').css({
          'transform' : 'translate('+ (5-wScroll*0.17) + '%, 0)'
        });
        $('.quarter').css({
          'position' : 'fixed',
          'transform' : 'translate('+ (12.5-wScroll*0) + '%, '+ (-80-limQuarter*64) +'%) scale('+ (100 - (wScroll * 0.0)) +'%)',
          'opacity': (scrollPercent >= 10.4 ? 0 : 1)
        }); 
        $('.txt-sec1').css({
          'transform' : 'translate('+ (wScroll*0) + '%, '+ (70+limtxtSec1*0) +'%)'
        });
        $('.pohon').css({
          'transform' : 'translate('+ (7-wScroll*0) + '%, '+ (75+limSwipe*0) +'%) scale('+ (135 + (limpohon*0.5)) +'%)'
        }); 
        $('.pohon-flip').css({
          'transform' : 'translate('+ (4+limpohon*0.5) + '%, '+ (55-limpohon*0.6) +'%) scaleX(-1) scale('+ (125 + (limpohon*0.5)) +'%)'
        }); 
        $('.pohonpohon').css({
          'transform' : 'translate(0, '+ (65-limpohon*0) +'%) scale('+ (200 + (limpohon2 * 2.7)) +'%)'
        }); 

        // Section 2
        $('.swipe2-righthalf').css({
          'transform' : 'translate('+ (106-limRight990*10)+'%, 0) rotate(180deg)'
        });
        $('.swipe2-lefthalf').css({
          'transform' : 'translate('+ (-103+limLeft990*10)+'%, 0)'
        });
        $('.qlcmb').css({
          'transform' : 'scale('+ (130 + (wScroll * 0)) +'%) translate(0, '+ (-85+wScroll*0.05) +'%)'
        });
        $('.fsk').css({
          'transform' : 'translate(0, '+ (-260+wScroll*0.15) +'%) scale('+ (-60 + (wScroll * 0.1)) +'%)',
          'opacity': (scrollPercent >= 10 ? 1 : 0)
        });
        $('.img-sec2 .position-start').css({
          'transform' : 'scale('+ (25 + (wScroll * 0.06)) +'%) translate('+ (180-wScroll*0.1) + '%, '+ (-85+wScroll*0.05) +'%)'
        });
        $('.img-sec2 .position-end').css({
          'transform' : 'scale('+ (25 + (wScroll * 0.06)) +'%) translate('+ (-183+wScroll*0.1) + '%, '+ (-85+wScroll*0.05) +'%)'
        });

        // Section 3
        $('.pria-sec4').css({
          'transform': 'translate(' + (-280 + menScrollX990*16) + '%, ' + (-1390 + menScrollY990*52) + '%) scale('+ menScale990 +'%)',
           'opacity': menOpacity990(scrollPercent)
        });

        // Section 5 
        if(scrollPercent >= 29 && !typewriterStarted) {
          typewriterStarted = true;
          typeWriter();
          $('.cursor').css('opacity', scrollPercent >= 29 ? 1 : 0);
        }
      } else if (window.matchMedia("(max-width: 1024px)").matches) {
        // Section 1
        $('.pria-swipe').css({
          'transform' : 'translate('+ (60-wScroll*0.14) + '%, '+ (20+limSwipe*45.6) +'%) scale('+ (100 - (wScroll * 0.015)) +'%)',
          'opacity': (scrollPercent >= 6.9 ? 0 : 1)
        });
        $('.wanita-swipe').css({
          'transform' : 'translate('+ (60-wScroll*0.1) + '%, '+ (20+limSwipe*45.65) +'%) scale('+ (100 - (wScroll * 0.015)) +'%)',
          'opacity': (scrollPercent >= 6.9 ? 0 : 1)
        });
        $('.quarter').css({
          'position' : 'fixed',
          'transform' : 'translate('+ (3+wScroll*0.0138) + '%, '+ (-20-limQuarter*0.8) +'%) scale('+ (100 - (wScroll * 0.0262)) +'%)',
          'opacity': (scrollPercent >= 5.1 ? 0 : 1)
        }); 
        $('.txt-sec1').css({
          'transform' : 'translate('+ (40+wScroll*0.065) + '%, '+ (100+limtxtSec1*85.8) +'%)',
          'opacity': (scrollPercent >= 5.1 ? 0 : 1)
        });
        $('.pohon').css({
          'transform' : 'translate('+ (3-wScroll*0) + '%, '+ (15+limSwipe*0) +'%) scale('+ (115 + (limpohon*0.5)) +'%)'
        }); 
        $('.pohon-flip').css({
          'transform' : 'translate('+ (4+limpohon*0.5) + '%, '+ (5-limpohon*0.6) +'%) scaleX(-1)'
        }); 
        $('.pohonpohon').css({
          'transform' : 'translate(0, '+ (41-limpohon*0) +'%) scale('+ (100 + (limpohon2 * 2.7)) +'%)'
        }); 
        $('.daun').css({
          'transform' : 'translate(0, '+ (-35-limdaun*0.5) +'%)'
        });

        // Section 2
        $('.swipe2-righthalf').css({
          'transform' : 'translate('+ (100-limRight1440*13)+'%, 0) rotate(180deg)'
        });
        $('.swipe2-lefthalf').css({
          'transform' : 'translate('+ (-100+limLeft1440*13)+'%, 0)'
        });
        $('.qlcmb').css({
          'opacity': (scrollPercent >= 5.1 ? 1 : 0)
        });
        $('.fsk').css({
          'transform' : 'translate(0, '+ (-280+wScroll*0.3) +'%) scale('+ (-30 + (wScroll * 0.105)) +'%)',
          'opacity': (scrollPercent >= 6 ? 1 : 0)
        });
        $('.img-sec2 .position-start').css({
          'transform' : 'scale('+ (27 + (wScroll * 0.09)) +'%) translate('+ (102-wScroll*0.1) + '%, '+ (-110+wScroll*0.1) +'%)'
        });
        $('.img-sec2 .position-end').css({
          'transform' : 'scale('+ (27 + (wScroll * 0.09)) +'%) translate('+ (-107+wScroll*0.1) + '%, '+ (-110+wScroll*0.1) +'%)'
        });

        // Section 3
        $('.pria-sec4').css({
          'transform': 'translate(' + (-565 + menScrollX1440*25) + '%, ' + (-810 + menScrollY1440*40) + '%) scale('+ menScale1250 +'%)',
           'opacity': (scrollPercent >= 13 ? 1 : 0)
        });

        // Section 5 
        if(scrollPercent >= 25 && !typewriterStarted) {
          typewriterStarted = true;
          typeWriter();
          $('.cursor').css('opacity', scrollPercent >= 25 ? 1 : 0);
        }
      } else if (window.matchMedia("(max-width: 1440px)").matches) {
        // Section 1
        $('.pria-swipe').css({
          'transform' : 'translate('+ (55-wScroll*0.195) + '%, '+ (25+limSwipe*42.3) +'%) scale('+ (108 - (wScroll * 0.03)) +'%)',
          'opacity': (scrollPercent >= 4.3 ? 0 : 1)
        });
        $('.wanita-swipe').css({
          'transform' : 'translate('+ (70-wScroll*0.25) + '%, '+ (25+limSwipe*41.7) +'%) scale('+ (108 - (wScroll * 0.03)) +'%)',
          'opacity': (scrollPercent >= 4.3 ? 0 : 1)
        });
        $('.quarter').css({
          'position' : 'fixed',
          'transform' : 'translate('+ (2-wScroll*0.0035) + '%, '+ (-10+limQuarter*13) +'%) scale('+ (100 - (wScroll * 0.025)) +'%)',
          'opacity': (scrollPercent >= 4.3 ? 0 : 1)
        }); 
        $('.txt-sec1').css({
          'transform' : 'translate('+ (38+wScroll*0.21) + '%, '+ (130+limtxtSec1*71) +'%) scale('+ (100 - (wScroll * 0.005)) +'%)',
          'opacity': (scrollPercent >= 4.3 ? 0 : 1)
        });
        $('.pohon').css({
          'transform' : 'translate('+ (2-wScroll*0) + '%, '+ (7+limtxtSec1*0) +'%) scale('+ (100 + (limpohon*0.5)) +'%)'
        }); 
        $('.pohon-flip').css({
          'transform' : 'translate('+ (limpohon*0.5) + '%, '+ (-limpohon*0.6) +'%) scaleX(-1)'
        }); 
        $('.pohonpohon').css({
          'transform' : 'translate('+ (2-wScroll*0) + '%, '+ (24+limtxtSec1*0) +'%) scale('+ (100 + (limpohon2 * 2.7)) +'%)'
        }); 
        $('.daun').css({
          'transform' : 'translate(0, '+ (-20-limdaun*0.5) +'%)'
        });

        // Section 2
        $('.swipe2-righthalf').css({
          'transform' : 'translate('+ (100-limRight1440*13)+'%, 0) rotate(180deg)'
        });
        $('.swipe2-lefthalf').css({
          'transform' : 'translate('+ (-100+limLeft1440*13)+'%, 0)'
        });
        $('.qlcmb').css({
          'opacity': (scrollPercent >= 4.3 ? 1 : 0)
        });
        $('.p2sec2').css({
          'opacity': (scrollPercent >= 4.3 ? 1 : 0)
        });
        $('.fsk').css({
          'transform' : 'translate(0, '+ (-290+wScroll*0.3) +'%) scale('+ (-30 + (wScroll * 0.105)) +'%)',
          'opacity': (scrollPercent >= 6 ? 1 : 0)
        });
        $('.img-sec2 .position-start').css({
          'transform' : 'scale('+ (1 + (wScroll * 0.1)) +'%) translate('+ (102-wScroll*0.1) + '%, '+ (-57+wScroll*0.05) +'%)'
        });
        $('.img-sec2 .position-end').css({
          'transform' : 'scale('+ (1 + (wScroll * 0.1)) +'%) translate('+ (-107+wScroll*0.1) + '%, '+ (-57+wScroll*0.05) +'%)'
        });

        // Section 3
        $('.pria-sec4').css({
          'transform': 'translate(' + (-650 + menScrollX1440*29) + '%, ' + (-665 + menScrollY1440*34) + '%) scale('+ menScale1250 +'%)',
           'opacity': (scrollPercent >= 13 ? 1 : 0)
        });

        // Section 5 
        if(scrollPercent >= 25 && !typewriterStarted) {
          typewriterStarted = true;
          typeWriter();
          $('.cursor').css('opacity', scrollPercent >= 25 ? 1 : 0);
        }
      } else { // DEFAULT
        // Section 1
        $('.pria-swipe').css({
          'transform' : 'translate('+ (60-wScroll*0.14) + '%, '+ (10+limSwipe*25.6) +'%) scale('+ (100 - (wScroll * 0.015)) +'%)',
          'opacity': (scrollPercent >= 6.9 ? 0 : 1)
        });
        $('.wanita-swipe').css({
          'transform' : 'translate('+ (60-wScroll*0.1) + '%, '+ (10+limSwipe*25.65) +'%) scale('+ (100 - (wScroll * 0.015)) +'%)',
          'opacity': (scrollPercent >= 6.9 ? 0 : 1)
        });
        $('.quarter').css({
          'position' : 'fixed',
          'transform' : 'translate('+ (wScroll*0.001) + '%, '+ (-limQuarter*2.3) +'%) scale('+ (100 - (wScroll * 0.015)) +'%)',
          'opacity': (scrollPercent >= 6.2 ? 0 : 1)
        }); 
        $('.txt-sec1').css({
          'transform' : 'translate('+ (31+wScroll*0.0) +'%, '+ (130+limtxtSec1*100) +'%)'
        });
        $('.pohon').css({
          'transform' : 'scale('+ (100 + (limpohon*0.5)) +'%)'
        }); 
        $('.pohon-flip').css({
          'transform' : 'translate('+ (limpohon*0.5) + '%, '+ (-limpohon*0.6) +'%) scaleX(-1)'
        }); 
        $('.pohonpohon').css({
          'transform' : 'scale('+ (100 + (limpohon2 * 2.7)) +'%)'
        }); 
        $('.daun').css({
          'transform' : 'translate(0, '+ (-limdaun*0.5) +'%)'
        });

        // Section 2
        $('.swipe2-righthalf').css({
          'transform' : 'translate('+ (100-limRight*10.9)+'%, 0) rotate(180deg)'
        });
        $('.swipe2-lefthalf').css({
          'transform' : 'translate('+ (-100+limLeft*10.9)+'%, 0)'
        });
        $('.qlcmb').css({
          'opacity': (scrollPercent >= 6.2 ? 1 : 0)
        });
        $('.p2sec2').css({
          'opacity': (scrollPercent >= 6.5 ? 1 : 0)
        });
        $('.fsk').css({
          'transform' : 'translate(0, '+ (-400+wScroll*0.4) +'%) scale('+ (-30 + (wScroll * 0.1)) +'%)',
          'opacity': (scrollPercent >= 7 ? 1 : 0)
        });
        $('.img-sec2 .position-start').css({
          'transform' : 'scale('+ (10 + (wScroll * 0.07)) +'%) translate('+ (120-wScroll*0.1) + '%, '+ (-63+wScroll*0.05) +'%)',
          'opacity': (scrollPercent >= 6.9 ? 1 : 0)
        });
        $('.img-sec2 .position-end').css({
          'transform' : 'scale('+ (10 + (wScroll * 0.07)) +'%) translate('+ (-127+wScroll*0.1) + '%, '+ (-63+wScroll*0.05) +'%)',
          'opacity': (scrollPercent >= 6.9 ? 1 : 0)
        });

        // Section 3
        $('.pria-sec4').css({
          'transform': 'translate(' + (-680 + menScrollX*27.7) + '%, ' + (-590 + menScrollY*26) + '%) scale('+ menScale +'%)',
           'opacity': (scrollPercent >= 15 ? 1 : 0)
        });

        // Section 5    
        if(scrollPercent >= 29 && !typewriterStarted) {
          typewriterStarted = true;
          typeWriter();
          $('.cursor').css('opacity', scrollPercent >= 29 ? 1 : 0);
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