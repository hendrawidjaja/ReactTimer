var express = require('express');

// create our app
var app = express();
const PORT = process.env.PORT || 3000;

// redirect https -> http
app.use(function(req, resp, next) {
    if (req.headers['x-forwarded-proto'] === 'https') {
        resp.redirect('http://' + req.hostname + req.url);
    } else {
        next();
    }
});

app.use(express.static('public'));

app.listen(PORT, function(){
    console.log('Express server is up on port ' + PORT);
});
