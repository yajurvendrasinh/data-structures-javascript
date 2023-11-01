// getElementsByClassName polyfill

document.findElementByClassName = function (className) {
  let root = document.body;
  let elementCollection = [];

  function traverse(node) {
    if (node.classList === className || node.classList.contains(className)) {
      elementCollection.push(node);
    }

    for (let i = 0; i < node.children.length; i++) {
      traverse(node.children[i]);
    }
  }

  traverse(root);
  return elementCollection;
};

// getElementsByTagName polyfill;

document.findElementByTagName = function (tagName) {
  let root = document.body;
  let elementCollection = [];
  let findTag = tagName.toUpperCase();

  function traverse(node) {
    if (node.tagName === findTag) {
      elementCollection.push(node);
    }
    for (let i = 0; i < node.children.length; i++) {
      traverse(node.children[i]);
    }
  }

  traverse(root);

  return elementCollection;
};

// getELementsById polyfill

document.findElementByID = function (id) {
  let root = document.body;
  let elementCollection = [];
  //let findTag = tagName.toUpperCase();

  function traverse(node) {
    if (node.getAttribute('id') === id) {
      elementCollection.push(node);
    }
    for (let i = 0; i < node.children.length; i++) {
      traverse(node.children[i]);
    }
  }

  traverse(root);
  return elementCollection;
};
