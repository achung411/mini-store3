var mongoose = require('mongoose');
var CustomerSchema = new mongoose.Schema({
	name: String,
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now },
	hidden: Boolean
});
CustomerSchema.path('name').required(true, 'Please enter the customer\'s name.');
mongoose.model('Customer', CustomerSchema);