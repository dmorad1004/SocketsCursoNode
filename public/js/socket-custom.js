var socket = io();

socket.on('connect', function () {
    console.log('Conectado al servidor');
});
// escuchar 
socket.on('disconnect', function () {
    console.log('Perdimos conexión con el servidor');
});

// enviar informaciòn
socket.emit('enviarMensaje', {
    usuario: 'David',
    mensaje: 'hola mundo',
}, function (resp) {
    console.log('respuesta server:', resp);
});

//Escuchar información 
socket.on('enviarMensaje', function (mensaje) {

    console.log('servidor:', mensaje);


})