function combinations(num) {
    let counter = 0;

    for (let a = 0; a <= num; a++) {
        for (let b = 0; b <= num; b++) {
            for (let c = 0; c <= num; c++) {
                if (a + b + c === num) {
                    counter++;
                }
            }
        }
    }
    console.log(counter);
}
combinations(25);