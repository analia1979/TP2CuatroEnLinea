class EspacioTablero{

constructor(posX,posY, radio,contexto){

this.posX=posX;
this.posY=posY;
this.radio=radio;
this.ficha=null;
this.contexto=contexto;


}


draw(){

    this.contexto.fillStyle='white';
    this.contexto.beginPath();
    this.contexto.arc(this.posX,this.posY,this.radio,0,Math.PI*2);                
    this.contexto.fill();
    this.contexto.closePath();  

}



}