// const http = require('http');

// function createserver(request,response){

//     console.log('a new request has been made')

//     const movies = ['Vikram','Beast','Etharkkum thunindhavan','valimai','the warriorr'];

//     response.end(JSON.stringify(movies));
// }

// const server = http.createServer(createserver);

// server.listen(3000,function(){
//     console.log('server is running on port 3000');
// })
// ------------------------------------------------
// const http = require('http');
// const express = require('express'); 
// const server = http.createServer(function abc(request,response){
//     response.end("Hello World");
// });

// server.listen(3000,function(){
//     console.log("Server is running on port 3000");
// });

// ------------------------------------------------------

const express = require('express');

const server = express();


//* DATABASE

const movies = [
    {
        id : 1,
    name: 'Vikram'
    }
    ,
    {
        id : 2,
        name: 'Beast'
    },
    {
        id : 3,
        name: 'Etharkkum thunindhavan'
    },
    {
        id : 4,
        name: 'valimai'
    },
    { 
        id : 5,
        name: 'the warriorr'
    }
];




server.use(express.json());

server.get('/',function(req,res){
    res.json(movies);
})

server.post('/',function(req,res){
    console.log(req.body);
    movies.push(req.body);  
    res.send("Ok your movie is added");
})

server.put('/',function(req,res){
    var id = req.body.id;
    var name = req.body.name;

    var index = movies.findIndex(el => el.id == id)

    movies[index] = {
        ...movies[index],
        name:name
    }

    console.log("movies updated successfully");
    res.send("Movie updated in database..")
})

server.delete('/',function(req,res){
    var id = req.body.id ;
    var name = req.body.name;

    movies[id -1] = movies.delete;

    res.send("Movie Deleted")
})

server.listen(3000,function(){
    console.log("Server is running on port 3000....")
})