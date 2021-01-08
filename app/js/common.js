$(function() {

	$('.owl-carousel').owlCarousel({
	    loop:false,

	    nav:false,
	    dots:false,
	    items: 4,
	    responsive:{
	        0:{
		            items:1
		        },
		        600:{
		            items:3
		        },
		        1000:{
		            items:4
		        }
		    }
		})

});
