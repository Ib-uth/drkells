/* eslint-env jquery */

jQuery(document).ready(function($){

    //INSERT DATE IN FOOTER
    const footerDate = document.getElementById('footerDate')
    if ( footerDate !== null ) {
        const d = new Date()
        footerDate.textContent = d.getFullYear()
    }

    //MENU TOGGLE
    $('.hamburger').click(function() {
        $(this).toggleClass('active')
        $('body').toggleClass('menu-open')
        $('.hamburger').toggleClass('is-active')
    })
    
    // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('header').outerHeight();
    
    $(window).scroll(function(event){
        didScroll = true;
    });
    
    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);
    
    function hasScrolled() {
        var st = $(this).scrollTop();
        
        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - st) <= delta)
            return;
        
        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            $('header').removeClass('header-down').addClass('header-up');
            $('.artistlogo').removeClass('header-down').addClass('header-up');
            $('.hamburger').removeClass('header-down').addClass('header-up');
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('header').removeClass('header-up').addClass('header-down');
                $('.artistlogo').removeClass('header-up').addClass('header-down');
                $('.hamburger').removeClass('header-up').addClass('header-down');
            }
        }
        
        lastScrollTop = st;
    }
	
	
	
	// PARALLAX
	$(window).on('load', function() {
		
		$( '.parallax-slider' ).attr( 'alt', 'Parallax Image' );
	});
	
	// FEED PHOTOS
	
	window.smemFeedsLoaded = function(contentType) {
		console.log(contentType);
		console.log(window.smemFeeds);
 
		if(contentType === 'artists_data') {
			var data = window.smemFeeds.artists_data;
			//$('.parallax-mirror:nth-child(1) .parallax-slider').attr('src', data.artist_website_framework_image_1.url);
			$('#parallax-1').attr('src', data.artist_website_framework_image_1.url); 
			
			
			//$('.parallax-mirror:nth-child(2) .parallax-slider').attr('src', data.artist_website_framework_image_2.url);
			//$('#parallax-2').attr('data-image-src', data.artist_website_framework_image_2.url); 
			
			//$('.parallax-mirror:nth-child(3) .parallax-slider').attr('src', data.artist_website_framework_image_3.url);
			//$('#parallax-3').attr('data-image-src', data.artist_website_framework_image_3.url); 
			
			//$('#parallax-1').parallax({imageSrc: data.artist_website_framework_image_1.url});
			//$('#parallax-2').parallax({imageSrc: data.artist_website_framework_image_2.url});
			//$('#parallax-3').parallax({imageSrc: data.artist_website_framework_image_3.url});*/
			
			/*$('#parallax-3').parallax({
               speed: .3,
				src: data.artist_website_framework_image_3.url,
			});*/
		}
		
		
			/* PARALLAX */

		
			$('#parallax-1').jarallax({
				imgSrc:data.artist_website_framework_image_1.url,
			  // options here
			});
		
			$('#parallax-2').jarallax({
				imgSrc:data.artist_website_framework_image_2.url,
			  // options here
			});
			$('#parallax-3').jarallax({
				imgSrc:data.artist_website_framework_image_3.url,
			  // options here
			});
			$('#parallax-4').jarallax({
				imgSrc:data.artist_website_framework_image_4.url,
			  // options here
			});
			$('#parallax-5').jarallax({
				imgSrc:data.artist_website_framework_image_5.url,
			  // options here
			});
		
	}
	
	
	


	
	
	
})




window.releasesLayout1Loaded = function() {

}


window.bioLayout1Loaded = function() {

}


window.contactLayout1Loaded = function() {

}