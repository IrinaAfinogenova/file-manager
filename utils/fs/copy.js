import {mkdir, readdir, copyFile} from 'fs/promises';
import {isFileExists} from '../is-file-exists.js';

export const copy = async (path_one, path_two) => {
    try {
        const isCopiedFileExist = await isFileExists(path_two);

        if (isCopiedFileExist) {
            throw new Error('FS operation failed');
        }

        await copyFile(path_one, path_two)
    } catch {
        throw new Error('FS operation failed')
    }
};
