const http= require('http');
const server= http.createServer((req,res)=>{
    console.log(req);
    //process.exit(); used to stop the server
});
const PORT= 5000;
server.listen(PORT,()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
});