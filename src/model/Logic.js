class Logic {
    constructor() {
        let cuento = [];
        let cuentoSplited = [];
        this.cuento = loadStrings("./lib/cuento.txt");
        this.otroMundo= loadImage ("./imag/pPuerta.png");

        
        this.pox = 0;
        this.aumenta = 10;
        this.tamAlicia = 293.5 + 100;
        this.tam2Alicia = 410.5 + 100;
        this.load();
        this.orden =0;

    }

    pintar() {

        switch(this.orden){

            case 0:

        this.fondo.pintar();

        if(this.conejo.brilloActivarConejo == false){
            console.log("entre");
            this.fondo.mover();

        }


        for (let i = 0; i < this.cuento.length; i++) {
            this.cuentoSplited = this.cuento[i].split(" ");

            if (this.cuentoSplited.includes("Alicia")) {

                this.alicia.pintar();
            }

                for (let i = 0; i < this.cuento.length; i++) {

                    if (this.cuentoSplited.includes("galletas")) {

                        this.pastel.pintar();
                    }
                }

                    for (let i = 0; i < this.cuento.length; i++) {

                        if (this.cuentoSplited.includes("gato")) {

                            this.gato.pintar();
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

                            if (this.cuentoSplited.includes("puerta")) {
                                if (this.fondo.mostrarPuerta == true && this.conejo.brilloActivarConejo == false) {
                                    this.puerta.pintar();
                                }
                            }
                        }
                    }

                    if(this.frasco.cambioTamano == true){
                        console.log("entreTam");
                        this.cambiarTamano();                        }


                        break;


                        case 1:

                    
                                image(this.otroMundo,0,0);
                            


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


    }



    key() {
        if (this.conejo.brilloActivarConejo == false) {
            this.alicia.caminar();
        }
    }

    mouse() {

        switch(this.orden){

            case 0:
        this.conejo.correr();
       
        this.gato.aparecerGato();
        this.gato.mostrarLlave();
        this.frasco.cambiartam();

        if (this.conejo.activar == true) {
            this.alicia.brilloActivarAlicia = false;
        }
        if (this.fondo.mostrarPuerta == true && this.conejo.brilloActivarConejo == false) {
        if((mouseX > this.puerta.posX && mouseX < this.puerta.posX+330) && (mouseY> this.puerta.posY && mouseY <this.puerta.posY+558)) {
            this.orden = 1;
            }
        }

        break;

        case 1:

            if((mouseX > 1256 && mouseX <1361) && (mouseY>36 && mouseY <168)) {
this.orden = 0;
                this.puerta.mostrarFrasco = true;
                this.puerta.puertaBrilla=false;
                    }
    


        break;

        

    }
}


    cambiarTamano() {

this.tamAlicia = -50;
this.tam2Alicia= -50;

    }

}