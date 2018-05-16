$(function() {
  $(window).scroll(function(event){
      var ypos = $(window).scrollTop();
      var statsPose = $('#stats-container').scrollTop().top;
      if (ypos > 200) {
        setTimeout(function() {
          $('#picsEdited').text("123");
          $('#happyClients').text("345");
          $('#yearsWorked').text("6");
        }, 500);
      }

      if (ypos > statsPose) {
        $('.navbar').addClass("fixed-top");
        }
      })

      var typed = new Typed('.roller', {
    		strings: ['Photo Retoucher/Graphic Designer'],
    		typeSpeed: 40,
    		loop: true,
    		showCursor: false,
    		smartBackspace: true
    	});

})
