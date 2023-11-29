function generateBC(url, separator) {
    //your code here
    let urlSplit = url.split('/');

    let head = `<a href="/">HOME</a> ${separator} `
    let body = '';
    let queue = '';
    let l = urlSplit.length - 1;
    l = urlSplit[l].split('.');
    let out = [];

    // console.log(head);

    for (let i = 1; i < urlSplit.length - 1; i++) {

        body += `<a href="/${urlSplit[i]}/">${urlSplit[i].toUpperCase()}</a> ${separator}`

    }



    // console.log(body);

    queue = `<span class="active">${l[0].toUpperCase()}</span>`

    // console.log(queue);

    out = [...head, ...body, ...queue].join('');


    return out;
}


console.log(generateBC("mysite.com/pictures/holidays.html", " : "));
console.log(generateBC("www.codewars.com/users/GiacomoSorbi", " / "));
console.log(generateBC("www.microsoft.com/important/confidential/docs/index.htm#top", " * "));
console.log(generateBC("www.very-long-site_name-to-make-a-silly-yet-meaningful-example.com/users/giacomo-sorbi", " + "));