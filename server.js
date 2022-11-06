// the http is a built-in module that  allows Node.js to transfer data using the Hyper Text Transfer Protocol (HTTP).
const http = require('http');
const fs = require('fs');

//The createServer method creates a server
const server = http.createServer((req, res) => {
    console.log(req);
    console.log(req.url);
    console.log(req.method);

    res.setHeader('Content-Type', 'text/html');


    /*     // Responding with a plain text
        res.write('First response message!');
        // Responding with an HTML script
        res.write('<br></h1>First HTML response message! </h1>');

        // Responding with an HTML page
        fs.readFile('./views/index.html', (err, data) => {
            if (err) {
                console.log(err);
            } else {
                res.write(data);
                res.end();
            }
        }) */



    let path = './views/'

    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/posts':
            path += 'posts.html';
            res.statusCode = 200;
            break;
        case '/contactus':
            path += 'contactus.html';
            res.statusCode = 200;
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.write(data);
            res.end();
        }
    })
});

//The server.listen() method creates a listener on the specified port and path.
server.listen(3000, 'localhost', () => {
    console.log('I am listing for requests on port 3000');
});