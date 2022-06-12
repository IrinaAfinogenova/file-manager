import os from 'os';
import path from 'path';
import readline from 'readline';
import {showStartMessage} from './utils/show-start-message.js';
import {isFileExists} from './utils/is-file-exists.js';
import {getUserName} from './utils/getUser.js';
import {confirmCommand} from './command.js';

const startApp = async () => {
    let currentDir = os.homedir();
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    showStartMessage(currentDir);

    rl.on('line', async (result) => {
        if (result === 'up') {
            currentDir = path.join(currentDir, '../');
            process.stdout.write(`You are currently in ${currentDir}\n`);

            return;
        }

        if (result.startsWith('cd ')) {
            const forder = result.split('cd ')[1];
            const nextDir = path.resolve(currentDir, forder);

            const isExist = await isFileExists(nextDir);

            if (isExist) {
                currentDir = nextDir
                process.stdout.write(`You are currently in ${currentDir}\n`);

                return;
            }

            process.stdout.write(`Directory is not exist\n`);
            process.stdout.write(`You are currently in ${currentDir}\n`);
            return;
        }

        confirmCommand(result, currentDir)
            .finally(() => {
                process.stdout.write(`You are currently in ${currentDir}\n`);
            });
    });

    rl.on('close', () => {
        process.stdout.write(`Thank you for using File Manager, ${getUserName()}!`);
        process.exit(0);
    });
};

startApp();