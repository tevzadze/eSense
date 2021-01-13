$(function() {


	let scillsOwl = $('.skils-carousel')
	let owlToggle = false
	if(window.innerWidth > 768) {
		owlToggle = true
	}
	// console.log()
	if (owlToggle) {
			scillsOwl.owlCarousel({
	        loop: false,

	        nav: false,
	        dots: false,
	        items: 3,
	        responsive: {
	            0: {
	                items: 1
	            },
	            600: {
	                items: 3
	            },
	            1000: {
	                items: 3
	            }
	        }
	    })
	}

    
    let feedOwl = $('.feedback-carousel')
    feedOwl.owlCarousel({
        loop: false,
        nav: false,
        dots: true,
        items: 2,
        dotsContainer: '.custom-dots',
        responsive: {
            0: {
                items: 1,
                margin:20,
    			autoHeight:true
            },
            768: {
                items: 2,
                margin: 0,
                autoHeight: false
            }
        }
    })

    $('.custom-dots .dot').click(function() {
        feedOwl.trigger('to.owl.carousel', [$(this).index(), 300]);
    });

    $('.prev-button').click(function() {
        feedOwl.trigger('prev.owl.carousel');
    })

    $('.next-button').click(function() {
        feedOwl.trigger('next.owl.carousel');
    })

    //popup
    let popup = $('.popup-with-move-anim')
    popup.magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'hidden',

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-slide-bottom'
    });

    // popup.open();

    //waiting-popup
    function openPopup() {
        $.magnificPopup.open({
            items: {
                src: '.waiting',
            },
            mainClass: 'my-mfp-slide-bottom'
        });
    }
    setTimeout(openPopup, 30000)

    function leavepopup() {
        $.magnificPopup.open({
            items: {
                src: '.leaving',
            },
            mainClass: 'my-mfp-slide-bottom'
        });

    }

    function addEvent(obj, evt, fn) {
        if (obj.addEventListener) {
            obj.addEventListener(evt, fn, false);
        } else if (obj.attachEvent) {
            obj.attachEvent("on" + evt, fn);
        }
    }
    addEvent(window, "load", function(e) {
        addEvent(document, "mouseout", function(e) {
            e = e ? e : window.event;
            var from = e.relatedTarget || e.toElement;
            if (!from || from.nodeName == "HTML") {
                leavepopup();
            }
        });
    });


    let header = document.querySelector('header')
    let body = document.querySelector('body')
    window.addEventListener('scroll', function() {
        let bodyPosition = body.getBoundingClientRect()
        if (bodyPosition.top < -130 && header.classList.contains('scrolled')) {} else if (bodyPosition.top < -130) {
            header.classList.add('scrolled')
        } else if (bodyPosition.top > -130 && header.classList.contains('scrolled')) {
            header.classList.remove('scrolled')
        }
    })
    $("a[rel='m_PageScroll2id']").mPageScroll2id({
    	offset: header.getBoundingClientRect().height
    });

    //menu
    let burger = document.querySelector('.burger')
    let menu = document.querySelector('.mobile-menu')
    burger.addEventListener('click', function () {
    	this.classList.toggle('active');
    	menu.classList.toggle('active')
    })

    menuItems = menu.querySelectorAll('a')

    for(let i = 0; i< menuItems.length; i++) {
    	menuItems[i].addEventListener('click', function () {
    		burger.classList.remove('active');
    		menu.classList.remove('active')
    	})
    }
});