// A certain pony farm (cage-free) raises and keeps track of cowboys’ and cowgirls’ ponies. Each pony has a name, id, dietary allergies, and email address (the owner’s email address).

//Given an array of pony objects and an owner’s email address, return an alphabetically ordered array of all foods (without duplicates) that the owner should avoid feeding his/her ponies.

//  NOTE: You are required to use at least one map and one filter.


function getPonyAllergies(ponies, ownerEmail) {
  var isEmail = function(obj) {
    return obj['email'] === ownerEmail;
  };

  var allergies = function(obj) {
    return obj['allergies'];
  };

  var concat = function(i, curr) {
    return i + "," + curr;
  };

  var uniq = function(item, pos, ary) {
    return !pos || item != ary[pos - 1];
  };

  var str = ponies.filter(isEmail).map(allergies).reduce(concat);

  if (Array.isArray(str)) {
    return str.sort().filter(uniq);
  } else {
    return str.split(",").sort().filter(uniq);
  }
}


var ponies = [
  {
    "id": 427,
    "name": "Firefly",
    "allergies": ["gluten", "peanut"],
    "email": "cindy@ponymail.com"
  },
  {
    "id": 23,
    "name": "Black Lightning",
    "allergies": ["soy", "peanut"],
    "email": "sandy@hotmail.com"
  },
  {
    "id": 458,
    "name": "Picadilly",
    "allergies": ["corn", "gluten"],
    "email": "cindy@ponymail.com"
  },
  {
    "id": 142,
    "name": "Brad",
    "allergies": ["gluten", "chicken"],
    "email": "sandy@hotmail.com"
  },
  {
    "id": 184,
    "name": "Cahoot",
    "allergies": ["soy", "peanut", "gluten"],
    "email": "jimmy@ponymail.com"
  }];

console.log(getPonyAllergies(ponies, "sandy@hotmail.com"));
console.log(getPonyAllergies(ponies, "jimmy@ponymail.com"));