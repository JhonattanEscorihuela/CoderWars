function toCamelCase(str) {

    let split;

    if (str.includes("_") || str.includes("-")) {
        // Divide por guiones bajos o guiones
        split = str.split(/[_-]/);
    }

    if (split && split.length > 1) {
        let camelCaseString = split.map((elemento, index) => {
            return index === 0 ? elemento : elemento.charAt(0).toUpperCase() + elemento.slice(1);
        }).join("");

        return camelCaseString;
    } else {

        return str;
    }
}

console.log(toCamelCase("the_stealth-warrior"));