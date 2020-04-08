class Screen1 {
    

    constructor() {

        this.pInicioSin = loadImage("./imag/pInicioSin.png"); 
        this.bInicio= loadImage("./imag/botonInicio.png");
        this.pInicio = loadImage("./imag/pInicio.png");  

    }

    pintarScreen() {

        image(this.pInicioSin,0,0);
        if((mouseX>608 && mouseX<793)&& (mouseY>686 && mouseY<747)){
            image(this.pInicio,0,0);
            image(this.bInicio,607,685);
           
           } 

        

   }

  
    
}