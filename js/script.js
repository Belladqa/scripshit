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
      var limRight = Math.min(scrollPercent, 27);
      var limLeft = Math.min(scrollPercent, 25);
      var menScrollX = Math.min(scrollPercent, 57);
      var menScrollY = Math.min(scrollPercent, 60);
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

      if(scrollPercent >= 73 && !typewriterStarted) {
        typewriterStarted = true;
        typeWriter();
        $('.cursor').css('opacity', scrollPercent >= 73 ? 1 : 0);
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
          'transform' : 'translate('+ (100-limRight*3.7)+'%, 0) rotate(180deg)'
        });
        $('.swipe2-lefthalf').css({
          'transform' : 'translate('+ (-100+limLeft*3.5)+'%, 0)'
        });
        $('.fsk').css({
          'transform' : 'translate(0, '+ (-400+wScroll*0.4) +'%) scale('+ (-30 + (wScroll * 0.1)) +'%)',
          'opacity': (scrollPercent >= 14 ? 1 : 0)
        });
        $('.img-sec2 .position-start').css({
          'transform' : 'scale('+ (15 + (wScroll * 0.07)) +'%) translate('+ (127-wScroll*0.1) + '%, '+ (-55+wScroll*0.05) +'%)'
        });
        $('.img-sec2 .position-end').css({
          'transform' : 'scale('+ (15 + (wScroll * 0.07)) +'%) translate('+ (-127+wScroll*0.1) + '%, '+ (-55+wScroll*0.05) +'%)'
        });

        // Section 3
        $('.pria-sec4').css({
          'transform': 'translate(' + (-725 + menScrollX*12.5) + '%, ' + (-650 + menScrollY*12) + '%) scale('+ menScale +'%)',
           'opacity': (scrollPercent >= 37 ? 1 : 0)
        });
      }
      // AOS.refresh();
    }