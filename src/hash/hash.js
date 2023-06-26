import url from "url";
import fs from "fs";
import crypto from "crypto";
import {isAbsolute} from "../utils/isAbsolute.js";

export const calculateHash = async (currentPath, pathToFile) => {
    const targetFileName = isAbsolute(currentPath, pathToFile);
    const checker = await fs.promises.stat(targetFileName);
    if (checker.isFile()){
        let data = await fs.promises.readFile(targetFileName, { encoding: 'utf8' });
        const algorithm = 'sha256';
        const hash = crypto.createHash(algorithm).update(data).digest();
        console.log(`Result: ${hash.toString('hex')}`)
    } else {
        console.log('It is not a file');
    }
};