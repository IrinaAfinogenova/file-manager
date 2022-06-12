
import os from 'os';
import {noOpeation} from './utils/default-operation-message.js';

const commandsCollection = {
    ['--EOL']: () => console.log(os.EOL),
    ['--cpus']: () => console.log(os.cpus()),
    ['--homedir']: () => console.log(os.homedir()),
    ['--username']: () => console.log(os.userInfo().username),
    ['--architecture']: () => console.log(os.arch())
};

export const osCommands = (flag) => {
    const command = commandsCollection[flag] || noOpeation;

    command();
};
