let numero = 62563123;

numero = numero.toString().split("");

numero.sort((a, b) => {
    return b - a
});

numero = numero.join("");
console.log(typeof numero);


console.log(parseInt(numero));

