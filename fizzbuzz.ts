function fizzBuzz(val: number) {
    for (let i: number = 1; i <= val; i++) {
        if(i % 15 === 0) {
            console.log('fizzbuzz');
        } else if(i % 3 === 0) {
            console.log('fizz');
        } else if(i % 5 === 0) {
            console.log('buzz');
        } else {
            console.log(i);
        }
    }
}

fizzBuzz(99);