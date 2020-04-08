class Conejo extends Elementos {
    constructor( posX, posY, tam){
        super(posX,posY,tam);
        this.conejo = loadImage("./imag/conejo.png");
        this.conejoBrilla = loadImage("./imag/conejoBrillo.png"); 
        this.posX=posX;
        this.posY=posY;
        this.tam=tam;
        this.vel = 1;


    }


    pintar() {
        this.conejo.brilloActivarConejo = true;


        if(this.brilloActivarConejo==false){
            image(this.conejo,this.posX,this.posY);
        }else {

           image(this.conejoBrilla,this.posX,this.posY); 
        }

        if(this.corre == true){
        this.posX += this.vel;
        }
    }

    correr() {
        if((mouseX > this.posX && mouseX < this.posX+315) && (mouseY> this.posY && mouseY <this.posY+411)) {
            this.brilloActivarConejo=false;
            this.corre= true;
}



    }

    
}