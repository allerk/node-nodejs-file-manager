export const isAbsolute = (currentPath, fileName) => {
    let name = currentPath + fileName;
    const separators = /[\/\\]/;
    if (fileName.split(separators)[0].includes(':')){
        name = fileName;
    }

    return name;
}