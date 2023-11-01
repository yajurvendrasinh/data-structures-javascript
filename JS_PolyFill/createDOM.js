let dom = {
  type: 'div',
  props: {
    id: 'hello',
    children: [
      { type: 'h1', innerText: 'HELLO' },
      { type: 'p', innerText: 'HELLO' },
    ],
  },
};

let miniDom = {
  type: 'div',
  props: { id: 'hello', child: 'p' },
};

function createDom(obj, parent) {
  let currentParent = parent;
  let currentElem;

  for (let key in obj) {
    if (key === 'type') {
      currentElem = document.createElement(obj[key]);
    }
    if (key === 'innerText') {
      currentElem.innerHTML = obj[key];
    }
    if (key === 'props') {
      currentElem.id = obj[key]['id'];

      if (obj[key]['children']) {
        let children = obj[key]['children'];
        children.forEach((child) => {
          createDom(child, currentElem);
        });
      }
    }
  }

  parent.appendChild(currentElem);
}

createDom(dom, document.body);
