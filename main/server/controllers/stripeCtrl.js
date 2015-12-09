import User from '../models/User';

module.exports = {


  addMonthDate(req, res){

      User.findById(req.params.userId, ( err, user ) => {
        if (err) {
          console.log("finding User Error")
          return res.status(500).send(err);
        }

        var setDateObject = function () {
            var endDate = function () {
                return new Date();
            }();
            var month = endDate.getMonth();
            var year = endDate.getFullYear();
            if(month == 11){
              month = 0;
              year +=1;
            }else {
              month +=1;
            }
            endDate.setFullYear(year);
            endDate.setMonth(month);
    return endDate;
        }();

user.set('dateOfSubscriptionEnd', setDateObject);
        user.save(( err, updatedUser ) => {
          if (err) {
            return res.status(500).send(err);
          }


        });
      });

  },




addYearDate(req, res){

    User.findById(req.params.userId, ( err, user ) => {
      if (err) {
        console.log("finding User Error")
        return res.status(500).send(err);
      }

      var setDateObject = function () {

          var endDate = function () {
              return new Date();
          }();

          var year = endDate.getFullYear();
          year +=1;
          endDate.setFullYear(year);
  return endDate;
      }();

user.set('dateOfSubscriptionEnd', setDateObject);
      user.save(( err, updatedUser ) => {
        if (err) {
          return res.status(500).send(err);
        }


      });
    });

},

handleMonthCharge(req, res, next) {
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
console.log(err, "error");
    return res.send(err)

      }

    });
next();
  },



handleYearCharge(req, res, next) {
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

      }

    });
next();
  }
}
