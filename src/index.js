import Icon from "./1.png";

function component() {
    var element = document.createElement("div");
    var myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);
    return element;
}

document.body.appendChild(component());
