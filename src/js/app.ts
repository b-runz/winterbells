import * as _ from 'lodash';

if (module.hot) {
    module.hot.accept();
}
  

class DrawingApp {
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;
    private paint: boolean;
    
    private clickX: number[] = [];
    private clickY: number[] = [];
    private clickDrag: boolean[] = [];
    
    constructor() {
        var c = document.getElementById("myCanvas") as HTMLCanvasElement;
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.arc(100, 75, 50, 0, 2 * Math.PI);
        ctx.stroke(); 
    }    
}

new DrawingApp();
