var mongoose = require('mongoose')
  , fs = require('fs')
  , Customer = mongoose.model('Customer');

module.exports = {
	index_json: function (req, res) {
		Customer.find({}, function (err, results) {
			if (err) {
				res.send(err);
			}
			else {
				res.send(results);
			}
		});
	},
	create: function (req, res) {
		console.log("New customer info: ", req.body);
		var a = new Customer(req.body);
		a.save(function(err) {
			if (err) {
				res.send(JSON.stringify(err));
			}
			else {
				res.send('The customer has successfully been created.');
			}
		});
	},
	test: function (req, res) {
		Customer.find({}, function (err, results) {
			res.send(results);
		});
	}
}