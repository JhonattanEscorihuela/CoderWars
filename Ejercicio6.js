function likes(names) {
    let l = names.length;
    let c = l - 2;
    
    if (l === 0) return `no one likes this`;

    if (l === 1) return `${names[0]} likes this`;

    if (l === 2) return `${names[0]} and ${names[1]} like this`;

    if (l === 3) return `${names[0]}, ${names[1]} and ${names[2]} like this`;

    if (l > 3) return `${names[0]}, ${names[1]} and ${c} others like this`;
}
console.log(likes(["Peter", "Alex", "Mark", "Jacob", "Jhonattan", "Melanny"]));