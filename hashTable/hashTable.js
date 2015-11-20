var makeHashTable = function () {
  var table = {};
  var storage = [];
  var storageLimit = 1000;

  table.insert = function (key, value) {
    var index = getIndexBelowMaxForKey(key, storageLimit);
    var bucket = storage[index] = storage[index] || [];
    var found = false;

    for (var i = bucket.length - 1; i >= 0; i--) {
      var tuple = bucket[i];

      if (tuple[0] === key) {
        tuple[1] = value;
        found = true;
        break;
      }
    }

    if (!found) {
      bucket.push([key, value]);
    }
  };

  table.retrieve = function (key) {
    var index = getIndexBelowMaxForKey(key, storageLimit);
    var bucket = storage[index];

    if (!bucket) {
      return null;
    }

    for (var i = bucket.length - 1; i >= 0; i--) {
      var tuple = bucket[i];

      if (tuple[0] === key) {
        return tuple[1];
      }
    }

    return null;
  };

  table.remove = function (key) {
    var index = getIndexBelowMaxForKey(key, storageLimit);
    var bucket = storage[index];

    if (!bucket) {
      return null;
    }

    for (var i = bucket.length - 1; i >= 0; i--) {
      var tuple = bucket[i];

      if (tuple[0] === key) {
        bucket.splice(i, 1);

        return tuple[1];
      }
    }

    return null;
  };

  return table;
};

var getIndexBelowMaxForKey = function (str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var hashTable = makeHashTable();

hashTable.insert('William Shatner\'s most well known role', 'Captain Kirk');
var value = hashTable.retrieve('William Shatner\'s most well known role');

//value.should.be.equal('Captain Kirk');

console.log(value);