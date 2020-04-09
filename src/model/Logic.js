class Logic {
    constructor() {
        let cuento = [];
        let cuentoSplited = [];
        let txt = document.getElementById('txt');

        this.cuento = loadStrings("./lib/cuento.txt");
        this.otroMundo= loadImage ("./imag/pPuerta.png");
        this.pFinal= loadImage("./imag/pFinal.png"); 

        this.bRestart= loadImage("./imag/bRestart.png"); 
        this.bSave= loadImage("./imag/bSave.png"); 
        this.bQuit= loadImage("./imag/bQuit.png"); 


        
        this.pox = 0;
        this.aumenta = 10;
        this.tamAlicia = 293.5 + 100;
        this.tam2Alicia = 410.5 + 100;
        this.load();
        this.orden =0;
        this.interacciones=0;

    }

    pintar() {

        switch(this.orden){

            case 0:

        this.fondo.pintar();

        if(this.conejo.brilloActivarConejo == false){
            this.fondo.mover();

        }
        for (let i = 0; i < this.cuento.length; i++) {
            this.cuentoSplited = this.cuento[i].split(" ");

            if (this.cuentoSplited.includes("Alicia")) {

                this.alicia.pintar();
            }

                for (let i = 0; i < this.cuento.length; i++) {

                    if (this.cuentoSplited.includes("galletas")) {

                        if(this.llave.mosPastel == true){

                        this.pastel.pintar();
                        }
                    }
                }

                    for (let i = 0; i < this.cuento.length; i++) {

                       

                        if (this.cuentoSplited.includes("gato")) {
                            if(this.frasco.cambioTamano == true){
                            this.gato.pintar();
                        }
                    }
                    }

                        for (let i = 0; i < this.cuento.length; i++) {

                            if (this.cuentoSplited.includes("frasco")) {

                                if(this.puerta.mostrarFrasco == true) {

                                this.frasco.pintar();
                                this.frasco.mover();
                                }

                            }
                        }


                        for (let i = 0; i < this.cuento.length; i++) {


                            if (this.cuentoSplited.includes("conejo")) {
                                this.conejo.pintar();
                            }
                        }

                        for (let i = 0; i < this.cuento.length; i++) {


                            if (this.cuentoSplited.includes("llave")) {
                                console.log("pinta");

                                if(this.gato.mostrarL== true){
                                this.llave.pintar();
                                }
                            }
                        }

                        for (let i = 0; i < this.cuento.length; i++) {

                            if (this.cuentoSplited.includes("puerta")) {
                                if (this.fondo.mostrarPuerta == true && this.conejo.brilloActivarConejo == false) {
                                    this.puerta.pintar();
                                }
                            }
                        }
                    }

                    if(this.frasco.cambioTamano == true){
                        this.frasco.frascoBrilla = false;
                        this.alicia.tam = 293.5;
                        this.alicia.tam2= 410.5;   
              
                    }

                    if(this.pastel.cambiartam1  == true){
                        console.log("cambiar");
                       
                        this.alicia.tam = this.tamAlicia;
                        this.alicia.tam2= this.tam2Alicia;                 
                    }


                        break;


                        case 1:

                    
                                image(this.otroMundo,0,0);
                            


                        break;


                        case 2:
                                image(this.pFinal,0,0);
                                if((mouseX>368 && mouseX<554)&& (mouseY>769 && mouseY<830)){
                                    image(this.bRestart,368,769);
                                    
                                  }
                                  if((mouseX>609 && mouseX<794)&& (mouseY>769 && mouseY<830)){
                                    image(this.bSave,609,769);
                                  }
                                  if((mouseX>849 && mouseX<1034)&& (mouseY>769 && mouseY<830)){
                                    image(this.bQuit,849,769);
                                  }

                            

                        break;
                    }
                }

                load() {

        this.gato = new Gato(720, 260, 10);
        this.pastel = new Pastel(150, 680, 10);
        this.alicia = new Personaje(0, 400, this.tamAlicia, this.tam2Alicia);
        this.frasco = new Frasco(40, 200, 10);
        this.conejo = new Conejo(930, 485, 0);
        this.puerta = new Puerta(1090, 448, 0);
        this.fondo = new Paradax(0, 0);
        this.llave = new Llave(935,0)


    }

    key() {
        if (this.conejo.brilloActivarConejo == false) {
            this.alicia.caminar();
        }
    }

    mouse() {

        switch(this.orden){

            case 0:

        switch(this.interacciones){

            case 0: 
            this.conejo.correr();
            if (this.fondo.mostrarPuerta == true && this.conejo.brilloActivarConejo == false) {
                if((mouseX > this.puerta.posX && mouseX < this.puerta.posX+330) && (mouseY> this.puerta.posY && mouseY <this.puerta.posY+558)) {
                    this.orden = 1;
                    }
                }
                if (this.conejo.activar == true) {
                    this.alicia.brilloActivarAlicia = false;
                }
            break;

            case 1: 
            if(this.frasco.cambioTamano == true){
                this.frasco.frascoBrilla=false;
                
            }
            this.frasco.cambiartam();
            this.interacciones = 2;
            this.alicia.brilloActivarAlicia = true;


            break;
    
        case 2: 

        this.gato.aparecerGato();
        this.interacciones = 3;

            break;
    
        case 3: 

        this.gato.mostrarLlave();
        this.interacciones = 4;

            break;
        

        case 4: 
        this.llave.darPastel();
        this.interacciones =5;

            break;
        

        case 5: 
        this.pastel.cambiartam();
        if(this.pastel.cambiartam1 == true){

        
        if((mouseX > this.llave.posX && mouseX < this.llave.posX+315) && (mouseY> this.llave.posY && mouseY <this.llave.posY+411)) {
            this.orden=2;
        }
     }

            break;

        case 6: 

       

        

        //
    
        break;
        
        }

        break;

        case 1:

            if((mouseX > 1256 && mouseX <1361) && (mouseY>36 && mouseY <168)) {
                this.orden = 0;
                this.frasco.frascoBrilla=true;
                this.puerta.mostrarFrasco = true;
                this.puerta.puertaBrilla=false;
                this.interacciones=1;
                    }
    


        break;


        case 2:

            if((mouseX>368 && mouseX<554)&& (mouseY>769 && mouseY<830)){
                this.orden = 0;
              }
              if((mouseX>609 && mouseX<794)&& (mouseY>769 && mouseY<830)){
                saveStrings(this.cuentoSplited, 'nouns.txt');
              }
              if((mouseX>849 && mouseX<1034)&& (mouseY>769 && mouseY<830)){
                this.cambio=0;
              }

            

            
        break;

    }
}



}