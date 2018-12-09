import Icon from "./1.png";

function component() {
    var element = document.createElement("div");
    var myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);
    console.log("假装在写代码...");
    return element;
}

document.body.appendChild(component());
