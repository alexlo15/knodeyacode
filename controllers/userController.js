const db = require("../models");

module.exports ={

    updateIfStudiedTopic: function(req, res){
        db.User
            .findByIdAndUpdate(req.params.id, {$set: {
                flashcardCSS: req.body.flashcardCSS,
                flashcardHTML: req.body.flashcardHTML,
                flashcardJS: req.body.flashcardJS,
            }}, {new:true})
            .then(dbUserdata => res.status(200).json(dbUserdata))
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            })
    }

}