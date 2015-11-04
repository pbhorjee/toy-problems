'use strict';

/* Implement the function asyncMap:
 *
 * asyncMap has two parameters, an array of asynchronous functions (tasks) and a callback.
 * Each of the tasks takes a separate callback and invokes that callback when complete.
 *
 * The callback passed to asyncMap is then performed on the results of the callbacks of the tasks.
 *
 * The order of these results should be the same as the order of the tasks.
 * It is important to note that this is not the order in which the tasks return,
 * but the order in which they are passed to asyncMap.
 *
 * Once all the callbacks of the tasks are returned, asyncMap should invoke the callback
 * on the results array.
 *
 *
 * Example:
 *
 * asyncMap([
 *  function(cb){
 *    setTimeout(function(){
 *      cb('one');
 *    }, 200);
 *  },
 *  function(cb){
 *    setTimeout(function(){
 *      cb('two');
 *    }, 100);
 *  }
 * ],
 *  function(results){
 *    // the results array will equal ['one','two'] even though
 *    // the second function had a shorter timeout.
 *    console.log(results); // ['one', 'two']
 * });
 *
 *
 */


//TODO:  Not working

var asyncMap = function (tasks, callback) {
  var results = [];

  for (var i = 0; i < tasks.length; i++) {
    results.push(tasks[i](callback));
  }

  var intvl = setInterval(function() {
    var allDone = true;

    for (var i = 0; i < results.length; i++) {
      if (results[i] === undefined) {
        allDone = false;
      }
    }

    if (allDone) {
      clearInterval(intvl);
      return callback(results);
    }
  }, 5);
};


var am = asyncMap([
    function (cb) {
      setTimeout(function () {
        cb('one');
      }, 200);
    },
    function (cb) {
      setTimeout(function () {
        cb('two');
      }, 100);
    }
  ],
  function (results) {
    // the results array will equal ['one','two'] even though
    // the second function had a shorter timeout.
    console.log(results); // ['one', 'two']
  });

console.log(am);