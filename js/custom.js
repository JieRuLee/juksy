$(document).ready(function() {

	// header color change
	
    $(window).on("scroll", function() {
		var scrollDistance = $(window).scrollTop();
		var $header = $(".js-header");
		if (scrollDistance > 1) {
			$header.addClass("header--colored");
		} 
		else {
			$header.removeClass("header--colored");
		}
	})


	var jumbotron = $(window).height()

	$(window).on("scroll", function() {
		var scrollDistance = $(window).scrollTop();
		var $header = $(".js-navbar");
		if (scrollDistance > jumbotron) {
			$header.addClass("page_header");
		} 
		else {
			$header.removeClass("page_header");
		}
	})



	

	$('.owl-carousel').owlCarousel({
		loop:true,
		items: 1,
		navText: [],
		autoplay: true,
		autoplaySpeed: 1000,
		smartSpaeed: 500
	})

	// carousel plugin initialization
	$('.owl-carousel_vidio').owlCarousel({
	    loop:true,
		margin:16,
		nav:true,
		navText:[],
		dots: true,
		autoplay: true,
		autoplaySpeed: 1000,
	    responsive:{
	        0:{
	            items:1
	        },
	        480:{
	            items:2
	        },
	        768:{
	            items:3
	        },
	        1200:{
	            items:3
	        }
	    }
	})
	//  Set caption from card text
	$('.card-deck a').fancybox({
		caption : function( instance, item ) {
		return $(this).parent().find('.card-text').html();
		}
	});
	// 當 input 是 focus 的狀態下
	$(".js-input").focus(function(){
		// 找到 .label-text 元素並加上 .is-active
		$(this).parent().find(".label-text").addClass("is-active");
	})
	// 當 input 是 blur 的狀態下
	$(".js-input").blur(function(){
		// 如果裡面沒有內容
		if($(this).val().length == 0){
			// 找到 .label-text 元素並移除 .is-active
			$(this).parent().find(".label-text").removeClass("is-active");
		}
	})





	


})