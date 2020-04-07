class Pastel extends Elementos {
    pastel= loadImage("./imag/pastel.png"); 

    
    constructor( posX, posY, tam){
        super(posX,posY,tam);
        
    }
    pintar() {
        image(this.pastel,this.posX,this.posY,0,0);
   }
}