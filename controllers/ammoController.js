const Ammo = require('../models/ammo');

// Display list of all ammo
exports.ammoList = (req, res) => {
  res.send('NOT IMPLEMENTED: Ammo list');
};

exports.ammoDetail = (req, res) => {
  res.send('NOT IMPLEMENTED: Ammo detail: ' + req.params.id);
};

exports.ammoCreateGet = (req, res) => {
  res.send('NOT IMPLEMENTED: Ammo create GET');
};

exports.ammoCreatePost = (req, res) => {
  res.send('NOT IMPLEMENTED: Ammo create POST');
};

exports.ammoDeleteGet = (req, res) => {
  res.send('NOT IMPLEMENTED: Ammo delete GET');
};

exports.ammoDeletePost = (req, res) => {
  res.send('NOT IMPLEMENTED: Ammo delete POST');
};
