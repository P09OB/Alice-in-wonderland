class Logic {


    constructor(){
        this.alicia = new Personaje(300,0,10);
        this.cuento = loadStrings("./lib/cuento.txt");

    }


    pintar(){

        this.alicia.pintar();
     
        fill(255);
        text(this.cuento,10,10);


    }
}