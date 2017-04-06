var express = require('express');
var app = express();
var httpProxy = require('http-proxy');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/dist'));

httpProxy.createServer(80, 'http://104.197.128.152').listen(process.env.PORT || 8000);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
