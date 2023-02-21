const async = require('async');

const Ammo = require('../models/ammo');
const Ammoinstance = require('../models/ammoinstance');
const Class = require('../models/class');
const Manufacturer = require('../models/manufacturer');
const Weapon = require('../models/weapon');
const Weaponinstance = require('../models/weaponinstance');

exports.index = (req, res) => {
  async.parallel({
    weaponCount: (cb) => {
      Weapon.countDocuments({}, cb);
    },
    weaponinstanceCount: (cb) => {
      Weaponinstance.countDocuments({}, cb);
    },
    ammoCount: (cb) => {
      Ammo.countDocuments({}, cb);
    },
    ammoinstanceCount: (cb) => {
      Ammoinstance.countDocuments({}, cb);
    },
    classCount: (cb) => {
      Class.countDocuments({}, cb);
    },
    manufacturerCount: (cb) => {
      Manufacturer.countDocuments({}, cb);
    },
  }, (err, results) => {
    res.render('index', { title: 'Home', error: err, data: results });
  });
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
