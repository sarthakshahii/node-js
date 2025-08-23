const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    res.setHeader('Content-Type', 'text/html');

    if (req.url.toLowerCase() === '/home' && req.method === 'POST') {
        fs.writeFileSync('user.txt', 'Sarthak');
        res.statusCode = 302; 
        res.setHeader('Location', '/about');
        return res.end();
    }

    else if (req.url.toLowerCase() === '/home' && req.method === 'GET') {
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><h1>Home Page</h1></body>');
        res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
        res.write('</html>');
        return res.end();
    }

    else if (req.url.toLowerCase() === '/about') {
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><h1>About Page</h1></body>');
        res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
        res.write('</html>');
        return res.end();
    }

    else {
        res.write('<html>');
        res.write('<head><title>Form</title></head>');
        res.write('<body><h1>Hello from my Node.js Server!</h1>');
        res.write('<body><h1>Enter your details</h1>');
        res.write('<form action="/home" method="POST">');
        res.write('<input type="text" name="username" placeholder="Enter your name"><br>');
        res.write('<label for="male">Male</label>');
        res.write('<input type="radio" id="male" name="gender" value="male"/>');
        res.write('<label for="female">Female</label>');
        res.write('<input type="radio" id="female" name="gender" value="female"/>');
        res.write('<input type="submit" value="Submit">');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
});

const PORT = 5000;
server.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
