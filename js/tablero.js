class Tablero {


    constructor(contexto){

        this.contexto=contexto;      
        this.fichas=[];
        this.matrizEspacios=[];
      
     /*    this.fichas.push(new Ficha(100,100,20,'red',this.contexto));
        this.fichas.push(new Ficha(100,200,20,'red',this.contexto));
        this.fichas.push(new Ficha(100,300,20,'red',this.contexto));
        this.fichas.push(new Ficha(100,540,20,'red',this.contexto));
 */
    }

    draw(){

        // a cada ficha le digo que se dibuje

       this.fichas.forEach(ficha => {
           ficha.draw();
       });

    }

    drawMatrizEspacios(){

        let x=0; let y=0;

        for (let fila = 0; fila <800; fila+=100) {               
                for (let col = 0; col <600 ; col+=100) {                   
                         x=fila+50;             
                         y=col+50;                          
                         this.fichas.push(new Ficha(x,y,40,'red',this.contexto))
                         this.contexto.fillStyle='blue';
                        this.contexto.beginPath();
                        this.contexto.arc(x,y,40,0,Math.PI*2);                
                        this.contexto.fill();
                        this.contexto.closePath(); 
              
            }                  
               
                
            }
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