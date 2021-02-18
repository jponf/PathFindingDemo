import * as PIXI from "pixi.js";
export { PIXI };

function loadPathfindingDemo() {
    const element = document.createElement('div');

    element.innerHTML = "Hello webpack";
    document.body.appendChild(element);

    document.body.appendChild(app.view);
    console.log(app.renderer);

}


if(!PIXI.utils.isWebGLSupported()){
    console.log("Canvas");
} else {
    console.log("WebGL")
}


var app = new PIXI.Application({width: window.innerWidth,
                                height: window.innerHeight});


window.onload = loadPathfindingDemo;
