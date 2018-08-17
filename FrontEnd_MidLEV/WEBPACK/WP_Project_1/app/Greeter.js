function div_maker() {
    let greet = document.createElement('div');
    greet.innerHTML = "Hello Webpack!"
    return greet;
}

module.exports = div_maker();
   