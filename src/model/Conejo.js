class Conejo extends Elementos {
    constructor( posX, posY, tam){
        super(posX,posY,tam);
        this.conejo = loadImage("./imag/conejo.png"); 
        this.posX=posX;
        this.posY=posY;
        this.tam=tam;

    }


    pintar() {
        image(this.conejo,this.posX,this.posY);
    }

    correr() {
         if((mouseX > this.posX && mouseX < this.posX) && (mouseY> this.posx && mouseY == this.posY)) {

    this.posX += 600;
}

    }
}