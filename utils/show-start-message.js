import {getUserName} from './getUser.js';

export const showStartMessage = (currentDir) => {
    console.log(`Welcome to the File Manager, ${getUserName()}!`);
    console.log(`You are currently in ${currentDir}`);
};
