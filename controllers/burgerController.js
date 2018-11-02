//calling depencency
var express = require('express');

//finding route for burgers.js
var burgers = require('../models/burgerModels.js')

//routing for server
var router = express.Router();

//selecting all burgers from burgers.js
router.get('/api/burgers', (req, res) =>{
    burgers.all(function (data) {
        res.json(data);
    });
});

//posting 
router.post("/api/burgers", (req, res) =>{
    burgers.create(["burger_name", "eatDaBurger"], 
    [req.body.burger_name, req.body.eatDaBurger], 
      function(result) {
      // Send back the ID of the new quote
        res.json({ id: result.insertId });
        console.log('burger');
      }
    );
  });
//   router.put('/api/burgers/:id', (req, res) =>{
//     console.log('req.body', req.body);
//     burgers.update({
//         eatDaBurger: req.body.eatDaBurger
//     }, 
//     //all good status end program
//     // res.status(200).end(),
//   })
module.exports = router;