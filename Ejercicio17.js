function permuteUnique(str) {
    const permutations = [];
  
    function generatePermutations(current, remaining) {
      if (remaining.length === 0) {
        permutations.push(current);
      } else {
        const usedChars = {};
        for (let i = 0; i < remaining.length; i++) {
          const char = remaining[i];
          if (!usedChars[char]) {
            usedChars[char] = true;
            const newCurrent = current + char;
            const newRemaining = remaining.slice(0, i) + remaining.slice(i + 1);
            generatePermutations(newCurrent, newRemaining);
          }
        }
      }
    }
  
    generatePermutations('', str);
    return permutations;
  }
  
  console.log(permuteUnique('a')); // ['a']
  console.log(permuteUnique('ab')); // ['ab', 'ba']
  console.log(permuteUnique('abc')); // ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
  

