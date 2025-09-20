const {readFileSync, writeFileSync}= require('fs'); 
console.log('start');
const first= readFileSync('./content/first.txt', 'utf8'); //if we don't provide utf8 then it will return buffer
const second= readFileSync('./content/subfolder/second.txt', 'utf8');
console.log(first, second);
writeFileSync( 
    './content/result-sync.txt',
    `Here is the result: ${first}, ${second}`, 
    {flag: 'a'} //flag a is for append, if we don't provide it will overwrite the file
);
console.log('done with this task');
console.log('starting next task');

//synchronous way of reading and writing files, blocking code, line by line execution

