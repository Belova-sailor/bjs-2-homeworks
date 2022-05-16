"use strict";
function solveEquation(a, b, c) {
  let arr;
  let d = (b**2 - 4*a*c);

  if (d === 0) {
    let x = (-b)/(2*a);
    arr = [x];
  } else if (d < 0) {
    arr = [];
  } else {
    let x1 = ((-b) + Math.sqrt(d))/(2*a);
    let x2 = ((-b) - Math.sqrt(d))/(2*a);
    arr = [x1, x2];
  };

  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  if (isNaN(percent) || Math.abs(percent) >= 100){
    return(`Параметр "Процентная ставка" содержит неправильное значение "${percent}"`)
  };

  if (isNaN(contribution) || Math.abs(contribution) > Math.abs(amount)) {
    return(`Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`)
  };

  if (isNaN(amount)){
    return(`Параметр "Общая стоимость" содержит неправильное значение "${amount}"`)
  };

  let principal = Math.abs((+amount) - (+contribution)); //тело кредита
  let percentMonth = ((+percent)/12/100);//процентная ставка
  let dateNow = new Date();

  let timeDiff = Math.abs(date.getTime()) - Math.abs(dateNow.getTime());
  let diffDays = Math.round(timeDiff / (1000 * 3600 * 24)); 
  let n = Math.trunc(diffDays/30);
  let amountMonths = principal*(percentMonth + (percentMonth/(((1 + percentMonth)**n) - 1)));// оплата в мес

  totalAmount = ((+contribution) + (amountMonths*n)).toFixed(2);
  
  return totalAmount;
}
