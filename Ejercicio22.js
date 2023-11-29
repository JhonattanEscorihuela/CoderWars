function nextBigger(n) {
    //your code here
    let nNew = [];

    if (n.toString().split('').length > 3) {
        let ordenar = n.toString().slice(2).split('').sort((a, b) => b - a);
        nNew = [...n.toString().split('').slice(0, 2), ...ordenar]
        nNew = parseInt(nNew.join(''));
    } else {
        nNew = parseInt(n.toString().split('').sort((a, b) => b - a).join(''));
    }

    return nNew === n ? -1 : nNew

}


console.log(nextBigger(12));
console.log(nextBigger(513));
console.log(nextBigger(2017));
console.log(nextBigger(531));
console.log(nextBigger(414));
console.log(nextBigger(144));