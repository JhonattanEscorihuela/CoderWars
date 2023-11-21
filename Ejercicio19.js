function scramble(str1, str2) {
    const charCount = {};

    for (const char of str1) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (const char of str2) {
        if (!charCount[char]) {
            return false;
        }
        charCount[char]--;
    }

    return true;

}

console.log(scramble('rkqodlw', 'world'));
console.log(scramble('katas', 'steak'));