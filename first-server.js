const http= require('http');
const server= http.createServer((req,res)=>{
    console.log(req);
});
const PORT= 5000;
server.listen(PORT,()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
});