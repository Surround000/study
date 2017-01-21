var  express = require('express');
var  app     = express();
var  router  = express.Router();
var  port    = process.env.PORT || 8080;
var  bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extend:true}));
router.use(function(req,res,next){
    var date = new Date();
    var time = date.toLocaleString();
    console.log(time);
    next();
})
router.post('/',function(req,res){
        var name = req.body.name;
        res.json({message:'hello'+name});
});
app.use('/home',router);
app.listen(port);
console.log('magic happens on port'+port);