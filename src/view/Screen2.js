class Screen2 {

    constructor() {
        this.controllerMain = new ControllerMain();
        this.posX = 0;
        this.pJuego= loadImage("./imag/pJuego.png"); 
        this.colaGato= loadImage("./imag/colaGato.png"); 

    }
    

    pintarScreen2() {
        image(this.pJuego,-1392,0);
        image(this.colaGato,800,-60);
        this.controllerMain.pintar();

   }

   mover() {

    this.controllerMain.teclas();

   }

   mouse() {

    this.controllerMain.mouse();
   }

    
}