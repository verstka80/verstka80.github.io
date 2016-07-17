$(document).ready(function() {
    
    
    
    // запускаем Magnific Popup //
    // прописываем такой класс, как в теге a
    $('.popup').magnificPopup({type:'image'});
    
    // для всплывающих форм, в теге а прописываем класс popup_c 
    $('.popup_c').magnificPopup();
    
    
   
    
    
    // глобально запускаем stellar //
    $.stellar({
        responsive: true,
        horizontalOffset: 40,
        verticalOffset: 150
    });
    
        
    // глобально запускаем carousel //
    $('.carousel').owlCarousel({
        loop : true,
        responsive : {
    // breakpoint from 0 up
            0 : {
                items : 1,
                nav : true
                }
        },
    // убираем owl-prev, owl-next //
        navText : ""
    });
    
    
    function wResize() {
		$("header").css("min-height", $(window).height());
	};
	wResize();
	$(window).resize(function() {
		wResize()
	});
    
    
   
   // ТАБЫ top_phone 
    
      $(".top_phone .tab_item").not(":first").hide();
$(".top_phone .tabs .tab").click(function() {
	$(".top_phone .tabs .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".top_phone .tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active"); 
    
    
    // ТАБЫ tabs_header
       
     $(".tabs_header .tab_item").not(":first").hide();
$(".tabs_header .wrapper .tab").click(function() {
	$(".tabs_header .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tabs_header .tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");
    
   
    
   // ТАБЫ s_contacts
    
      $(".s_contacts .tab_item").not(":first").hide();
$(".s_contacts .tabs .tab").click(function() {
	$(".s_contacts .tabs .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".s_contacts .tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");
 
    
// ТАБЫ s_footer 
    
      $(".s_footer_tabs .tab_item").not(":first").hide();
$(".s_footer_tabs .tabs .tab").click(function() {
	$(".s_footer_tabs .tabs .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".s_footer_tabs .tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");
    
    
    
	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

    
    
    $("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#form").trigger("reset");
		});
		return false;
	});
    
    
    
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function(e) {
        var th = $(this) 
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				var magnificPopup = $.magnificPopup.instance; 
                // save instance in magnificPopup variable
                magnificPopup.close(); 
                // Close popup that is currently opened
                th.trigger("reset")
			}, 1000);
		});
        return false;
	});
	
});


$(window).load(function() {
    
    //PRELOADER
    $(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
    
    
    // Обязательно подключить waypoints.min.js //
    $(".top_header h2").animated("fadeInDown", "fadeInUp");
    
    $(".top_header h1").animated("fadeInDown", "fadeInUp");
    
    $(".tabs_header .wrapper").animated("flipInY", "flipOutY");
    
    $(".s_profi .profi_item").animated("fadeInRight", "fadeOutRight");
    
    $(".s_back h3").animated("fadeIn", "fadeOut");
    
    $(".s_footer").animated("fadeIn", "fadeOut");
    
    $(".s_contacts").animated("zoomIn", "zoomOut");
    
    $("#hidden_form").animated("zoomIn", "zoomIn");
    
   
    
    
    
});
