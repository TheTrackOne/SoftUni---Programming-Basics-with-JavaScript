function maxNumbers(args) {
    let i = 0
    let maxNumber = Number.MIN_SAFE_INTEGER;

    while (args[i] !== "Stop") {
        if (maxNumber < Number(args[i])) {
            maxNumber = Number(args[i]);
        }
        i++;
    }
    console.log(maxNumber);
}
maxNumbers(["100", "99", "80", "70", "Stop"]);