class Personaje extends Elementos {
    constructor( posX, posY, tam,tam2){
        super(posX,posY,tam);
        this.alicia = loadImage("./imag/alicia.png"); 
        this.posX=posX;
        this.posY=posY;
        this.tam=tam;
        this.tam2=tam2;
        this.vel = 50;

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
        image(this.alicia,this.posX,this.posY,this.tam,this.tam2);
    }


    getPosx() {
        return this.posX
    }

}

