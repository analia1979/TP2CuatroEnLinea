document.addEventListener('DOMContentLoaded', () => {


canvas=document.getElementById('tableroJuego');
canvas.width = 1200;
canvas.height = 600;
ctx=canvas.getContext('2d');


let cuatroEnLinea= new Juego(ctx,canvas.width,canvas.height);
cuatroEnLinea.draw();
let turno=true; // turno true juega jugador1 sino jugador2

canvas.addEventListener('mousedown',(e)=>{

     if(turno){
        
        if(cuatroEnLinea.isClickedFicha(e.offsetX,e.offsetY)){
           
            canvas.addEventListener('mousemove',(eMouseMove)=>{
                cuatroEnLinea.moverFicha(eMouseMove.offsetX,eMouseMove.offsetY);
            })

        }   
    }  
});


canvas.addEventListener('mouseup',(e)=>{
   canvas.removeEventListener('mousemove',cuatroEnLinea.moverFicha);
    cuatroEnLinea.soltarFicha();

});

let btnDibujarMatriz=document.getElementById('btnMatriz');
btnDibujarMatriz.addEventListener('click',()=>{

    iniciarJugadores();  
    cuatroEnLinea.comenzarJuego();

})

function iniciarJugadores(){

    let jugador1=new Jugador('jugador1',20,ctx);

    let jugador2=new Jugador('jugador2',20,ctx);

    // crear fichas y agregarlas al jugador
        let x=840,y=500; let y1=300;
    for (let index = 0; index < 10; index++) {

        x=x+20;
        jugador1.agregarFicha(new Ficha(x,y,40,'red',ctx));
        jugador2.agregarFicha(new Ficha(x,y1,40,'green',ctx));
      
    }
    jugador1.draw();
    jugador2.draw();




}




























});
