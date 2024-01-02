function hola(nombre, miCallback){
    setTimeout(function(){
        console.log('Hola '+nombre);
        miCallback(nombre);
    },1500);
}
function hablar(callbackHablar){
    setTimeout(function(){
        console.log('bla bla bla');
        callbackHablar();
    },3000);

}

function adios(nombre, otroCallback){
    setTimeout(function(){
        console.log('Adios ' +nombre);
        otroCallback();
    },1500);
}

//----
console.log('1. Iniciando proceso');
hola('Guillermo',function(nombre){
    hablar(function(){
        hablar(function(){
            adios(nombre, function(){
                console.log('4. Terminando proceso....');
            });
        });
        
    });
});

