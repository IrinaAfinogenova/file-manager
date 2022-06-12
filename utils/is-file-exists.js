import {access} from 'fs/promises';
import {constants} from 'fs';

export const isFileExists = async (path) => {
    try {
        await access(path, constants.R_OK | constants.W_OK);

        return true;
    } catch {
        return false;
    }
};