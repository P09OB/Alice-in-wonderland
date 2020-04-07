class Personaje extends Elementos {
    constructor( posX, posY, tam){
        super(posX,posY,tam);
        this.alicia = loadImage("./imag/alicia.png"); 
        this.posX=posX;
        this.posY=posY;
        this.tam=tam;
        this.vel = 10;

    }

    caminar() {

        if (keyCode == RIGHT_ARROW) {
        
            this.posX += this.vel
    }
    
    if (keyCode == LEFT_ARROW) {
        this.posX -= this.vel; 
    }
}

    pintar() {
        image(this.alicia,this.posX,this.posY);
    }


}