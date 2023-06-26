import fs from "fs";
import path from "path";

export const add = async (currentPath, fileName) => {
    const targetPath = path.resolve(currentPath, fileName);
    await fs.promises.writeFile(targetPath, '', () => {
        console.log('File is created successfully!');
    });
};