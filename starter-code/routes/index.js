const express = require('express');
const router = express.Router();

router.get('/index', function(req, res, next) {
  if(req.user){
    debug(req.user);
  }else{
    debug("User is not logged in");
  }
  res.render('index', { title: 'Express', user:req.user });
});

module.exports = router;
