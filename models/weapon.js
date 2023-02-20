const mongoose = require('mongoose');

const { Schema } = mongoose;

const WeaponSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  manufacturer: { type: Schema.Types.ObjectId, ref: 'Manufacturer', required: true },
  class: [{ type: Schema.Types.ObjectId, ref: 'Class', required: true }],
  ammo: { type: Schema.Types.ObjectId, ref: 'Ammo', required: true },
  imageUrl: { type: String },
});

WeaponSchema.virtual('url').get(function () {
  return `/weapon/${this._id}`;
});

module.exports = mongoose.model('Weapon', WeaponSchema);
