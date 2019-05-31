let choice
$("li").click(function(){
  choice = $(this).text()
  $("input").val(choice)
})

$("button").click(function(){
  const list = ($("ul li").toArray());
  const randomNum = Math.floor(Math.random() * list.length);
  const randomItem = list[randomNum].innerText
  console.log(randomItem);

  switch (choice) {
    case "Rock":
      if (randomItem === "Rock") {
        alert("TIE")
      } else if (randomItem === "Paper") {
        alert("Paper wins from Rock")
      } else {
        alert("Rock wins from Scissors")
      }
      break;
    case "Paper":
      if (randomItem === "Rock") {
        alert("Paper wins from Rock")
      } else if (randomItem === "Paper") {
        alert("TIE")
      } else {
        alert("Scissors wins from Paper")
      }
      break;
    case "Scissors":
      if (randomItem === "Rock") {
        alert("Rock wins from Scissors")
      } else if (randomItem === "Paper") {
        alert("Scissors wins from Paper")
      } else {
        alert("TIE")
      }
}
})





//https://snipplr.com/view/71786/pick-a-random-element-with-jquery/
