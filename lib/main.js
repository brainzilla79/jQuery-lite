import DOMNodeCollection from './dom_node_collection.js';

const docReadyCallbacks = [];
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

$l.ajax = (options = {}) => {
  const defaults = {
    success: () => {},
    error: () => {},
    url: '',
    method: 'GET',
    data: {},
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
  };
  const settings = $l.extend(defaults, options);
  const request = new XMLHttpRequest();
  request.open(settings.method, settings.url, true);
  request.onload = (e) => {
    if (request.status === 200) {
      settings.success();
    } else {
      settings.error();
    }
  };
  request.send(JSON.stringify(settings.data));
};

document.addEventListener('DOMContentLoaded', () => {
  docReady = true;
  docReadyCallbacks.forEach(cb => cb());
});
