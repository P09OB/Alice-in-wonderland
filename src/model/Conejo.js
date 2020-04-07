class Conejo extends Elementos {
    constructor( posX, posY, tam){
        super(posX,posY,tam);
        this.conejo = loadImage("./imag/conejo.png"); 
        this.posX=posX;
        this.posY=posY;
        this.tam=tam;
        this.vel = 76;

    }


    pintar() {
        image(this.conejo,this.getPosx(),this.getPosy());
    }
}