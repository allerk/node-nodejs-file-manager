import path from "path";
import fs from "fs";
import {pipeline} from "node:stream";
import {isAbsolute} from "../utils/isAbsolute.js";
import {getNameFromPath} from "../utils/getNameFromPath.js";

export const move = async (currentPath, pathToFile, pathToDestination) => {
    const targetPath = path.resolve(currentPath, pathToDestination);

    const targetFileName = isAbsolute(currentPath, pathToFile);
    const readStream = fs.createReadStream(targetFileName);

    const destinationName = getNameFromPath(pathToFile);
    const targetFilePath = path.join(targetPath, destinationName);
    const writeStream = fs.createWriteStream(targetFilePath);

    pipeline(
        readStream,
        writeStream,
        (err) => {
            // console.log(err);
        }
    );
    await fs.promises.rm(targetFileName);
};