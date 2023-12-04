// getElementsByClassName polyfill

document.findElementByClassName = function (className) {
  let root = document.body;
  let elementCollection = []; // having an array to collect all the elemets that match with the classname to be searched

  function traverse(node) {
    // traverse through each node recursively to find if the node has class and/or it's children node has the required class
    if (node.classList === className || node.classList.contains(className)) {
      elementCollection.push(node);
    }

    for (let i = 0; i < node.children.length; i++) {
      traverse(node.children[i]); // recursively calling the traverse method to search of inner nodes/ children nodess
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
    if (node.getAttribute("id") === id) {
      elementCollection.push(node);
    }
    for (let i = 0; i < node.children.length; i++) {
      traverse(node.children[i]);
    }
  }

  traverse(root);
  return elementCollection;
};
