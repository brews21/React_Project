const express = require('express'); // uses common modules for node -- use these on server side
//import express from 'express' -- would be use on the front end

// the express app variable
const app = express();

// app -- represent the underlining express app
// get -- route handler, http request (get, put, post, delete, patch)
// '/' - watch for incoming requests -- route portion of the handler -- localhost:5000/
// req -- 'request' js object that represents the incoming data
// res -- 'response' js object that send back teh data
// => -- excute the following
app.get('/', (req, res) => {
    res.send({hi: 'there'});
});

// listen on port 5000
// const PORT = process.env.PORT || 5000; // boolean variable for deciding what the value should be -- either get the env var or be 5000
app.listen(5000);
