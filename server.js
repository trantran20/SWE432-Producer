var express = require('express');
var app = express();
// Render static files
app.set('view engine', 'ejs');
app.use('/images', express.static('./images'));
app.use('/music', express.static('./music'));
app.get('/', function(req, res) {
    res.render('pages/index');
  });
app.get('/producer.html', function(req, res) {
    res.render('pages/index');
  });
app.get('/Playlist.html',function(req,res){
    res.render('pages/Playlist');
});
// Port website will run on
app.listen(8080);
console.log('Server is listening on port 8080');