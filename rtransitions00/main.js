changeBackground = () => {
    let el = document.querySelector("div.full-page");

    if(el) {
        el.className = "full-pages";
    }
    else {
        el = document.querySelector("div.full-pages");
        el.className = "full-page";
    }

    return el;
}

var intervalID = window.setInterval(changeBackground, 3000);