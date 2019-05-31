let getal = 42;
let count = 0;

$("button").click(function(){
  count++
  let input = $("input").val();
  if (input < getal) {
    alert("meer");
  } else if (input > getal) {
    alert("minder");
  } else if (input == getal) {
    alert(`Juist. Aantal pogingen = ${count}`)
  }
  })
