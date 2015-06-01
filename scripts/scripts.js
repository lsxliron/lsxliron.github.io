$(document).ready(function(){

	//Naviage to mobile site
	// if (window.navigator.userAgent.toLowerCase().search('mobile.*?')>0)
		// window.location.replace('http://lsxliron.github.io/mobile')

	//Animate scrolling to anchor tags from buttons and menu items
	$('#welcomePageLi').bind('click',function(){
		$('body').animate({scrollTop:  0}, 1000)
	});

	$('#getStartedBtn, #aboutMeLi').bind('click',function(){
		$('body').animate({scrollTop:  $('#aboutMePage').offset().top}, 1000)
	});

	$('#projectsBtn, #portfolioLi').bind('click',function(){
		$('body').animate({scrollTop: $('#protfolioPage').offset().top}, 1000)
	});

	$('#webPortfolioBtn, #projectsLi').bind('click',function(){
		$('body').animate({scrollTop: $('#programmingProjects').offset().top}, 1000)
	});

	$('#programmingProjectsBtn, #contactLi').bind('click',function(){
		$('body').animate({scrollTop: $('#contactMePage').offset().top}, 1000)
	});

	$('#linksLi').bind('click',function(){
		$('body').animate({scrollTop: $('#profilesPage').offset().top}, 1000)
	});


	//Flip images when hover with mouse
	$('.tableImg').hover(function(){
		$(this).transition({rotateX:'180deg', opacity:0});
		$(this).parents('.shaderDiv').transition({rotateX:'180deg'});
		$(this).siblings('.projectLabelDiv').transition({rotateX:'180deg', opacity:1})
	},
		function(){
			$(this).transition({rotateX:'0deg', opacity:1});
			$(this).parents('.shaderDiv').transition({rotateX:'0deg'});
			$(this).siblings('.projectLabelDiv').transition({rotateX:'0deg', opacity:0})
		}
	)

	//Flip images back after carousel is open
	$('.pysaassID').bind('click',function(){
		$(this).children().find('.tableImg').trigger('mouseleave');
		$('#pysaassCarouselBtn').click();

	})

	$('.gobbletID').bind('click',function(){
		$(this).children().find('.tableImg').trigger('mouseleave');
		$('#gobbletCarouselBtn').click();

	})


	//Scale labels when mouse hovers
	$(".descriptionHeader, #contactMeLabel").hover(function(){
		$(this).transition({scale:1.2});
	},
	function(){
		$(this).transition({scale:1});
	});

	//Resume link scaling
	$("#resumeLink").hover(function(){
		$(this).transition({skewX:'30deg'});
	},
	function(){
		$(this).transition({skewX:'0deg'});
	});


	//Rotate profiles icons
	$(".profilesIcons").hover(function(){
		$(this).children().transition({rotate:45});

	},
	function(){
		$(this).children().transition({rotate:0});
	});


	//Change menu button after click
	$('#menuToggle').bind('click',function(e){
		 e.preventDefault();
        $("#wrapper").toggleClass("toggled");
        if ($(this).children()[0].className=='fa fa-caret-left fa')
        	$(this).children()[0].className='fa fa-bars';
        else
        	$(this).children()[0].className='fa fa-caret-left fa';

	})


	//Make the programming projects DIV clickable
	$('.programmingProjectsDiv').click(function(){
		var bq = $(this).children()[0];
		var lnk = bq.children[0];
		lnk.click();
	})

})//END READY

//Web prohect background size
$(window).bind('load', function(){
	$('.shaderDiv').height($('img').height());
	$('.shaderDiv').width($('img').width());
})
