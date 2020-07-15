const capitalize = ( (string, words = []) => {
    for (let word of string.split(' ')) {
        words.push(word[0].toUpperCase() + word.slice(1));
    }
    
    console.log(words.join(' '));
    return words.join(' ');
})('javascript algorithms');