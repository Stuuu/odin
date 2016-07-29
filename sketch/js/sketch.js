$(document).ready(function() {

  for(var x = 0; x < 16; x++) {
        for(var y = 0; y < 16; y++) {
            var unit = $("<div class='unit' id='boxes'></div>");
            unit.appendTo('#container');
    }
  }
  $('.unit').on('mouseover' , function(){
    $(this).addClass("hov");
  });
  $("#ranCol").click(function(){
       $('.unit').on('mouseover' , function(){
         var randomColor = "rgb(" + (Math.floor(Math.random()* (255 -1) +1)) + "," + (Math.floor(Math.random()* (255 -1) +1)) +  "," + (Math.floor(Math.random()* (255 -1) +1)) + ")";
         $(this).css("background-color",randomColor);
     });
  });

  $("#btnSubmit").click(function(){
     $(".unit").remove();
     $(".hov").remove();
     var size = +prompt("Etch-A-Sketch Size?", "Enter any number between 1-150");

     var pixels = 700 / size;
     var highwid = pixels-2;
     var marg = 1;
     for(var x = 0; x < size; x++) {
           for(var y = 0; y < size; y++) {
               var unit = $("<div class='unit' id='boxes'></div>");
               unit.appendTo('#container');
       }
     }
     $(".unit").css("height", highwid);
     $(".unit").css("width", highwid);
     $(".unit").css("margin", marg);
     $('.unit').on('mouseover' , function(){
       $(this).addClass("hov");

     });
  });

});
