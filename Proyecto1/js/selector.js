function todo(opacidad){
    var juegos = document.querySelectorAll(".juego");
    juegos.forEach(juego =>{
        juego.style.opacity=opacidad;
    })
}
function resaltar(categoria){
    console.log(categoria);
    todo("0.5");
    var juegos = document.querySelectorAll("."+categoria);
    juegos.forEach(juego =>{
        juego.style.opacity="1";
    })
}