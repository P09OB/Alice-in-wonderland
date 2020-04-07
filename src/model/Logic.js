class Logic {
        constructor(){
            let cuento = [];
            let cuentoSplited= [];
            this.cuento = loadStrings("./lib/cuento.txt");
    this.imagenes();
    this.gato= new Gato(300,0,10);
        this.pastel= new Pastel(300,0,10);
        this.alicia = new Personaje(300,0,10);
        this.frasco = new Frasco(300,0,10);
           
        }
    
    
        pintar(){

         
            fill(255);
            text(this.cuento,10,10);
    
            for (let i = 0; i < this.cuento.length; i++) {
                this.cuentoSplited = this.cuento[i].split(" ");

                if (this.cuentoSplited[0].includes("Alicia")){

                    this.alicia.pintar();

        }
    }
}

    caminar() {

        this.alicia.caminar();
    }


    cambioPantalla(){
        switch(this.pantalla){
            case (0): if((mouseX>608 && mouseX<793)&& (mouseY>686 && mouseY<747)){
                this.pantalla=1;
            } 

            //aqui se pasa a la ultima pantalla pero todavia no tenemos la condicion de cuando pase 
            /*case (1): 
                this.pantalla=2;*/
            
        }
         
}


    imagenes() {

        
        this.pantalla=0;
    }
}