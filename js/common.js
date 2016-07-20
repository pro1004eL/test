$(function() {

	//SVG Fallback
	//if(!Modernizr.svg) {
	//	$("img[src*='svg']").attr("src", function() {
	//		return $(this).attr("src").replace(".svg", ".png");
	//	});
	//};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	// stop onclick image
	$("img, a").on("dragstart", function(event) { event.preventDefault(); });


	// btn_mnu (hamburger)
		$('.menu-trigger').on('click', function () {
			return $(this).toggleClass('active');
		});

		$('.menu-trigger').click(function(){
			$('.navi').slideToggle();
		});
	
	// при клике на ссылку меню сворачиваеться
	$(".navi li a").click(function() {
		$(".navi").hide();	
		$(".menu-trigger").toggleClass("active");
	});

	// переходы меджу слайдми
  $('#slider').nivoSlider({
  		effect: 'fold',
  		slices: 15, 
  		pauseOnHover : true,
  		controlNav : false,
  		animSpeed : 500,
  		pauseTime : 4000,
  		prevText :  " ",
  		nextText :  " ",
  }); 

  // magnific-popup 
	$('.mfp-gall').magnificPopup({
		mainClass: 'mfp-zoom-in',
		type: 'image',
		tLoading: '',
		gallery:{
			enabled: true,
		},
		removalDelay: 300,
		callbacks: {
			beforeChange: function() {
				this.items[0].src = this.items[0].src + '?=' + Math.random(); 
			},
			open: function() {
				$.magnificPopup.instance.next = function() {
					var self = this;
					self.wrap.removeClass('mfp-image-loaded');
					setTimeout(function() { $.magnificPopup.proto.next.call(self); }, 120);
				}
				$.magnificPopup.instance.prev = function() {
					var self = this;
					self.wrap.removeClass('mfp-image-loaded');
					setTimeout(function() { $.magnificPopup.proto.prev.call(self); }, 120);
				}
			},
			imageLoadComplete: function() { 
				var self = this;
				setTimeout(function() { self.wrap.addClass('mfp-image-loaded'); }, 16);
			}
		}
	})


	
}); //end ready




$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
