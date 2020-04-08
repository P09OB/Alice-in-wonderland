class Logic {
        constructor(){
            let cuento = [];
            let cuentoSplited= [];
            this.cuento = loadStrings("./lib/cuento.txt");
            this.pJuego= loadImage("./imag/pJuego.png"); 

            this.gato= new Gato(720,260,10);
            this.pastel= new Pastel(150,680,10);
            this.alicia = new Personaje(0,400,293.5+100,410.5+100);
            this.frasco = new Frasco(40,200,10);
            this.conejo = new Conejo(930,485,0);
            this.pox = 0;
           
        }
    
    
        pintar(){

            this.conejo.pintar();

            if(this.pox === 0){

            if(this.alicia.posX == 500){

                this.pox -=800;
                console.log(this.pox);}

            }

            if(this.pox < 0 && this.alicia.pox == 30){

                this.pox +=100;

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
    this.conejo.pintar();
}
}

        }        
    }
}
   
            }
        }


    key() {
if(this.conejo.brilloActivarConejo == false){
        this.alicia.caminar();
}
    }

    mouse(){
        this.conejo.correr();

    } 

}