var path = require('path')
  , rootPath = path.normalize(__dirname + '/..')
  , templatePath = path.normalize(__dirname + '/../server/mailer/templates')
  , notifier = {
  		service: 'postmark',
  		APN: false,
  		email: false, //true
  		actions: ['comment'],
  		tplPath: templatePath,
  		key: 'POSTMARK_KEY',
  		parseAppId: 'PARSE_APP_ID',
  		parseApiKey: 'PARSE_MASTER_KEY'
  }
module.exports = {
	development: {
		db: 'mongodb://localhost/mini-store-test',
		root: rootPath,
		notifier: notifier,
		app: {
			name: 'Mini-Store 3'
		}
	},
	test: {
		db: 'mongodb://localhost/mini-store3',
		root: rootPath,
		notifier: notifier,
		app: {
			name: 'Mini-Store 3'
		}
	},
	production: {}
}