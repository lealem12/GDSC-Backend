
const http = require('http');
const url = require('url');
const port = 3000;

const middlewareStack = []
const use = (middleware) => {
    middlewareStack.push(middleware);
}

const executeMiddleware = (req, res) => {
    let index = 0;
    const next = () => {
        if (index < middlewareStack.length) {
            const middleware = middlewareStack[index];
            index++;
            middleware(req, res, next);
        }
    }
    next();
}

const authenticate = (req, res, next) => {
    console.log('authenticated.');
    next();
}
const anotherMiddleware = (req, res, next) => {
    console.log('another middleware begin');
    console.log('another middleware end');
    next();
}
const errorHandlerMiddleware = (error) => {
    console.log(`error: ${error}`);
}
use(authenticate);
use(anotherMiddleware);

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    if (parsedUrl.pathname === '/home') {
        executeMiddleware(req, res);
        res.statusCode = 400;
        res.setHeader('Content-Type', 'text/plain');
        res.end('response successfully ended.');   
    } else {
        const error = new Error('No other route is available');
        errorHandlerMiddleware(error);
    }

});

server.listen(port, () => {
    console.log(`server is running at http://localhost:${port}/`);
})


