function generateHashtag(str) {
    const words = str.trim().split(" ");
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    const hashtag = `#${capitalizedWords.join("")}`;

    return hashtag.length > 140 || str.trim() === "" ? false : hashtag;
}
console.log(generateHashtag("Do We have A Hashtag"));
console.log(generateHashtag(""));
console.log(generateHashtag("code" + " ".repeat(140) + "wars"));