const mongoose = require('mongoose');

const { Schema } = mongoose;

const AmmoInstanceSchema = new Schema({
  ammo: { type: Schema.Types.ObjectId, ref: 'Ammo', required: true }, // Reference to the associated ammo.
});

AmmoInstanceSchema.virtual('url').get(function () {
  return `/ammoinstance/${this._id}`;
});

module.exports = mongoose.model('AmmoInstance', AmmoInstanceSchema);
