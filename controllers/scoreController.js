const db = require("../models");

module.exports ={


    findAll: function(req, res) {
        db.Score
          .find()
          .sort({ score: -1 })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      saveScore: function(req,res){
        console.log(req.body)
        db.Score
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
      },
      findUserScore: function(req, res){
        db.Score
        .find({userName: req.params.name})
        .sort({score: -1})
        .limit(1)
        .then(dbUserdata => res.json(dbUserdata))
        .catch(err => res.status(422).json(err));
      } 

}