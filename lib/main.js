import DOMNodeCollection from './dom_node_collection.js';


window.$l = (arg) => {
  switch (typeof arg) {
    case 'string':
      return new DOMNodeCollection([...document.querySelectorAll(arg)]);
    case 'object':
      if (arg instanceof HTMLElement) return new DOMNodeCollection([arg]);
  }
    
};