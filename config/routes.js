var customers = require('./../server/controllers/customers.js');



module.exports = function Routes(app) {
	app.get('/', function (req, res) { res.render('index', { title: 'mini-store'}); });
	app.post('/customers/create', function (req, res) { customers.create(req, res) });
	app.get('/test_customers', function (req, res) { customers.test(req, res) });
	app.get('/customers.json', function (req, res) { customers.index_json(req, res) });
};