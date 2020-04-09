class Personaje extends Elementos {
    constructor( posX, posY, tam,tam2){
        super(posX,posY,tam);
        this.alicia = loadImage("./imag/alicia.png"); 
        this.aliciaBrilla = loadImage("./imag/aliciaBrilla.png");

        this.posX=posX;
        this.posY=posY;
        this.tam=tam;
        this.tam2=tam2;
        this.vel = 50;

    }

    caminar() {

        if (keyCode == RIGHT_ARROW) {

            if(this.posx>=0){

            } else {
            this.posX += this.vel; 
            }
    }
    
    if (keyCode == LEFT_ARROW) {

        if(this.posx<=1284){

        } else {
        this.posX -= this.vel; 
        }
    }
}

    pintar() {
        if(this.brilloActivarAlicia==false){
            image(this.aliciaBrilla,this.posX,this.posY,this.tam,this.tam2);
        }else {
    
           image(this.alicia,this.posX,this.posY,this.tam,this.tam2); 
        }
    }


    

}

