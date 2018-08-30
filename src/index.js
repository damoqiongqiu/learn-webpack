import "./index.css";

function component() {
    var element = document.createElement("div");
    element.innerHTML = "css-loader";
    element.classList.add("hello");
    return element;
}

document.body.appendChild(component());
