let screenView;

function setup(){
createCanvas (1414,960);
screenView = new ScreenView();

}

function draw() {
    background(0);
    
    screenView.pintar();


}

function mousePressed(){
    screenView.cambioPantalla();

}

function keyPressed(){

    screenView.teclas();


}