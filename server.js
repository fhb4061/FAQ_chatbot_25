
const express = require('express');
const app = express();

// if protocol is used are NOT HTTPS
// redirect it to the same url but with HTTPS
const forceSSL = function(){
    return function (req, res, next){
        if (res.headers['x-forward-proto'] !== 'https')
        {
            return res.redirect(
                ['https://', req.get('Host'), req.url].join('')]
            );
        }
        next();
    }
}
// Serve only the static files from the dist directory
app.use(express.static(__dirname + '/dist'));
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
