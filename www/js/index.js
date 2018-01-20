
baseUrl = 'http://ivanprogramador.com.br/teste/hadaya/cliente/';

document.addEventListener("deviceready", onDeviceReady, false); 


function onDeviceReady() {

modelo =  device.model;
plataforma = device.platform;
uuid = device.uuid;
version =  device.version;
serial = device.serial;

//pedidos();
//alert('testando');

onInit();

}












function logar(){


//alert('logando');

var login = $("#login").val();
var senha = $("#senha").val();
var tipo = 'cli';
var dados = "login=" + login + "&senha=" + senha + "&tipo=" + tipo;
//alert('dados: ' + dados);
	
$.ajax({
//
dataType: "json",
type: "POST",
url: baseUrl + "app_logando.php",
data: dados ,
crossDomain: true,

success: function(retorno){ 
//alert(retorno);
//
alert(  "Testando retorno : logou: " + retorno.logou + ", msg: " + retorno.msg  + ", token: " + retorno.token);

if( retorno.logou == 's' ){

} else {
alert( 'Falha ao logar: ' + retorno.msg );
}

}
,beforeSend: function(){
},
complete: function(){
}

});


}
















function checkConnection() {

alert('testando conexao:');
var networkState = navigator.connection.type;

alert('networkState:' + networkState );

var states = '';
if( networkState == 'Connection.UNKNOWN' ){    states  = 'Unknown connection'; }
if( networkState == 'Connection.ETHERNET' ){        states = 'Ethernet connection'; }
if( networkState == 'Connection.WIFI' ){        states     = 'WiFi connection'; }
if( networkState == 'Connection.CELL_2G' ){        states  = 'Cell 2G connection'; }
if( networkState == 'Connection.CELL_3G' ){        states  = 'Cell 3G connection'; }
 if( networkState == 'Connection.CELL_4G' ){       states  = 'Cell 4G connection'; }
if( networkState == 'Connection.CELL' ){        states     = 'Cell generic connection'; }
if( networkState == 'Connection.NONE' ){        states     = 'No network connection'; }

    alert('Connection type: ' + states );
}



function pedidos(){
alert('pedidos');
location.href='lis_pedidos.html';
}