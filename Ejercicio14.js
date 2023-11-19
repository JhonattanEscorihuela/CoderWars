let solution = (number) => {
    if (number === 0) return 0;
    let out = 0;
    for (let i = 1; i < number; i++) {
        let elemento = i;
        if (elemento % 3 === 0 || elemento % 5 === 0) {
            out += elemento;
        }
    }
    return out;
}

console.log(solution(10));