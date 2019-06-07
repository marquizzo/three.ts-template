/*
 * App.js
 * ===========
 * Entry from Webpack, generates Three.js View
 */

// import View from "./webgl/View";

class App {
    // private view: View;

    constructor() {
        const canvasBox = <HTMLCanvasElement>document.getElementById("webgl-canvas");
        console.log(canvasBox);

        // this.view = new View(canvasBox);
    }
}

const app = new App();
