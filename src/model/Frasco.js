class Frasco extends Elementos {
    frasco= loadImage("./imag/bebida.png"); 
    constructor( posX, posY, tam){
        super(posX,posY,tam);
    }

    pintar() {

        image(this.frasco,this.posX,this.posY,263,391);
       
   }

   cambiartam() {

    
   }
}