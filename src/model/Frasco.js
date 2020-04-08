
class Frasco extends Elementos {
    frasco= loadImage("./imag/bebida.png"); 
    frascoBrillo= loadImage("./imag/bebidaBrillo.png"); 
    constructor( posX, posY, tam){
        super(posX,posY,tam);
        this.vel = 5;
    }

    pintar() {

        image(this.frasco,this.posX,this.posY,263,391);
        image(this.frascoBrillo,this.posX,this.posY,263,391);
       
   }

   mover() {

    if(mouseX <= 94){

        if(this.posX >= 590){
        }else{
            this.posX += this.vel;
        }
    }

    if(mouseX >= 1284){

        if(this.posX < 140){             
        }else{
            this.posX -= this.vel; 
        }  

    }


   }

   cambiartam() {

    

    
   }
}