import fs from "fs";
import path from "path";

export const rename = async (currentPath, pathToFile, newName) => {
    const targetPath = path.resolve(currentPath, pathToFile);
    const separators = /[\/\\]/;
    const list = targetPath.split(separators);
    list.pop();
    list.push(newName);
    await fs.promises.rename(targetPath, list.join(path.sep));
};