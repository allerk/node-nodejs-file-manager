import fs from "fs";

export const isFile = async (item) => {
    const checker = await fs.promises.stat(item);
    return checker.isFile();
}