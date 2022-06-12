import {copy} from './copy.js';
import {remove} from './remove.js'

export const move = async (path_one, path_two) => {
    await copy(path_one, path_two);

    await remove(path_one);
};
