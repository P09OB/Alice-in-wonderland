class Pastel extends Elementos {
    pastel= loadImage("./imag/pastel.png"); 
    pastelBrilla= loadImage("./imag/pastelBrillo.png"); 


    constructor( posX, posY, tam){
        super(posX,posY,tam);

    }
    pintar() {
        image(this.pastel,this.posX,this.posY,0,0);
        image(this.pastelBrilla,this.posX,this.posY,0,0);
   }




}