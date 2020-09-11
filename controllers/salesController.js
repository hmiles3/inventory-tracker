const db = require("../models")

module.exports = {
    findAll: function(req, res) {
      db.Sales
        .find()
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
      db.Sales
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    push: function(req, res) {
      db.Sales
        .push(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
      db.Sales
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    // remove: function(req, res) {
    //   db.Sales
    //     .findById({ _id: req.params.id })
    //     .then(dbModel => dbModel.remove())
    //     .then(dbModel => res.json(dbModel))
    //     .catch(err => res.status(422).json(err));
    // }
  };
  