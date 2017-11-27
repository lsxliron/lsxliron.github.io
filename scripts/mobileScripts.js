$(document).ready(function(){
         // Recirect to new portfolio
         window.location.replace('http://liron.io')

	//Create image carousel
	$('.m-scooch').scooch();


	//Make programming projects as clickable links
    $('.programmingProjectsDiv').bind('click',function(){
    	var block = $(this).children()[0];
    	var lnk = block.children[0];
    	lnk.click()
    });


    //Anchor tags scorll
    $('#getStartedBtn').bind('click',function(){
		$('body').animate({
				scrollTop:  $('#aboutMePage').offset().top}, 1000)
	});

	 $('#projectsBtn').bind('click',function(){
		$('body').animate({
				scrollTop:  $('#protfolioPage').offset().top}, 1000)
	});

	 $('#webPortfolioBtn').bind('click',function(){
		$('body').animate({
				scrollTop:  $('#programmingProjects').offset().top}, 1000)
	});

	 $('#programmingProjectsButton').bind('click',function(){
		$('body').animate({
				scrollTop:  $('#contactMePage').offset().top}, 1000)
	});

	 $('#menuButton').sidr({name:'menuSidr', source:'#menuOptions', side:'left', renaming:false, displace:false});



      //Enable swiping- open the menu
	 $(function() {      

      $(window).swipe( {

        swipeRight:function(event, direction, distance, duration, fingerCount, fingerData) {
        	if (event.target.tagName!="IMG")
		          $.sidr('open', 'menuSidr');
        },
        

        swipeLeft:function(event, direction, distance, duration, fingerCount, fingerData) {
          $.sidr('close', 'menuSidr');
        },

        tap:function(event, direction, distance, duration, fingerCount, fingerData) {
          $.sidr('close', 'menuSidr');
        },


      });
      preventDefaultEvents: false;
    });

	 

	 //Anchor tags scroll for sidebar
	 $('#menuSidr > div > nav > ul > a > li').bind('click',function(){
	 	var clicked = $(this).attr('id')
	 	$.sidr('close', 'menuSidr');
	 	switch(clicked) {
	 		
	 		case 'welcomePageLi': 
		 		$('body').animate({scrollTop: $('#welcomePage').offset().top}, 1000);
		 		break;

		 	case 'aboutMeLi':
			 	$('body').animate({scrollTop: $('#aboutMePage').offset().top}, 1000);
		 		break;

	 		case 'portfolioLi':
			 	$('body').animate({scrollTop: $('#protfolioPage').offset().top}, 1000);
		 		break;

		 	case 'projectsLi':
			 	$('body').animate({scrollTop: $('#programmingProjects').offset().top}, 1000);
		 		break;

	 		case 'contactLi':
			 	$('body').animate({scrollTop: $('#contactMePage').offset().top}, 1000);
		 		break;

		 	case 'linksLi':
			 	$('body').animate({scrollTop: $('#profilesPage').offset().top}, 1000);
		 		break;
	 	}
	 }) 
});
