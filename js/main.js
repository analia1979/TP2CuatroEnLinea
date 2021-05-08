document.addEventListener('DOMContentLoaded', () => {


canvas=document.getElementById('tableroJuego');
canvas.width = 800;
canvas.height = 600;
ctx=canvas.getContext('2d');


let cuatroEnLinea= new Juego(ctx,canvas.width,canvas.height);
cuatroEnLinea.draw();


canvas.addEventListener('mousedown',(e)=>{

        if(cuatroEnLinea.isClickedFicha(e.offsetX,e.offsetY)){
           
            canvas.addEventListener('mousemove',(eMouseMove)=>{
                cuatroEnLinea.moverFicha(eMouseMove.offsetX,eMouseMove.offsetY);
            })

        }   
        
});


canvas.addEventListener('mouseup',(e)=>{
   canvas.removeEventListener('mousemove',cuatroEnLinea.moverFicha);
    cuatroEnLinea.soltarFicha();

});

let btnDibujarMatriz=document.getElementById('btnMatriz');
btnDibujarMatriz.addEventListener('click',()=>{

       cuatroEnLinea.comenzarJuego();

})




























});
