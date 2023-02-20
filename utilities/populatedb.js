#! /usr/bin/env node

console.log(
  'This script populates some test ammo, ammoinstances, classes, manufacturers, weapons ',
  'weaponinstances to your database. Specified database as argument: ',
  'e.g.: node populatedb "mongodb+srv://cooluser:coolpassword@cluster0.lz91hw2.mongodb.net/local_library?retryWrites=true&w=majority"'
);

// Get arguments passed on command line
const userArgs = process.argv.slice(2);

const async = require('async')
const Ammo = require('./models/ammo')
const AmmoInstance = require('./models/ammoinstance')
const Class = require('./models/class')
const Manufacturer = require('./models/manufacturer')
const Weapon = require('./models/weapon')
const WeaponInstance = require('./models/weaponinstance')



const mongoose = require('mongoose');
mongoose.set('strictQuery', false); // Prepare for Mongoose 7

const mongoDB = userArgs[0];

main().catch(err => console.log(err));
async function main () {
  await mongoose.connect(mongoDB);
}

const ammos = []
const ammoinstances = []
const classes = []
const manufacturers = []
const weapons = []
const weaponinstances = []

function ammoCreate (name, imageUrl = "", cb) {
  const ammoDetail = { name: name, imageUrl: imageUrl };
  const ammo = new Ammo(ammoDetail);

  ammo.save(function (err) {
    if (err) {
      console.log("ERROR CREATING Ammo: " + ammo)
      cb(err, null)
      return
    }
    console.log('New Ammo: ' + ammo);
    ammos.push(ammo)
    cb(null, ammo)
  });
}

function ammoinstanceCreate (ammo, cb) {
  const ammoinstanceDetail = { ammo: ammo };
  const ammoinstance = new AmmoInstance(ammoinstanceDetail);

  ammoinstance.save(function (err) {
    if (err) {
      console.log("ERROR CREATING AmmoInstance: " + ammoinstance);
      cb(err, null)
      return
    }
    console.log('New AmmoInstance: ' + ammoinstance);
    ammoinstances.push(ammoinstance)
    cb(null, ammoinstance)
  });
}

function classCreate (name, cb) {
  const class_ = new Class({ name: name });

  class_.save(function (err) {
    if (err) {
      console.log("ERROR CREATING Class: " + class_)
      cb(err, null);
      return;
    }
    console.log('New Class: ' + class_);
    classes.push(class_)
    cb(null, class_);
  });
}

function manufacturerCreate (name, country, imageUrl = "", cb) {
  const manufacturerDetail = { name: name, country: country, imageUrl: imageUrl };

  const manufacturer = new Manufacturer(manufacturerDetail);
  manufacturer.save(function (err) {
    if (err) {
      cb(err, null);
      return;
    }
    console.log('New Manufacturer: ' + manufacturer);
    manufacturers.push(manufacturer)
    cb(null, manufacturer);
  });
}

function weaponCreate (name, description, manufacturer, class_, ammo, imageUrl = "", cb) => {
  const weaponDetail = { name: name, description: description, manufacturer: manufacturer, ammo: ammo, imageUrl: imageUrl };
  if (class_ != false) weaponDetail.class = class_;

  const weapon = new Weapon(weaponDetail);
  weapon.save(function (err) {
    if (err) {
      console.log("ERROR CREATING Weapon: " + weapon)
      cb(err, null);
      return;
    }
    console.log('New Weapon: ' + weapon);
    weapons.push(weapon)
    cb(null, weapon);
  });
}

function weaponinstanceCreate (weapon, status, cb) {
  const weaponinstanceDetail = { weapon: weapon, status: status };

  const weaponinstance = new WeaponInstance(weaponinstanceDetail);
  weaponinstance.save(function (err) {
    if (err) {
      console.log("ERROR CREATING WeaponInstance: " + weaponinstance);
      cb(err, null);
      return;
    }
    console.log('New WeaponInstance: ' + weaponinstance);
    weaponinstances.push(weaponinstance)
    cb(null, weaponinstance);
  });
}


function createManufacturers (cb) {
  async.parallel([
    function (callback) {
      manufacturerCreate('Finineiee', 'USA', 'https://media.discordapp.net/attachments/1076700712584613948/1077119000154214410/corndog_Military_Industrial_Complex_Fisher_Price_Logo_961a4c5c-297f-45b2-9d72-29bb60c4ad4f.png?width=601&height=601', callback);
    },
    function (callback) {
      manufacturerCreate('AL MME', 'India', 'https://media.discordapp.net/attachments/1076700712584613948/1077119820417470464/corndog__ACME_weapon_co_36c0b66f-a884-4f32-9edd-e1397468ec52.png?width=601&height=601', callback);
    },
    function (callback) {
      manufacturerCreate('North Korean Voluntary Rocket Club', 'North Korea', 'https://media.discordapp.net/attachments/1076700712584613948/1077120870566350890/corndog_North_Korea_Volunteer_Rocketry_club_4aa835d1-e2c3-4834-88b4-583e7094e5ad.png?width=601&height=601', callback);
    },
    function (callback) {
      manufacturerCreate('Barbie Battalion', 'Australia', 'https://media.discordapp.net/attachments/1076700712584613948/1076704438628134942/corndog_Military_fatigues_Barbie_doll_style_of_Mattel_f9a9d557-8302-466f-9482-f1874680d788.png?width=601&height=601', callback);
    }
  ],
    cb); // Optional callback
};

function createClasses (cb) {
  async.parallel([
    function (callback) {
      classCreate('Gun', callback);
    },
    function (callback) {
      classCreate('Bomb', callback);
    },
    function (callback) {
      classCreate('Rocket', callback);
    },
    function (callback) {
      classCreate('Launcher', callback);
    },
    function (callback) {
      classCreate('Melee', callback);
    },
    function (callback) {
      classCreate('Land', callback);
    },
    function (callback) {
      classCreate('Air', callback);
    },
    function (callback) {
      classCreate('Sea', callback);
    },
  ],
    cb); // Optional callback
};

function createAmmo (cb) {
  async.parallel([
    function (callback) {
      ammoCreate('Water', callback);
    },
    function (callback) {
      ammoCreate('Marbles', callback);
    },
    function (callback) {
      ammoCreate('Salt', callback);
    },
    function (callback) {
      ammoCreate('Potatoes', callback);
    },
  ],
    cb); // Optional callback
};

function createWeapons (cb) {
  async.parallel([
    function (callback) {
      weaponCreate('Water Gun', 'A water gun that shoots water', manufacturers[0], classes[0], ammos[0], 'https://media.discordapp.net/attachments/1076700712584613948/1076704097098539008/corndog_AR-16_assault_rifle_style_of_Fisher_Price_6ee23efc-7d74-4e77-bf1d-c62f59556dd9.png?width=601&height=601', callback);
    },
    function (callback) {
      weaponCreate('Marble Gun', 'A gun that shoots marbles', manufacturers[1], classes[0], ammos[1], 'https://media.discordapp.net/attachments/1076700712584613948/1076704165058842724/corndog_Bazooka_style_of_Fisher_Price_f7b31cd2-332f-4121-b485-c8cb95fca4a4.png?width=601&height=601', callback);
    },
    function (callback) {
      weaponCreate('As-salt Gun', 'A gun that shoots salt', manufacturers[2], classes[0], ammos[2], 'https://media.discordapp.net/attachments/1076700712584613948/1076711903990132756/corndog_sawn-off_shotgun_childrens_toy_7ba47530-23b6-4568-b5ab-b1dfaa5fd261.png?width=601&height=601', callback);
    },
    function (callback) {
      weaponCreate('Potato Gun', 'A gun that shoots potatoes', manufacturers[3], classes[0], ammos[3], 'https://media.discordapp.net/attachments/1076700712584613948/1077126473506357288/corndog_ACME_potato_gun_1b6acaf3-3681-457c-a7ca-25fde8e95a1a.png?width=601&height=601', callback);
    },
    function (callback) {
      weaponCreate('Smiley Bomb', 'A bomb that has a big smile', manufacturers[0], classes[1], ammos[0], 'https://media.discordapp.net/attachments/1076700712584613948/1076704267873828884/corndog_smiley_face_grenade_style_of_Fisher_Price_f1f9532b-bb83-47b8-a5eb-70de431303f9.png?width=601&height=601', callback);
    },
  ],
    cb); // Optional callback
};


async.series([
  createGenreAuthors,
  createBooks,
  createBookInstances
],
  // Optional callback
  function (err, results) {
    if (err) {
      console.log('FINAL ERR: ' + err);
    }
    else {
      console.log('BOOKInstances: ' + bookinstances);

    }
    // All done, disconnect from database
    mongoose.connection.close();
  });
