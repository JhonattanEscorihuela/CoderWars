function squareDigits(num) {
  num = num.toString().split("");

  return parseInt(num.map(n => {
    return parseInt(n) ** 2
  }).join(""));


}

console.log(squareDigits(9119));