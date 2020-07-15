((str, c = 0) => {
    const characters = ['a', 'e', 'i', 'o', 'u'];
    for (let v of str.toLowerCase()) {
        if (characters.includes(v)) { c++;}
    }

    console.log(c);
    return c;
})('hello there');