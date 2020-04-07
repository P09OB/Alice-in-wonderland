class Screen2 {

    constructor() {
        this.controllerMain = new ControllerMain();
        this.pJuego= loadImage("./imag/pJuego.png"); 

    }
    

    pintarScreen2() {
        image(this.pJuego,0,0);
        this.controllerMain.pintar();

   }

   mover() {

    this.controllerMain.teclas();

   }

    
}