const express = require('express');
const path = require('path');

const app = express();

const PORT = 8080;

app.use(express.static(__dirname + '/dist/mazeangular'));
app.get('/*', (req,res)=>{
    res.sendFile(path.join(__dirname + '/dist/mazeangular/index.html'));
});

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`app started at ${8080} port`);
    console.log(`http://localhost:${PORT}/`);
  });