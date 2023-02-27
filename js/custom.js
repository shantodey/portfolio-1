// preloder







(function($) { "use strict";

		// back to top
	$(document).ready(function(){"use strict";
	
		//Scroll back to top
		
		var progressPath = document.querySelector('.progress-wrap path');
		var pathLength = progressPath.getTotalLength();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
		progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
		progressPath.style.strokeDashoffset = pathLength;
		progressPath.getBoundingClientRect();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
		var updateProgress = function () {
			var scroll = $(window).scrollTop();
			var height = $(document).height() - $(window).height();
			var progress = pathLength - (scroll * pathLength / height);
			progressPath.style.strokeDashoffset = progress;
		}
		updateProgress();
		$(window).scroll(updateProgress);	
		var offset = 50;
		var duration = 550;
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.progress-wrap').addClass('active-progress');
			} else {
				jQuery('.progress-wrap').removeClass('active-progress');
			}
		});				
		jQuery('.progress-wrap').on('click', function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		})
		
		
	});
	
})(jQuery); 

// navber add/remove class 
const element = document.getElementsByClassName("navbar");

window.addEventListener("scroll", function() {
  if (window.scrollY > 400) {
    element[0].classList.add("my-class");
  } else {
    element[0].classList.remove("my-class");
  }
});

// navber add/remove class 

var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
 
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 0,
 
  thumbs: {
    swiper: swiper,
  },
});



new WOW().init();




 // tabbed content
    // http://www.entheosweb.com/tutorials/css/tabs.asp
    $(".tab_content").hide();
    $(".tab_content:first").show();

  /* if in tab mode */
    $("ul.tabs li").click(function() {
		
      $(".tab_content").hide();
      var activeTab = $(this).attr("rel"); 
      $("#"+activeTab).fadeIn();		
		
      $("ul.tabs li").removeClass("active");
      $(this).addClass("active");

	  $(".tab_drawer_heading").removeClass("d_active");
	  $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
	  
    });
	/* if in drawer mode */
	$(".tab_drawer_heading").click(function() {
      
      $(".tab_content").hide();
      var d_activeTab = $(this).attr("rel"); 
      $("#"+d_activeTab).fadeIn();
	  
	  $(".tab_drawer_heading").removeClass("d_active");
      $(this).addClass("d_active");
	  
	  $("ul.tabs li").removeClass("active");
	  $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
    });
	
	
	/* Extra class "tab_last" 
	   to add border to right side
	   of last tab */
	$('ul.tabs li').last().addClass("tab_last");
	





/* No plugin required just $  */
var progressnumber = 76; // add percentage (0-100)

var convertedprogress = 250 - (progressnumber * 250) / 100;
$("#progressbar").css('stroke-dashoffset', ' ' + convertedprogress + '%');
$("#percentageNumber").html(' ' + progressnumber + '%');

/* fix for 0% */
if(progressnumber == 0) {
    $("#progressbar").css('stroke-dashoffset', '251%');
}

//for colours - remove below if you want one color-
if (progressnumber <= 33) {
    $("#progressbar").css('stroke', 'rgb(190 183 28');
    $("#percentageNumber").css('color', '#f50303');
} else if (progressnumber >= 34 && progressnumber <= 50) {
    $("#progressbar").css('stroke', 'rgb(190 183 28');
    $("#percentageNumber").css('color', '#ffc107');
} else if (progressnumber >= 51 && progressnumber <= 75) {
    $("#progressbar").css('stroke', 'rgb(190 183 28');
    $("#percentageNumber").css('color', '#ffc107');
} else {
    $("#progressbar").css('stroke', 'rgb(190 183 28');
    $("#percentageNumber").css('color', '#4caf50');
}




// light box

    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true,
      
    })

   



    // animated footer



   


    $(function () {

      var wrapper = $('.wrapper');
      var windowObj = $(window);
    
      function decreaseWrapper () {
        wrapper.addClass('small');
      }
    
      function increaseWrapper () {
        wrapper.removeClass('small');
      }
    
      windowObj.scroll(function () {
        if ( $(this).scrollTop() + $(this).height() > wrapper.outerHeight() ){
          decreaseWrapper();
        } else {
          increaseWrapper();
        }
      });
    
    
      $('html').on('click', '.small', function () {
        $('html, body').animate({
          scrollTop: wrapper.outerHeight() - windowObj.height()
        }, 12000);
        
      });
    
    });
    

    // see-more button

    const seeMoreBtn = document.getElementById("see-more-btn");
    const hiddenDiv = document.getElementById("hidden-div");

    seeMoreBtn.addEventListener("click", function() {
  if (hiddenDiv.style.display === "none") {
    hiddenDiv.style.display = "block";
    seeMoreBtn.innerHTML = "See Less";
  } else {
    hiddenDiv.style.display = "none";
    seeMoreBtn.innerHTML = "See More";
  }
    });

    // see-more button end
	// preloder statr 		
   $(window).on('load', function () {
  setTimeout(function () {
    $('#preloader').fadeOut();
  }, 200);
});
    



    
