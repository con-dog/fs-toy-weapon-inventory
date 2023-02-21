const express = require('express');

const router = express.Router();

// Require controller modules.
const weaponController = require('../controllers/weaponController');
const weaponinstanceController = require('../controllers/weaponinstanceController');
const classController = require('../controllers/classController');
const ammoController = require('../controllers/ammoController');
const ammoinstanceController = require('../controllers/ammoinstanceController');
const manufacturerController = require('../controllers/manufacturerController');

// WEAPON ROUTES //

// GET catalog home page.
router.get('/', weaponController.index);

// GET request for creating a Weapon. NOTE This must come before routes that display Weapon (uses id).
router.get('/weapon/create', weaponController.weaponCreateGet);

// POST request for creating Weapon.
router.post('/weapon/create', weaponController.weaponCreatePost);

// GET request to delete Weapon.
router.get('/weapon/:id/delete', weaponController.weaponDeleteGet);

// POST request to delete Weapon.
router.post('/weapon/:id/delete', weaponController.weaponDeletePost);

// GET request to update Weapon.
router.get('/weapon/:id/update', weaponController.weaponUpdateGet);

// POST request to update Weapon.
router.post('/weapon/:id/update', weaponController.weaponUpdatePost);

// GET request for one Weapon.
router.get('/weapon/:id', weaponController.weaponDetail);

// GET request for list of all Weapon items.
router.get('/weapons', weaponController.weaponList);

// WEAPONINSTANCE ROUTES //

// GET request for creating a WeaponInstance. NOTE This must come before route for id (i.e. display weaponinstance).
router.get('/weaponinstance/create', weaponinstanceController.weaponinstanceCreateGet);

// POST request for creating WeaponInstance.
router.post('/weaponinstance/create', weaponinstanceController.weaponinstanceCreatePost);

// GET request to delete WeaponInstance.
router.get('/weaponinstance/:id/delete', weaponinstanceController.weaponinstanceDeleteGet);

// POST request to delete WeaponInstance.
router.post('/weaponinstance/:id/delete', weaponinstanceController.weaponinstanceDeletePost);

// GET request to update WeaponInstance.
router.get('/weaponinstance/:id/update', weaponinstanceController.weaponinstanceUpdateGet);

// POST request to update WeaponInstance.
router.post('/weaponinstance/:id/update', weaponinstanceController.weaponinstanceUpdatePost);

// GET request for one WeaponInstance.
router.get('/weaponinstance/:id', weaponinstanceController.weaponinstanceDetail);

// GET request for list of all WeaponInstance.
router.get('/weaponinstances', weaponinstanceController.weaponinstanceList);

// CLASS ROUTES //

// GET request for creating a Class. NOTE This must come before route that displays Class (uses id).
router.get('/class/create', classController.classCreateGet);

// POST request for creating Class.
router.post('/class/create', classController.classCreatePost);

// GET request to delete Class.
router.get('/class/:id/delete', classController.classDeleteGet);

// POST request to delete Class.
router.post('/class/:id/delete', classController.classDeletePost);

// GET request to update Class.
router.get('/class/:id/update', classController.classUpdateGet);

// POST request to update Class.
router.post('/class/:id/update', classController.classUpdatePost);

// GET request for one Class.
router.get('/class/:id', classController.classDetail);

// GET request for list of all Class.
router.get('/classes', classController.classList);

// AMMO ROUTES //

// GET request for creating a Ammo. NOTE This must come before route that displays Ammo (uses id).
router.get('/ammo/create', ammoController.ammoCreateGet);

// POST request for creating Ammo.
router.post('/ammo/create', ammoController.ammoCreatePost);

// GET request to delete Ammo.
router.get('/ammo/:id/delete', ammoController.ammoDeleteGet);

// POST request to delete Ammo.
router.post('/ammo/:id/delete', ammoController.ammoDeletePost);

// GET request for one Ammo.
router.get('/ammo/:id', ammoController.ammoDetail);

// GET request for list of all Ammo.
router.get('/ammos', ammoController.ammoList);

// AMMOINSTANCE ROUTES //

// GET request for creating a AmmoInstance. NOTE This must come before route that displays AmmoInstance (uses id).
router.get('/ammoinstance/create', ammoinstanceController.ammoinstanceCreateGet);

// POST request for creating AmmoInstance.
router.post('/ammoinstance/create', ammoinstanceController.ammoinstanceCreatePost);

// GET request to delete AmmoInstance.
router.get('/ammoinstance/:id/delete', ammoinstanceController.ammoinstanceDeleteGet);

// POST request to delete AmmoInstance.
router.post('/ammoinstance/:id/delete', ammoinstanceController.ammoinstanceDeletePost);

// GET request for list of all Ammo.
router.get('/ammoinstance', ammoController.ammoList);

// MANUFACTURER ROUTES //

// GET request for creating a Manufacturer. NOTE This must come before route that displays Manufacturer (uses id).
router.get('/manufacturer/create', manufacturerController.manufacturerCreateGet);

// POST request for creating Manufacturer.
router.post('/manufacturer/create', manufacturerController.manufacturerCreatePost);

// GET request to delete Manufacturer.
router.get('/manufacturer/:id/delete', manufacturerController.manufacturerDeleteGet);

// POST request to delete Manufacturer.
router.post('/manufacturer/:id/delete', manufacturerController.manufacturerDeletePost);

// GET request to update Manufacturer.
router.get('/manufacturer/:id/update', manufacturerController.manufacturerUpdateGet);

// POST request to update Manufacturer.
router.post('/manufacturer/:id/update', manufacturerController.manufacturerUpdatePost);

// GET request for one Manufacturer.
router.get('/manufacturer/:id', manufacturerController.manufacturerDetail);

// GET request for list of all Manufacturer.
router.get('/manufacturers', manufacturerController.manufacturerList);

module.exports = router;
