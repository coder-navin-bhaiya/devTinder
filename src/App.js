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


//!Testing of "/user" by GET,PUSH,DELETE
app.get("/user", (req, res)=>{
    //send database
    res.send({firstName: "Navin", lastName: "Kumar"})
} );

app.post("/user", (req,res)=>{
    console.log("save data to the Database");
    //than send the response
    res.send("Data successfully saved to the database!")
})
app.delete("/user", (req,res)=>{
    
    res.send("Data successfully deleted!")
})


//? for route "/hello"
app.use("/hello", (req,res)=>{
    res.send("Hello Hello Hello!");
} );

//?handel for route "/test"
app.use("/test", (req,res)=>{
    res.send("Hello from the server from path test!");
} );


//? handel from "/"
app.use("/", (req,res)=>{
    res.send("Hello from dashboard!");
} );


//!step-3:--
//listen the server with port number
app.listen(7777, ()=>{
    console.log("Server is successfully listening to port 7777")
});