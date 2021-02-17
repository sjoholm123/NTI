$(document).ready(function(){

    $("#datalagring, #examensarbete, #mjukvarudesign, #gip, #mobile, #programmering, #tillampad, #webbtjanster").click(function(){
      $(this).children().css("visibility", "visible");
      $(this).addClass("color");
    });
    $("#datalagring, #examensarbete, #mjukvarudesign, #gip, #mobile, #programmering, #tillampad, #webbtjanster").click(function(){
      $(".text").not(this).children().css("visibility", "hidden");
      $(".text").not(this).removeClass("color");
        });

        $(".text").mouseover(function(){
            $(this).addClass("hover");
        })
        $(".text").mouseout(function(){
            $(this).removeClass("hover");
        })
  });