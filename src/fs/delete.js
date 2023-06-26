import fs from "fs";
import {isAbsolute} from "../utils/isAbsolute.js";

export const deleteFile = async (currentPath, fileName) => {
    const targetFileName = isAbsolute(currentPath, fileName);
    await fs.promises.rm(targetFileName);
};