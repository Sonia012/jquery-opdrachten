$("button").click(function(){
  let buttonNumber = this.name;
  let height = $("div").height();
  let color = $("div").css("background-color")
  switch (buttonNumber) {
    case "1":
      if (height > 100) {
        height = 10
      } else {
        height += 10
      }
      $("div").height(height)
      break;
    case "2":
      color = "green";
      $("div").css("background-color", color);
      break;
    case "3":
      color = "black";
      $("div").css("background-color", color);
      break;
    case "4":
      $("div").css("display", "none");
      break;
    case "5":
      $("div").css("display", "block")
  }

  })
