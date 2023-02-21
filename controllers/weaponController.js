const Weapon = require('../models/weapon');

exports.index = (req, res) => {
  res.send("NOT IMPLEMENTED: Site Home Page");
};

// Display list of all Weapons.
exports.weaponList = (req, res) => {
  res.send('NOT IMPLEMENTED: Weapon list');
}

// Display detail page for a specific Weapon.
exports.weaponDetail = (req, res) => {
  res.send('NOT IMPLEMENTED: Weapon detail: ' + req.params.id);
}

// Display Weapon create form on GET.
exports.weaponCreateGet = (req, res) => {
  res.send('NOT IMPLEMENTED: Weapon create GET');
}

// Handle Weapon create on POST.
exports.weaponCreatePost = (req, res) => {
  res.send('NOT IMPLEMENTED: Weapon create POST');
}

// Display Weapon delete form on GET.
exports.weaponDeleteGet = (req, res) => {
  res.send('NOT IMPLEMENTED: Weapon delete GET');
}

// Handle Weapon delete on POST.
exports.weaponDeletePost = (req, res) => {
  res.send('NOT IMPLEMENTED: Weapon delete POST');
}

// Display Weapon update form on GET.
exports.weaponUpdateGet = (req, res) => {
  res.send('NOT IMPLEMENTED: Weapon update GET');
}

// Handle Weapon update on POST.
exports.weaponUpdatePost = (req, res) => {
  res.send('NOT IMPLEMENTED: Weapon update POST');
}
