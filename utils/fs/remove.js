import {rm} from 'fs/promises';
import {isFileExists} from '../is-file-exists.js';

export const remove = async (path) => {
    const isFileExist = await isFileExists(path);

    if (!isFileExist) {
        throw new Error('FS operation failed');
    }

    await rm(path);
};