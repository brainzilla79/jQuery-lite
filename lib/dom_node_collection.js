export default class DOMNodeCollection {
  constructor(nodes) {
    this.nodes = nodes;
  }

  html(string = '') {
    if (!string) {
      return this.nodes[0].innerHTML;
    } else {
      this.nodes.forEach(node => {
        node.innerHTML = string;
      });
    }
  }

  empty() {
    this.nodes.forEach(node => {
      node.innerHTML = '';
    });
  }

  append(arg) {
    if (typeof arg === 'string') {
      this.nodes.forEach(node => {
        node.innerHTML += arg;
      });
    } else if (typeof arg === 'object') {
      if (!(arg instanceof DOMNodeCollection)) {
        arg = $l(arg);
      }
      this.nodes.forEach(node => {
        arg.nodes.forEach(childNode => {
          node.innerHTML += childNode.outerHTML;
        });
      });
    }
  }

  attr(attrName, value) {
    if (!value) {
      return this.nodes[0].getAttribute(attrName);
    } else {
      this.nodes.forEach(node => {
        node.setAttribute(attrName, value);
      });
    }
  }

  addClass(className) {
    this.nodes.forEach(node => {
      node.classList.add(className);
    });
  }

  removeClass(className) {
    this.nodes.forEach(node => node.classList.remove(className));
  }

  children() {
    const result = [];
    this.nodes.forEach(node => {
      [...node.children].forEach(child => result.push(child));
    });
    return new DOMNodeCollection(result);
  }

  parent() {
    const parents = [];
    this.nodes.forEach(node => parents.push(node.parentElement));
    return new DOMNodeCollection(parents);
  }

  find(selector) {
    const nodes = [];
    this.nodes.forEach(node => {
      const childNodes = node.children;
      nodes = nodes.concat([...childNodes]);
    });
    return new DOMNodeCollection(nodes);
  }

  remove() {
    this.nodes.forEach(node => {
      node.innerHTML = '';
    });
    this.nodes = [];
  }

  on(event, handler) {
    this.nodes.forEach(node => {
      node.addEventListener(event, handler);
      const eventKey = `jQueryLiteEvents-${event}`;
      if (typeof node[eventKey] === 'undefined') node[eventKey] = [];
      node[eventKey].push(handler);
    });
  }

  off(event) {
    this.nodes.forEach(node => {
      const eventKey = `jQueryLiteEvents-${event}`;
      if (node[eventKey]) {
        node[eventKey].forEach(handler => {
          node.removeEventListener(event, handler);
        });
      }
      node[eventKey] = [];
    });
  }
}
