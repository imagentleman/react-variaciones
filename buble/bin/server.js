const http = require("http");
const url = require("url");
const path = require("path");
const fs = require("fs");
const port = 8080;

http
  .createServer(function(request, response) {
    const uri = url.parse(request.url).pathname;
    const mimeTypes = {
      css: "text/css",
      html: "text/html",
      js: "text/javascript",
      json: "application/json",
      png: "image/png",
      jpg: "image/jpg",
      svg: "image/svg+xml"
    };
    let filename = path.join(__dirname, "../dist/", uri);

    fs.stat(filename, function(err, stats) {
      if (err) {
        response.writeHead(404, { "Content-Type": "text/plain" });
        response.write("404 Not Found\n");
        response.end();
        return;
      }

      if (stats.isDirectory()) filename += "/index.html";

      fs.readFile(filename, "binary", function(err, file) {
        if (err) {
          response.writeHead(500, { "Content-Type": "text/plain" });
          response.write(err + "\n");
          response.end();
          return;
        }

        const mimeType =
          mimeTypes[filename.slice(filename.lastIndexOf(".") + 1)];

        response.writeHead(200, { "Content-Type": mimeType });
        response.write(file, "binary");
        response.end();
      });
    });
  })
  .listen(parseInt(port, 10));

console.log(
  "React Test: Query builder is available at\n" +
    "=> http://localhost:" +
    port +
    "/\nCTRL + C to shutdown"
);
