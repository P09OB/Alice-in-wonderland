class Logic {
        constructor(){
            let cuento = [];
            let cuentoSplited= [];
            this.cuento = loadStrings("./lib/cuento.txt");
            this.pJuego= loadImage("./imag/pJuego.png"); 

        this.gato= new Gato(300,0,10);
        this.pastel= new Pastel(300,0,10);
        this.alicia = new Personaje(0,0,293.5,410.5);
        this.frasco = new Frasco(300,0,10);
        this.conejo = new Conejo(0,0,0);
        this.pox = 0;
           
        }
    
    
        pintar(){

            this.conejo.pintar();

            if(this.pox === 0){

            if(this.alicia.posX == 500){

                this.pox -=400;
                console.log(this.pox);}

            }

            if(this.pox == -400 && this.alicia.pox == 30){

                this.pox +=400;

            }

        
            image(this.pJuego,this.pox,0);


    
            for (let i = 0; i < this.cuento.length; i++) {
                this.cuentoSplited = this.cuento[i].split(" ");

                if (this.cuentoSplited.includes("Alicia")){

                    this.alicia.pintar();


                    for (let i = 0; i < this.cuento.length; i++) {

                        if (this.cuentoSplited.includes("galletas")){
            
                            this.pastel.pintar();
                }

                for (let i = 0; i < this.cuento.length; i++) {

                    if (this.cuentoSplited.includes("gato")){
        
                        this.gato.pintar();
            }

            for (let i = 0; i < this.cuento.length; i++) {

                if (this.cuentoSplited.includes("frasco")){
    
                    this.frasco.pintar();
            
        }
    }


    for (let i = 0; i < this.cuento.length; i++) {

        if (this.cuentoSplited.includes("conejo")){

    
}
}

        }        
    }
}
   
            }
        }


    caminar() {

        this.alicia.caminar();
    }

}