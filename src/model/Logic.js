class Logic {
        constructor(){
            let cuento = [];
            let cuentoSplited= [];
            this.cuento = loadStrings("./lib/cuento.txt");
        this.gato= new Gato(300,0,10);
        this.pastel= new Pastel(300,0,10);
        this.alicia = new Personaje(0,0,10);
        this.frasco = new Frasco(300,0,10);
        this.conejo = new Conejo();
           
        }
    
    
        pintar(){
    
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

    caminar() {

        this.alicia.caminar();
    }

}