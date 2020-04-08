class ScreenView {
    constructor(){

      let pIncio, pJuego, pFinal;
      this.pInicio= new Screen1();
      this.pJuego= new Screen2();
      this.pFinal= new Screen3();
    
     this.cambio = 0;
     
    }

    pintar() {

      switch(this.cambio) {

      case 0: 

      this.pInicio.pintarScreen();


      break;

      case 1 : 

      this.pJuego.pintarScreen2();

      break;

      case 3: 

      this.pFinal.pintarScreen3();


      break;

      }
      fill (255,0,0);
      textSize(18);
      text("X:" + mouseX + "Y:" + mouseY, mouseX, mouseY);

    }


    //Mouse Pressed 

    cambioPantalla(){

      this.pJuego.mouse();


      switch(this.cambio){

        case 0 :
          
        if((mouseX>608 && mouseX<793)&& (mouseY>686 && mouseY<747)){
            this.cambio=1;
        } 
break;
        case 1:


      
break;

case 2:


break;
        
    }

  }


  // Utilizamos las teclas 
    teclas() {

      if(this.cambio == 1){

        this.pJuego.mover();



      }

    }

    
}