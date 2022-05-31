import http from "http";

const html = `<h1>Hello world</h1> with some change`;
//const html = `<h1>Hello world</h1>`;

const port = 8011;
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(html);
    res.end();
  })
  .listen(port);
console.log(`See http://localhost:${port}`);
