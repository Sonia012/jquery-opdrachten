// $(".color").each(function(){
  $(".color").hover(function(){
    $("#text").css("color", this.id)
    },
    function(){
    $("#text").css("color", "black")
    }
)
// })
