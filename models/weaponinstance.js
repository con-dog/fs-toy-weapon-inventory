const mongoose = require('mongoose');

const { Schema } = mongoose;

const WeaponInstanceSchema = new Schema({
  weapon: { type: Schema.Types.ObjectId, ref: 'Weapon', required: true },
  status: {
    type: String, enum: ['Available', 'Maintenance', 'Loaned', 'Reserved'], default: 'Maintenance', required: true,
  },
});

WeaponInstanceSchema.virtual('url').get(function () {
  return `/weaponinstance/${this._id}`;
});

module.exports = mongoose.model('WeaponInstance', WeaponInstanceSchema);
