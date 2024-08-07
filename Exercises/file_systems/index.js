const fs = require('fs');

const fileChange = fs.watch('./command.txt', 'utf-8', (ev) => {
    if (ev === 'change') {
        const readableStream = fs.createReadStream('./command.txt', 'utf-8');
        readableStream.on('data', (chunk) => {
            switch (chunk) {
                case 'create a file newFile.txt':
                    fs.writeFile('./newFile.txt', '', (err) => {
                        if (err) throw err;
                    });
                    break;
                case 'delete the file fileName.txt':
                    fs.unlink('./fileName.txt', (err) => {
                        if (err) throw err;
                    });
                    break;
                case 'rename the file fileName.txt to newFileName.txt':
                    fs.rename('./fileName.txt', './newFile.txt', (err) => {
                        if (err) throw err;
                    });
                    break;
                case 'add to the file fileName.txt This is some additional text':
                    fs.appendFile('./fileName.txt', 'This is some additional text', (err) => {
                        if (err) throw err;
                    });
                    break;
                default:
                    console.log('Text instruction not recognized.')
                    break;
            }
        }).on('end', () => {
            console.log('reading ended');
        });
    }
});






