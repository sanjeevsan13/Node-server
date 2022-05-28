var express = require('express');
var router = express.Router();
const data = require('../conf')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{});
});

router.get('/search', function(req, res, next) {
  const coockie_id = req.query.Coockie_id
  console.log(coockie_id)
  const currentData = data.filter(el => el.coockie_id == coockie_id)[0]
  console.log("Data",currentData)
  if(currentData){
    res.render('result',{result:currentData.scores,coockie_id:coockie_id});
  }
  else{
    res.render('result',{result:`Coockie_id:${coockie_id} Not Found`,coockie_id:coockie_id})
  }
});

module.exports = router;
