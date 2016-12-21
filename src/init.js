$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('.dance-area').height() * Math.random() * 0.8 + 45,
      $('.dance-area').width() * Math.random() * 0.9 + 45,
      Math.random() * 1000
    );
    //window.dancers.push(dancer);

    $('.dance-area').append(dancer.$node);

    $('.dancer:not(.carlton)').on('click', function() {
      // $(this).css({'width': '+=15'});
      $(this).remove();
    });

    $('.carlton').off().on('click', function() {
      $(this).stop(true, true);
      this.originalTop = $(this).css('top');
      this.originalLeft = $(this).css('left');
      $(this).animate({'top': '0px', 'left': '0px', 'width': '+=1900px'}, 2000);
      //$(this).animate({'top': '0px', 'left': '0px'}, 300);
      $(this).animate({'top': this.originalTop, 'left': this.originalLeft, 'width': '-=1900px'}, 300);
    });

  });

  $('.title').on('click', function() {
    $('.dancer').remove();
  });

  // $('.ghost').on('click', function() {
  //   $('.dancer').animate({
  //     opacity: '0.5'
  //   });
  // });

  $('.ghost').on('click', function() {
    $('.dancer').stop(true, true);
    $('.dancer').animate({opacity: 0}, 3000);
    $('.dancer').animate({opacity: 1}, 500);
  });
  
  // Line up code

  $('.lineUp').on('click', function() {
    // $('.dancer').animate({'top': '600px'}, 500);
    
    var totalWidth = parseInt($('body').css('width'));
    var spacing = totalWidth / ($('.dance-area .dancer').length + 1);
    var setHeight = parseInt($('body').css('height')) * 0.6;

    // Iterate through dancers, applying a width
    $('.dancer').each(function(index) {
      $(this).stop(true, true);
      var fromLeft = (spacing * (index + 1)) + 'px';
      var fromTop = setHeight + 'px';
      console.log(fromLeft, totalWidth);
      $(this).animate({'top': fromTop, 'left': fromLeft}, 500);
    });


  });

  $('.title').on('click', function() {
    $('audio').play();
    console.log('Playing the Carlton song!');
  });

});

