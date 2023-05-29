const http = require("http");

const server = http.createServer(function (req, res) {
    const path = req.url
    console.log("path is" + path);
    if (path === "/" || path === "/home") {
        res.write("<h1>Hello Home Page<h1>");
        res.end;
    } else {
        res.writeHead(404);
        res.end("page not found");  
    }
});
server.listen(3001, () => {
    console.log('start server 3001')
})