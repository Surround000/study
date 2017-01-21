var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var router = express.Router();
router.get('/',function(req,res){
    console.log(req.query)
    res.send('<h1>hello  '+req.query.name+'</h1>');
});
app.use('/home',router);
app.listen(port);
console.log('Magic happens on listen on '+port);