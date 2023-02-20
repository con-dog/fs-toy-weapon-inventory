const Ammo = require('../models/ammo');

// Display list of all ammo
exports.ammo_list = (req, res) => {
  res.send('NOT IMPLEMENTED: Ammo list');
};

exports.ammo_detail = (req, res) => {
  res.send('NOT IMPLEMENTED: Ammo detail: ' + req.params.id);
};

exports.ammo_create_get = (req, res) => {
  res.send('NOT IMPLEMENTED: Ammo create GET');
};

exports.ammo_create_post = (req, res) => {
  res.send('NOT IMPLEMENTED: Ammo create POST');
};

exports.ammo_delete_get = (req, res) => {
  res.send('NOT IMPLEMENTED: Ammo delete GET');
};

exports.ammo_delete_post = (req, res) => {
  res.send('NOT IMPLEMENTED: Ammo delete POST');
};
