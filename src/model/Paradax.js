class Paradax{
    
    constructor(posx,posy){
        this.posx = -900;
        this.posy = posy;
        this.vel = 10;
        this.pJuego = loadImage("./imag/pJuego.png");
        this.mostrarPuerta = false; 

    }

    pintar() {

        image(this.pJuego,this.posx,this.posy);

    }

    mover() {

        if(mouseX <= 94){

            if(this.posx >= -800){
            }else{
                this.posx += this.vel;
            }
        }

        if(mouseX >= 1284){

            if(this.posx < -1370){             
            }else{
                this.posx -= this.vel; 
            }  

        }

        if(this.posx == -1380 ){
        this.mostrarPuerta = true;
        }
        if(this.posx == -1330 ){
        this.mostrarPuerta = false;
        }

        console.log(this.posx);



    }




}