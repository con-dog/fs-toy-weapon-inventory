const mongoose = require('mongoose');

const { Schema } = mongoose;

const AmmoSchema = new Schema({
  name: { type: String, required: true },
  imageUrl: { type: String },
});

AmmoSchema.virtual('url').get(function () {
  return `/ammo/${this._id}`;
});

module.exports = mongoose.model('Ammo', AmmoSchema);
