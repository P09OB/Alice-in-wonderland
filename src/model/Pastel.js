class Pastel extends Elementos {
    pastel= loadImage("./imag/pastel.png"); 
    pastelBrilla= loadImage("./imag/pastelBrillo.png"); 


    constructor( posX, posY, tam){
        super(posX,posY,tam);
        this.cambiartam1 = false;

    }
    pintar() {
        image(this.pastel,this.posX,this.posY,0,0);
        image(this.pastelBrilla,this.posX,this.posY,0,0);
   }

   cambiartam() {


    if((mouseX > this.posX && mouseX < this.posX+315) && (mouseY> this.posY && mouseY <this.posY+411)) {
        this.cambiartam1  = true;
}




}
}