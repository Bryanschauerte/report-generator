module.exports = {



  handleMonthCharge: function handleMonthCharge(req, res) {
    var stripeKeys = require('../config/stripeKeys')

    var stripe = require("stripe")(stripeKeys.test.secretKey);



    var stripeToken = req.body.stripeToken;


    stripe.charges.create({
      amount: 500, // amount in cents, again
      currency: "usd",
      source: stripeToken,
      description: "One Month"
    }, function(err, charge) {
      if (err && err.type === 'StripeCardError') {
        // The card has been declined
      res.send(err)
        console.log(err, "error");
      }else {
        res.send("month")
      }

    });

  },



  handleYearCharge: function handleYearCharge(req, res) {
    var stripeKeys = require('../config/stripeKeys')
    var stripe = require("stripe")(stripeKeys.test.secretKey);
    var stripeToken = req.body.stripeToken;

    var charge = stripe.charges.create({
      amount: 4000, // amount in cents, again
      currency: "usd",
      source: stripeToken,
      description: "One Month"
    }, function(err, charge) {
      if (err && err.type === 'StripeCardError') {
        res.send(err)

      }else {
        res.send("year")
      }

    });

  }
}
