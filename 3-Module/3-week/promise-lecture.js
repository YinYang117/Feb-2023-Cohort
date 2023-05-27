const http = require('http');


const server = http.createServer((req, res) => {

    async function getPokemon() {
        let response = await fetch('https://pokeapi.co/api/v2/pokemon/snorlax');
        let snorlax = await response.json();
        res.setHeader('Content-Type', 'text/html');
        res.statusCode = 200;
        res.end(`
             <!DOCTYPE html>
 <html lang="en">
   <head>
     <meta charset="UTF-8" />
     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     <title>${snorlax.name}</title>
   </head>
   <body>
     <h1>${snorlax.name}</h1>
   </body>
 </html>
             `)
    }

    getPokemon();

})





// const server = http.createServer((req, res) => {
//     let pokemon;

//     fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//         .then((response) => response.json())
//         .then((data) => {
//             pokemon = data
//             res.statusCode = 200;
//             res.setHeader("Content-Type", "text/html");
//             res.end(`
//             <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>${pokemon.name}</title>
//   </head>
//   <body>
//     <h1>${pokemon.name}</h1>
//   </body>
// </html>
//             `)

//         })

// })



const port = 5000;

server.listen(port, () => console.log("listening on port...", port));
