function DNAStrand(dna) {
    let pairs = { "A": "T", "T": "A", "G": "C", "C": "G" }

    return dna.split("").map(e => {
        return pairs[e];
    }).join("");

}

console.log(DNAStrand("TTTGC"));