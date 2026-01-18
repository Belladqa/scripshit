// BACKGROUND AWAN
    var animation = lottie.loadAnimation({
      container: document.getElementById('lottie-bg'), // div background
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'media/animate/landingpage.json',
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
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

  /* ===============================
     CONFIG RESPONSIF PER SECTION
  =============================== */
  function getResponsiveConfig(type) {
    const w = window.innerWidth;

    if (type === 'sec8') {
      if (w <= 375)  return { x: 97, y: -50 };
      if (w <= 450)  return { x: 120, y: -55 };
      if (w <= 576)  return { x: 130, y: -55 };
      if (w <= 780)  return { x: 200, y: -90 };
      if (w <= 992)  return { x: 250, y: -90 };
      if (w <= 1024) return { x: 140, y: -70 };
      return           { x: 220, y: -110 };
    }

    if (type === 'sec9') {
      if (w <= 375)  return { x: 11.5, y: -40 };
      if (w <= 450)  return { x: 14, y: -50 };
      if (w <= 576)  return { x: 15, y: -58 };
      if (w <= 780)  return { x: 22, y: -73 };
      if (w <= 992)  return { x: 26, y: -84 };
      if (w <= 1024) return { x: 15, y: -60 };
      return           { x: 15, y: -85 };
    }

    if (type === 'sec10') {
      if (w <= 375)  return { x: 130, y: 40 };
      if (w <= 450)  return { x: 125, y: 40 };
      if (w <= 576)  return { x: 160, y: 50 };
      if (w <= 780)  return { x: 190, y: 50 };
      if (w <= 992)  return { x: 240, y: 70 };
      if (w <= 1024) return { x: 150, y: 70 };
      return           { x: 210, y: 80 };
    }

    if (type === 'sec11') {
      if (w <= 375)  return { x: 70, y: 110 };
      if (w <= 450)  return { x: 70, y: 115 };
      if (w <= 576)  return { x: 90, y: 140 };
      if (w <= 780)  return { x: 130, y: 190 };
      if (w <= 992)  return { x: 180, y: 225 };
      if (w <= 1024) return { x: 120, y: 170 };
      return           { x: 140, y: 250 };
    }

    if (type === 'sec14') {
      if (w <= 375)  return { x: 30, y: 100 };
      if (w <= 450)  return { x: 30, y: 85 };
      if (w <= 576)  return { x: 40, y: 130 };
      if (w <= 780)  return { x: 50, y: 160 };
      if (w <= 992)  return { x: 60, y: 200 };
      if (w <= 1024) return { x: 47, y: 200 };
      return           { x: 40, y: 250 };
    }

    if (type === 'sec15') {
      if (w <= 375)  return { x: 25, y: 50 };
      if (w <= 450)  return { x: 30, y: 65 };
      if (w <= 576)  return { x: 43, y: 90 };
      if (w <= 780)  return { x: 53, y: 110 };
      if (w <= 992)  return { x: 60, y: 120 };
      if (w <= 1024) return { x: 45, y: 130 };
      return           { x: 48, y: 150 };
    }

    return { x: 280, y: -120 };
  }

  const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

  /* ===============================
     DRAG LOGIC
  =============================== */
  const wrappers = document.querySelectorAll('.jalanTanya-wrapper');
  if (!wrappers.length) return;

  wrappers.forEach((element) => {

    /* ===== LANGKAH 3 (BENAR) ===== */
    const type = element.dataset.qtype || 'sec7';
    let { x: maxDragX, y: maxLiftY } = getResponsiveConfig(type);

    // update config SAAT resize (KHUSUS element ini)
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

    // INIT
    render();
    updateUI();
  });
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

      //1440
      var limRight = Math.min(scrollPercent, 9);
      var limLeft = Math.min(scrollPercent, 9.2);
      var menScrollX = Math.min(scrollPercent, 26);
      var menScrollY = Math.min(scrollPercent, 28);
      var menScale = Math.min((-80 + wScroll * 0.1), 110);

      //1250
      var menScale1250 = Math.max(120, (250 - wScroll * 0.1));
      var menScrollX1250 = Math.min(scrollPercent, 63);
      var menScrollY1250 = Math.min(scrollPercent, 61.5);

      //990      
      var limRight990 = Math.min(scrollPercent, 36);
      var limLeft990 = Math.min(scrollPercent, 37);
      var menScrollX990 = Math.min(scrollPercent, 51.5);
      var menScrollY990 = Math.min(scrollPercent, 80.5);
      var menScale990 = Math.max(120, (420 - wScroll * 0.1));
      function menOpacity990(scrollPercent) {
        if(scrollPercent < 43) return 0;
        if(scrollPercent < 60) return 1;
        if(scrollPercent < 73) return 0;
        return 1; 
      }

      //780      
      var menScale780 = Math.max(110, (330 - wScroll * 0.07));
      var menScrollX780 = Math.min(scrollPercent, 53.5);
      var menScrollY780 = Math.min(scrollPercent, 78);
      function menOpacity780(scrollPercent) {
        if(scrollPercent < 43) return 0;
        if(scrollPercent < 60) return 1;
        if(scrollPercent < 74) return 0;
        return 1; 
      }

      //576
      var limRight576 = Math.min(scrollPercent, 30);
      var limLeft576 = Math.min(scrollPercent, 32);
      var menScale576 = Math.max(110, (280 - wScroll * 0.07));

      //450      
      var menScrollX450 = Math.min(scrollPercent, 63.5);
      var menScrollY450 = Math.min(scrollPercent, 90.5);
      var menScale576 = Math.max(100, (280 - wScroll * 0.07));
      function menOpacity450(scrollPercent) {
        if(scrollPercent < 52) return 0;
        if(scrollPercent < 70) return 1;
        if(scrollPercent < 87.5) return 0;
        return 1; 
      }

      //375
      var limRight375 = Math.min(scrollPercent, 35);
      var limLeft375 = Math.min(scrollPercent, 36);
      var menScrollY375 = Math.min(scrollPercent, 86.5);
      var menScale375 = Math.max(100, (220 - wScroll * 0.05));
      function menOpacity375(scrollPercent) {
        if(scrollPercent < 51) return 0;
        if(scrollPercent < 71) return 1;
        if(scrollPercent < 84) return 0;
        return 1; 
      }

      if(scrollPercent >= 32 && !typewriterStarted) {
        typewriterStarted = true;
        typeWriter();
        $('.cursor').css('opacity', scrollPercent >= 32 ? 1 : 0);
      }

      if (window.matchMedia("(max-width: 375px)").matches) {
        // Section 1
        $('.wanita-swipe').css({
          'transform' : 'translate('+ (0+wScroll*0.2) + '%, 0)'
        });
        $('.pria-swipe').css({
          'transform' : 'translate('+ (0-wScroll*0.2) + '%, 0)'
        });

        // Section 2
        $('.swipe2-righthalf').css({
          'transform' : 'translate('+ (220-limRight375*7.5)+'%, 0) rotate(180deg) scale('+ (145 + (scrollPercent * 1)) +'%)',
          'opacity' : (scrollPercent >= 25 ? 1 : 0)
        });
        $('.swipe2-lefthalf').css({
          'transform' : 'translate('+ (-25+limLeft375*4)+'%, 0) scale('+ (300 + (scrollPercent * 1)) +'%)'
        });
        $('.p2sec2').css({
          'transform' : 'translate(0, '+ (-30)+'%)'
        });
        $('.fsk').css({
          'transform' : 'translate(0, '+ (-400+wScroll*0.45) +'%) scale('+ (15 + (wScroll * 0.07)) +'%)',
          'opacity': (scrollPercent >= 25 ? 1 : 0)
        });
        $('.img-sec2 .position-start').css({
          'transform' : 'scale('+ (57 + (wScroll * 0.1)) +'%) translate('+ (174-wScroll*0.25) + '%, '+ (-7+wScroll*0.05) +'%)',
          'opacity' : (scrollPercent >= 30 ? 1 : 0)
        });
        $('.img-sec2 .position-end').css({
          'transform' : 'scale('+ (57 + (wScroll * 0.1)) +'%) translate('+ (-174+wScroll*0.25) + '%, '+ (-7+wScroll*0.05) +'%)',
          'opacity' : (scrollPercent >= 30 ? 1 : 0)
        });

        // Section 3
        $('.pria-sec4').css({
          'transform': 'translate(' + (-875 + menScrollX450*13.7) + '%, ' + (-2350 + menScrollY375*27.4) + '%) scale('+ menScale375 +'%)',
           'opacity': menOpacity375(scrollPercent)
        });
      } else if (window.matchMedia("(max-width: 450px)").matches) {
        // Section 1
        $('.wanita-swipe').css({
          'transform' : 'translate('+ (0+wScroll*0.2) + '%, 0)'
        });
        $('.pria-swipe').css({
          'transform' : 'translate('+ (0-wScroll*0.2) + '%, 0)'
        });

        // Section 2
        $('.swipe2-righthalf').css({
          'transform' : 'translate('+ (110-limRight576*3.5)+'%, 0) rotate(180deg)'
        });
        $('.swipe2-lefthalf').css({
          'transform' : 'translate('+ (-113+limLeft576*3.5)+'%, 0)'
        });
        $('.p2sec2').css({
          'transform' : 'translate(0, '+ (-30)+'%)'
        });
        $('.fsk').css({
          'transform' : 'translate(0, '+ (-445+wScroll*0.45) +'%) scale('+ (15 + (wScroll * 0.07)) +'%)',
          'opacity': (scrollPercent >= 26 ? 1 : 0)
        });
        $('.img-sec2 .position-start').css({
          'transform' : 'scale('+ (57 + (wScroll * 0.07)) +'%) translate('+ (72-wScroll*0.1) + '%, '+ (-66+wScroll*0.05) +'%)'
        });
        $('.img-sec2 .position-end').css({
          'transform' : 'scale('+ (57 + (wScroll * 0.07)) +'%) translate('+ (-72+wScroll*0.1) + '%, '+ (-66+wScroll*0.05) +'%)'
        });

        // Section 3
        $('.pria-sec4').css({
          'transform': 'translate(' + (-875 + menScrollX450*13.7) + '%, ' + (-1780 + menScrollY450*20) + '%) scale('+ menScale576 +'%)',
           'opacity': menOpacity450(scrollPercent)
        });
      } else if (window.matchMedia("(max-width: 576px)").matches) {
        // Section 1
        $('.wanita-swipe').css({
          'transform' : 'translate('+ (0+wScroll*0.1) + '%, 0)'
        });
        $('.pria-swipe').css({
          'transform' : 'translate('+ (0-wScroll*0.1) + '%, 0)'
        });

        // Section 2
        $('.swipe2-righthalf').css({
          'transform' : 'translate('+ (110-limRight576*3.5)+'%, 0) rotate(180deg)'
        });
        $('.swipe2-lefthalf').css({
          'transform' : 'translate('+ (-113+limLeft576*3.5)+'%, 0)'
        });
        $('.p2sec2').css({
          'transform' : 'translate(0, '+ (-30)+'%)'
        });
        $('.fsk').css({
          'transform' : 'translate(0, '+ (-500+wScroll*0.45) +'%) scale('+ (-20 + (wScroll * 0.1)) +'%)',
          'opacity': (scrollPercent >= 26 ? 1 : 0)
        });
        $('.img-sec2 .position-start').css({
          'transform' : 'scale('+ (47 + (wScroll * 0.07)) +'%) translate('+ (90-wScroll*0.1) + '%, '+ (-68+wScroll*0.05) +'%)'
        });
        $('.img-sec2 .position-end').css({
          'transform' : 'scale('+ (47 + (wScroll * 0.07)) +'%) translate('+ (-90+wScroll*0.1) + '%, '+ (-68+wScroll*0.05) +'%)'
        });

        // Section 3
        $('.pria-sec4').css({
          'transform': 'translate(' + (-840 + menScrollX990*16) + '%, ' + (-1500 + menScrollY990*19) + '%) scale('+ menScale576 +'%)',
           'opacity': menOpacity990(scrollPercent)
        });
      } else if (window.matchMedia("(max-width: 780px)").matches) {
        // Section 1
        $('.wanita-swipe').css({
          'transform' : 'translate('+ (-5+wScroll*0.07) + '%, 0)'
        });
        $('.pria-swipe').css({
          'transform' : 'translate('+ (5-wScroll*0.07) + '%, 0)'
        });

        // Section 2
        $('.swipe2-righthalf').css({
          'transform' : 'translate('+ (95-limRight990*3.1)+'%, 0) rotate(180deg)'
        });
        $('.swipe2-lefthalf').css({
          'transform' : 'translate('+ (-113+limLeft990*3.1)+'%, 0)'
        });
        $('.p2sec2').css({
          'transform' : 'translate(0, '+ (-30)+'%)'
        });
        $('.fsk').css({
          'transform' : 'translate(0, '+ (-775+wScroll*0.55) +'%) scale('+ (-60 + (wScroll * 0.1)) +'%)',
          'opacity': (scrollPercent >= 27 ? 1 : 0)
        });
        $('.img-sec2 .position-start').css({
          'transform' : 'scale('+ (39 + (wScroll * 0.05)) +'%) translate('+ (125-wScroll*0.1) + '%, '+ (-90+wScroll*0.05) +'%)'
        });
        $('.img-sec2 .position-end').css({
          'transform' : 'scale('+ (39 + (wScroll * 0.05)) +'%) translate('+ (-125+wScroll*0.1) + '%, '+ (-90+wScroll*0.05) +'%)'
        });

        // Section 3
        $('.pria-sec4').css({
          'transform': 'translate(' + (-855 + menScrollX780*16) + '%, ' + (-1385 + menScrollY780*18) + '%) scale('+ menScale780 +'%)',
           'opacity': menOpacity780(scrollPercent)
        });
      } else if (window.matchMedia("(max-width: 990px)").matches) {
        // Section 1
        $('.wanita-swipe').css({
          'transform' : 'translate('+ (-40+wScroll*0.1) + '%, 0)'
        });
        $('.pria-swipe').css({
          'transform' : 'translate('+ (40-wScroll*0.1) + '%, 0)'
        });

        // Section 2
        $('.swipe2-righthalf').css({
          'transform' : 'translate('+ (110-limRight990*3)+'%, 0) rotate(180deg)'
        });
        $('.swipe2-lefthalf').css({
          'transform' : 'translate('+ (-113+limLeft990*3)+'%, 0)'
        });
        $('.fsk').css({
          'transform' : 'translate(0, '+ (-250+wScroll*0.15) +'%) scale('+ (-60 + (wScroll * 0.1)) +'%)',
          'opacity': (scrollPercent >= 27 ? 1 : 0)
        });
        $('.img-sec2 .position-start').css({
          'transform' : 'scale('+ (15 + (wScroll * 0.04)) +'%) translate('+ (165-wScroll*0.1) + '%, '+ (-93+wScroll*0.05) +'%)'
        });
        $('.img-sec2 .position-end').css({
          'transform' : 'scale('+ (15 + (wScroll * 0.04)) +'%) translate('+ (-165+wScroll*0.1) + '%, '+ (-93+wScroll*0.05) +'%)'
        });

        // Section 3
        $('.pria-sec4').css({
          'transform': 'translate(' + (-820 + menScrollX990*16) + '%, ' + (-1390 + menScrollY990*18) + '%) scale('+ menScale990 +'%)',
           'opacity': menOpacity990(scrollPercent)
        });
      } else if (window.matchMedia("(max-width: 1250px)").matches) {
        // Section 1
        $('.wanita-swipe, .pria-swipe').css({
          'transform' : 'translate('+ (25+wScroll*0.1) + '%, 0)'
        });
        $('.txt-sec1').css({
          'transform' : 'translate('+ (-wScroll*0.1) + '%, 0)'
        });

        // Section 2
        $('.swipe2-righthalf').css({
          'transform' : 'translate('+ (100-limRight*3.7)+'%, 0) rotate(180deg)'
        });
        $('.swipe2-lefthalf').css({
          'transform' : 'translate('+ (-100+limLeft*3.5)+'%, 0)'
        });
        $('.fsk').css({
          'transform' : 'translate(0, '+ (-290+wScroll*0.3) +'%) scale('+ (-30 + (wScroll * 0.105)) +'%)',
          'opacity': (scrollPercent >= 18 ? 1 : 0)
        });
        $('.img-sec2 .position-start').css({
          'transform' : 'scale('+ (15 + (wScroll * 0.07)) +'%) translate('+ (127-wScroll*0.1) + '%, '+ (-55+wScroll*0.05) +'%)'
        });
        $('.img-sec2 .position-end').css({
          'transform' : 'scale('+ (15 + (wScroll * 0.07)) +'%) translate('+ (-127+wScroll*0.1) + '%, '+ (-55+wScroll*0.05) +'%)'
        });

        // Section 3
        $('.pria-sec4').css({
          'transform': 'translate(' + (-575 + menScrollX1250*9) + '%, ' + (-690 + menScrollY1250*12) + '%) scale('+ menScale1250 +'%)',
           'opacity': (scrollPercent >= 35 ? 1 : 0)
        });
      } else { // DEFAULT
        // Section 1
        $('.wanita-swipe, .pria-swipe').css({
          'transform' : 'translate('+ (25+wScroll*0.1) + '%, 0)'
        });
        $('.txt-sec1').css({
          'transform' : 'translate('+ (-wScroll*0.1) + '%, 0)'
        });

        // Section 2
        $('.swipe2-righthalf').css({
          'transform' : 'translate('+ (100-limRight*10.9)+'%, 0) rotate(180deg)'
        });
        $('.swipe2-lefthalf').css({
          'transform' : 'translate('+ (-100+limLeft*10.9)+'%, 0)'
        });
        $('.fsk').css({
          'transform' : 'translate(0, '+ (-400+wScroll*0.4) +'%) scale('+ (-30 + (wScroll * 0.1)) +'%)',
          'opacity': (scrollPercent >= 9 ? 1 : 0)
        });
        $('.img-sec2 .position-start').css({
          'transform' : 'scale('+ (15 + (wScroll * 0.07)) +'%) translate('+ (120-wScroll*0.1) + '%, '+ (-75+wScroll*0.05) +'%)'
        });
        $('.img-sec2 .position-end').css({
          'transform' : 'scale('+ (15 + (wScroll * 0.07)) +'%) translate('+ (-127+wScroll*0.1) + '%, '+ (-75+wScroll*0.05) +'%)'
        });

        // Section 3
        $('.pria-sec4').css({
          'transform': 'translate(' + (-725 + menScrollX*27.5) + '%, ' + (-650 + menScrollY*26.1) + '%) scale('+ menScale +'%)',
           'opacity': (scrollPercent >= 15 ? 1 : 0)
        });
      }
      // AOS.refresh();
    }