let cambio = 0;
let screenView;
let pan1;
function setup(){
createCanvas(1080,700);
screenView = new ScreenView();
pan1 = new Screen1();


}

function draw() {
    background(0);
    
screenView.pintar();
pan1.pintar();

    switch(cambio){
        case 0:
            

        break;

        case 1:


        break;

        case 2:

    
        break;

    }

}

function mousePressed() {

}

function keyPressed(){

}