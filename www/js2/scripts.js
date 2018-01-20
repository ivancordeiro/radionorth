var tabs = 0;


function GerarCookie(strCookie, strValor, lngDias)
{
    var dtmData = new Date();

    if(lngDias)
    {
        dtmData.setTime(dtmData.getTime() + (lngDias * 24 * 60 * 60 * 1000));
        var strExpires = "; expires=" + dtmData.toGMTString();
    }
    else
    {
        var strExpires = "";
    }
    document.cookie = strCookie + "=" + strValor + strExpires + "; path=/";
}



function init(){

var elems = document.getElementsByTagName("tr");

for(i = 0; i < elems.length; i++){
if(doesNameStartWith(elems[i].id,"tabbox")){
tabs++;
}
}

if(tabs > 0){

for(i=0;i<tabs;i++) {
document.getElementById('tabbox'+i).style.display='none';
}

if(tabela){tabels = tabela;}else{tabels = 0;}

TabClick(tabels);

}

//document.getElementById("div_transp").className = "";

//populate(document.getElementById('searchtype'));

search_add_field();

}


window.onload = init;





/////////////////////////////////////////////

function $(strs){
	     return document.getElementById(strs);
}

function numbers(eve){
  		 if(navigator.appName == "Netscape"){tecla = eve.which;}else{tecla = eve.keyCode;}
		 if ((tecla != 8) && (tecla != 0) && (tecla <= 46 || tecla >= 58))
 		 {return false;}
 		 else return true}
		 
function numbersv(eve){
  		 if(navigator.appName == "Netscape"){tecla = eve.which;}else{tecla = eve.keyCode;}
		 if ((tecla != 8) && (tecla != 0) && (tecla <= 43 || tecla >= 58))
 		 {return false;}
 		 else return true}		 
		 
function Formats(campo,sMask){
	 var i, nCount, sValue, fldLen, mskLen,bolMask, sCod, nTecla;

 sValue = campo.value;

 // Limpa todos os caracteres de formatação que
 // já estiverem no campo.
 sValue = sValue.toString().replace( "-", "" );
 sValue = sValue.toString().replace( "-", "" );
 sValue = sValue.toString().replace( ".", "" );
 sValue = sValue.toString().replace( ".", "" );
 sValue = sValue.toString().replace( "/", "" );
 sValue = sValue.toString().replace( "/", "" );
 sValue = sValue.toString().replace( "(", "" );
 sValue = sValue.toString().replace( "(", "" );
 sValue = sValue.toString().replace( ")", "" );
 sValue = sValue.toString().replace( ")", "" );
 sValue = sValue.toString().replace( " ", "" );
 sValue = sValue.toString().replace( " ", "" );
 fldLen = sValue.length;
 mskLen = sMask.length;

 i = 0;
 nCount = 0;
 sCod = "";
 mskLen = fldLen;

 while (i <= mskLen) {
 bolMask = ((sMask.charAt(i) == "-") || (sMask.charAt(i) == ".") || (sMask.charAt(i) == "/"))
 bolMask = bolMask || ((sMask.charAt(i) == "(") || (sMask.charAt(i) == ")") || (sMask.charAt(i) == " "))

 if (bolMask) {
 sCod += sMask.charAt(i);
 mskLen++; }
 else {
 sCod += sValue.charAt(nCount);
 nCount++;
 }

 i++;
 }

 campo.value = sCod;

 }		 
 
 
function FormataReais(fld, milSep, decSep, e) {

var sep = 0;

var key = '';

var i = j = 0;

var len = len2 = 0;

var strCheck = '0123456789';

var aux = aux2 = '';

var whichCode = (window.Event) ? e.which : e.keyCode;

if (whichCode == 8 || whichCode == 0) return true;

if (whichCode == 13) return true;

key = String.fromCharCode(whichCode);// Valor para o código da Chave

if (strCheck.indexOf(key) == -1) return false; // Chave inválida

len = fld.value.length;

for(i = 0; i < len; i++)

if ((fld.value.charAt(i) != '0') && (fld.value.charAt(i) != decSep)) break;

aux = '';

for(; i < len; i++)

if (strCheck.indexOf(fld.value.charAt(i))!=-1) aux += fld.value.charAt(i);

aux += key;

len = aux.length;

if (len == 0) fld.value = '';

if (len == 1) fld.value = '0'+ decSep + '0' + aux;

if (len == 2) fld.value = '0'+ decSep + aux;

if (len > 2) {

aux2 = '';

for (j = 0, i = len - 3; i >= 0; i--) {

if (j == 3) {

aux2 += milSep;

j = 0;

}

aux2 += aux.charAt(i);

j++;

}

fld.value = '';

len2 = aux2.length;

for (i = len2 - 1; i >= 0; i--)

fld.value += aux2.charAt(i);

fld.value += decSep + aux.substr(len - 2, len);

}

return false;

}


function getpx(px){
if(px == ""){px = "0px";}
px = px.replace("px","");
px = parseInt(px);
return px
}

function pesq(id,p){

var tr = document.getElementById(id);
var pes = document.getElementById(p); 

if(pes.className == "tab"){
tr.style.display = "";	
pes.className = "tabselected";
}else{
tr.style.display = "none";	
pes.className = "tab";	
}

}

function precom(num){

   x = 0;

   if(num < 0) {
      num = Math.abs(num);
      x = 1;
   }

   if(isNaN(num)) num = "0";
      cents = Math.floor((num*100+0.5)%100);

   num = Math.floor((num*100+0.5)/100).toString();

   if(cents < 10) cents = "0" + cents;
      for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
         num = num.substring(0,num.length-(4*i+3))+'.'
               +num.substring(num.length-(4*i+3));

   ret = num + ',' + cents;

   if (x == 1) ret = ' - ' + ret;return ret;

}

function preco(val){
val = val.replace('.','');
val = val.replace(",",".");
return val;
}










function buscaCidAdm(){
cidade_buscar = $("#cidade_buscar").val();
if( cidade_buscar.length >= 2){



$.ajax({
//dataType: "json",
type: "POST",
url: "controller.php?acao=buscaCid&sid="+Math.random(),
data: 'cidade_buscar=' + cidade_buscar ,

success: function(retorno){  

// alert(retorno);

 // 
 document.getElementById('div_buscaCid').innerHTML = retorno;

}
,beforeSend: function(){
	

},
complete: function(){
	

}

});



} else {
document.getElementById('div_buscaCid').innerHTML = '';
}


}







function escolheuCidade(cid){

$("#cidade").val(cid);
$("#div_buscaCid").html('');

}






















function adicionarProduto(){

 

var id = $("#newprod_id").val();
var quant = $("#newprod_quant").val();
var linhas_max = parseInt(  $("#linhas_max").val()  );
var valor_total = $("#valor_total").val();
var cliente = $("#cliente").val();
//alert(cliente);

if( id == '' ){
alert('Escolha o produto ou servico!');
} else if( cliente == '' ){
alert('Escolha o paciente!');
} else {



$.ajax({
//
dataType: "json",
type: "POST",
url: "adicinarproduto.php?sid="+Math.random(),
data: 'id=' + id + '&quant=' + quant + '&valor_total=' + valor_total + '&cliente=' + cliente ,

success: function(retorno){  
		
// alert(retorno);
// alert( retorno.produto );
var linhas_max_new = linhas_max + 1;

var montaprod =  '<div style="100%; margin-bottom:5px;" id="divprod_'+linhas_max_new+'" >';
montaprod += '<input type="text" size="2" readonly name="linhas[]" id="linhas[]" value="'+linhas_max_new+'" style="padding:4px;  background:#EBEBE4; border: 2px solid #ccc;" >';
//montaprod += '<input type="text" style="width:60%;  padding:4px; margin-left:7px; background:#EBEBE4; border: 2px solid #ccc;" readonly value="'+retorno.nome+'">';

montaprod += '<select name="produtos_id_'+linhas_max_new+'" id="produtos_id_'+linhas_max_new+'" onChange = "mudouProdutoPedido('+linhas_max_new+',this.value)"; style="width:500px;  padding:4px; margin-left:7px; border: 2px solid #ccc;"  >';
montaprod += retorno.produto;
montaprod += '</select >';

//montaprod += '<input name="produtos_id_'+linhas_max_new+'" id="produtos_id_'+linhas_max_new+'" type="text" style="width:5%; padding:4px; margin-left:7px; background:#EBEBE4; border: 2px solid #ccc; " readonly value="'+retorno.id+'">';
montaprod += '<input name="produtos_id2_'+linhas_max_new+'" id="produtos_id2_'+linhas_max_new+'" type="text" style="width:70px; padding:4px; margin-left:7px; background:#EBEBE4; border: 2px solid #ccc; " readonly value="'+retorno.id+'">';


montaprod += '<input onkeypress="return numbersv(event)" onChange="mudaQuantidadeProd('+linhas_max_new+')" onKeyUp="mudaQuantidadeProd('+linhas_max_new+')" name="produtos_quant_'+linhas_max_new+'" id="produtos_quant_'+linhas_max_new+'" type="text" style="width:40px; padding:4px; margin-left:7px;"  value="'+retorno.quant+'">';
montaprod += '<input  onKeyPress="return FormataReais(this,\'.\',\',\',event)"  onChange="mudaQuantidadeValorProd('+linhas_max_new+')" name="produtos_valor_'+linhas_max_new+'" id="produtos_valor_'+linhas_max_new+'" type="text" style="width:80px; padding:4px; margin-left:7px; "  value="'+retorno.valor+'">';
montaprod += '<input  name="produtos_valor_t_'+linhas_max_new+'" id="produtos_valor_t_'+linhas_max_new+'" type="text" style="width:80px; padding:4px; margin-left:7px; background:#EBEBE4; border: 2px solid #ccc;" readonly value="'+retorno.valor_t+'">';
montaprod += '<img src="refresh.gif" id="img_atualiza_prod'+linhas_max_new+'" style=" margin-left:7px;  cursor:pointer;" onClick="mudaQuantidadeValorProd('+linhas_max_new+')">';
montaprod += '<img src="excluir.gif" style=" margin-left:45px; cursor:pointer;" onClick="excluirProduto('+linhas_max_new+')" >';

montaprod += '<input type="hidden" name="produtos_jatem_'+linhas_max_new+'" id="produtos_jatem_'+linhas_max_new+'"   value="n">';
montaprod += '<input type="hidden" name="produtos_status_'+linhas_max_new+'" id="produtos_status_'+linhas_max_new+'"   value="">';
montaprod += '<input type="hidden" name="produtos_id_pp_'+linhas_max_new+'" id="produtos_id_pp_'+linhas_max_new+'"   value="">';

montaprod += '</div>';


// alert(montaprod);		
// 
document.getElementById('div_produtos').innerHTML += montaprod;
$("#linhas_max").val( linhas_max_new);
//$("#valor_total").val( retorno.valor_total_new );
atualizarSomaProdutos()
		
}
,beforeSend: function(){
},
complete: function(){	
}

});




}








}

















function buscaCliente(){
cliente_buscar = $("#cliente_buscar").val();
if( cliente_buscar.length >= 1){



$.ajax({
//dataType: "json",
type: "POST",
url: "controller.php?acao=buscaCliente&sid="+Math.random(),
data: 'cliente_buscar=' + cliente_buscar ,

success: function(retorno){  

// alert(retorno);

 // 
 document.getElementById('div_buscaCli').innerHTML = retorno;

}
,beforeSend: function(){
	
},
complete: function(){
	
}

});



} else {
document.getElementById('div_buscaCli').innerHTML = '';
}


}







function escolheuCliente(id, cliente, cliente2, deconto){

var mont = id + ' | ' + cliente;

$("#cliente").val(mont);
$("#cliente2").val(cliente2);
$("#div_buscaCli").html('');

$("#desconto_porc").val( deconto );
$("#desconto_valor").val( '' );

    opcoes = document.getElementById('desconto_tipo').options;
   for(a = 0; a < opcoes.length; a++){
	valor = opcoes[a].value;
		 if(valor == 'p' ){
		 opcoes[a].selected = true;  
		 }	 
	}

}








function buscaUsuarioConta(){
cliente_buscar = $("#cliente_buscar").val();
if( cliente_buscar.length >= 1){



$.ajax({
//dataType: "json",
type: "POST",
url: "controller.php?acao=buscaUsuarioConta&sid="+Math.random(),
data: 'cliente_buscar=' + cliente_buscar ,

success: function(retorno){  

// alert(retorno);

 // 
 document.getElementById('div_buscaCli').innerHTML = retorno;

}
,beforeSend: function(){
	
},
complete: function(){
	
}

});



} else {
document.getElementById('div_buscaCli').innerHTML = '';
}


}






function escolheuUsuarioConta(id, cliente, tipo){

var mont = id + '-' + tipo + ' | ' + cliente;

$("#cliente").val(mont);
$("#div_buscaCli").html('');


}






function excluirProduto(qual){

if (confirm("Tem certeza de que deseja excluir este item do pedido? É necessário depois clicar em Salvar Escopo para que esta exclusão seja efetivada concretamente ")) {
confirmouExcluirProduto(qual)
}

}




function confirmouExcluirProduto(qual){
// $("#divprod_"+qual).html('');
$("#divprod_"+qual).hide();
$("#produtos_status_"+qual).val('ca');
atualizarSomaProdutos();
}




function atualizarSomaProdutos(){

//alert('teste');
$("#valor_total").val( '' );
document.getElementById("img_atualiza_soma_rodutos").src = 'images/loading.gif';


cliente = $("#cliente").val();

desconto_porc = $("#desconto_porc").val();
desconto_valor = $("#desconto_valor").val();
desconto_tipo = $("#desconto_tipo").val();

prodsmarc = '';
    inputs_linhas = document.getElementsByName("linhas[]");

    for( i = 0; i < inputs_linhas.length; i++){
     
	   //if( boxes_cursos[i].checked == true ){
         linha = inputs_linhas[i].value;
         document.getElementById("img_atualiza_prod" + linha).src = 'images/loading.gif';

         idprod = document.getElementById("produtos_id_" + linha).value;
         quant = document.getElementById("produtos_quant_" + linha).value;
         sta = document.getElementById("produtos_status_" + linha).value;
         valor_prod = document.getElementById("produtos_valor_" + linha).value;


	     if(prodsmarc != ''){prodsmarc += ',';}
	     prodsmarc +=  idprod + '|' + quant + '|' + sta + '|' + linha + '|' + valor_prod ;

       //alert('i:' + i + ' - linha:' + linha + ' - idprod:' + idprod + ' - quant:' + quant + ' - inputs_linhas:' + inputs_linhas + ' - prodsmarc:' + prodsmarc);

	   //}
	}

  //alert(prodsmarc);


$.ajax({
//
dataType: "json",
type: "POST",
url: "atualizar_soma_produtos.php?sid="+Math.random(),
data: 'prodsmarc=' + prodsmarc + '&cliente=' + cliente + '&desconto_porc=' + desconto_porc + '&desconto_valor=' + desconto_valor + '&desconto_tipo=' + desconto_tipo ,

success: function(retorno){  
// alert(retorno);
$("#valor_total").val( retorno.valor_total );
$("#valor_final").val( retorno.valor_final );
$("#desconto_valor").val( retorno.desconto_valor );
$("#desconto_porc").val( retorno.desconto_porc );
$("#desconto_total").val( retorno.desconto_total );

//alert( retorno.desconto_porc );


    for (i in retorno.novosvalores ){
     //alert(  retorno.novosvalores[ i ]['valor'] );
    
         $("#produtos_valor_" + i).val( retorno.novosvalores[ i ]['valor'] );
          $("#produtos_valor_t_" + i).val( retorno.novosvalores[ i ]['valor_t'] );


	}


		document.getElementById("img_atualiza_soma_rodutos").src = 'refresh.gif';
			for( i = 0; i < inputs_linhas.length; i++){
				 linha2 = inputs_linhas[i].value;
				 document.getElementById("img_atualiza_prod" + linha2).src = 'refresh.gif';
			 }






}
,beforeSend: function(){
	
},
complete: function(){
	
}

});


}





function mudaQuantidadeValorProd(linha){

document.getElementById("img_atualiza_prod" + linha).src = 'images/loading.gif';

idprod = document.getElementById("produtos_id_" + linha).value;
quant = document.getElementById("produtos_quant_" + linha).value;
vlr = document.getElementById("produtos_valor_" + linha).value;

//alert(valor);
if( quant != '' ){


$.ajax({
//
dataType: "json",
type: "POST",
url: "atualizar_soma_produtounico.php?sid="+Math.random(),
data: 'quant=' + quant + '&idprod=' + idprod + '&valor=' + vlr,

success: function(retorno){  
// alert(retorno);   
$("#produtos_valor_" + linha).val( retorno.valor );
$("#produtos_valor_t_" + linha).val( retorno.valor_t );

document.getElementById("img_atualiza_prod" + linha).src = 'refresh.gif';

}
,beforeSend: function(){
	
},
complete: function(){
	
}

});



atualizarSomaProdutos();

}
}






function filtrouCliente2(idcliente2){
idcliente = $("#lispedidos_fitro_cliente_sel").val();



$.ajax({
//dataType: "json",
type: "POST",
url: "atualizar_filtro_clientes.php?sid="+Math.random(),
data: 'idcliente=' + idcliente + '&idcliente2=' + idcliente2 ,

success: function(retorno){  
// alert(retorno);
$("#lispedidos_fitro_cliente_sp").html( retorno );
}
,beforeSend: function(){
	
},
complete: function(){
	
}

});



}













function mudouProdutoPedido(linha,novoproduto){

//alert(linha + ',' + novoproduto);

//quant = document.getElementById("produtos_quant_" + linha).value;
quant = $("#produtos_quant_"  + linha ).val()
cliente = $("#cliente").val()

$.ajax({
//
dataType: "json",
type: "POST",
url: "mudar_produto_pedido.php?sid="+Math.random(),
data: 'novoproduto=' + novoproduto + '&quant=' + quant + '&cliente=' + cliente ,

success: function(retorno){  
// alert(retorno);   
$("#produtos_valor_" + linha).val( retorno.valor );
$("#produtos_valor_t_" + linha).val( retorno.valor_t );
atualizarSomaProdutos();

}
,beforeSend: function(){
	
},
complete: function(){
	
}

});



}






function mudastatus(id,valor){



 $.ajax({

   type: "POST",
   url: "ajax.php?acao=mudarStatus",
   data: "id="+id+"&status_new="+valor,
   success: function(msg){
   //alert(msg);   
   // alert('O status do pedido foi alterado!'); 

if( msg == '1' ){
alert('O status do pedido foi alterado com sucesso!');
}  else {
alert('Houve falha na alteração do status do pedido!');
}

   }

 });

 

}






function descancelarPedido(id){
$.ajax({
   type: "POST",
   url: "ajax.php?acao=descancelarPedido",
   data: "id="+id,
   success: function(msg){
   //alert(msg);   
		if( msg == '1' ){
		alert('O status do pedido foi alterado com sucesso!');
		}  else {
		alert('Houve falha na alteração do status do pedido!');
		}
   }
 });
}



function descancelarServico(id){
$.ajax({
   type: "POST",
   url: "ajax.php?acao=descancelarServico",
   data: "id="+id,
   success: function(msg){
   //alert(msg);   
		if( msg == '1' ){
		alert('O status do serviço foi alterado com sucesso!');
		}  else {
		alert('Houve falha na alteração do status do serviço!');
		}
   }
 });
}




function descancelarLaudo(id){
$.ajax({
   type: "POST",
   url: "ajax.php?acao=descancelarLaudo",
   data: "id="+id,
   success: function(msg){
   //alert(msg);   
		if( msg == '1' ){
		alert('O status do laudo foi alterado com sucesso!');
		}  else {
		alert('Houve falha na alteração do status do laudo!');
		}
   }
 });
}





function mudastatus2(id,valor){



 $.ajax({

   type: "POST",
   url: "ajax.php?acao=mudarStatus2",
   data: "id="+id+"&status_new="+valor,
   success: function(msg){
	 //alert(msg);  

if( msg == '1' ){
alert('O status do pagamento foi alterado com sucesso!');
}  else {
alert('Houve falha na alteração do status do pagamento!');
} 



   }

 });

 

}







function mudastatus_serv(id, valor, linha, idped){


 $.ajax({

   type: "POST",
   url: "ajax.php?acao=mudarStatusServ",
   data: "id="+id+"&status_new="+valor,
   success: function(msg){

//alert('msg:'+msg);
   
if( msg == 1){
   alert('O status do servico foi alterado!'); 
} else if( msg == 2){
   location.href = 'edi_pedidos.php?id=' + idped; 
}else {
 alert('Falha na alteração do status do servico!'); 
}

if( valor == 'ca' ){
classe_tr = 'itemcancelado';
document.getElementById('frm_arq_prod_det_' + linha).disabled = true;
document.getElementById('bt_arq_prod_det_' + linha).disabled = true;
//document.getElementsByName('arquivo[][' + linha + ']').disabled = true;
} else {
classe_tr = 'itemdescancelado';
document.getElementById('frm_arq_prod_det_' + linha).disabled = false;
document.getElementById('bt_arq_prod_det_' + linha).disabled = false;
//document.getElementsByName('arquivo[' + linha + ']').disabled = false;
}

document.getElementById('tr_prod_det_' + linha).className = classe_tr;

   }

 });

 

}








function mudastatus_servSimples(id, valor){


 $.ajax({

   type: "POST",
   url: "ajax.php?acao=mudarStatusServ",
   data: "id="+id+"&status_new="+valor,
   success: function(msg){

//alert('msg:'+msg);
   
if( msg == 0){
alert('Falha na alteração do status do servico!'); 
} else {
 alert('O status do servico foi alterado!'); 
}


   }

 });

 

}





function mudaStatusEntrega(id, valor){


 $.ajax({

   type: "POST",
   url: "ajax.php?acao=mudaStatusEntrega",
   data: "id="+id+"&entregue="+valor,
   success: function(msg){

//alert('msg:'+msg);
   
if( msg == 1){
 alert('O status da entrega foi alterado!'); 
} else {
alert('Falha na alteração do status da entrega!'); 
}


   }

 });

 

}







function mudaFormaEntrega(id, valor){


 $.ajax({

   type: "POST",
   url: "ajax.php?acao=mudaFormaEntrega",
   data: "id="+id+"&forma="+valor,
   success: function(msg){

//alert('msg:'+msg);
   
if( msg == 1){
 alert('Alterado com sucesso!'); 
} else {
alert('Falha na alteração!'); 
}


   }

 });

 

}








function mudastatusLaudo(id,valor){

 $.ajax({

   type: "POST",
   url: "ajax.php?acao=mudarStatusLaudo",
   data: "id="+id+"&status_new="+valor,
   success: function(msg){
   
if( msg == 1){
   alert('O status do laudo foi alterado!'); 
}else {
 alert('Falha na alteração do status do servico!'); 
}

   }

 });

 

}
  




function ExcluirArquivoPedido(idservico,idarquivo){

if (confirm("Tem certeza de que deseja excluir este arquivo? A exclusão é irreversível.")) {


 $.ajax({
  // 
dataType: "json",
   type: "POST",
   url: "ajax.php?acao=ExcluirArquivoPedido",
   data: "idservico="+idservico+"&idarquivo="+idarquivo,
   success: function(retorno){

 //alert( retorno );
 //alert( retorno.msg );

   if( retorno.msg == 'ok' ){
 alert( 'O arquivo foi excluido com sucesso' );
 //
$("#div_arquivos_prod_det_" + idservico).html( retorno.atu );
   } else {
 alert( 'Falha na exclusão do arquivo' );
   }
   

   }

 });

}

}






function precoDif(id){

lightbox(10,'800px',435,"f","l","i",435,"auto"); 
ifrlightbox.location.href = "precos_diferenciados.php?semcab=s&idprof=" + id;

}



function precoDifCli(id){

lightbox(10,'800px',435,"f","l","i",435,"auto"); 
ifrlightbox.location.href = "precos_diferenciados_cli.php?semcab=s&idcli=" + id;

}




function buscaEnderecoNew(){

//alert('teste');
var cep = $("#cep").val() ;
//alert(cep);

if( cep.length > 7){
$("#load_cep").show();



$.ajax({
//
dataType: "json",
type: "POST",
url: "../controller/bancoCEP.php?sid="+Math.random(),
data: "acao=buscaCEP&cep=" + cep ,

success: function(retorno){  
//alert(retorno);


var cidade = retorno.cidade + '-' + retorno.uf_sigla + ' | ' + retorno.cidade_codigo ;


$("#logradouro").val(retorno.rua);
$("#bairro").val(retorno.bairro);
$("#cidade").val( cidade );


$("#load_cep").hide();
}

});


} else {
alert('Preencha o CEP por completo');
}


}




function addClientePedido(){
//alert( 'teste ' );
lightbox(10,'800px',435,"f","l","i",435,"auto"); 
ifrlightbox.location.href = 'cad_clientes.php?semcab=s&via=ped' ;
}



function addPedidoCliente(id){
top.location.href = 'cad_pedidos.php?idcliente=' + id ;
}



function addCliente2Pedido(){
//alert( 'teste ' );
lightbox(10,'800px',435,"f","l","i",435,"auto"); 
ifrlightbox.location.href = 'cad_clientes2.php?semcab=s&via=ped' ;
}


function addUsuarioPedido(){
//alert( 'teste ' );
lightbox(10,'800px',435,"f","l","i",435,"auto"); 
ifrlightbox.location.href = 'cad_usuarios.php?semcab=s&via=ped' ;
}









function publicarPedido(id,checked){


document.getElementById('img_publicpedido' + id).style.display = 'inline';

 $.ajax({

   type: "POST",
   url: "ajax.php?acao=publicarPedido",
   data: "id="+id+"&checked="+checked,
   success: function(msg){
//alert(msg); 

if( msg == '1' ){
alert('Pedido publicado com sucesso!');
} else if( msg == '2' ){
alert('Pedido marcado como não publicado!');
} else {
alert('Falha na alteração de status de publicação do pedido!');
}
 

document.getElementById('img_publicpedido' + id).style.display = 'none';	   


   }

 });

 

}








function acionar(tipo){

	var marcados = '';

    var boxes_marcados = document.getElementsByName("marcado[]");

    for( i = 0; i < boxes_marcados.length; i++){

	   if( boxes_marcados[i].checked == true ){

	     if(marcados != ''){marcados += ',';}
	     marcados += boxes_marcados[i].value;

	   }

	}



if( tipo == 'recibo' ){
//location.href= 'etiquetas.php?tipo=recibo&ids=' + marcados ;
var url = 'etiquetas.php?tipo=recibo&ids=' + marcados ;
window.open(url,'blank');
}

}






function macouPagto(qual,check){

//alert( qual + ',' + check);
//frmPedido

if( check == true ){


if( qual == 'cartcred' ){
document.frmPedido.cartcred[0].checked = true;
document.frmPedido.cartcred[1].checked = false;
}

if( qual == 'cartdeb' ){
document.frmPedido.cartdeb[0].checked = true;
document.frmPedido.cartdeb[1].checked = false;
}

if( qual == 'dinh' ){
document.frmPedido.dinh[0].checked = true;
document.frmPedido.dinh[1].checked = false;
}


if( qual == 'conv' ){
document.frmPedido.conv[0].checked = true;
document.frmPedido.conv[1].checked = false;
}


if( qual == 'outro' ){
document.frmPedido.outro[0].checked = true;
document.frmPedido.outro[1].checked = false;
}


if( qual == 'cort' ){
document.frmPedido.cort[0].checked = true;
document.frmPedido.cort[1].checked = false;
}



} else {




if( qual == 'cartcred' ){
document.frmPedido.cartcred[0].checked = false;
document.frmPedido.cartcred[1].checked = false;
document.frmPedido.cartcred_vl.value = '';
}


if( qual == 'cartdeb' ){
document.frmPedido.cartdeb[0].checked = false;
document.frmPedido.cartdeb[1].checked = false;
document.frmPedido.cartdeb_vl.value = '';
}


if( qual == 'dinh' ){
document.frmPedido.dinh[0].checked = false;
document.frmPedido.dinh[1].checked = false;
document.frmPedido.dinh_vl.value = '';
}

if( qual == 'conv' ){
document.frmPedido.conv[0].checked = false;
document.frmPedido.conv[1].checked = false;
document.frmPedido.conv_vl.value = '';
}


if( qual == 'outro' ){
document.frmPedido.outro[0].checked = false;
document.frmPedido.outro[1].checked = false;
document.frmPedido.outro_vl.value = '';
}

if( qual == 'cort' ){
document.frmPedido.cort[0].checked = false;
document.frmPedido.cort[1].checked = false;
document.frmPedido.cort_vl.value = '';
}



}




}





function macouPagtoLis(qual,check){

//alert( qual + ',' + check);

if( check == true  ){

if(  qual == 'pg_todos' ){
document.getElementById('cartcred').checked = false;
document.getElementById('cartdeb').checked = false;
document.getElementById('dinh').checked = false;
document.getElementById('conv').checked = false;
document.getElementById('cort').checked = false;
} else {
document.getElementById('pg_todos').checked = false;
}

}


}








//alert(screen.width);
  