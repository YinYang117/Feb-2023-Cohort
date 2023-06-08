const http = require('http');
const fs = require("fs");

const server = http.createServer((req, res) => {

  const url = req.url // String
  const extenstion = url.split(".")[1]
  console.log("Extension", extenstion)
  const restOfTheUrl = url.split(".")[0]
  const piecesOfTheRestOfTheUrl = restOfTheUrl.split("/")
  const assetTargetName = piecesOfTheRestOfTheUrl[piecesOfTheRestOfTheUrl.length - 1]

  if (url.startsWith("/static")) {
    if (req.method === "GET") {

      if (extenstion === "jpg" || extenstion === "jpeg") {
        try {
          const jpg = fs.readFileSync(`./assets/images/${assetTargetName}.${extenstion}`)
          res.setHeader("Content-Type", "image/jpeg")
          res.end(jpg)
        } catch (e) {
          res.setHeader("Content-Type", "text")
          res.statusCode = 404
          res.end("Image not found")
        }
      }

      else if (req.method === "GET" && extenstion === "css") {
        const cssFile = fs.readFileSync(`assets/css/${assetTargetName}.${extenstion}`)
        res.setHeader("Content-Type", "text/css")
        res.end(cssFile)
      }

    }
  }

  else { // normal request
    const index = fs.readFileSync("./index.html")
    res.setHeader("Content-Type", "text/html")
    res.end(index)
  }

});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));


module.exports = {}