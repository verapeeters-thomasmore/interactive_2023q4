const tel = function(selector) {
    return document.querySelectorAll(selector).length;
};

const getArray = function(selector) {
    let elts = document.querySelectorAll(selector);
    return Array.from(elts);
};