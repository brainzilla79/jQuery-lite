import DOMNodeCollection from './dom_node_collection.js';

const readyCallbacks = [];
let docReady = false;

window.$l = arg => {
  switch (typeof arg) {
    case 'function':
      if (!docReady) {
        readyCallbacks.push(arg);
      } else {
        arg();
      }
      break;
    case 'string':
      return new DOMNodeCollection([...document.querySelectorAll(arg)]);
    case 'object':
      if (arg instanceof HTMLElement) return new DOMNodeCollection([arg]);
  }
};

$l.extend = (obj, ...otherObjs) => {
  otherObjs.forEach(object => {
    const keys = Object.keys(object);
    keys.forEach(key => {
      obj[key] = object[key];
    });
  });
  return obj;
};

document.addEventListener('DOMContentLoaded', () => {
  docReady = true;
  readyCallbacks.forEach(cb => cb());
});
