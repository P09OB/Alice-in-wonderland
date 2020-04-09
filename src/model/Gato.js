class Gato extends Elementos {

    gato= loadImage("./imag/gato.png"); 
    gatoBrilla= loadImage("./imag/gatoBrilla.png"); 
    colaGato= loadImage("./imag/colaGatoBrilla (1).png");
   


    constructor( posX, posY, tam){
        super(posX,posY,tam);
        this.mostrar=false;
        this.mostrarL=false;
        this.posXCola=800;
        this.posYCola=-80;
        this.mostrar2 = false;


    }
    pintar() {
    //Gato
        if(this.mostrar==true){

            image(this.gatoBrilla,this.posX,this.posY,354,562);


   }

   if(this.mostrar2 == true ){
    image(this.gato,this.posX,this.posY,354,562);


   }


    //Cola
    if(this.mostrar==false && this.mostrarL == false){
    image(this.colaGato,this.posXCola,this.posYCola);
    }

}

aparecerGato(){
    if((mouseX > this.posXCola && mouseX < this.posXCola+250) && (mouseY> this.posYCola && mouseY <this.posYCola+320)) {
        this.mostrar=true;
    }
}

mostrarLlave(){
    if(this.mostrar==true&&(mouseX > this.posX && mouseX < this.posX+280) && (mouseY> this.posY && mouseY <this.posY+520)) {
        this.mostrarL=true;
        this.mostrar=false;
        this.mostrar2 = true;
        
    }


}






}