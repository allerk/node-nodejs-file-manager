import fs from "fs";
import {isFile} from "../utils/isFile.js";
import {createTable} from "../table/createTable.js";
import path from "path";

export const list = async (currentPath) => {
    let list = [];
    let i = 1;
    const files = await fs.promises.readdir(currentPath);
    for (const item of files) {
        const isItemType = await isFile(currentPath + item);
        list.push({
            index: i,
            name: item,
            type: isItemType,
        });
        i++;
    }

    const compareItems = (a, b) => {
        const isFolderA = a.type;
        const isFolderB = b.type;

        if (isFolderA && !isFolderB) {
            return 1;
        } else if (!isFolderA && isFolderB) {
            return -1;
        }

        return a.name.localeCompare(b.name);
    }

    const sortedList = list.sort(compareItems);
    createTable(sortedList);
};