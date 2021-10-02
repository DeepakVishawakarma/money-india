const express = require("express");
const router = express.Router();
const Plan = require("./priceModel");

//get plans

router.get("/", (req, res) => {
  res.send("<center><h1>Your App is Running</h1></center>");
});

router.get("/plan-listing", (req, res) => {
  Plan.find()
    .then((result) => {
      console.log("get all plan : ", result);
      res.send(result);
    })
    .catch((err) => {
      res.send({ error: err });
    });
});

//post plans
router.post("/plan", (req, res) => {
  console.log("req", req.body);
  let planData = {
    price: req.body.price,
    url: req.body.url,
  };
  console.log("planData: ", planData);
  Plan.create(planData)
    .then((result) => {
      console.log("insert plan : ", result);
      res.send(result);
    })
    .catch((err) => {
      res.send({ error: err });
    });
});

//update plans
router.put("/plan/:id", (req, res) => {
  Plan.findOne({ _id: req.params.id })
    .then((result) => {
      console.log("get plan by id : ", result);
      result.price = req.body.price;
      result.url = req.body.url;
      result
        .save()
        .then((resp) => {
          console.log("updated plan : ", resp);
          res.send(resp);
        })
        .catch((err) => {
          res.send({ error: err });
        });
    })
    .catch((err) => {
      res.send({ error: err });
    });
});

module.exports = router;
