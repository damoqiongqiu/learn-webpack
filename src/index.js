import _ from "lodash";

function component() {
    var element = document.createElement("div");
    var button = document.createElement("button");
    var br = document.createElement("br");

    button.innerHTML = "Click me and look at the console!";
    element.innerHTML = _.join(["Hello", "webpack"], " ");
    element.appendChild(br);
    element.appendChild(button);

    button.onclick = e =>
        //这个import()函数是在ES6的时候提出来的，但是目前还不是正式的ECMA标准
        import("./print").then(module => {
            var print = module.default;
            window.print();
        });
    return element;
}

document.body.appendChild(component());
