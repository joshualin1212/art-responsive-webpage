const http = require("http");
var fs = require("fs");
const port = 3001;

const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  fs.readFile("./index.html", function (error, data) {
    if (error) {
      res.writeHead(404);
      res.write("erorrr");
      console.log("errr");
    } else {
        res.write("its working?");
        res.write(data);
   
      console.log("no error");
    }
    res.end();
  });
  res.write("hello?");
 
});

server.listen(port, function (error) {
  if (error) {
    console.log("something went wrong", error);
  } else {
    console.log("server is listening on port" + port);
  }
});
