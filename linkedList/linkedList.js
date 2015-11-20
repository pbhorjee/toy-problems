var LinkedList = function (initialValue) {
  if (initialValue) {
    this.head = new Node(initialValue);
    this.tail = this.head;
  }
};

LinkedList.prototype.removeHead = function () {
  if (this.head === this.tail) {
    this.head = this.tail = null;
  } else {
    this.head = this.head.next;
  }
};

LinkedList.prototype.addToTail = function (value) {
  var node = new Node(value);

  if (!this.head) {
    this.head = node;
    this.tail = this.head;
  } else {
    this.tail.next = node;
    this.tail = this.tail.next;
  }
};

LinkedList.prototype.contains = function (target) {
  var thisNode = this.head;

  while (thisNode) {
    if (thisNode.value === target) {
      return true
    }

    thisNode = thisNode.next;
  }

  return false;
};

var Node = function (val) {
  this.value = val;
  this.next = null;
};
