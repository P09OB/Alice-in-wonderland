class Screen3 {

constructor(){
    this.controllerMain = new ControllerMain();
    this.pFinal= loadImage("./imag/pFinal.png"); 
}
    
    

    pintarScreen3() {
        image(this.pFinal,0,0);
   }

    
}