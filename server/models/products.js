var mongoose = require('mongoose');
var ProductSchema = new mongoose.Schema({
	name: String,
	description: String,
	quantity: { type: Number, default: 0 },
	pic: String,
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now},
	hidden: Boolean
});
ProductSchema.path('name').required(true, 'Please enter a name for this item.');
mongoose.model('Product', ProductSchema);