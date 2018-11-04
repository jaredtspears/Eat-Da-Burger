//calling depencency
var express = require('express');

//finding route for burgers.js
var burgers = require('../models/burgerModels.js')

//routing for server
var router = express.Router();

//selecting all burgers from burgers.js
router.get('/api/burgers', (req, res) =>{
    burgers.all(function (data) {
    console.log(data);
        res.json(data);
    });
});

//posting 
router.post("/api/burgers", (req, res) =>{
    
    var eatEmUp;
    if (req.body.eatEmUp == "true"){
        eatEmUp= true;
    }else{eatEmUp=false}

    burgers.create(["burger_name", "eatEmUp"], 
    [req.body.burger_name, eatEmUp], 
      function(result) {
      // Send back the ID of the new quote
        res.json({ id: result.insertId });
        console.log('burger');
      }
    );
  });

  router.put("/api/burgers", (req, res) =>{
      console.log(req.body);
    //   burgers.update()
  })

module.exports = router;