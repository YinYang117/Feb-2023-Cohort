const http = require('http');

let nextDogId = 1;

function getNewDogId() {
  const newDogId = nextDogId;
  nextDogId++;
  return newDogId;
}

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`); // NOT NESSESSARY, but thank you anyways

  let reqBody = ""; // For POST decodes the x-www-formurlEncoded part
  req.on("data", (data) => {
    reqBody += data;
  });

  // When the request is finished processing the entire body
  req.on("end", () => {
    // Parsing the body of the request
    if (reqBody) {
      req.body = reqBody
        .split("&")
        .map((keyValuePair) => keyValuePair.split("="))
        .map(([key, value]) => [key, value.replace(/\+/g, " ")])
        .map(([key, value]) => [key, decodeURIComponent(value)])
        .reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {});
      console.log("this is the req body -> ", req.body);
    }
    // Do not edit above this line

    const urlArr = req.url.split("/")

    if (req.url === "/" && req.method === "GET") {
      res.statusCode = 200
      res.setHeader("Content-Type", "text/plain")
      return res.end('Dog Club')
    }

    else if (req.url === "/dogs" && req.method === "GET") {
      res.statusCode = 200
      res.setHeader("Content-Type", "text/plain")
      return res.end('Dogs index')
    }

    else if (urlArr[1] === "dogs" && req.method === "GET") {
      res.statusCode = 200
      res.setHeader("Content-Type", "text/plain")
      return res.end(`Dog details for dogId: ${urlArr[2]}`)
    }

    else if (urlArr[1] === "dogs" && req.method === "POST") {
      res.statusCode = 302
      res.setHeader("Location", `/dogs/${getNewDogId()}`)
      return res.end()
    }

    else {
      // Do not edit below this line
      // Return a 404 response when there is no matching route handler
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain');
      return res.end('No matching route handler found for this endpoint');
    }
  });
});

const port = 5050;

server.listen(port, () => console.log('I have the power!', port));