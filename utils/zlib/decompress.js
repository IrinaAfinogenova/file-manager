import fs from 'fs';
import zlib from 'zlib';

export const decompress = async (path_one, path_two, path) => {
    const input = fs.createReadStream(path_one);
    const output = fs.createWriteStream(path_two);
    const gzip = zlib.BrotliDecompress();

    input.pipe(gzip).pipe(output);
};
