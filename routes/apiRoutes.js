const router = require("express").Router();
const db = require("../models");
const salesController = require("../controllers/salesController")

router.get("/sales", (req, res) => {
    db.Sales.find({
        title: { $regex: new RegExp(req.query.q, 'i')}
      })
        .then(recipes => res.json(recipes))
        .catch(err => res.status(422).end());
    });

router.route("/data")
    .get(salesController.findAll);

router.route("/orders")
    .put(salesController.update)
    .post(salesController.push)
    
module.exports = router;
