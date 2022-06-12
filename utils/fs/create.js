import {writeFile} from 'fs/promises';
import {isFileExists} from '../is-file-exists.js';

export const create = async (fileName, path) => {
    const isAlreadyExist = await isFileExists(`${path}/${fileName}`);

    if (isAlreadyExist) {
        throw new Error('FS operation failed');
    }

    await writeFile(`${path}/${fileName}`, '');
};
