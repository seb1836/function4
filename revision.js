var array4 = ['first', 'second', 'third', 'fourth'];
var array5 = ['random', 'hasard', '8', 'tableau'];

// refaaaaaaactor
var arrayJoin = function(a) {
  let i = 1;
  var b = a[0];

  while (i < a.length) {
    b = b + a[i];
    i = i + 1;
    return b;
  }
};

// BON
var arrayAffectValueAtIndex = function(a, value, index) {
  a[index] = value;
  return a;
};

// BON
var resetArray = function(a) {
  let i = 0;
  while (i < a.length) {
    a[i] = 0;
    console.log(a);
    i = i + 1;
  }
  return a;
};

var hero = {
  name: 'toto',
  class: 'warrior',
  hp: 500,
  weapons: ['sword', 'spear', 'hammer']
};

// refactor
var getWeapons = function(hero) {
  /*let i = 0;
  var newarray = [];
  while (i < hero.weapons.length) {
    newarray[i] = hero.weapons[i];
    i = i + 1;
  }*/
  return hero.weapons;
};

// BON
var getNumberOfWeapons = function(hero) {
  return hero.weapons.length;
};

// BON
var addweapons = function(hero, weapons, string) {
  hero.weapons[hero.weapons.length] = string;
  return hero.weapons;
};

// BON: Creer un nouvel array qui prend en compte la suppression et mettre à jour l'objet
var removeweapon = function(hero, weapons) {
  var newarray = [];
  let i = 0;
  while (i < hero.weapons.length) {
    if (hero.weapons[i] === weapons) {
      hero.weapons[i] = null;
      newarray = hero.weapons;

      console.log(hero.weapons[i]);
    }
    i = i + 1;
  }
  return hero.weapons;
};

var arrayconcat = function(a, b) {
  var newarray = a;

  while (i < b.length) {
    newarray[a.length + i] = b[i];
    i = i + 1;
  }

  return newarray;
};

// Refactor
var arrayJoinSeparator = function(a, separator) {
  let i = 1;
  var b = a[0];

  while (i < a.length) {
    b = b + separator + a[i];
    i = i + 1;
  }
  return b;
};

var removeweapon = function(hero, weapons) {
  var newarray = [];
  let i = 0;
  while (i < hero.weapons.length) {
    if (hero.weapons[i] !== weapons) {
      newarray[i] = hero.weapons[i];
    }
    i = i + 1;
  }
  return newarray;
};
