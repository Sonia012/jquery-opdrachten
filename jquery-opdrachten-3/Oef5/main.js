$(document).keydown(function(e){
  switch (e.which){
    case 37: //left arrow key
      $("div").animate({left: "-=10"});
      break;
    case 39: //right arrow key
      $("div").animate({left: "+=10"});
      break;
    case 40: //down arrow key
      $("div").animate({top: "+=10"});
      break;
    case 38: //up arrow key
      $("div").animate({top: "-=10"});
  }
})


//http://api.jquery.com/animate/
//https://www.tutorialrepublic.com/codelab.php?topic=faq&file=jquery-move-an-element-using-left-right-up-and-down-arrow-keys
//https://www.w3schools.com/jquery/event_which.asp
//https://www.w3schools.com/jquery/event_keydown.asp
//http://api.jquery.com/keydown/
