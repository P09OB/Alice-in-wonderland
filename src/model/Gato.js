class Gato extends Elementos {

    gato= loadImage("./imag/gato.png"); 


    constructor( posX, posY, tam){
        super(posX,posY,tam);
        
    }
    pintar() {

        
        image(this.gato,this.posX,this.posY,354,562);
       
   }


   
}