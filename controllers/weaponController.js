const Weapon = require('../models/weaponModel');

exports.index = (req, res) => {
  res.send("NOT IMPLEMENTED: Site Home Page");
};

// Display list of all Weapons.
exports.weapon_list = (req, res) => {
  res.send('NOT IMPLEMENTED: Weapon list');
}

// Display detail page for a specific Weapon.
exports.weapon_detail = (req, res) => {
  res.send('NOT IMPLEMENTED: Weapon detail: ' + req.params.id);
}

// Display Weapon create form on GET.
exports.weapon_create_get = (req, res) => {
  res.send('NOT IMPLEMENTED: Weapon create GET');
}

// Handle Weapon create on POST.
exports.weapon_create_post = (req, res) => {
  res.send('NOT IMPLEMENTED: Weapon create POST');
}

// Display Weapon delete form on GET.
exports.weapon_delete_get = (req, res) => {
  res.send('NOT IMPLEMENTED: Weapon delete GET');
}

// Handle Weapon delete on POST.
exports.weapon_delete_post = (req, res) => {
  res.send('NOT IMPLEMENTED: Weapon delete POST');
}

// Display Weapon update form on GET.
exports.weapon_update_get = (req, res) => {
  res.send('NOT IMPLEMENTED: Weapon update GET');
}

// Handle Weapon update on POST.
exports.weapon_update_post = (req, res) => {
  res.send('NOT IMPLEMENTED: Weapon update POST');
}
