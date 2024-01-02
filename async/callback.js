function hola(nombre, miCallback){
    setTimeout(function(){
        console.log('Hola '+nombre);
        miCallback();
    },1000);
}

function adios(nombre, otroCallback){
    setTimeout(function(){
        console.log('Hasta la vista ' +nombre);
        otroCallback();
    },1500);
}

console.log('1. Iniciando proceso');
hola('Guillermo',function(){
    adios('Guille', function(){
        console.log('4. Terminando proceso....');
    })
});

