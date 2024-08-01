// variables
let numeroSecreto = Math.floor(Math.random()*10)+1;
let numeroUsuario =0;
let intentos= 1;
let palabraVeces= 'vez';
let maximoDeIntentos= 2
console.log(numeroSecreto);
//let numeroUsuario = prompt("Me indicas un numero entre 1 y 10 por favor:");
while(numeroUsuario != numeroSecreto){
    let numeroUsuario = parseInt(prompt("Me indicas un numero entre 1 y 10 por favor:"));
    console.log(typeof(numeroUsuario));
    /*este codigo realiza la comparacion*/
    if (numeroUsuario == numeroSecreto) {
        //la condicion es verdadera
        alert(`Acertaste, el numero es ${numeroSecreto}. Lo hiciste en ${intentos} ${intentos==1 ? 'vez':'veces'}`);
    }
    //La condicion es falsa
    else {
        if(numeroSecreto>numeroUsuario){
            alert('el numero es mayor');}
        else{
            alert('el numeo es menor');}
        //alert('no acertaste el numero');
    intentos= intentos+1;
    palabraVeces= 'veces';  
    if(intentos>maximoDeIntentos){
        alert('Llegaste al maximo numero de intentos');
        break
    }   
    };
}