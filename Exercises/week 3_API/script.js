
const jsonFile = require('./Movie data/movies.json');
const http = require('http');
const url = require('url');

const movies = JSON.parse(JSON.stringify(jsonFile));


const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const queryParams = parsedUrl.query;
    
    if (req.method === "GET" && parsedUrl.pathname === "/search") {
        if (!queryParams.title) {
            res.statusCode = 400;
            res.setHeader('Content-Type', 'text/plain');
            res.end("Movie Title not missing");
        } else {
            const filteredMovies = 
            movies.filter(movie => movie.title.toLowerCase().includes(queryParams.title.toLowerCase()));
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(filteredMovies));
        } 
    } else if (req.method === "GET" && parsedUrl.pathname.match(/^\/movie\/([^\/]+)$/)) {
        const queryId = parsedUrl.pathname.match(/^\/movie\/([^\/]+)$/)[1]; //use RegEx.
        foundMovie = movies.find((movie) => movie.id === queryId);
        res.writeHead(200, {'Content-Type': "application/json"});
        res.end(foundMovie? JSON.stringify(foundMovie): `[]`);
    } else {
        res.writeHead(404, {'Content-Type': "application/json"});
        res.end(`{"message": "Page Not Found"}`);
    }
});

const port = 4000;
server.listen(port, ()=> {
    console.log(`server is listening at port: ${port}`)
});






