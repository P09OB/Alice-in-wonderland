class Gato extends Elementos {

    gato= loadImage("./imag/gatoBrilla.png"); 
    colaGato= loadImage("./imag/colaGatoBrilla (1).png");
    llave=loadImage("./imag/llaveBrillo.png");

    constructor( posX, posY, tam){
        super(posX,posY,tam);
        this.mostrar=false;
        this.mostrarL=false;

    }
    pintar() {
    //Gato  
        if(this.mostrar==true){
        image(this.gato,this.posX,this.posY,354,562);

   }

    //Cola
    if(this.mostrar==false){
    image(this.colaGato,this.posX+70,this.posY-300);
    }

    // Llave 
    if(this.mostrarL==true){
        image(this.llave,this.posX+70,this.posY-300);
        }

}

aparecerGato(){
    if((mouseX > this.posX+70 && mouseX < this.posX+344) && (mouseY> this.posY-300 && mouseY <272)) {
        this.mostrar=true;
    }
}

mostrarLlave(){
    if((mouseX > this.posX && mouseX < this.posX+574) && (mouseY> this.posY && mouseY <this.posY+782)) {
        this.mostrarL=true;
    }
}


}