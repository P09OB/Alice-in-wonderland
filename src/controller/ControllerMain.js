class ControllerMain {
    constructor(){

       
        this.logica = new Logic();
        
    }

     pintar() {
        
        this.logica.pintar();
    }


    teclas() {

        this.logica.caminar();
    }

    moverBackground(posx) {
this.logica.moverBackground(posx);

    }

}