import fs from "fs";
import zlib from "zlib";
import path from "path";
import {getNameFromPath} from "../utils/getNameFromPath.js";
import {isAbsolute} from "../utils/isAbsolute.js";

export const decompress = async (currentPath, pathToFile, pathToDestination) => {
    const targetPath = path.resolve(currentPath, pathToDestination);

    const targetFileName = isAbsolute(currentPath, pathToFile);
    let readStream = fs.createReadStream(targetFileName);

    const destinationName = getNameFromPath(pathToFile);
    let writeStream = fs.createWriteStream(targetPath + path.sep + `${destinationName.substring(0, destinationName.length - 3)}`);

    let brotli = zlib.createBrotliDecompress();
    readStream.pipe(brotli).pipe(writeStream);

    writeStream.on('finish', () => {
        console.log('File decompression complete.');
    });

    writeStream.on('error', (error) => {
        console.error('File decompression failed:', error);
    });
};