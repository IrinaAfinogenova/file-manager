import {mkdir, readdir} from 'fs/promises';

export const list = async (path) => {
    const files = await readdir(path);
    console.log(files);
};
