function moveZeros(arr) {
    let zeros = arr.filter((element) => element === 0);
    let nonZeros = arr.filter((element) => element !== 0);

    return [...nonZeros, ...zeros];


}

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));