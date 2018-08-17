let greeter = require('./Greeter');
let mysass = require('./mysass.scss');

window.onload = function () {
    let root = document.getElementById('root');
    root.setAttribute('class','block');
    root.appendChild(greeter);
}

// root.appendChild(greeter);