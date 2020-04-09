class Llave extends Elementos{

    llave=loadImage("./imag/llave.png");   
    llaveBrilla=loadImage("./imag/llaveBrillo.png");



constructor(posX,posY,tam){
    super(posX,posY,tam);
    this.posX=posX;
    this.posX=posX;
    this.mostrarL=false;
    this.mosPastel= false;
    this.scGanar = false;

}

pintar () {

    if(this.briLlave == true){
        image(this.llave,this.posX,this.posY);


    }   
    image(this.llaveBrilla,this.posX,this.posY);

}

darPastel(){

    if((mouseX > this.posX && mouseX < this.posX+315) && (mouseY> this.posY && mouseY <this.posY+411)) {
this.mosPastel = true;
this.briLlave = false;
    }

}


ganar() {

    if((mouseX > this.posX && mouseX < this.posX+315) && (mouseY> this.posY && mouseY <this.posY+411)) {
       this.scGanar = true;
            }



}



}