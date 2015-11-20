var Stack = function () {
  var storage = [];

  this.push = function (val) {
    storage.push(val)
  };

  this.pop = function () {
    return storage.pop();
  };

  this.size = function () {
    return storage.length;
  };
};

var Queue = function () {

  var inbox = new Stack();
  var outbox = new Stack();
  var size = 0;

  this.enqueue = function (val) {
    inbox.push(val);
    size++
  };

  this.dequeue = function () {
    if (outbox.size() === 0) {
      while (inbox.size() > 0) {
        outbox.push(inbox.pop());
      }
    }
    size--;
    return outbox.pop();
  };

  this.size = function () {
    return size;
  };
};

var queue = new Queue();
queue.enqueue('a');
var item = queue.dequeue();

console.log(item);
console.log(queue.size());