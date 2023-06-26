import * as readline from 'node:readline/promises';
import {
    stdin as input,
    stdout as output,
} from 'node:process';
import {operations} from "./operations.js";

const username = process.argv.slice(2)[0].slice(11);
// const path = os.homedir();
const start = async () => {
    console.log(`Welcome to the File Manager, ${username}!`);
    const rl = readline.createInterface({input, output})
    rl.on('SIGINT', () => {
        rl.close();
    });

    rl.on('line', (input) => {
        handleInput(input);
        rl.prompt();
    });

    rl.on('close', () => {
        console.log(`Thank you for using File Manager, ${username}, goodbye!`);
    });

    const handleInput = async (data) => {
        // console.log(data.toString())
        try {
            await operations(data);
        } catch (e) {
            console.log(e);
        }

        if (data.toString().includes('.exit')) {
            rl.close();
        }
    };
}

await start();