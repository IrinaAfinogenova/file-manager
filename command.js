import {noOpeation} from './utils/default-operation-message.js';
import {list} from './utils/fs/list.js';
import {read} from './utils/fs/read.js';
import {create} from './utils/fs/create.js';
import {rename} from './utils/fs/rename.js';
import {copy} from './utils/fs/copy.js';
import {remove} from './utils/fs/remove.js';
import {move} from './utils/fs/move.js';
import {calculateHash} from './utils/hash.js';
import {compress} from './utils/zlib/compress.js';
import {decompress} from './utils/zlib/decompress.js';
import {osCommands} from './os-command.js';
import path from 'path';

const getList = async (path) => await list(path);
const catCommand = async (path, path_one) => await read(path_one);
const addComand = async (path, name) => await create(name, path);
const rnComand = async (path, path_one, path_two) => await rename(path_one, path_two, path);
const cpComand = async (path, path_one, path_two) => await copy(path_one, path_two, path);
const rmCommand = async (path, name, addname) => await remove(name, path);
const mvCommand = async (path, path_one, path_two) => await move(path_one, path_two, path);
const osCommand =  async (path, name, addname) => await osCommands(name);
const hashCommand = async (path, path_one, addname) => await calculateHash(path_one);
const compressCommand = async (path, path_one, path_two) => await compress(path_one, path_two, path);
const decompressCommand = async (path, name, addname) => await decompress(name, addname, path);

const commandList = {
    ls: {
        commandFunc: getList,
        description: 'list was showed successfully'
    },
    cat: {
        commandFunc: catCommand,
        description: 'file was readed successfully'
    },
    add: {
        commandFunc: addComand,
        description: 'file was added successfully'
    },
    rn: {
        commandFunc: rnComand,
        description: 'file was renamed successfully'
    },
    cp: {
        commandFunc: cpComand,
        description: 'file was copied successfully'
    },
    rm: {
        commandFunc: rmCommand,
        description: 'file was deleted successfully'
    },
    mv: {
        commandFunc: mvCommand,
        description: 'file was moved successfully'
    },
    os: {
        commandFunc: osCommand,
        description: ''
    },
    hash: {
        commandFunc: hashCommand,
        description: ''
    },
    compress: {
        commandFunc: compressCommand,
        description: 'file was compressed successfully'
    },
    decompress: {
        commandFunc: compressCommand,
        description: 'file was decompressed successfully'
    }
};

export const confirmCommand = async (command, path) => {
    const [cmd, path_one, path_two] = command.split(' ');
    const {commandFunc = noOpeation, description = ''} = commandList[cmd] || {};

    try {
        await commandFunc(path, path_one, path_two);
        process.stdout.write(`${description}\n`)
    } catch {
        console.log('Operation failed')
    }
}
