const db = require("../models");

module.exports = {
  
  find: function(req, res) {
    console.log("find: ", req.params.query);
    db.Stack
      .find({ theKey: req.params.query })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("create: ", req.body);
    db.Stack
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    console.log("update: ", req.body);
    db.Stack
      .findOneAndUpdate({ theKey: req.body.theKey }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    console.log("delete: ", req.params.query);
    db.Stack
      .findOneAndDelete({ theKey: req.params.query })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
