const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.question("what is your name ?" , (name) => {
    console.log(`${name}`);
    rl.close();
});
