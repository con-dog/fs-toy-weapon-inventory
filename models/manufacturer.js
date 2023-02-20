const mongoose = require('mongoose');

const { Schema } = mongoose;

const ManufacturerSchema = new Schema({
	name: { type: String, required: true },
	country: { type: String, required: true },
	imageUrl: { type: String },
});

ManufacturerSchema.virtual('url').get(function () {
	return `/manufacturer/${this._id}`;
}

module.exports = mongoose.model('Manufacturer', ManufacturerSchema);
