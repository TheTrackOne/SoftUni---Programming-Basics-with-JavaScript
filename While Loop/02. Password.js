function password(args)  {
    let username = args[0];
    let password = args[1];
    let data = args[2];
    let index = 3;

    while (data !== password) {
        data = args[index];
        index++;
    }
    console.log(`Welcome ${username}!`)
}
password(["Nakov", "1234", "Pass", "1324", "1234"]);