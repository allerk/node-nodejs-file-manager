import fs from "fs";
import path from "path";

export const cat = async (currentPath, fileName) => {
    let res = '';
    const targetPath = path.resolve(currentPath, fileName);
    const checker = await fs.promises.stat(targetPath);
    if (checker.isFile()){
        const readStream = fs.createReadStream(targetPath);
        readStream.on('data', (data) => {
            res += data.toString();
        });
        readStream.on('end', () => {
            console.log('File reading finished');
            console.log(res);
        });
    } else {
        console.log('It is not a file');
    }
};