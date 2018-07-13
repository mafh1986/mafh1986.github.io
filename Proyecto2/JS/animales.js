function todos(){
    reiniciar();
    var todos = document.querySelectorAll("img");
    for(i=0;i<todos.length;i++){
        todos[i].style.opacity="1";
    }
}
function algunaClase(clase){
    reiniciar();
    var clases = document.querySelectorAll("."+clase);
    for(i=0;i<clases.length;i++){
        clases[i].style.opacity="1";
    }
}
function uno(animal){
    reiniciar();
    document.querySelector("#"+animal).style.opacity="1";   
}
function reiniciar(){
    var animales = document.querySelectorAll("img");
    for (let i=0;i<animales.length;i++){
        animales[i].style.opacity="0.5";
    }
}