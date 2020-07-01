var express = require('express');
var config = require('./config/index');
var cors = require('cors');
var proxy = require('express-http-proxy');

var port = config.build.port;
var app = express();
app.use(cors());
app.use('/juhe', proxy('http://v.juhe.cn'));

var router = express.Router();

// var appData = require('./data.json');

// var apiRoutes = express.Router();

// apiRoutes.get('/appData', function(req, res){
//   res.json({
//     errno:0,
//     data:appData
//   })
// });
// app.use('/api', apiRoutes);

app.use(express.static('./dist'));

//设置跨域访问
// app.all('*', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//   // res.header('Access-Control-Allow-Headers', 'Content-Type');
//   res.header("X-Powered-By",' 3.2.1')
//   res.header("Content-Type", "application/json;charset=utf-8");
//   // add_header 'Access-Control-Allow-Credentials' 'true';
//   next();
// });

router.get('/',function(req, res, next){
  req.url = 'index.html';
  next();
});
app.use(router);

module.exports = app.listen(port, function (err) {
    if (err) {
        console.log(err);
        return
    }
    var uri = 'http://localhost:' + port;
    console.log('Listening at ' + uri + '\n');
});
