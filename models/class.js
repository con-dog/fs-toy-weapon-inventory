const mongoose = require('mongoose');

const { Schema } = mongoose;

const ClassSchema = new Schema({
  name: { type: String, required: true },
});

ClassSchema.virtual('url').get(function () {
  return `/class/${this._id}`;
});

module.exports = mongoose.model('Class', ClassSchema);
