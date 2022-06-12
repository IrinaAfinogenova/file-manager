import fs from 'fs';
import zlib from 'zlib';

export const compress = async (path_one, path_two, path) => {
    const input = fs.createReadStream(path_one);
    const output = fs.createWriteStream(path_two);
    const gzip = zlib.BrotliCompress();

    input.pipe(gzip).pipe(output);
};