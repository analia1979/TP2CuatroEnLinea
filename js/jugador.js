class Jugador{

constructor(apodo,cantidad){

    this.nombre=apodo;
    this.fichas=[];
    this.cantidadFichas=cantidad;
}


tengoFichas(){


    return (this.cantidadFichas!=0);
}




}