class Tablero {


    constructor(contexto){

        this.contexto=contexto;      
        this.fichas=[];
        this.matrizEspacios=[[]];
        this.col=6;
        this.filas=8;
      
    
    }

    draw(){

        // a cada ficha le digo que se dibuje
       
      /*  this.fichas.forEach(ficha => {
           ficha.draw();           
       }); */



    }

    inicializarMatriz(){
        let x=0; let y=0; let posX=0;let posY=0;
        for (let fila = 0; fila <600; fila+=100) {
             let espacios=[y]; y=0;
            for (let columna = 0; columna < 600; columna+=100) {
                posX=fila+50;             
                posY=columna+50;  
                let nuevoEspacio=new EspacioTablero(posX,posY,40,this.contexto);

                this.matrizEspacios[x][y]=nuevoEspacio;
                nuevoEspacio.draw();
                y++;
           }
           x++; 
        }
       



    }

    drawMatrizEspacios(){

        let x=0; let y=0;

        let jugador1=new Jugador('jugador1',20);

        let jugador2=new Jugador('jugador2',20);
    
        // crear fichas y agregarlas al jugador
            let x2=840,y2=0; let x3=900;
        for (let index = 0; index < 20; index++) {
    
            y2=y2+100;
            jugador1.agregarFicha(new Ficha(x2,y2,40,'red',this.contexto));
            jugador2.agregarFicha(new Ficha(x3,y2,40,'green',this.contexto));
           // x + Math.floor(Math.random() * 150 + 1)), (y + i), 40, colour, canvas
        }
        
        this.inicializarMatriz();
        
       /*  for (let fila = 0; fila <800; fila+=100) {               
                for (let col = 0; col <600 ; col+=100) {                   
                         x=fila+50;             
                         y=col+50;                          
                        // 50 150 250 
                        this.fichas.push(new Ficha(x,y,40,'red',this.contexto));                        
                         this.contexto.fillStyle='blue';
                        this.contexto.beginPath();
                        this.contexto.arc(x,y,40,0,Math.PI*2);                
                        this.contexto.fill();
                        this.contexto.closePath();  
              
            }                  
               

            } */
       // this.draw();    

    }

    isClickedFicha(clickedX,clickedY){

        for (let i = 0; i < this.fichas.length; i++) {

                if (this.fichas[i].isClicked(clickedX,clickedY))
                        return this.fichas[i];
           
            
        }
        return null;

    }



}