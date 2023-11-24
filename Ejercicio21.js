class RomanNumerals {
    static toRoman(num) {
        const romanNums = [
            { value: 1000, numeral: 'M' },
            { value: 900, numeral: 'CM' },
            { value: 500, numeral: 'D' },
            { value: 400, numeral: 'CD' },
            { value: 100, numeral: 'C' },
            { value: 90, numeral: 'XC' },
            { value: 50, numeral: 'L' },
            { value: 40, numeral: 'XL' },
            { value: 10, numeral: 'X' },
            { value: 9, numeral: 'IX' },
            { value: 5, numeral: 'V' },
            { value: 4, numeral: 'IV' },
            { value: 1, numeral: 'I' }
        ];

        let result = '';

        for (const pair of romanNums) {
            while (num >= pair.value) {
                result += pair.numeral;
                num -= pair.value;
            }
        }

        return result;
    }

    static fromRoman(str) {
        const romanNums = {
            'M': 1000,
            'CM': 900,
            'D': 500,
            'CD': 400,
            'C': 100,
            'XC': 90,
            'L': 50,
            'XL': 40,
            'X': 10,
            'IX': 9,
            'V': 5,
            'IV': 4,
            'I': 1
        };

        let result = 0;

        for (let i = 0; i < str.length; i++) {
            const current = romanNums[str[i]];
            const next = romanNums[str[i + 1]];

            if (next && current < next) {
                result += next - current;
                i++;
            } else {
                result += current;
            }
        }

        return result;
    }
}


console.log(RomanNumerals.toRoman(1000));

/* to roman:
2000 -> "MM"
1666 -> "MDCLXVI"
1000 -> "M"
 400 -> "CD"
  90 -> "XC"
  40 -> "XL"
   1 -> "I"

from roman:
"MM"      -> 2000
"MDCLXVI" -> 1666
"M"       -> 1000
"CD"      -> 400
"XC"      -> 90
"XL"      -> 40
"I"       -> 1 */