class Jugador{

constructor(apodo,cantidad,contexto){

    this.nombre=apodo;
    this.fichas=[];
    this.cantidadFichas=cantidad;
    this.contexto=contexto;
    
}


tengoFichas(){


    return (this.cantidadFichas!=0);
}

agregarFicha(ficha){

    this.fichas.push(ficha);

}

draw(){

    this.fichas.forEach(ficha => {

        ficha.draw();
        
    });
}





}