import {readFile} from 'fs/promises';

export const read = async (path) => {
    const result = await readFile(path, {encoding: 'utf8'});

    console.log(result);
};
