const {readFile, writeFile}= require('fs');
console.log('start');
readFile('./content/first.txt', 'utf8', (err, result) => { //create a callback function to get the result
    if(err) { //if there is an error
        console.log(err);
        return;
    }
    const first= result; //if no error then store the result in first
    readFile('./content/subfolder/second.txt', 'utf8', (err, result) => { //nested callback to get the second file
        if(err) {
            console.log(err);
            return;
        }
        const second= result; //if no error then store the result in second
        writeFile( //async function to write the file
            './content/result-async.txt',
            `Here is the result: ${first}, ${second}`, //template string to write both first and second file content
            (err, result) => {
                if(err) {
                    console.log(err);
                    return;
                }
                console.log('done with this task');
            }
        )
    })
});
console.log('starting next task');

//an asynchronous way of reading and writing files, non-blocking code, callback hell
//better than synchronous way as it doesn't block the code execution, line by line execution not guaranteed
//if user requests a lot of data then it will be handled easily without waiting for previous request to complete
//alternative to callback hell is promises and async/await