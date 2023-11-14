function printerError(s) {
    let error = s.split("").filter(char => char > "m").length;

    return `${error}/${s.length}`;
}

console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"));