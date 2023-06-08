const { sendFormPage } = require("./routes");
const { parseBody } = require("./parse-body");
const fs = require("fs")
let server;

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE ABOVE THIS LINE *******************/

const http = require("http")
server = http.createServer((req, res) => {
    
    
    let reqBody = '';
    req.on('data', (data) => {
        reqBody += data;
    });
    
    let obj;
    req.on('end', () => {
        console.log(req.method, req.url)
        console.log("req body ->  ", reqBody)
        obj = parseBody(reqBody)
        
            req.body = obj
        
            sendFormPage(req, res)
    })

})


const port = 5050
server.listen(port, console.log(`I can type anything here ${port}.`))
/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = { server };