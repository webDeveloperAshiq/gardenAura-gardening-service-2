(function($) {
    "use strict";
  
    const $documentOn = $(document);
    const $windowOn = $(window);
  
    $documentOn.ready( function() {
  
       /* ================================
       Mobile Menu Js Start
    ================================ */
    
    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "1199",
        meanExpand: ['<i class="far fa-plus"></i>'],
    });
    
     /* ================================
       Sidebar Toggle Js Start
    ================================ */

      $(".offcanvas__close,.offcanvas__overlay").on("click", function () {
        $(".offcanvas__info").removeClass("info-open");
        $(".offcanvas__overlay").removeClass("overlay-open");
      });
      $(".sidebar__toggle").on("click", function () {
        $(".offcanvas__info").addClass("info-open");
        $(".offcanvas__overlay").addClass("overlay-open");
      });
      
       /* ================================
       Body Overlay Js Start
    ================================ */

      $(".body-overlay").on("click", function () {
        $(".offcanvas__area").removeClass("offcanvas-opened");
        $(".df-search-area").removeClass("opened");
        $(".body-overlay").removeClass("opened");
      });
  
      /* ================================
       Sticky Header Js Start
    ================================ */

      $windowOn.on("scroll", function () {
        if ($(this).scrollTop() > 250) {
          $("#header-sticky").addClass("sticky");
        } else {
          $("#header-sticky").removeClass("sticky");
        }
      });     
      
    //>> Scrolldown Start <<//
    $("#scrollDown").on("click", function () {
        setTimeout(function () {
            $("html, body").animate({ scrollTop: "+=1000px" }, "slow");
        }, 1000);
    });
      
       /* ================================
       Video & Image Popup Js Start
    ================================ */

      $(".img-popup").magnificPopup({
        type: "image",
        gallery: {
          enabled: true,
        },
      });

      $(".video-popup").magnificPopup({
        type: "iframe",
        callbacks: {},
      });
  
      /* ================================
       Counterup Js Start
    ================================ */

      $(".count").counterUp({
        delay: 15,
        time: 4000,
      });
  
      /* ================================
       Wow Animation Js Start
    ================================ */

      new WOW().init();
  
      /* ================================
       Nice Select Js Start
    ================================ */

    if ($('.single-select').length) {
        $('.single-select').niceSelect();
    }


       //>> Brand Slider Start <<//
      if($('.brand-slider').length > 0) {
        const brandSlider = new Swiper(".brand-slider", {
            spaceBetween: 30,
            speed: 1300,
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
          
            breakpoints: {
                1399: {
                    slidesPerView: 6,
                },
                1199: {
                    slidesPerView: 5.1,
                },
                991: {
                    slidesPerView: 4.3,
                },
                767: {
                    slidesPerView: 3.4,
                },
                575: {
                    slidesPerView: 2.2,
                },
                0: {
                    slidesPerView: 1.5,
                },
            },
        });
      }

    //>> Banner Slider Start <<//
      if($('.banner-active').length > 0) {
            const bannerActive = new Swiper(".banner-active", {
                speed:1500,
                loop: true,
                slidesPerView: 1,
                effect:'fade',
                autoplay: {
                    delay: 3000,         
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,  
                },
               navigation: {
					prevEl: ".array-next",
					nextEl: ".array-prev",
				},
            });
        }

        //>> Service Slider Start <<//
      if($('.service-slider-4').length > 0) {
        const serviceSlider4 = new Swiper(".service-slider-4", {
            spaceBetween: 30,
            speed: 1300,
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
          
            breakpoints: {
                1399: {
                    slidesPerView: 4,
                },
                1199: {
                    slidesPerView: 3.1,
                },
                991: {
                    slidesPerView: 2.5,
                },
                767: {
                    slidesPerView: 1.9,
                },
                575: {
                    slidesPerView: 1.2,
                },
                0: {
                    slidesPerView: 1.2,
                },
            },
        });
      }

      if ($(".service-three-slider").length > 0) {
            const serviceThreeSlider = new Swiper(".service-three-slider", {
                spaceBetween: 30,
                speed: 1300,
                loop: true,
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                },
                navigation: {
                    nextEl: ".array-prev",
                    prevEl: ".array-next",
                },
                breakpoints: {
                    1199: {
                        slidesPerView: 3,
                    },
                    991: {
                        slidesPerView: 2,
                    },
                    767: {
                        slidesPerView: 2,
                    },
                    575: {
                        slidesPerView: 1,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                },
            });
        }

       //>> Project Slider Start <<//
      if($('.project-slider').length > 0) {
        const projectSlider = new Swiper(".project-slider", {
            spaceBetween: 30,
            speed: 1300,
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            navigation: {
                prevEl: ".array-prev",
                nextEl: ".array-next",
            },
            breakpoints: {
                1199: {
                    slidesPerView: 5,
                },
                991: {
                    slidesPerView: 3,
                },
                767: {
                    slidesPerView: 2,
                },
                575: {
                    slidesPerView: 2,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });
      }

      if ($(".studies-slider").length > 0) {
            const studiesSlider = new Swiper(".studies-slider", {
                speed: 1300,
                loop: true,
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                },
                navigation: {
                    prevEl: ".array-prev",
                    nextEl: ".array-next",
                },
                breakpoints: {
                    1499: {
                        slidesPerView: 3.5,
                        spaceBetween: 64,
                    },
                    991: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    767: {
                        slidesPerView: 2,
                        spaceBetween: 24,
                    },
                    575: {
                        slidesPerView: 2,
                        spaceBetween: 18,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                },
            });
        }

        if($('.project-feature-slider').length > 0) {
        const projectFeatureSlider = new Swiper(".project-feature-slider", {
            spaceBetween: 0,
            speed: 1300,
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            navigation: {
               prevEl: ".array-prev",
                nextEl: ".array-next",
            },
            breakpoints: {
                1199: {
                    slidesPerView: 4,
                },
                991: {
                    slidesPerView: 3.2,
                },
                767: {
                    slidesPerView: 2.3,
                },
                575: {
                    slidesPerView: 1.5,
                },
                0: {
                    slidesPerView: 1.2,
                },
            },
        });
      }
        
       //>> News Slider Start <<//
      if($('.news-slider').length > 0) {
        const newsSlider = new Swiper(".news-slider", {
            spaceBetween: 30,
            speed: 1300,
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            navigation: {
                prevEl: ".array-prev",
                nextEl: ".array-next",
            },
            breakpoints: {
                1199: {
                    slidesPerView: 2,
                },
                991: {
                    slidesPerView: 2,
                },
                767: {
                    slidesPerView: 2,
                },
                575: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });
      }

    //>> Testimonial Slider Start <<//
      if($('.testimonial-slider').length > 0) {
        const testimonialSlider = new Swiper(".testimonial-slider", {
            spaceBetween: 30,
            speed: 1300,
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
           navigation: {
                prevEl: ".array-prev",
                nextEl: ".array-next",
            },
            breakpoints: {
                1199: {
                    slidesPerView: 2,
                },
                991: {
                    slidesPerView: 1,
                },
                767: {
                    slidesPerView: 1,
                },
                575: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });
      }

      if($('.testimonial-slider-4').length > 0) {
        const testimonialSlider4 = new Swiper(".testimonial-slider-4", {
            spaceBetween: 30,
            speed: 1500,
            loop: true,
            slidesPerView: 1,
            effect: "cube",
            grabCursor: true,
            cubeEffect: {
                shadow: false,
                slideShadows: false,
                shadowOffset: 20,
                shadowScale: 0.94,
            },
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            navigation: {
                prevEl: ".array-prev",
                nextEl: ".array-next",
            },
             pagination: {
                el: ".testi-swiper-pagination",
                type: "progressbar"
            },
        });
      }

    var swiper_thumb = new Swiper(".testimonial-thumb-active2", {
        loop: true,
        spaceBetween: 22,
        slidesPerView: 3,
        direction: "vertical",
        centeredSlides: true,
        // freeMode: true,
        watchSlidesProgress: true,
         navigation: {
            prevEl: ".array-prev",
            nextEl: ".array-next",
        },
    });
    var swiper_content = new Swiper(".testimonial-content-active02", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
            prevEl: ".array-prev",
            nextEl: ".array-next",
        },
        thumbs: {
            swiper: swiper_thumb,
        },
    });

      if($('.testimonial-slider-5').length > 0) {
        const testimonialSlider5 = new Swiper(".testimonial-slider-5", {
            spaceBetween: 30,
            speed: 1300,
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
           navigation: {
                prevEl: ".array-prev",
                nextEl: ".array-next",
            },
             pagination: {
                el: ".testi-swiper-pagination",
                type: "progressbar"
            },
        });
      }

      //testimonial with thumb-slider
      var swiper_thumb= new Swiper(".testimonial-thumb-active", {
        loop: true,
        // spaceBetween: 10,
        slidesPerView: 3,
        centeredSlides: true,
        // freeMode: true,
        watchSlidesProgress: true,
         navigation: {
            prevEl: ".array-prev",
            nextEl: ".array-next",
        },
      });
      var swiper_content = new Swiper(".testimonial-content-active", {
        loop: true,
        spaceBetween: 10,
       navigation: {
            prevEl: ".array-prev",
            nextEl: ".array-next",
        },
        thumbs: {
          swiper: swiper_thumb,
        },
      });

       //>> Project Hover Image Show Slider Start <<//
        const projectWrapperItems5 = document.querySelectorAll(".project-wrapper-items-5");

        function followImageCursor(event, projectWrapperItems5) {
            const contentBox = projectWrapperItems5.getBoundingClientRect();
            const dx = event.clientX - contentBox.x;
            const dy = event.clientY - contentBox.y;
            projectWrapperItems5.children[2].style.transform = `translate(${dx}px, ${dy}px) rotate(0)`;
        }
        
        projectWrapperItems5.forEach((item, i) => {
            item.addEventListener("mousemove", (event) => {
                setInterval(followImageCursor(event, item), 1000);
            });
        });

      //>> Hero-Image Slider Start <<//
       if($('.hero-image-slider').length > 0) {
            const heroImageSlider = new Swiper(".hero-image-slider", {
                spaceBetween: 30,
                speed: 2000,
                loop: true,
                 pagination: {
                    el: ".dot",
                    clickable: true,
                },
                    autoplay: {
                    delay: 1,
                    disableOnInteraction: true,
                },
            });
        }

        //>> Hero-1 Slider Start <<//
         const sliderActive2 = ".hero-slider";
         const sliderInit2 = new Swiper(sliderActive2, {
             loop: true,
             slidesPerView: 1,
             effect: "fade",
             speed: 3000,
             autoplay: {
                 delay: 3000,
                 disableOnInteraction: false,
             },
             navigation: {
                nextEl: ".array-prev",
                prevEl: ".array-next",
            },
             pagination: {
                 el: ".dot",
                 clickable: true,
             },
         });
 
        function animated_swiper(selector, init) {
            const animated = function animated() {
                $(selector + " [data-animation]").each(function () {
                    let anim = $(this).data("animation");
                    let delay = $(this).data("delay");
                    let duration = $(this).data("duration");
                    $(this)
                        .removeClass("anim" + anim)
                        .addClass(anim + " animated")
                        .css({
                            webkitAnimationDelay: delay,
                            animationDelay: delay,
                            webkitAnimationDuration: duration,
                            animationDuration: duration,
                        })
                        .one("animationend", function () {
                            $(this).removeClass(anim + " animated");
                        });
                });
            };
            animated();
            init.on("slideChange", function () {
                $(sliderActive2 + " [data-animation]").removeClass("animated");
            });
            init.on("slideChange", animated);
        }
        animated_swiper(sliderActive2, sliderInit2);

         /* ================================
        Quantity Increment/Decrement Js Start
    ================================ */
        const quantityButtons = document.querySelectorAll(".quantityIncrement, .quantityDecrement");
        if (quantityButtons.length) {
            quantityButtons.forEach((button) => {
                button.addEventListener("click", function () {
                    const input = button.parentElement.querySelector("input");
                    let value = parseInt(input.value, 10) || 0;

                    if (button.classList.contains("quantityIncrement")) {
                        input.value = value + 1;
                    } else if (button.classList.contains("quantityDecrement") && value > 1) {
                        input.value = value - 1;
                    }
                });
            });
        }
    
    
     /* ================================
       Payment Method Update Js Start
    ================================ */

    function updatePaymentMethod() {
        let paymentMethod = $("input[name='pay-method']:checked").val();
        $(".payment").html(paymentMethod);
    }

    // Initial load
    updatePaymentMethod();

    // On click of radio option
    $(".checkout-radio-single input[name='pay-method']").on("change", function () {
        updatePaymentMethod();
    });

     /* ================================
       Additional Quantity Controls Js Start
    ================================ */

    const inputs = document.querySelectorAll('#qty, #qty2, #qty3');
    const btnminus = document.querySelectorAll('.qtyminus');
    const btnplus = document.querySelectorAll('.qtyplus');

    if (inputs.length > 0 && btnminus.length > 0 && btnplus.length > 0) {

        inputs.forEach(function(input, index) {
            const min = Number(input.getAttribute('min'));
            const max = Number(input.getAttribute('max'));
            const step = Number(input.getAttribute('step'));

            function qtyminus(e) {
                const current = Number(input.value);
                const newval = (current - step);
                if (newval < min) {
                    newval = min;
                } else if (newval > max) {
                    newval = max;
                }
                input.value = Number(newval);
                e.preventDefault();
            }

            function qtyplus(e) {
                const current = Number(input.value);
                const newval = (current + step);
                if (newval > max) newval = max;
                input.value = Number(newval);
                e.preventDefault();
            }

            btnminus[index].addEventListener('click', qtyminus);
            btnplus[index].addEventListener('click', qtyplus);
        });
    }

     /* ================================
         Search Popup Toggle Js Start
      ================================ */
  
      if ($(".search-toggler").length) {
          $(".search-toggler").on("click", function(e) {
              e.preventDefault();
              $(".search-popup").toggleClass("active");
              $("body").toggleClass("locked");
          });
      }

      /* ================================
       Mouse Cursor Animation Js Start
    ================================ */

    if ($(".mouseCursor").length > 0) {
        function itCursor() {
            var myCursor = jQuery(".mouseCursor");
            if (myCursor.length) {
                if ($("body")) {
                    const e = document.querySelector(".cursor-inner"),
                        t = document.querySelector(".cursor-outer");
                    let n,
                        i = 0,
                        o = !1;
                    (window.onmousemove = function(s) {
                        o ||
                            (t.style.transform =
                                "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                            (e.style.transform =
                                "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                            (n = s.clientY),
                            (i = s.clientX);
                    }),
                    $("body").on(
                            "mouseenter",
                            "button, a, .cursor-pointer",
                            function() {
                                e.classList.add("cursor-hover"),
                                    t.classList.add("cursor-hover");
                            }
                        ),
                        $("body").on(
                            "mouseleave",
                            "button, a, .cursor-pointer",
                            function() {
                                ($(this).is("a", "button") &&
                                    $(this).closest(".cursor-pointer").length) ||
                                (e.classList.remove("cursor-hover"),
                                    t.classList.remove("cursor-hover"));
                            }
                        ),
                        (e.style.visibility = "visible"),
                        (t.style.visibility = "visible");
                }
            }
        }
        itCursor();
      }

        /* ================================
       Back To Top Button Js Start
    ================================ */
	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 20) {
			$('#back-top').addClass('show');
		} else {
			$('#back-top').removeClass('show');
		}
	});

	// Smooth scroll to top on click
	$(document).on('click', '#back-top', function (e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: 0 }, 800);
	});
		

		// Smooth scroll to top on click
		$(document).on('click', '#back-top', function (e) {
			e.preventDefault();
			$('html, body').animate({ scrollTop: 0 }, 800);
		});
      
       /* ================================
        Section Title Animation  Js Start
      ================================ */
      
    if ($(".tv_hero_title").length) {
        gsap.registerPlugin(SplitText);

        $(".tv_hero_title").each(function () {
            var $el = $(this);

            // Split text
            var split = new SplitText($el, {
                type: "lines,words,chars",
                linesClass: "split-line"
            });

            gsap.set($el, { perspective: 400 });

            // Initial states
            if ($el.hasClass("hero_title_1")) {
                gsap.set(split.chars, {
                    x: 100,
                    opacity: 0
                });
            }
            if ($el.hasClass("hero_title_2")) {
                gsap.set(split.chars, {
                    y: 100,
                    opacity: 0
                });
            }
            if ($el.hasClass("hero_title_3")) {
                gsap.set(split.chars, {
                    y: 100,
                    scaleY: 0,
                    opacity: 0,
                    rotationX: 15
                });
            }

            // Animation
            gsap.to(split.chars, {
                scrollTrigger: {
                    trigger: $el,
                    start: "top 90%",
                    toggleActions: "play reverse play reverse",
                    markers: false
                },
                x: 0,
                y: 0,
                scaleX: 1,
                scaleY: 1,
                opacity: 1,
                duration: 1,
                stagger: 0.05,
                rotationX: 15,
                delay: 0.1,
                ease: "power3.inOut"
            });
        });
    }

    

     // circle-progress
        $(".circle-bar").loading();

    }); // End Document Ready Function

     //>> Prealoader Start <<//
    function loader() {
        $(window).on('load', function() {
            // Animate loader off screen
            $(".preloader").addClass('loaded');                    
            $(".preloader").delay(600).fadeOut();                       
        });
    }
    loader();

     /* ================================
        Price Range Slider Js Start
        ================================ */
    document.addEventListener("DOMContentLoaded", function () {
        const minSlider = document.getElementById("min-slider");
        const maxSlider = document.getElementById("max-slider");
        const amount = document.getElementById("amount");
    
        // Exit early if essential elements are missing
        if (!minSlider || !maxSlider || !amount) return;
    
        function updateAmount() {
            let minValue = parseInt(minSlider.value, 10);
            let maxValue = parseInt(maxSlider.value, 10);
    
            // Swap values if min is greater than max
            if (minValue > maxValue) {
                [minValue, maxValue] = [maxValue, minValue];
                minSlider.value = minValue;
                maxSlider.value = maxValue;
            }
    
            // Update amount input
            amount.value = `$${minValue} - $${maxValue}`;
    
            // Calculate percentages for gradient
            const minPercent = ((minValue - minSlider.min) / (minSlider.max - minSlider.min)) * 100;
            const maxPercent = ((maxValue - maxSlider.min) / (maxSlider.max - maxSlider.min)) * 100;
    
            const trackStyle = `linear-gradient(to right, #063232 ${minPercent}%, #99A537 ${minPercent}%, #99A537 ${maxPercent}%, #063232 ${maxPercent}%)`;
    
            minSlider.style.background = trackStyle;
            maxSlider.style.background = trackStyle;
        }
    
        // Initialize on page load
        updateAmount();
    
        // Add event listeners
        minSlider.addEventListener("input", updateAmount);
        maxSlider.addEventListener("input", updateAmount);
    });
        


       $.fn.loading = function() {
        const DEFAULTS = {
            backgroundColor: '#b3cef6',
            progressColor: '#4b86db',
            percent: 75,
            duration: 2000
        };

        $(this).each(function() {
            const $target = $(this);

            const opts = {
                backgroundColor: $target.data('color') ? $target.data('color').split(',')[0] : DEFAULTS.backgroundColor,
                progressColor: $target.data('color') ? $target.data('color').split(',')[1] : DEFAULTS.progressColor,
                percent: $target.data('percent') ? $target.data('percent') : DEFAULTS.percent,
                duration: $target.data('duration') ? $target.data('duration') : DEFAULTS.duration
            };
            // console.log(opts);

            $target.append('<div class="background"></div><div class="rotate"></div><div class="left"></div><div class="right"></div><div class=""><span>' + opts.percent + '%</span></div>');

            $target.find('.background').css('background-color', opts.backgroundColor);
            $target.find('.left').css('background-color', opts.backgroundColor);
            $target.find('.rotate').css('background-color', opts.progressColor);
            $target.find('.right').css('background-color', opts.progressColor);

            const $rotate = $target.find('.rotate');
            setTimeout(function() {
                $rotate.css({
                    'transition': 'transform ' + opts.duration + 'ms linear',
                    'transform': 'rotate(' + opts.percent * 3.6 + 'deg)'
                });
            }, 1);

            if (opts.percent > 50) {
                let animationRight = 'toggle ' + (opts.duration / opts.percent * 50) + 'ms step-end';
                let animationLeft = 'toggle ' + (opts.duration / opts.percent * 50) + 'ms step-start';
                $target.find('.right').css({
                    animation: animationRight,
                    opacity: 1
                });
                $target.find('.left').css({
                    animation: animationLeft,
                    opacity: 0
                });
            }
        });
    }
    
    
    // loader();
  
  })(jQuery); // End jQuery