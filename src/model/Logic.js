class Logic {
    constructor() {
        let cuento = [];
        let cuentoSplited = [];
        this.cuento = loadStrings("./lib/cuento.txt");
        this.load();
        this.pox = 0;
        this.aumenta = 10;
        this.tamAlicia = 293.5 + 100;
        this.tam2Alicia = 410.5 + 100;

    }

    pintar() {

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
                }

    load() {

        this.gato = new Gato(720, 260, 10);
        this.pastel = new Pastel(150, 680, 10);
        this.alicia = new Personaje(0, 400, 293.5 + 100, 410.5 + 100);
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

        this.conejo.correr();
        this.puerta.mostrarMundo();
        this.gato.aparecerGato();
        this.gato.mostrarLlave();

        if (this.conejo.activar == true) {
            this.alicia.brilloActivarAlicia = false;
        }

    }


    cambiarTamaño() {



    }

}