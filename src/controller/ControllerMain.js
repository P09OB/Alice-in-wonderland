class ControllerMain {
    constructor(){

       
        this.logica = new Logic();
        
    }

     pintar() {
        
        this.logica.pintar();
    }


    teclas() {

        this.logica.key();
    }

    mouse() {

        this.logica.mouse();

    }

    moverBackground(posx) {
this.logica.moverBackground(posx);

    }

}