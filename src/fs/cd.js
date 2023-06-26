import path from "path";
import fs from "fs";
export const cd = (osPath, newPath) => {
    return new Promise((resolve, reject) => {
        const pth = path.resolve(osPath, newPath);

        fs.stat(pth, (err, stats) => {
            if (err) {
                reject(new Error('Error accessing directory: ' + err));
                return;
            }

            if (!stats.isDirectory()) {
                reject(new Error('The specified path is not a directory.'));
                return;
            }

            resolve(pth);
        });
    });

    // return osPath + newPath;
};