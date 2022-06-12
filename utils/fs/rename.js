
import fs from 'fs/promises';
import {isFileExists} from '../is-file-exists.js';

export const rename = async (oldPath, newPath) => {
    const isOldFileExist = await isFileExists(oldPath);
    const isNewFileAlrearyExist = await isFileExists(newPath);
    
    if (!isOldFileExist || isNewFileAlrearyExist) {
        throw new Error('FS operation failed');
    }

    await fs.rename(oldPath, newPath);
};
