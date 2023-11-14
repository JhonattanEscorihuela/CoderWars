function sumTwoSmallestNumbers(numbers) {
    numbers = numbers.sort((a, b) => { return a - b });
    return numbers[0] + numbers[1];

}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));