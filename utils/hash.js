import crypto from 'crypto';
import fs from 'fs/promises';

export const calculateHash = async (path) => {  
    const fileBuffer = await fs.readFile(path);
    const hashSum = crypto.createHash('sha256');
    hashSum.update(fileBuffer);
    
    const hex = hashSum.digest('hex');
    
    console.log(hex);
};