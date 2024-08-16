
const fs = require('fs');
const readline = require('readline');

const addLineByLine = async () => {
    const filePaths = ['input1.txt', 'input2.txt', 'input3.txt'];
    let sum = 0;
    for (const filePath of filePaths) {
        try {
            const fileStream = fs.createReadStream(filePath)
            const readLine = readline.createInterface({
                input: fileStream,
                crlfDelay: Infinity
            });
    
            for await (const line of readLine) {
                if (!isNaN(line)) {
                    sum += Number(line);
                } else {
                    console.log('Error: NaN');
                }
            }
        } catch (error) {
            console.log(error.message);
        }
    }
    console.log(`Sum: ${sum}`);
}

addLineByLine()

