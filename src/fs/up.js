import path from "path";

export const up = (osPath) => {
    // console.log(osPath)
    let result = path.sep === '\\' ? osPath.split('\\') : osPath.split('/');
    // console.log(result)
    if (result.length > 1){
        result.pop();
    }
    return result.join(path.sep);
};