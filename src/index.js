import Icon from "./1.png";

function component() {
    var element = document.createElement("div");
    var myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);
    console.log("test-dev-server...");
    return element;
}

document.body.appendChild(component());
