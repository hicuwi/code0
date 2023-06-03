//Variables 
edad = 15; // Tipo numérico
nombre = "Santo"; //Tipo texto
cumple = true; //Tipo boleano (false | true)

//console.log()
//alert()

if (cumple == true){
    console.log("Feliz cumple");
    if (edad > 10){
        console.log("Ya estás grande");
    }
}

if (edad > 5){
    console.log("Eres mayor a 5");
}

if (nombre == "Santo"){
    console.log("Hola Santo");
}

if(cumple == false){
    cumple = !cumple;
}
console.log(cumple);


//funciones

function darLike(id){
    span = document.getElementById(id);
    span.innerText =  parseInt(span.innerText) + 1;
}