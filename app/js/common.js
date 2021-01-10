$(function() {

	$('.skils-carousel').owlCarousel({
	    loop:false,

	    nav:false,
	    dots:false,
	    items: 3,
	    responsive:{
	        0:{
		            items:1
		        },
		        600:{
		            items:3
		        },
		        1000:{
		            items:3
		        }
		    }
		})
	let feedOwl = $('.feedback-carousel')
	feedOwl.owlCarousel({
	    loop:false,
	    nav:false,
	    dots:true,
	    items:2,
	    dotsContainer: '.custom-dots',
	    responsive:{
	        0:{
		            items:1
		        },
		        600:{
		            items:3
		        },
		        1000:{
		            items:2
		        }
		    }
		})

	$('.custom-dots .dot').click(function () {
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

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});

	// popup.open();

	//waiting-popup
	function openPopup(){
	$.magnificPopup.open({
	    items: {
	      src: '.waiting',
		    }, 
		    mainClass: 'my-mfp-slide-bottom'
		  });
		}
	setTimeout(openPopup, 30000)

	let header = document.querySelector('header')
	let body = document.querySelector('body')
    window.addEventListener('scroll', function(){
    	let bodyPosition = body.getBoundingClientRect()
    	if (bodyPosition.top < -130 && header.classList.contains('scrolled')) {
    	} else if (bodyPosition.top < -130) {
			header.classList.add('scrolled')
    	} else if (bodyPosition.top > -130 && header.classList.contains('scrolled')){
			header.classList.remove('scrolled')
    	}
    })

    $("a[rel='m_PageScroll2id']").mPageScroll2id({
    	offset: header.getBoundingClientRect().height
    });

});
