class Puerta extends Elementos {
    puerta= loadImage("./imag/puerta.png"); 
    otroMundo= loadImage ("./imag/pPuerta.png");
    constructor( posX, posY, tam){
        super(posX,posY,tam);
        this.mostrar=false;
    }

    pintar() {

        image(this.puerta,this.posX,this.posY);

        if(this.mostrar==true){
            image(this.otroMundo,0,0);
        }


   }

    mostrarMundo(){

   if((mouseX > this.posX && mouseX < this.posX+330) && (mouseY> this.posY && mouseY <this.posY+558)) {
    this.mostrar=true;
    }

    if((mouseX > 1256 && mouseX <1361) && (mouseY>36 && mouseY <168)) {
        this.mostrar=false;
            }
    }


}