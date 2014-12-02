var mongoose = require('mongoose');
var OrderSchema = new mongoose.Schema({
	customer: String,
	product: String,
	quantity: Number,
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now },
	hidden: Boolean
});
OrderSchema.path('customer').required(true, 'Please select a customer.');
OrderSchema.path('product').required(true, 'Please choose a product to purchase.');
OrderSchema.path('quantity').required(true, 'Please select the number of products to purchase.');