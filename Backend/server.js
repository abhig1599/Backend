// const express = require('express')
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!')
});

//give me alist of five jokes
app.get('/api/jokes', (req, res) => {
    const jokes = [
    {
        id:"1",
        name:"abhi",
        descripition:"1234"
    },
    {
        id:"2",
        name:"abhi",
        descripition:"1234"
    },
    {
        id:"3",
        name:"abhi",
        descripition:"1234"
    }
];
    console.log("this is jokes")
    res.send(jokes);
});




const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

