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

  children() {}
}
