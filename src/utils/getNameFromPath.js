export const getNameFromPath = (fileName) => {
    let name = fileName;
    const separators = /[\/\\]/;
    if (fileName.split(separators).length > 1){
        name = fileName.split(separators)[fileName.split(separators).length - 1];
    }

    return name;
}