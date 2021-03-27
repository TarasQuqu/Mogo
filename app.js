$(function(){
	
	var header =$("#header"),introH = $("#intro").innerHeight(),scrollofset = $(window).scrollTop();
	
	/* Fixed Header */
	
	checkScroll(scrollofset);
	
	$(window).on("scroll",function(){
		scrollofset=$(this).scrollTop();
		
		checkScroll(scrollofset);
		
	});
	
	function checkScroll(){
		scrollofset = $(this).scrollTop();
		
		if(scrollofset >= introH){
			header.addClass("fixed");
		}
		else{
			header.removeClass("fixed");
		}
	}

	/*Smooth scroll*/
	$("[data-scroll]").on("click",function(even){
		event.preventDefault();
		
		var $this=$(this),
		    blockID = $(this).data('scroll'),
			blockOffset = $(blockID).offset().top;
		
		$("#nav a").removeClass("active");
		$this.addClass("active");
		
		$("html,body").animate({
			scrollTop: blockOffset
		},500);
		
	});
	
	/*Nav toggle*/
	$("#nav_toggle").on("click",function(event){
		event.preventDefault();
		
		$(this).toggleClass("active");
		$("#nav").toggleClass("active ");
	});
	
	/* Collapse */
	
	$("[data-collapse]").on("click",function(event){
		event.preventDefault();
		
		var $this=$(this),
			blockId =$this.data('collapse');
		
		
		$this.toggleClass("active");
	})
	
	/* Slider */
	
	$("[data-slider]").slick({
		infinite:true,
		fade:false,
		slidesToShow: 1,
		slidesToScroll:1
	});
	
	
	
	
	
	
});
