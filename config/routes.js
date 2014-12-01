module.exports = function Routes(app) {
	app.get('/', function(req, res) { res.render('index', { title: 'mini-store'}); });
};