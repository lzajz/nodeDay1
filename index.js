// import fs from "fs" ; //importing node package fs 
// import http from "http"// will host our URL


// const port = 4000;// port where the server will be hosted

// //*req is an object containing information about the HTTP request that raised the event.
// //In response to req, you use res to send back the desired HTTP response.

// //*The response.writeHead() (Added in v1..0) property is an inbuilt property of the ‘http’ module which sends a response header to the request. 
// //The status code is a 3-digit HTTP status code, like 404. The last argument, headers, are the response headers. 
// //Optionally one can give a human-readable statusMessage as the second argument.



// // here we will create a server that will host our html file and grab file .fs

// const server = http.createServer((req,res)=> {

//     if(req.url === "/"){
//         console.log(req.url); // here we want node to let us know what html file we are onusing our url 
//         res.writeHead(200,{"Content-type": "text/html"});
//         fs.readFile("./index.html", (err,data)=>{
//             // we then use the fs.readme to grab our first cat in "index.html"
//          if(err) throw err; // if we dont find our url, we will receive an error
//             res.write(data)
//             res.end() // here it will end the program.
//          });// with writeHeaad we are allowing JS to grabb our content with HTML
//     }//here we are required to use our "/" in our url in order to see our second cat



// //here we will do the same process with cat2

// if(req.url === "/api"){
//     console.log(req.url);
//     //create the server variable 
//     res.writeHead(200, {"Content-Type": "text/html"});
//     fs.readFile(".cat2.html", (err,data)=>{

//         if(err)throw err;
//         res.write(data);
//         res.end();
//     });
// }
// });

// //here we are telling our server to be hosted on port 4000 in our local host 
// server.listen(port,(err)=>{
//     if(err) console.log("ERORR", err.message); 
//     console.log(`listening on port ${port}`);
// })

// CHOWDER HELLO WORLD NODE

import fs from "fs";
import http from "http";

const port = 3000;

const server = http.createServer((req,res)=>{
    if(req,url === "/"){
        console.log(req.url);
        res.writeHead(200, {"Content-type": "text/html"});
        fs.readFile("./index.html", (err,data)=>{
            if(err)throw err;
            res.write(data);
            res.end();
        });
    }
})
server.listen(port,(err)=>{
    if(err) console.log("ERROR", err.message);
    console.log(`listening on port ${port}`)
})



