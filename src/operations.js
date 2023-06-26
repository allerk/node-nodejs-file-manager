import {list} from "./fs/list.js";
import {up} from "./fs/up.js";
import os from "os";
import path from "path";
import {cd} from "./fs/cd.js";
import {cat} from "./fs/cat.js";
import {add} from "./fs/add.js";
import {rename} from "./fs/rename.js";
import {copy} from "./fs/copy.js";
import {move} from "./fs/move.js";
import {deleteFile} from "./fs/delete.js";
import {cpus} from "./os/cpus.js";
import {calculateHash} from "./hash/hash.js";
import {compress} from "./zip/compress.js";
import {decompress} from "./zip/decompress.js";


let currentPath = os.homedir();
export const operations = async (data) => {
    try {
        let command = '';
        let arg1 = '';
        let arg2 = '';
        if (data.split(' ').length > 1){
            command = data.split(' ')[0];
            arg1 = data.split(' ')[1];
            arg2 = data.split(' ').length === 3 ? data.split(' ')[2] : '';
        } else {
            command = data;
        }
        switch (command) {
            case "ls":
                await list(await correctPath())
                break;
            case "up":
                currentPath = up(currentPath);
                break;
            case "cd":
                currentPath = await cd(await correctPath(), arg1);
                break;
            // Get current path. For test purposes
            // case "get":
            //     console.log(await correctPath());
            //     break;
            case "cat":
                await cat(await correctPath(), arg1);
                break;
            case "add":
                await add(await correctPath(), arg1);
                break;
            case "rn":
                await rename(await correctPath(), arg1, arg2);
                break;
            case "cp":
                await copy(await correctPath(), arg1, arg2);
                break;
            case "mv":
                await move(await correctPath(), arg1, arg2);
                break;
            case "rm":
                await deleteFile(await correctPath(), arg1);
                break;
            case "os":
                switch (arg1){
                    case "--EOL":
                        console.log('Os EOL is ', JSON.stringify(os.EOL));
                        break;
                    case "--cpus":
                        cpus();
                        break;
                    case "--homedir":
                        console.log(os.homedir());
                        break;
                    case "--username":
                        console.log('Os username is ' + os.userInfo().username);
                        break;
                    case "--architecture":
                        console.log('Os architecture is ' + os.arch());
                        break;
                }
                break;
            case "hash":
                await calculateHash(await correctPath(), arg1);
                break;
            case "compress":
                await compress(await correctPath(), arg1, arg2);
                break;
            case "decompress":
                await decompress(await correctPath(), arg1, arg2);
                break;
            default:
                console.log('Invalid input');
                break;
        }
        console.log(`You are currently in ${await correctPath()}`)
    } catch (e){
        throw new Error('Operation failed');
    }
}

const correctPath = async () => {
    return currentPath + path.sep;
}