function digitalRoot(n) {
    n = n.toString().split("");
    let out = 0;

    n.map(e => {
        out += parseInt(e)
    });

    let l = out.toString().length;

    if (l > 1) {
        return digitalRoot(out);
    } else {
        return out;
    }
}

console.log(digitalRoot(942));