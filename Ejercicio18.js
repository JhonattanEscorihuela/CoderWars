function longestSlideDown(pyramid) {
    for (let i = pyramid.length - 2; i >= 0; i--) {
        for (let j = 0; j <= i; j++) {
            pyramid[i][j] += Math.max(pyramid[i + 1][j], pyramid[i + 1][j + 1]);
        }
    }
    return pyramid[0][0];

}

console.log(longestSlideDown(
    [[3],
    [7, 4],
    [2, 4, 6],
    [8, 5, 9, 3]]));