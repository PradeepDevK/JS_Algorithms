const fizzbuzz = ( n => {

    for (i = 1; i <= n; i ++) {

        i % 3 === 0 && i % 5 === 0  ? console.log('fizzbuzz')
        : i % 3 === 0 ? console.log('fizz')
        : i % 5 === 0 ? console.log('buzz')
        : console.log(i);
    }

})(50);