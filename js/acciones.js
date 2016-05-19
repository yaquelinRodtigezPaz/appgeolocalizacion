// JavaScript Document
$(document).ready(function(e) {
//WatchID se refiere a actual

var watchID=null;
document.addEventListener("deviceready",Dispositivo_Listo,false);

//Cuando esta listo el Dispositivo
function Dispositivo_Listo(){
	Comienza();
}

//Empieza la observacion de la aceleracion
function Comienza(){
	
//Actualiza la aceleracion cada 2 segundos
//
var opciones={frequency:2000};

watchID=navigator.accelerometer.watchAcceleration(Correcto, Error, opciones);
navigator.geolocation.getCurrentPosition(Localiza, ErrorLozalizacion);
}
//Detiene la observacion de la aceleracion

function Detente(){
	if(watchID){
		navigator.accelerometer.clearWatch (watchID);
		watchID=null;
	}
}
//Correcto:Toma una captura de la aceleracion
function Correcto(aceleration){
	var element=document.getElementById('acelerometro');
	
	element.innerHTML='Aceleracion en X: '+acceleration.x+'<br/>'+
	'Aceleracion en Y: '+acceleration.y+'<br/>'+
	'Intervalo: '+acceleration.timestamp+'<br/>';
}

//Error: Falla al obtener la aceleracion
function Error(){
	alert('Error');
}
//Exito al localizar
function Localiza(posicion){
	var element=document.getElementById('geolocalizacion');
	element.innerHTML='Latitud: '+posicion.coords.latitude +'<br/>' +
	'Longitud: '+posicion.coords.longitude +'<br/>' +
	'Precision: '+posicion.coords.accuray+'<br/>' +
	'Intervalo: '+posicion.timestamp +'<br/>';
}
//Error en la geolocalizacion
function ErrorLocalizacion(error){
	alert('codigo:'+error.code +'\n'+
	'mensaje:'+error.message+'\n');
}
});