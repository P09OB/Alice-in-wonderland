class Logic {


    constructor(){
        let elementos;
        let cuento;
        elementos = new Personaje();

        cuento =loadStrings("./lib/cuento.txt");

    }


    pintar(){

        elementos.pintarPersonaje();
        Text(cuento,10,10);



    }
}