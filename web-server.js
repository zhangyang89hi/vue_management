var express = require('express');
var cors = require('cors');
var proxy = require('express-http-proxy');
var bodyParser = require('body-parser');

var config = require('./config/index');

var port = config.build.port;
var app = express();
app.use(cors());
app.use('/juhe', proxy('http://v.juhe.cn'));

// body parser  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));  

var router = express.Router();
// var appData = require('./data.json');
// var apiRoutes = express.Router();

// apiRoutes.get('/login', function(req, res){
//   res.json({
//     errno:0,
//     data:8
//   })
// });
// app.use('/', apiRoutes);

/* POST listing. */  
app.post('/login', function(req, res, next) {

  // console.log(req.param("password"));
  console.log(req.body);
  console.log(req.body.name);
  console.log(req.body.password);

  if( (req.body.name=='zy') && (req.body.password=='zy')){
      res.send({"login":"success", "responseCode": "000000"});
  }
  else{
      res.send({"login":"fail"});
  }
  
});

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
