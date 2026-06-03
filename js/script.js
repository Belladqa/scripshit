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

// DRAG ELEMENT FOR SECTION 7
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
        musicBtn.textContent = "❚❚";
      } else {
        audio.pause();
        musicBtn.textContent = "▶︎";
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
      function menOpacity375(scrollPercent) {
        if(scrollPercent < 7.2) return 0;
        if(scrollPercent < 11) return 1;
        if(scrollPercent < 13.8) return 0;
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

      if (window.matchMedia("(max-width: 375px)").matches) {
        // Section 1
        $('.wanita-swipe').css({
          'transform' : 'translate('+ (-75) + '%, '+ (190+limQuarter*150) +'%) scale('+ (180) +'%)',
          'opacity': (scrollPercent >= 3.7 ? 0 : 1)
        });
        $('.pria-swipe').css({
          'transform' : 'translate('+ (-145) + '%, '+ (190+limQuarter*150) +'%) scale('+ (180) +'%)',
          'opacity': (scrollPercent >= 3.7 ? 0 : 1)
        });
        $('.quarter').css({
          'position' : 'fixed',
          'transform' : 'translate('+ (19) + '%, '+ (-890-limQuarter*250) +'%) scale('+ (170) +'%)',
          'opacity': (scrollPercent >= 1 ? 0 : 1)
        }); 
        $('.quarter2').css({
          'position' : 'fixed',
          'transform' : 'translate('+ (27) + '%, '+ (-300-limQuarter*94) +'%) scale('+ (170) +'%)',
          'opacity': (scrollPercent >= 1 ? 0 : 1)
        }); 
        $('.pohon').css({
          'transform' : 'translate('+ (29-limpohon*0.5) + '%, '+ (190+limpohon*0.6) +'%) scale('+ (248 + (limpohon*0.5)) +'%)',
          'opacity': (scrollPercent >= 6.1 ? 0.15 : 1)
        }); 
        $('.pohon-flip').css({
          'transform' : 'translate('+ (-1+limpohon*0.5) + '%, '+ (185-limpohon*0.6) +'%) scaleX(-1) scale('+ (155 + (limpohon*0.5)) +'%)',
          'opacity': (scrollPercent >= 6.1 ? 0.15 : 1)
        }); 
        $('.pohonpohon').css({
          'transform' : 'translate(0, '+ (210-limpohon*0) +'%) scale('+ (300 + (limdaun * 2.7)) +'%)',
          'opacity': (scrollPercent >= 6.1 ? 0.15 : 1)
        }); 
        $('.daun').css({
          'transform' : 'translate(0, '+ (-215-limdaun*0.5) +'%) scale('+ (200 + (limdaun * 2.7)) +'%)',
          'opacity': (scrollPercent >= 6.1 ? 0.15 : 1)
        });

        // Section 2
        $('.swipe2-righthalf').css({
          'transform' : 'translate('+ (155-limRight375*27)+'%, 0) rotate(180deg) scale('+ (75 + (scrollPercent * 1)) +'%)'
        });
        $('.swipe2-lefthalf').css({
          'transform' : 'translate('+ (-155+limLeft375*27)+'%, 10%) scale('+ (75 + (scrollPercent * 1)) +'%)'
        });
        $('.qlcmb').css({
          'transform' : 'scale('+ (140 + (wScroll * 0)) +'%) translate(0, '+ (30)+'%)',
          'opacity': (scrollPercent >= 0.7 ? 1 : 0)
        });
        $('.p2sec2').css({
          'transform' : 'translate(0, '+ (-40)+'%)',
          'opacity': (scrollPercent >= 1 ? 1 : 0)
        });
        $('.fsk').css({
          'transform' : 'translate(0, '+ (-340+wScroll*0.65) +'%) scale('+ (58 + (wScroll * 0.15)) +'%)', 'text-shadow': ('1px 1px 1px rgb(0, 0, 0.1)') ,
          'opacity': (scrollPercent >= 1 ? 1 : 0)
        });
        $('.img-sec2 .position-start').css({
          'transform' : 'scale('+ (57 + (wScroll * 0.1)) +'%) translate('+ (149-wScroll*0.25) + '%, '+ (-37+wScroll*0.05) +'%)'
        });
        $('.img-sec2 .position-end').css({
          'transform' : 'scale('+ (57 + (wScroll * 0.1)) +'%) translate('+ (-155+wScroll*0.25) + '%, '+ (-37+wScroll*0.05) +'%)'
        });

        // Section 3
        $('.pria-sec4').css({
          'transform': 'translate(' + (-68 + menScrollX450*8) + '%, ' + (-1560 + limRight1440*205) + '%) scale('+ menScale375 +'%)',
           'opacity': menOpacity(scrollPercent)
        });

        // Section 5    
        if(scrollPercent >= 6.8 && !typewriterStarted) {
          typewriterStarted = true;
          typeWriter();
          $('.cursor').css('opacity', scrollPercent >= 6.8 ? 1 : 0);
        }

        // Section 7
        $('.w-150').css({
          'transform' : 'translate('+ (-29) +'%, '+ (40) +'%)'
        });
      } else if (window.matchMedia("(max-width: 400px)").matches) {
        $('.fixed-top').css({
          'opacity': (scrollPercent >= 5.6 ? 0 : 1)
        })
        // Section 1
        $('.wanita-swipe').css({
          'transform' : 'translate('+ (-75) + '%, '+ (270+limQuarter*120) +'%) scale('+ (180) +'%)',
          'opacity': (scrollPercent >= 3.7 ? 0 : 1)
        });
        $('.pria-swipe').css({
          'transform' : 'translate('+ (-145) + '%, '+ (270+limQuarter*120) +'%) scale('+ (180) +'%)',
          'opacity': (scrollPercent >= 3.7 ? 0 : 1)
        });
        $('.quarter').css({
          'position' : 'fixed',
          'transform' : 'translate('+ (10) + '%, '+ (- 1050-limQuarter*94) +'%) scale('+ (120) +'%)',
          'opacity': (scrollPercent >= 1.15 ? 0 : 1)
        }); 
        $('.quarter2').css({
          'position' : 'fixed',
          'transform' : 'translate('+ (10) + '%, '+ (-400-limQuarter*34) +'%) scale('+ (120) +'%)',
          'opacity': (scrollPercent >= 1.15 ? 0 : 1)
        }); 
        $('.pohon').css({
          'transform' : 'translate('+ (25) + '%, '+ (230+limpohon*1) +'%) scale('+ (220 + (limpohon*1)) +'%)',
          'opacity': (scrollPercent >= 7 ? 0.15 : 1)
        }); 
        $('.pohon-flip').css({
          'transform' : 'translate('+ (-5+limpohon*0.5) + '%, '+ (215-limpohon*1) +'%) scaleX(-1) scale('+ (155 + (limpohon*1)) +'%)',
          'opacity': (scrollPercent >= 7 ? 0.15 : 1)
        }); 
        $('.pohonpohon').css({
          'transform' : 'translate(0, '+ (230) +'%) scale('+ (300 + (limdaun * 2.7)) +'%)',
          'opacity': (scrollPercent >= 7 ? 0.15 : 1)
        }); 
        $('.daun').css({
          'transform' : 'translate(0, '+ (-270-limdaun*0.5) +'%) scale('+ (200 + (limdaun * 2.7)) +'%)',
          'opacity': bgfixed2(scrollPercent)
        });

        // Section 2
        $('.swipe2-righthalf').css({
          'transform' : 'translate('+ (145-limRight576*35)+'%, 0) rotate(180deg)'
        });
        $('.swipe2-lefthalf').css({
          'transform' : 'translate('+ (-145+limRight576*35)+'%, 0)'
        });
        $('.qlcmb').css({
          'transform' : 'translate(0, '+ (90)+'%) scale('+ (140) +'%)',
          'opacity': (scrollPercent >= 0.9 ? 1 : 0)
        });
        $('.p2sec2').css({
          'transform' : 'translate(0, '+ (100)+'%)', 'text-shadow': ('1px 1px 5px rgb(255, 255, 255)'),
          'opacity': (scrollPercent >= 1.3 ? 1 : 0)
        });
        $('.fsk').css({
          'transform' : 'translate(0, '+ (-130+wScroll*0.45) +'%) scale('+ (30 + (wScroll * 0.15)) +'%)', 'text-shadow': ('1px 1px 1px rgb(0, 0, 0.1)') ,
          'opacity': (scrollPercent >= 1.3 ? 1 : 0)
        });

        // Section 3
        $('.pria-sec4').css({
          'transform': 'translate(' + (-82 + menScrollX450*8) + '%, ' + (-1850 + limLeft*205) + '%) scale('+ menScale576 +'%)',
           'opacity': menOpacity576(scrollPercent)
        });

        // Section 5    
        if(scrollPercent >= 7.8 && !typewriterStarted) {
          typewriterStarted = true;
          typeWriter();
          $('.cursor').css('opacity', scrollPercent >= 7.8 ? 1 : 0);
        }

        // Section 7
        $('.w-150').css({
          'transform' : 'translate('+ (-29) +'%, '+ (45) +'%)'
        });

        // Section 17         
        $('.dampak').css({
          'transform' : 'translate('+ (26) +'%, '+ (110) +'%)'
        });
      } else if (window.matchMedia("(max-width: 430px)").matches) {
        $('.fixed-top').css({
          'opacity': (scrollPercent >= 5.9 ? 0 : 1)
        })
        // Section 1
        $('.wanita-swipe').css({
          'transform' : 'translate('+ (-75) + '%, '+ (220+limQuarter*120) +'%) scale('+ (180) +'%)',
          'opacity': (scrollPercent >= 3.7 ? 0 : 1)
        });
        $('.pria-swipe').css({
          'transform' : 'translate('+ (-145) + '%, '+ (220+limQuarter*120) +'%) scale('+ (180) +'%)',
          'opacity': (scrollPercent >= 3.7 ? 0 : 1)
        });
        $('.quarter').css({
          'position' : 'fixed',
          'transform' : 'translate('+ (10) + '%, '+ (-1120-limQuarter*94) +'%) scale('+ (120) +'%)',
          'opacity': (scrollPercent >= 1.15 ? 0 : 1)
        }); 
        $('.quarter2').css({
          'position' : 'fixed',
          'transform' : 'translate('+ (10) + '%, '+ (-420-limQuarter*34) +'%) scale('+ (120) +'%)',
          'opacity': (scrollPercent >= 1.15 ? 0 : 1)
        }); 
        $('.pohon').css({
          'transform' : 'translate('+ (25) + '%, '+ (210+limpohon*1.5) +'%) scale('+ (195 + (limpohon*1.5)) +'%)',
          'opacity': (scrollPercent >= 7 ? 0.15 : 1)
        }); 
        $('.pohon-flip').css({
          'transform' : 'translate('+ (-5+limpohon*0.5) + '%, '+ (215-limpohon*1.5) +'%) scaleX(-1) scale('+ (155 + (limpohon*1.5)) +'%)',
          'opacity': (scrollPercent >= 7 ? 0.15 : 1)
        }); 
        $('.pohonpohon').css({
          'transform' : 'translate(0, '+ (230) +'%) scale('+ (300 + (limdaun * 2.7)) +'%)',
          'opacity': (scrollPercent >= 7 ? 0.15 : 1)
        }); 
        $('.daun').css({
          'transform' : 'translate(0, '+ (-250-limdaun*0.5) +'%) scale('+ (200 + (limdaun * 2.7)) +'%)',
          'opacity': bgfixed2(scrollPercent)
        });

        // Section 2
        $('.swipe2-righthalf').css({
          'transform' : 'translate('+ (145-limRight576*35)+'%, 0) rotate(180deg)'
        });
        $('.swipe2-lefthalf').css({
          'transform' : 'translate('+ (-145+limRight576*35)+'%, 0)'
        });
        $('.qlcmb').css({
          'transform' : 'translate(0, '+ (90)+'%) scale('+ (140) +'%)',
          'opacity': (scrollPercent >= 0.9 ? 1 : 0)
        });
        $('.p2sec2').css({
          'transform' : 'translate(0, '+ (100)+'%)', 'text-shadow': ('1px 1px 5px rgb(255, 255, 255)'),
          'opacity': (scrollPercent >= 1.3 ? 1 : 0)
        });
        $('.fsk').css({
          'transform' : 'translate(0, '+ (-150+wScroll*0.45) +'%) scale('+ (30 + (wScroll * 0.15)) +'%)', 'text-shadow': ('1px 1px 1px rgb(0, 0, 0.1)') ,
          'opacity': (scrollPercent >= 1.3 ? 1 : 0)
        });

        // Section 3
        $('.pria-sec4').css({
          'transform': 'translate(' + (-82 + menScrollX450*8) + '%, ' + (-1850 + limLeft*205) + '%) scale('+ menScale576 +'%)',
           'opacity': menOpacity576(scrollPercent)
        });

        // Section 5    
        if(scrollPercent >= 7.8 && !typewriterStarted) {
          typewriterStarted = true;
          typeWriter();
          $('.cursor').css('opacity', scrollPercent >= 7.8 ? 1 : 0);
        }

        // Section 7
        $('.w-150').css({
          'transform' : 'translate('+ (-29) +'%, '+ (30) +'%)'
        });

        // Section 17         
        $('.dampak').css({
          'transform' : 'translate('+ (26) +'%, '+ (110) +'%)'
        });

      } else if (window.matchMedia("(max-width: 450px)").matches) {
        $('.fixed-top').css({
          'opacity': (scrollPercent >= 5.9 ? 0 : 1)
        })
        // Section 1
        $('.wanita-swipe').css({
          'transform' : 'translate('+ (-75) + '%, '+ (210+limQuarter*120) +'%) scale('+ (180) +'%)',
          'opacity': (scrollPercent >= 3.7 ? 0 : 1)
        });
        $('.pria-swipe').css({
          'transform' : 'translate('+ (-145) + '%, '+ (210+limQuarter*120) +'%) scale('+ (180) +'%)',
          'opacity': (scrollPercent >= 3.7 ? 0 : 1)
        });
        $('.quarter').css({
          'position' : 'fixed',
          'transform' : 'translate('+ (10) + '%, '+ (-920-limQuarter*94) +'%) scale('+ (120) +'%)',
          'opacity': (scrollPercent >= 1.15 ? 0 : 1)
        }); 
        $('.quarter2').css({
          'position' : 'fixed',
          'transform' : 'translate('+ (10) + '%, '+ (-350-limQuarter*34) +'%) scale('+ (120) +'%)',
          'opacity': (scrollPercent >= 1.15 ? 0 : 1)
        }); 
        $('.pohon').css({
          'transform' : 'translate('+ (25) + '%, '+ (210+limpohon*1.5) +'%) scale('+ (195 + (limpohon*1.5)) +'%)',
          'opacity': (scrollPercent >= 7 ? 0.15 : 1)
        }); 
        $('.pohon-flip').css({
          'transform' : 'translate('+ (-5+limpohon*0.5) + '%, '+ (215-limpohon*1.5) +'%) scaleX(-1) scale('+ (155 + (limpohon*1.5)) +'%)',
          'opacity': (scrollPercent >= 7 ? 0.15 : 1)
        }); 
        $('.pohonpohon').css({
          'transform' : 'translate(0, '+ (230) +'%) scale('+ (300 + (limdaun * 2.7)) +'%)',
          'opacity': (scrollPercent >= 7 ? 0.15 : 1)
        }); 
        $('.daun').css({
          'transform' : 'translate(0, '+ (-250-limdaun*0.5) +'%) scale('+ (200 + (limdaun * 2.7)) +'%)',
          'opacity': bgfixed2(scrollPercent)
        });

        // Section 2
        $('.swipe2-righthalf').css({
          'transform' : 'translate('+ (145-limRight576*35)+'%, 0) rotate(180deg)'
        });
        $('.swipe2-lefthalf').css({
          'transform' : 'translate('+ (-145+limRight576*35)+'%, 0)'
        });
        $('.qlcmb').css({
          'transform' : 'translate(0, '+ (90)+'%) scale('+ (140) +'%)',
          'opacity': (scrollPercent >= 0.9 ? 1 : 0)
        });
        $('.p2sec2').css({
          'transform' : 'translate(0, '+ (100)+'%)', 'text-shadow': ('1px 1px 5px rgb(255, 255, 255)'),
          'opacity': (scrollPercent >= 1.3 ? 1 : 0)
        });
        $('.fsk').css({
          'transform' : 'translate(0, '+ (-150+wScroll*0.45) +'%) scale('+ (30 + (wScroll * 0.15)) +'%)', 'text-shadow': ('1px 1px 1px rgb(0, 0, 0.1)') ,
          'opacity': (scrollPercent >= 1.3 ? 1 : 0)
        });

        // Section 3
        $('.pria-sec4').css({
          'transform': 'translate(' + (-82 + menScrollX450*8) + '%, ' + (-1850 + limLeft*205) + '%) scale('+ menScale576 +'%)',
           'opacity': menOpacity576(scrollPercent)
        });

        // Section 5    
        if(scrollPercent >= 7.8 && !typewriterStarted) {
          typewriterStarted = true;
          typeWriter();
          $('.cursor').css('opacity', scrollPercent >= 7.8 ? 1 : 0);
        }

        // Section 7
        $('.w-150').css({
          'transform' : 'translate('+ (-29) +'%, '+ (30) +'%)'
        });

        // Section 17         
        $('.dampak').css({
          'transform' : 'translate('+ (26) +'%, '+ (110) +'%)'
        });
      } else if (window.matchMedia("(max-width: 485px)").matches) {
        $('.fixed-top').css({
          'opacity': (scrollPercent >= 5.9 ? 0 : 1)
        })
        // Section 1
        $('.wanita-swipe').css({
          'transform' : 'translate('+ (-75) + '%, '+ (200+limQuarter*120) +'%) scale('+ (180) +'%)',
          'opacity': (scrollPercent >= 3.7 ? 0 : 1)
        });
        $('.pria-swipe').css({
          'transform' : 'translate('+ (-145) + '%, '+ (200+limQuarter*120) +'%) scale('+ (180) +'%)',
          'opacity': (scrollPercent >= 3.7 ? 0 : 1)
        });
        $('.quarter').css({
          'position' : 'fixed',
          'transform' : 'translate('+ (10) + '%, '+ (-920-limQuarter*94) +'%) scale('+ (120) +'%)',
          'opacity': (scrollPercent >= 1.15 ? 0 : 1)
        }); 
        $('.quarter2').css({
          'position' : 'fixed',
          'transform' : 'translate('+ (10) + '%, '+ (-350-limQuarter*34) +'%) scale('+ (120) +'%)',
          'opacity': (scrollPercent >= 1.15 ? 0 : 1)
        }); 
        $('.pohon').css({
          'transform' : 'translate('+ (25) + '%, '+ (210+limpohon*1.5) +'%) scale('+ (195 + (limpohon*1.5)) +'%)',
          'opacity': (scrollPercent >= 7 ? 0.15 : 1)
        }); 
        $('.pohon-flip').css({
          'transform' : 'translate('+ (-5+limpohon*0.5) + '%, '+ (215-limpohon*1.5) +'%) scaleX(-1) scale('+ (155 + (limpohon*1.5)) +'%)',
          'opacity': (scrollPercent >= 7 ? 0.15 : 1)
        }); 
        $('.pohonpohon').css({
          'transform' : 'translate(0, '+ (230) +'%) scale('+ (300 + (limdaun * 2.7)) +'%)',
          'opacity': (scrollPercent >= 7 ? 0.15 : 1)
        }); 
        $('.daun').css({
          'transform' : 'translate(0, '+ (-250-limdaun*0.5) +'%) scale('+ (200 + (limdaun * 2.7)) +'%)',
          'opacity': bgfixed2(scrollPercent)
        });

        // Section 2
        $('.swipe2-righthalf').css({
          'transform' : 'translate('+ (145-limRight576*35)+'%, 0) rotate(180deg)'
        });
        $('.swipe2-lefthalf').css({
          'transform' : 'translate('+ (-145+limRight576*35)+'%, 0)'
        });
        $('.qlcmb').css({
          'transform' : 'translate(0, '+ (90)+'%) scale('+ (140) +'%)',
          'opacity': (scrollPercent >= 0.9 ? 1 : 0)
        });
        $('.p2sec2').css({
          'transform' : 'translate(0, '+ (100)+'%)', 'text-shadow': ('1px 1px 5px rgb(255, 255, 255)'),
          'opacity': (scrollPercent >= 1.3 ? 1 : 0)
        });
        $('.fsk').css({
          'transform' : 'translate(0, '+ (-150+wScroll*0.45) +'%) scale('+ (30 + (wScroll * 0.15)) +'%)', 'text-shadow': ('1px 1px 1px rgb(0, 0, 0.1)') ,
          'opacity': (scrollPercent >= 1.3 ? 1 : 0)
        });

        // Section 3
        $('.pria-sec4').css({
          'transform': 'translate(' + (-82 + menScrollX450*8) + '%, ' + (-1850 + limLeft*205) + '%) scale('+ menScale576 +'%)',
           'opacity': menOpacity576(scrollPercent)
        });

        // Section 5    
        if(scrollPercent >= 7.8 && !typewriterStarted) {
          typewriterStarted = true;
          typeWriter();
          $('.cursor').css('opacity', scrollPercent >= 7.8 ? 1 : 0);
        }

        // Section 7
        $('.w-150').css({
          'transform' : 'translate('+ (-29) +'%, '+ (30) +'%)'
        });

        // Section 17         
        $('.dampak').css({
          'transform' : 'translate('+ (26) +'%, '+ (110) +'%)'
        });
      } else if (window.matchMedia("(max-width: 600px)").matches) {
        $('.fixed-top').css({
          'opacity': (scrollPercent >= 5.6 ? 0 : 1)
        })
        // Section 1
        $('.wanita-swipe').css({
          'transform' : 'translate('+ (-75) + '%, '+ (240+limQuarter*110) +'%) scale('+ (180) +'%)',
          'opacity': (scrollPercent >= 3.7 ? 0 : 1)
        });
        $('.pria-swipe').css({
          'transform' : 'translate('+ (-145) + '%, '+ (240+limQuarter*110) +'%) scale('+ (180) +'%)',
          'opacity': (scrollPercent >= 3.7 ? 0 : 1)
        });
        $('.quarter').css({
          'position' : 'fixed',
          'transform' : 'translate('+ (10) + '%, '+ (-1330-limQuarter*94) +'%) scale('+ (120) +'%)',
          'opacity': (scrollPercent >= 1.15 ? 0 : 1)
        }); 
        $('.quarter2').css({
          'position' : 'fixed',
          'transform' : 'translate('+ (10) + '%, '+ (-500-limQuarter*34) +'%) scale('+ (120) +'%)',
          'opacity': (scrollPercent >= 1.15 ? 0 : 1)
        }); 
        $('.pohon').css({
          'transform' : 'translate('+ (20) + '%, '+ (210+limpohon*2) +'%) scale('+ (200 + (limpohon*2)) +'%)',
          'opacity': (scrollPercent >= 6.4 ? 0.15 : 1)
        }); 
        $('.pohon-flip').css({
          'transform' : 'translate('+ (-5+limpohon*0.5) + '%, '+ (180-limpohon*2) +'%) scaleX(-1) scale('+ (155 + (limpohon*2)) +'%)',
          'opacity': (scrollPercent >= 6.4 ? 0.15 : 1)
        }); 
        $('.pohonpohon').css({
          'transform' : 'translate(0, '+ (260) +'%) scale('+ (200 + (limdaun * 2.7)) +'%)',
          'opacity': (scrollPercent >= 6.4 ? 0.15 : 1)
        }); 
        $('.daun').css({
          'transform' : 'translate(0, '+ (-245-limdaun*0.5) +'%) scale('+ (200 + (limdaun * 2.7)) +'%)',
          'opacity': bgfixed2(scrollPercent)
        });

        // Section 2
        $('.swipe2-righthalf').css({
          'transform' : 'translate('+ (85-limRight576*20)+'%, 0) rotate(180deg)'
        });
        $('.swipe2-lefthalf').css({
          'transform' : 'translate('+ (-85+limRight576*20)+'%, 0)'
        });
        $('.qlcmb').css({
          'transform' : 'scale('+ (150) +'%) translate(0, '+ (-20)+'%)',
          'opacity': (scrollPercent >= 0.17 ? 1 : 0)
        });
        $('.p2sec2').css({
          'transform' : 'translate(0, '+ (-60)+'%) scale('+ (130) +'%)', 'text-shadow': ('1px 1px 5px rgb(255, 255, 255)') ,
          'opacity': (scrollPercent >= 0.6 ? 1 : 0)
        });
        $('.fsk').css({
          'transform' : 'translate(0, '+ (-200+wScroll*0.45) +'%) scale('+ (60 + (wScroll * 0.15)) +'%)', 'text-shadow': ('1px 1px 1px rgb(0, 0, 0.1)') ,
          'opacity': (scrollPercent >= 0.8 ? 1 : 0)
        });

        // Section 3
        $('.pria-sec4').css({
          'transform': 'translate(' + (-82 + menScrollX450*8) + '%, ' + (-1605 + (Math.min(scrollPercent, 8.8))*185) + '%) scale('+ menScale576 +'%)',
           'opacity': menOpacity576(scrollPercent)
        });

        // Section 5    
        if(scrollPercent >= 7.4 && !typewriterStarted) {
          typewriterStarted = true;
          typeWriter();
          $('.cursor').css('opacity', scrollPercent >= 7.4 ? 1 : 0);
        }

        // Section 7
        $('.w-150').css({
          'transform' : 'translate('+ (-29) +'%, '+ (13) +'%)'
        });

        // Section 17         
        $('.dampak').css({
          'transform' : 'translate('+ (26) +'%, '+ (65) +'%)'
        });
      } else if (window.matchMedia("(max-width: 780px)").matches) {
        $('.fixed-top').css({
          'opacity': (scrollPercent >= 8.4 ? 0 : 1)
        })

        // Section 1
        $('.wanita-swipe').css({
          'transform' : 'translate('+ (-75) + '%, '+ (130+limQuarter*54) +'%) scale('+ (130 - (wScroll * 0.0)) +'%)',
          'opacity': (scrollPercent >= 8.4 ? 0 : 1)
        });
        $('.pria-swipe').css({
          'transform' : 'translate('+ (-145) + '%, '+ (130+limQuarter*54) +'%) scale('+ (130 - (wScroll * 0.0)) +'%)',
          'opacity': (scrollPercent >= 8.4 ? 0 : 1)
        });
        $('.quarter').css({
          'position' : 'fixed',
          'transform' : 'translate(0, '+ (-850-limQuarter*94) +'%) scale('+ (100) +'%)',
          'opacity': (scrollPercent >= 1.5 ? 0 : 1)
        }); 
        $('.quarter2').css({
          'position' : 'fixed',
          'transform' : 'translate(0, '+ (-315-limQuarter*34) +'%) scale('+ (100) +'%)',
          'opacity': (scrollPercent >= 1.5 ? 0 : 1)
        }); 
        $('.pohon').css({
          'transform' : 'translate('+ (14) + '%, '+ (140+limpohon*1.5) +'%) scale('+ (155 + (limpohon*1.5)) +'%)',
          'opacity': (scrollPercent >= 8.4 ? 0.15 : 1)
        }); 
        $('.pohon-flip').css({
          'transform' : 'translate('+ (4+limpohon*0.5) + '%, '+ (115-limpohon*1.5) +'%) scaleX(-1) scale('+ (125 + (limpohon*1.5)) +'%)',
          'opacity': (scrollPercent >= 8.4 ? 0.15 : 1)
        }); 
        $('.pohonpohon').css({
          'transform' : 'translate(0, '+ (140) +'%) scale('+ (200 + (limdaun * 2.7)) +'%)',
          'opacity': (scrollPercent >= 8.4 ? 0.15 : 1)
        }); 
        $('.daun').css({
          'transform' : 'translate(0, '+ (-115-limdaun*0.5) +'%) scale('+ (200 + (limdaun * 2.7)) +'%)',
          'opacity': bgfixed(scrollPercent)
        });

        // Section 2
        $('.swipe2-righthalf').css({
          'transform' : 'translate('+ (106-limRight990*10)+'%, 0) rotate(180deg)'
        });
        $('.swipe2-lefthalf').css({
          'transform' : 'translate('+ (-103+limLeft990*10)+'%, 0)'
        });
        $('.qlcmb').css({
          'transform' : 'scale('+ (120) +'%) translate(0, '+ (-85+wScroll*0.05) +'%)',
          'opacity': (scrollPercent >= 0.5 ? 1 : 0)
        });
        $('.p2sec2').css({
          'transform' : 'translate(0, '+ (-185)+'%) scale('+ (130) +'%)',
          'opacity': (scrollPercent >= 1.4 ? 1 : 0)
        });
        $('.fsk').css({
          'transform' : 'translate(0, '+ (-450+wScroll*0.6) +'%) scale('+ (40 + (wScroll * 0.17)) +'%)', 'text-shadow': ('1px 1px 1px rgb(0, 0, 0.1)') ,
          'opacity': (scrollPercent >= 1.2 ? 1 : 0)
        });

        // Section 3
        $('.pria-sec4').css({
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
        $('.w-150').css({
          'transform' : 'translate(0, '+ (-4) +'%)'
        });

        // Section 16       
        $('.validasi').css({
          'transform' : 'translate(0, 0)'
        });

        // Section 17         
        $('.dampak').css({
          'transform' : 'translate('+ (24) +'%, '+ (47) +'%)'
        });

      } else if (window.matchMedia("(max-width: 991px)").matches) {
        $('.fixed-top').css({
          'opacity': (scrollPercent >= 7.4 ? 0 : 1)
        })

        // Section 1
        $('.wanita-swipe').css({
          'transform' : 'translate('+ (-75) + '%, '+ (130+limQuarter*54) +'%) scale('+ (150 - (wScroll * 0.0)) +'%)',
          'opacity': (scrollPercent >= 8.4 ? 0 : 1)
        });
        $('.pria-swipe').css({
          'transform' : 'translate('+ (-145) + '%, '+ (130+limQuarter*54) +'%) scale('+ (150 - (wScroll * 0.0)) +'%)',
          'opacity': (scrollPercent >= 8.4 ? 0 : 1)
        });
        $('.quarter').css({
          'position' : 'fixed',
          'transform' : 'translate(0, '+ (-870-limQuarter*150) +'%) scale('+ (100) +'%)',
          'opacity': (scrollPercent >= 0.5 ? 0 : 1)
        }); 
        $('.quarter2').css({
          'position' : 'fixed',
          'transform' : 'translate(0, '+ (-320-limQuarter*54) +'%) scale('+ (100) +'%)',
          'opacity': (scrollPercent >= 0.5 ? 0 : 1)
        }); 
        $('.pohon').css({
          'transform' : 'translate('+ (14) + '%, '+ (130+limpohon*0.6) +'%) scale('+ (155 + (limpohon*0.5)) +'%)',
          'opacity': (scrollPercent >= 8.4 ? 0.15 : 1)
        }); 
        $('.pohon-flip').css({
          'transform' : 'translate('+ (4+limpohon*0.5) + '%, '+ (95-limpohon*0.6) +'%) scaleX(-1) scale('+ (125 + (limpohon*0.5)) +'%)',
          'opacity': (scrollPercent >= 8.4 ? 0.15 : 1)
        }); 
        $('.pohonpohon').css({
          'transform' : 'translate(0, '+ (110-limpohon*0) +'%) scale('+ (200 + (limdaun * 2.7)) +'%)',
          'opacity': (scrollPercent >= 8.4 ? 0.15 : 1)
        }); 
        $('.daun').css({
          'transform' : 'translate(0, '+ (-125-limdaun*0.5) +'%) scale('+ (200 + (limdaun * 2.7)) +'%)',
          'opacity': bgfixed(scrollPercent)
        });

        // Section 2
        $('.swipe2-righthalf').css({
          'transform' : 'translate('+ (106-limRight990*10)+'%, 0) rotate(180deg)'
        });
        $('.swipe2-lefthalf').css({
          'transform' : 'translate('+ (-103+limLeft990*10)+'%, 0)'
        });
        $('.qlcmb').css({
          'transform' : 'scale('+ (140 + (wScroll * 0)) +'%) translate(0, '+ (-100+wScroll*0.05) +'%)',
          'opacity': (scrollPercent >= 0.5 ? 1 : 0)
        });
        $('.p2sec2').css({
          'transform' : 'translate(0, '+ (-190)+'%) scale('+ (150 + (wScroll * 0)) +'%)',
          'opacity': (scrollPercent >= 1 ? 1 : 0)
        });
        $('.fsk').css({
          'transform' : 'translate(0, '+ (-400+wScroll*0.5) +'%) scale('+ (40 + (wScroll * 0.17)) +'%)', 'text-shadow': ('1px 1px 1px rgb(0, 0, 0.1)') ,
          'opacity': (scrollPercent >= 1.2 ? 1 : 0)
        });
        $('.img-sec2 .position-start').css({
          'transform' : 'scale('+ (25 + (wScroll * 0.1)) +'%) translate('+ (120-wScroll*0.1) + '%, '+ (-85+wScroll*0.05) +'%)'
        });
        $('.img-sec2 .position-end').css({
          'transform' : 'scale('+ (25 + (wScroll * 0.1)) +'%) translate('+ (-123+wScroll*0.1) + '%, '+ (-85+wScroll*0.05) +'%)'
        });

        // Section 3
        $('.pria-sec4').css({
          'transform': 'translate(' + (-135 + menScrollX450*13) + '%, ' + (-1270 + menScrollY375*95) + '%) scale('+ menScale990 +'%)',
           'opacity': menOpacity375(scrollPercent)
        });

        // Section 5 
        if(scrollPercent >= 13.8 && !typewriterStarted) {
          typewriterStarted = true;
          typeWriter();
          $('.cursor').css('opacity', scrollPercent >= 13.8 ? 1 : 0);
        }

        // Section 16       
        $('.validasi').css({
          'transform' : 'translate(0, '+ (3) +'%)'
        });

        // Section 17         
        $('.dampak').css({
          'transform' : 'translate('+ (40-limdaun*0) +'%, '+ (110-limdaun*0) +'%) scale('+ (165 - (wScroll * 0.0)) +'%)'
        });
      } else if (window.matchMedia("(max-width: 1024px)").matches) {
        $('.fixed-top').css({
          'opacity': (scrollPercent >= 4.2 ? 0 : 1)
        })

        // Section 1
        $('.pria-swipe').css({
          'transform' : 'translate('+ (-20-limRight576*28) + '%, '+ (15+limQuarter*35.3) +'%) scale('+ (90 - (wScroll * 0.015)) +'%)',
          'opacity': (scrollPercent >= 6.9 ? 0 : 1)
        });
        $('.wanita-swipe').css({
          'transform' : 'translate('+ (-20-limRight576*19) + '%, '+ (15+limQuarter*35.3) +'%) scale('+ (90 - (wScroll * 0.015)) +'%)',
          'opacity': (scrollPercent >= 6.9 ? 0 : 1)
        });
        $('.quarter').css({
          'position' : 'fixed',
          'transform' : 'translate('+ (-18-wScroll*0.048) + '%, '+ (55+limQuarter*74) +'%) scale('+ (90 - (wScroll * 0.03)) +'%)',
          'opacity': (scrollPercent >= 4.2 ? 0 : 1)
        }); 
        $('.quarter2').css({
          'position' : 'fixed',
          'transform' : 'translate('+ (-25-wScroll*0.035) + '%, '+ (limQuarter*15) +'%) scale('+ (60 - (wScroll * 0.045)) +'%)',
          'opacity': (scrollPercent >= 4.2 ? 0 : 1)
        }); 
        $('.pohon').css({
          'transform' : 'translate('+ (3-limpohon*0.5) + '%, '+ (15+limpohon*0.6) +'%) scale('+ (115 + (limpohon*0.5)) +'%)',
          'opacity': (scrollPercent >= 12 ? 0.15 : 1)
        }); 
        $('.pohon-flip').css({
          'transform' : 'translate('+ (4+limpohon*0.5) + '%, '+ (5-limpohon*0.6) +'%) scaleX(-1)',
          'opacity': (scrollPercent >= 12 ? 0.15 : 1)
        }); 
        $('.pohonpohon').css({
          'transform' : 'translate(0, '+ (24) +'%) scale('+ (100 + (limdaun * 2.7)) +'%)',
          'opacity': (scrollPercent >= 12 ? 0.15 : 1)
        }); 
        $('.daun').css({
          'transform' : 'translate(0, '+ (-35-limdaun*0.5) +'%)',
          'opacity': bgfixed(scrollPercent)
        });

        // Section 2
        $('.swipe2-righthalf').css({
          'transform' : 'translate('+ (100-limRight1440*13)+'%, 0) rotate(180deg)'
        });
        $('.swipe2-lefthalf').css({
          'transform' : 'translate('+ (-100+limRight1440*13)+'%, 0)'
        });
        $('.qlcmb').css({
          'opacity': (scrollPercent >= 4.2 ? 1 : 0)
        });
        $('.p2sec2').css({
          'transform' : 'translate(0, '+ (-30) +'%) scale('+ (70) +'%)', 'opacity': (scrollPercent >= 4.4 ? 1 : 0)
        });
        $('.fsk').css({
          'transform' : 'translate(0, '+ (-450+wScroll*0.5) +'%) scale('+ (-30 + (wScroll * 0.105)) +'%)',
          'opacity': (scrollPercent >=4.2 ? 1 : 0)
        });

        // Section 3
        $('.pria-sec4').css({
          'transform': 'translate(' + (-800 + menScrollY375*55) + '%, ' + (-915 + lim1024*63) + '%) scale('+ menScale1250 +'%)',
           'opacity': (scrollPercent >= 12 ? 1 : 0)
        });

        // Section 5 
        if(scrollPercent >= 18 && !typewriterStarted) {
          typewriterStarted = true;
          typeWriter();
          $('.cursor').css('opacity', scrollPercent >= 18 ? 1 : 0);
        }

        // Section 17
        $('.dampak').css({
          'transform' : 'translate(0, '+ (20)+'%) scale(' + (100) + '%)'
        });
      } else if (window.matchMedia("(max-width: 1300px)").matches) {
        $('.fixed-top').css({
          'opacity': (scrollPercent >= 4.2 ? 0 : 1)
        })

        // Section 1
        $('.pria-swipe').css({
          'transform' : 'translate('+ (-35-limRight576*35) + '%, '+ (-5+limQuarter*35.3) +'%) scale('+ (108 - (wScroll * 0.02)) +'%)',
          'opacity': (scrollPercent >= 10 ? 0 : 1)
        });
        $('.wanita-swipe').css({
          'transform' : 'translate('+ (-20-limRight576*19) + '%, '+ (-5+limQuarter*35.3) +'%) scale('+ (108 - (wScroll * 0.02)) +'%)',
          'opacity': (scrollPercent >= 10 ? 0 : 1)
        });
        $('.quarter').css({
          'position' : 'fixed',
          'transform' : 'translate('+ (-5-wScroll*0.059) + '%, '+ (limQuarter*62) +'%) scale('+ (90 - (wScroll * 0.03)) +'%)',
          'opacity': (scrollPercent >= 4.2 ? 0 : 1)
        }); 
        $('.quarter2').css({
          'position' : 'fixed',
          'transform' : 'translate('+ (-5-wScroll*0.055) + '%, '+ (15+limQuarter*15) +'%) scale('+ (90 - (wScroll * 0.06)) +'%)',
          'opacity': (scrollPercent >= 4.2 ? 0 : 1)
        }); 
        $('.pohon').css({
          'transform' : 'translate('+ (2-limpohon*0.5) + '%, '+ (7+limpohon*0.6) +'%) scale('+ (100 + (limpohon*0.5)) +'%)',
          'opacity': (scrollPercent >= 14.1 ? 0.15 : 1)
        }); 
        $('.pohon-flip').css({
          'transform' : 'translate('+ (limpohon*0.5) + '%, '+ (-limpohon*0.6) +'%) scaleX(-1)',
          'opacity': (scrollPercent >= 14.1 ? 0.15 : 1)
        }); 
        $('.pohonpohon').css({
          'transform' : 'translate('+ (2) + '%, '+ (24) +'%) scale('+ (100 + (limdaun * 2.7)) +'%)',
          'opacity': (scrollPercent >= 14.1 ? 0.15 : 1)
        }); 
        $('.daun').css({
          'transform' : 'translate(0, '+ (-1-limdaun*0.5) +'%)', 
          'opacity': bgfixed(scrollPercent)
        });

        // Section 2
        $('.swipe2-righthalf').css({
          'transform' : 'translate('+ (100-limRight1440*13)+'%, 0) rotate(180deg)'
        });
        $('.swipe2-lefthalf').css({
          'transform' : 'translate('+ (-100+limRight1440*13)+'%, 0)'
        });
        $('.qlcmb').css({
          'opacity': (scrollPercent >= 4.2 ? 1 : 0)
        });
        $('.p2sec2').css({
          'transform' : 'translate(0, '+ (-70) +'%) scale('+ (70) +'%)', 'opacity': (scrollPercent >= 4.4 ? 1 : 0)
        });
        $('.fsk').css({
          'transform' : 'translate(0, '+ (-430+wScroll*0.35) +'%) scale('+ (-30 + (wScroll * 0.105)) +'%)',
          'opacity': (scrollPercent >= 4.2 ? 1 : 0)
        });

        // Section 3
        $('.pria-sec4').css({
          'transform': 'translate(' + (-730 + menScrollY375*50) + '%, ' + (-815 + menScrollY375*63) + '%) scale('+ menScale1250 +'%)',
           'opacity': (scrollPercent >= 9 ? 1 : 0)
        });

        // Section 5 
        if(scrollPercent >= 17.4 && !typewriterStarted) {
          typewriterStarted = true;
          typeWriter();
          $('.cursor').css('opacity', scrollPercent >= 17.4 ? 1 : 0);
        }

        // Section 17
        $('.dampak').css({
          'transform' : 'translate(0, '+ (20)+'%) scale(' + (100 + (wScroll*0)) + '%)'
        });
      } else if (window.matchMedia("(max-width: 1440px)").matches) {
        $('.fixed-top').css({
          'opacity': (scrollPercent >= 5 ? 0 : 1)
        })

        // Section 1
        $('.pria-swipe').css({
          'transform' : 'translate('+ (-35-wScroll*0.11) + '%, '+ (-5+limQuarter*35.3) +'%) scale('+ (108 - (wScroll * 0.03)) +'%)',
          'opacity': (scrollPercent >= 10 ? 0 : 1)
        });
        $('.wanita-swipe').css({
          'transform' : 'translate('+ (-20-wScroll*0.13) + '%, '+ (-5+limQuarter*35.3) +'%) scale('+ (108 - (wScroll * 0.03)) +'%)',
          'opacity': (scrollPercent >= 10 ? 0 : 1)
        });
        $('.quarter').css({
          'position' : 'fixed',
          'transform' : 'translate('+ (-8-wScroll*0.029) + '%, '+ (limQuarter*39) +'%) scale('+ (100 - (wScroll * 0.02)) +'%)',
          'opacity': (scrollPercent >= 5 ? 0 : 1)
        }); 
        $('.quarter2').css({
          'position' : 'fixed',
          'transform' : 'translate('+ (-5-wScroll*0.033) + '%, '+ (15+limQuarter*10) +'%) scale('+ (100 - (wScroll * 0.045)) +'%)',
          'opacity': (scrollPercent >= 5 ? 0 : 1)
        }); 
        $('.pohon').css({
          'transform' : 'translate('+ (2-limpohon*0.5) + '%, '+ (7+limpohon*0.6) +'%) scale('+ (100 + (limpohon*0.5)) +'%)',
          'opacity': (scrollPercent >= 14.8 ? 0.15 : 1)
        }); 
        $('.pohon-flip').css({
          'transform' : 'translate('+ (limpohon*0.5) + '%, '+ (-limpohon*0.6) +'%) scaleX(-1)',
          'opacity': (scrollPercent >= 14.8 ? 0.15 : 1)
        }); 
        $('.pohonpohon').css({
          'transform' : 'translate('+ (2) + '%, '+ (-4) +'%) scale('+ (100 + (limdaun * 2.7)) +'%)',
          'opacity': (scrollPercent >= 14.8 ? 0.15 : 1)
        }); 
        $('.daun').css({
          'transform' : 'translate(-2, '+ (-20-limdaun*0.5) +'%)',
          'opacity': bgfixed(scrollPercent)
        });

        // Section 2
        $('.swipe2-righthalf').css({
          'transform' : 'translate('+ (100-limRight1440*13)+'%, 0) rotate(180deg)'
        });
        $('.swipe2-lefthalf').css({
          'transform' : 'translate('+ (-100+limRight1440*13)+'%, 0)'
        });
        $('.qlcmb').css({
          'transform' : 'translate(0, '+ (50) +'%)','opacity': (scrollPercent >= 5 ? 1 : 0)
        });
        $('.p2sec2').css({
          'transform' : 'translate(0, '+ (-10) +'%) scale('+ (70) +'%)', 'opacity': (scrollPercent >= 5.2 ? 1 : 0)
        });
        $('.fsk').css({
          'transform' : 'translate(0, '+ (-370+wScroll*0.3) +'%) scale('+ (-30 + (wScroll * 0.105)) +'%)',
          'opacity': (scrollPercent >= 5 ? 1 : 0)
        });

        // Section 3
        $('.pria-sec4').css({
          'transform': 'translate(' + (-700 + menScrollY375*47) + '%, ' + (-815 + menScrollY375*63) + '%) scale('+ menScale1250 +'%)',
           'opacity': (scrollPercent >= 10 ? 1 : 0)
        });

        // Section 5 
        if(scrollPercent >= 18.4 && !typewriterStarted) {
          typewriterStarted = true;
          typeWriter();
          $('.cursor').css('opacity', scrollPercent >= 18.4 ? 1 : 0);
        }
      } else if (window.matchMedia("(max-width: 1550px)").matches) {
        $('.fixed-top').css({
          'opacity': (scrollPercent >= 5.2 ? 0 : 1)
        })

        // Section 1
        $('.pria-swipe').css({
          'transform' : 'translate('+ (-20-limSwipeX*22.3) + '%, '+ (10+limQuarter*29.6) +'%) scale('+ (100 - (wScroll * 0.015)) +'%)',
          'opacity': (scrollPercent >= 12 ? 0 : 1)
        });
        $('.wanita-swipe').css({
          'transform' : 'translate('+ (-20-limSwipeX*14.3) + '%, '+ (10+limQuarter*29.55) +'%) scale('+ (100 - (wScroll * 0.015)) +'%)',
          'opacity': (scrollPercent >= 10 ? 0 : 1)
        });
        $('.quarter').css({
          'position' : 'fixed',
          'transform' : 'translate('+ (-wScroll*0.044) + '%, '+ (limQuarter*10) +'%) scale('+ (100 - (wScroll * 0.035)) +'%)',
          'opacity': (scrollPercent >= 5.2 ? 0 : 1)
        }); 
        $('.quarter2').css({
          'position' : 'fixed',
          'transform' : 'translate('+ (-wScroll*0.038) + '%, '+ (15-limQuarter*1.5) +'%) scale('+ (100 - (wScroll * 0.045)) +'%)',
          'opacity': (scrollPercent >= 5.2 ? 0 : 1)
        }); 
        $('.txt-sec1').css({
          'transform' : 'translate('+ (20) +'%, '+ (300+limQuarter*100) +'%)'
        });
        $('.pohon').css({
          'transform' : 'translate('+ (-limpohon*0.5) + '%, '+ (+limpohon*0.6) +'%) scale('+ (100 + (limpohon*0.5)) +'%)',
           'opacity': (scrollPercent >= 15.8 ? 0.15 : 1)
        }); 
        $('.pohon-flip').css({
          'transform' : 'translate('+ (limpohon*0.5) + '%, '+ (-limpohon*0.6) +'%) scaleX(-1)',
           'opacity': (scrollPercent >= 15.8 ? 0.15 : 1)
        }); 
        $('.pohonpohon').css({
          'transform' : 'scale('+ (100 + (limdaun * 2.7)) +'%)',
           'opacity': (scrollPercent >= 15.8 ? 0.15 : 1)
        }); 
        $('.daun').css({
          'transform' : 'translate(0, '+ (-limdaun*0.5) +'%)',
           'opacity': bgfixed(scrollPercent)
        });

        // Section 2
        $('.swipe2-righthalf').css({
          'transform' : 'translate('+ (100-limRight*10.9)+'%, 0) rotate(180deg)'
        });
        $('.swipe2-lefthalf').css({
          'transform' : 'translate('+ (-100+limLeft*10.9)+'%, 0)'
        });
        $('.qlcmb').css({
          'transform' : 'translate(0, '+ (50) +'%)', 'opacity': (scrollPercent >= 5.2 ? 1 : 0)
        });
        $('.p2sec2').css({
          'transform' : 'scale('+ (80) +'%)', 'opacity': (scrollPercent >= 5.5 ? 1 : 0)
        });
        $('.fsk').css({
          'transform' : 'translate(0, '+ (-500+wScroll*0.45) +'%) scale('+ (-40 + (wScroll * 0.1)) +'%)',
          'opacity': (scrollPercent >= 5.5 ? 1 : 0)
        });

        // Section 3
        $('.pria-sec4').css({
          'transform': 'translate(' + (-550 + menScrollX990*30.7) + '%, ' + (-565 + menScrollY450*37) + '%) scale('+ menScale +'%)',
           'opacity': (scrollPercent >= 10.5 ? 1 : 0)
        });

        // Section 5    
        if(scrollPercent >= 19.5 && !typewriterStarted) {
          typewriterStarted = true;
          typeWriter();
          $('.cursor').css('opacity', scrollPercent >= 19.5 ? 1 : 0);
        }
      } else { // DEFAULT
        $('.fixed-top').css({
          'opacity': (scrollPercent >= 6.2 ? 0 : 1)
        })

        // Section 1
        $('.pria-swipe').css({
          'transform' : 'translate('+ (-20-limSwipeX*21.6) + '%, '+ (10+limQuarter*26.6) +'%) scale('+ (100 - (wScroll * 0.005)) +'%)',
          'opacity': (scrollPercent >= 10 ? 0 : 1)
        });
        $('.wanita-swipe').css({
          'transform' : 'translate('+ (-22-limSwipeX*13.6) + '%, '+ (10+limQuarter*26.65) +'%) scale('+ (100 - (wScroll * 0.005)) +'%)',
          'opacity': (scrollPercent >= 10 ? 0 : 1)
        });
        $('.quarter').css({
          'position' : 'fixed',
          'transform' : 'translate('+ (-wScroll*0.045) + '%, '+ (5+limQuarter*8) +'%) scale('+ (100 - (wScroll * 0.04)) +'%)',
          'opacity': (scrollPercent >= 6.2 ? 0 : 1)
        }); 
        $('.quarter2').css({
          'position' : 'fixed',
          'transform' : 'translate('+ (-wScroll*0.035) + '%, '+ (15-limQuarter*2.3) +'%) scale('+ (100 - (wScroll * 0.04)) +'%)',
          'opacity': (scrollPercent >= 6.2 ? 0 : 1)
        }); 
        $('.txt-sec1').css({
          'transform' : 'translate('+ (31) +'%, '+ (130+limQuarter*100) +'%)'
        });
        $('.pohon').css({
          'transform' : 'translate('+ (-limpohon*0.5) + '%, '+ (+limpohon*0.6) +'%) scale('+ (100 + (limpohon*0.5)) +'%)',
          'opacity': (scrollPercent >= 18 ? 0.15 : 1)
        }); 
        $('.pohon-flip').css({
          'transform' : 'translate('+ (limpohon*0.5) + '%, '+ (-limpohon*0.6) +'%) scaleX(-1)',
          'opacity': (scrollPercent >= 18 ? 0.15 : 1)
        }); 
        $('.pohonpohon').css({
          'transform' : 'scale('+ (100 + (limdaun * 2.7)) +'%)',
          'opacity': (scrollPercent >= 18 ? 0.15 : 1)
        }); 
        $('.daun').css({
          'transform' : 'translate(0, '+ (-limdaun*0.5) +'%)',
          'opacity': bgfixed(scrollPercent)
        });

        // Section 2
        $('.swipe2-righthalf').css({
          'transform' : 'translate('+ (100-limRight*10.9)+'%, 0) rotate(180deg)'
        });
        $('.swipe2-lefthalf').css({
          'transform' : 'translate('+ (-100+limLeft*10.9)+'%, 0)'
        });
        $('.qlcmb, .p2sec2').css({
          'transform' : 'translate(0, '+ (65) +'%)', 'opacity': (scrollPercent >= 6.2 ? 1 : 0)
        });
        $('.fsk').css({
          'transform' : 'translate(0, '+ (-400+wScroll*0.4) +'%) scale('+ (-30 + (wScroll * 0.1)) +'%)',
          'opacity': (scrollPercent >= 6 ? 1 : 0)
        });

        // Section 3
        $('.pria-sec4').css({
          'transform': 'translate(' + (-630 + menScrollX*33) + '%, ' + (-540 + menScrollY*32.5) + '%) scale('+ menScale +'%)',
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
