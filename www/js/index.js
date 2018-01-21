
baseUrl = 'http://ivanprogramador.com.br/teste/hadaya/';
baseCliente = 'cliente/';
baseArquivos = 'arquivos/';
baseLaudos = 'pdf/';
pastaLocal = 'RadioNorth/';
tokenLogado = '';
idLogado = '';
nomeLogado = '';
tipoLogado = '';
ultimoPedido = '';
totalPedidos = '';
vezPedidos = 1;
qtosPedidosTem = 0;

document.addEventListener("deviceready", onDeviceReady, false); 


function onDeviceReady() {

modelo =  device.model;
plataforma = device.platform;
uuid = device.uuid;
version =  device.version;
serial = device.serial;

var conn = conexao();
conexaoMSG(conn);

//pedidos();
//alert('testando');

//onInit();

}


function conexaoMSG(conn){

if( conn == 'none' || conn == 'NONE' ){
alert('O app nao encontrou conexao com a internet');
}

}









function logar(){


//alert('logando');

var login = $("#login").val();
var senha = $("#senha").val();
var tipo = 'cli';
var dadosLog = "login=" + login + "&senha=" + senha + "&tipo=" + tipo;
//alert('dados: ' + dadosLog);
	
$.ajax({
//
dataType: "json",
type: "POST",
url: baseUrl + baseCliente + "app_logando.php",
data: dadosLog ,
crossDomain: true,

success: function(retorno){ 
//alert(retorno);

//alert(  "Testando retorno : logou: " + retorno.logou + ", msg: " + retorno.msg  + ", token: " + retorno.token   + ", nome: " + retorno.nome  + ", tipo: " + tipo);


if( retorno.logou == 's' ){

onCreateDB( retorno.token, retorno.nome, tipo );

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









function downloads(){

//alert('logando');

var dadosDown = "tokenUsu=" + tokenLogado + "&tipoUsu=" + tipoLogado + "&ultimoPedido=" + ultimoPedido  + "&totalPedidos=" + totalPedidos + "&vezPedidos=" + vezPedidos;
//
alert('dados: ' + dadosDown);
	
$.ajax({
// 
dataType: "json",
type: "POST",
url: baseUrl + baseCliente + "app_downloads.php",
data: dadosDown ,
crossDomain: true,

success: function(retorno){ 

//alert(retorno);

ultimoPedido = ultimo; 
totalPedidos =  retorno['total'] ;
vezPedidos = vezPedidos + 1;
qtosPedidosTem = qtosPedidosTem + parseInt( retorno['qtosPedidosVeio'] ) ;


var html = '';
for (  var pedido in retorno['pedidos']  ){//1

html += '<hr>' + pedido + '<br>';

for (  var arq in retorno['pedidos'][pedido]['arquivos']  ){//2

var arquivo = retorno['pedidos'][pedido]['arquivos'][arq]['arquivo'];
var dataarq = retorno['pedidos'][pedido]['arquivos'][arq]['data'];
var nomearq = retorno['pedidos'][pedido]['arquivos'][arq]['nome'];

html += 'arquivo:' + arquivo + ',nome:' + nomearq + ', data:' + dataarq + '<input type="button" onClick="baixarArquivo(\''+arquivo+'\',\'arq\',\''+pedido+'\',\'\')" value="Baixar" style="background:red;width:60px;">'     +   '<br>' ; // arq,tipo,idped,token

}//2



for (  var lau in retorno['pedidos'][pedido]['laudos']  ){//3

var idlau = retorno['pedidos'][pedido]['laudos'][lau]['idlaudo'];
var datalau = retorno['pedidos'][pedido]['laudos'][lau]['data'];
var tokenlau = retorno['pedidos'][pedido]['laudos'][lau]['token'];

html += 'idlaudo:' + idlau + ',token:' + tokenlau + ', data:' + datalau +  '<input type="button" onClick="baixarArquivo(\'\',\'lau\',\''+pedido+'\',\''+tokenlau+'\')" value="Baixar" style="background:red;width:60px;">'     +   '<br>' ;

}//3


}//1

$("#divDownloads").html( html );


}
,beforeSend: function(){
},
complete: function(){
}

});


}







function abreBrowser(){
ifrBrowser.location.href = baseUrl + baseCliente + 'lis_pedidos.php?tokenUsu=' + tokenLogado;
}


function fechaBrowser(){
ifrBrowser.location.href='embranco.html';
}











function conexao(){
var networkState = navigator.connection.type;
return networkState;
}



function pedidos(){
alert('pedidos');
location.href='lis_pedidos.html';
}







function baixarArquivo(arq,tipo,idped,token){ 

alert('chamou funcao dowload');

if( tipo == 'lau' ){
var arquivoBX = baseUrl + baseLaudos + 'laudo.php?token=' + token ; 
var arquivoBX2 = 'ped' + idped + '/Laudo_' + token + '.pdf' ;
} else {
var arquivoBX = baseUrl + baseArquivos + arq;
var arquivoBX2 = 'ped' + idped + '/' + arq ;
}

	var myPath = cordova.file.externalRootDirectory; // We can use the default externalRootDirectory or use a path : file://my/custom/folder
	alert('myPath - externalRootDirectory dados externos cartao:' + myPath);


		var ft = new FileTransfer();
		
		ft.download(

		  arquivoBX, // what u download
		  myPath + pastaLocal + arquivoBX2, // this is the filename as well complete url
		  function(entry) {
			alert("success 1");
			alert(JSON.stringify(entry));		
		  },
		  function(err) {
			alert('erro 1'+ err);
			alert(JSON.stringify(err));
		  }	
		);



}



function fechar(){
navigator.app.exitApp();
}