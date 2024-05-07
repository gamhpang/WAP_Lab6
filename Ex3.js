function printNumbers(from, to) {
    for (let i = from; i <= to; i++) {
        setTimeout(() => {
            console.log(i);
        }, (i - from) * 1000); 
    }
}
printNumbers(2, 10);
