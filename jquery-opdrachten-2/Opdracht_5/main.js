$("input").each(function(){
  $(this).focus(function(){
    $(this).css("border", "1px solid green");
  });
  $(this).blur(function(){
    $(this).css("border", "1px solid red")
  })
})
