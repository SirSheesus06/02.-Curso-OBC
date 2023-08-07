function fibonacciSequence(num) {
    let sequence = [];
    let a = 1;
    let b = 0;

    while (num > 0) {
        sequence.push(a);
        let temp = a;
        a = a + b;
        b = temp;
        num--;
    }
    return sequence;
}

const num = 6;
const result = fibonacciSequence(num);
console.log(result);