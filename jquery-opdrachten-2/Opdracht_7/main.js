$(document).ready(function(){
    /* On click: Enlarge the font (120%) */
$("ol li:nth-child(1)").click(function(){
  $(this).css("font-size", "120%")
})

    /* On click: Decrease the font size (80%) */
$("ol li").eq(1).click(function(){
  $(this).css("font-size", "80%")
})

    /* On click: Bold or normalize the green words */
$("ol li").eq(2).click(function(){
  $(".green").each(function(){
    if($(this).css("font-weight") == "400") {
    $(this).css("font-weight", "bold")
    } else if($(this).css("font-weight") == "700") {
    $(this).css("font-weight", "normal")
    }
  })
})
    /* On click: underline or normalize the words in red */
  $("ol li").eq(3).click(function(){
    $(".red").each(function(){
      if($(this).css("text-decoration-line") == "underline") {
        $(this).css("text-decoration-line", "none")
      } else {
        $(this).css("text-decoration-line", "underline")
      }
    })
  })


    /* On click: Replace the logo with another image */
$("ol li").eq(4).mouseenter(function(){
  $("img").attr("src", "images/koala.jpg")
})

    /* On hover: Display the URL of links in a tooltip when hovering over links */
$("a").hover(function() {
  //let titelText = $(this).attr("href");
  $(this).attr("title", $(this).attr("href"))
})

    /* On click: add "Chapter 1:" before the 1st title h2 and "Chapter 2:" before the 2nd title h2 */
$("ol li").last().click(function(){
  $("h2").eq(0).prepend("Chapter1:");
  $("h2").eq(1).prepend("Chapter2:")
})





});
