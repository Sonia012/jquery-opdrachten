let count = 0;
$("button").click(function(){
  if ($(this).text() == "+") {
     count++;
   } else {
     count--
   }
   $("input").val(count)
})
