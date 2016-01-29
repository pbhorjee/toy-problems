//var hasCycle = function(node){
//  var visited = {};
//
//  while (node) {
//    if (visited[node]) {
//      return true;
//    }
//
//    visited[node] = node;
//    node = node.next;
//  }
//
//  return false;
//};

function hasCycle(node) {
  var pause = true;
  var fast = node;
  var slow = node;

  while (fast = fast.next) {
    if (fast === slow) { return true; }
    if (!pause) { slow = slow.next; }
    pause = !pause;
  }

  return false;
}

function Node (val) {
  var obj = {};
  obj.value = val || null;
  obj.next = null;
  return obj;
}

//var nodeA = Node('A');
//nodeA.next = nodeA;
//console.log(hasCycle(nodeA));

var startNode = Node('start');
var currentNode = startNode;
// one. million nodes!! wahahahaha
for(var i = 0; i < 999999; i++){
  currentNode.next = Node('tail' + i);
  currentNode = currentNode.next;
}
// have the tail of the linked list point to the start
currentNode.next = startNode;
console.log(hasCycle(startNode));