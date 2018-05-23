
const express = require('express');
const app = express();
const path = require('path');


// Serve only the static files from the dist directory
app.use(express.static(__dirname + '/dist'));
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

//PathLocationStrategy
app.get('/*', function(req,res) {    
    res.sendFile(path.join(__dirname+'/chatbot25/dist/chatbot25/index.html'));
    });
