import fs from "fs";
import zlib from "zlib";
import path from "path";
import {getNameFromPath} from "../utils/getNameFromPath.js";
import {isAbsolute} from "../utils/isAbsolute.js";

export const compress = async (currentPath, pathToFile, pathToDestination) => {
    const targetPath = path.resolve(currentPath, pathToDestination);

    const targetFileName = isAbsolute(currentPath, pathToFile);
    let readStream = fs.createReadStream(targetFileName, 'utf8');

    const destinationName = getNameFromPath(pathToFile);
    let writeStream = fs.createWriteStream(targetPath + path.sep + `${destinationName}.br`);

    let brotli = zlib.createBrotliCompress();
    readStream.pipe(brotli).pipe(writeStream);

    writeStream.on('finish', () => {
        console.log('File compression complete.');
    });

    writeStream.on('error', (error) => {
        console.error('File compression failed:', error);
    });
};