/**
 * Following DOM tree questions can be asked on this topic
 * Find Corresponding Node in DOM Tree
 * Figure if two trees/DOM Trees are identical
 * https://youtu.be/ElHeF2zY570?si=NShdnn-3PKugWvDo
 */

/* Methodology */
/* 
-> Take 2 stack, each for one dom tree
-> initialize both stack with each parent/ first dom element of the tree
-> compare the dom element by popping them in a loop, by assigning them to a variable
-> if a === target, return the current dom of b
-> push child elements in stack
*/

// HTML DOM FOR THE QUESTION:
/*
<div id='tree1'> <!-- DOME TREE 1-->
    <div class='container'>
    <div class='row1'>row</div>
    <div id='target'>target</div>
    <div class='row1'>row</div>
    </div>
</div>

<div id='tree2'> <!-- DOME TREE 2 -->
    <div class='container'>
    <div class='row1'>row</div>
    <div>this is the second div</div>
    <div class='row1'>row</div>
    </div>
</div>
*/
function findCorresponding(section, article, img) {
  let stackA = [treeA];
  let stackB = [treeB];

  while (stackA.length) {
    let currentA = stackA.pop();
    let currentB = stackB.pop();

    if (currentA === target) {
      return currentB;
    }

    stackA.push(...currentA.children);
    stackB.push(...currentB.children);
  }
}

const tree1 = document.getElementById("tree1");
const tree2 = document.getElementById("tree2");
const target = document.getElementById("target");
