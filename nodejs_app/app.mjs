import fs from 'fs';

fs.appendFile('my-file.txt', 'file cr-ed', (err) => {
    if (err) throw err;
    console.log('file sa-ed!');
});
