class Puerta extends Elementos {
    puerta= loadImage("./imag/puerta.png"); 
    constructor( posX, posY, tam){
        super(posX,posY,tam);
        this.mostrar=false;
        this.puertaBrilla=true;
        
    }

    pintar() {

        if(this.puertaBrilla==true){
            image(this.puerta,this.posX,this.posY);
            }

//Mostras mundo
        
        if(this.mostrarFrasco === true){
            this.motrar== false;
        }


   }

    mostrarMundo(){

//mostrar Imagen mundo
   
//X de mostrar mundo 
    if((mouseX > 1256 && mouseX <1361) && (mouseY>36 && mouseY <168)) {
        this.mostrar=false;
        this.mostrarFrasco = true;
        this.puertaBrilla=false;
            }
    }


}