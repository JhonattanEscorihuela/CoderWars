function getMiddle(s) {
    s = s.split("");
    let out = "";

    if(s.length % 2 == 0) {
        out = s[s.length/2 - 1] + s[s.length/2]
        return out;
    }else{
        let l = Math.floor(s.length/2);
        return s[l];
    }
    
    
}

console.log(getMiddle("test"));