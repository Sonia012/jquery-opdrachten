$("button").click(function(){
  const salary = parseFloat($("#salary").val());
  const children = parseFloat($("#children").val());
  const gender = $("select").val();
  let costs = (0.18 + 0.07 + 0.05);
  let newSalary

  if(gender == "female") {
    costs = costs * 0.98;
  }

  if(children === 3) {
    costs = costs * 0.99;
  } else if(children === 4) {
    costs = costs * 0.98;
  }

  newSalary = salary - (salary * costs);
  alert(`Net salary after deduction of costs = ${newSalary} EUR`)
})
