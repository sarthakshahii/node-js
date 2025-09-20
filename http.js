const http= require('http'); //http is built in module, no need to install
const server=http.createServer((req, res)=>{ //request and response are two objects
    //res.write('Welcome to our home page'); //res.write() can be used to send multiple responses
    //res.end();
    if(req.url==='/') { 
        res.end('Welcome to our home page'); //res.end() ends the response process, can send only one response
    }
    else if(req.url==='/about') {
        res.end('Here is our short history');
    }
    else { 
        res.end(`
            <h1>Oops!</h1>
            <p>We can't seem to find the page you are looking for</p>
            <a href="/">back home</a>
        `);
    }

})
server.listen(5000);