var treeMaker = function (value) {
  var newTree = Object.create(treeMaker.methods);

  newTree.value = value;
  newTree.children = [];

  return newTree;
};

treeMaker.methods = {};

treeMaker.methods.addChild = function (value) {
  var node = treeMaker(value);

  this.children.push(node);
};

treeMaker.methods.contains = function (value) {
  var found = false;

  function recurse (node) {
    if (node.value === value) {
      found = true;
    }

    for (var i = 0; i < node.children.length; i++) {
      if (node.children) {
        recurse(node.children[i]);
      }
    }
  }

  recurse(this);

  return found
};

var tree = treeMaker();

tree.addChild(5);
tree.addChild(6);

tree.children[0].addChild(7);
tree.children[1].addChild(8);

console.log(tree.contains(7));

console.log(tree.contains(98));
console.log(tree.contains(8));