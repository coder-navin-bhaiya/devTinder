//creating a server through express js:-->

//!Step-1:-
const express = require("express");


//!step-2:-
const app = express();

//!step-4:-
//?to handle the incoming request from user/client:- 
// app.use( (req,res)=>{
//     res.send("Hello from the server!");
// } );

//? handel from "/"
app.use("/", (req,res)=>{
    res.send("Hello from dashboard!");
} );

//? for route "/hello"
app.use("/hello", (req,res)=>{
    res.send("Hello Hello Hello!");
} );

//?handel for route "/test"
app.use("/test", (req,res)=>{
    res.send("Hello from the server from path test!");
} );





//!step-3:--
//listen the server with port number
app.listen(7777, ()=>{
    console.log("Server is successfully listening to port 7777")
});