function accum(s) {
    return s.split("").map((e, i) => {
        e = e.toLowerCase();
        return e.toUpperCase() + e.repeat(i);
    }).join("-");


}

console.log(accum("abcd"));