class Personaje extends Elementos {
    constructor( posX, posY, tam){
        super(posX,posY,tam);
        this.alicia = loadImage("./imag/alicia.png"); 
        this.posX=posX;
        this.posY=posY;
        this.tam=tam;
    }

    pintar() {
        image(this.alicia,this.posX,this.posY);
    }
}