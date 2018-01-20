  var mitems=new Array();
  var mivals=new Array();  

  mitems['categorias'] = ['Nome','MASP','Nome'];
  mivals['categorias'] = ['associado_id','associado_masp','associado_nome'];
  
  mitems['associados'] = ['ID','MASP','Nome'];
  mivals['associados'] = ['associado_id','associado_masp','associado_nome'];  
  
  mitems['usuarios'] = ['Login'];
  mivals['usuarios'] = ['usuarios_login'];  

function togglequicksearch() {

	if (document.getElementById('searchbox').style.visibility=="hidden") {

		document.getElementById('searchbox').style.visibility="";

	} else {

		document.getElementById('searchbox').style.visibility="hidden";

	}

}


function search_link(){
	tipo = document.getElementById('searchtype').value;
	campo = document.getElementById('searchfield').value;
	texto = document.getElementById('searchtext').value;	

	var destino = new Array();
	destino['usuarios'] = "lis_usuarios.php";
	destino['associados'] = "lis_associados.php";	
	
	location.href = destino[tipo]+"?campo="+campo+"&texto="+texto;
	
	return false;
	
}


function populate(o) {

  d=document.getElementById('searchfield');

  v=o.options[o.selectedIndex].value;

  if(!d){return;}            

  d.options.length=0;

  cur=mitems[o.options[o.selectedIndex].value];
  val=mivals[o.options[o.selectedIndex].value];

  if(!cur){return;}

  d.options.length=cur.length;

  for(var i=0;i<cur.length;i++) {

    d.options[i].text=cur[i];

    d.options[i].value=val[i];

  }

}


num_campos = 0;
function search_add_field() {
        var campo = num_campos + 1;
		var html = "\n";
		
		var search_type = document.getElementById('searchtype').value;
		cur=mitems[search_type];
        val=mivals[search_type];

		if(campo > 1){
		html += "<select name=\"tipo[]\">\n";
		html += "<option value=\"e\">E</option>\n";
		html += "<option value=\"ou\">Ou</option>\n";
		html += "</select>\n";					  
		}
		
		html += "<select name=\"campo[]\" id=\"searchfield\">\n";
 		if(cur){
		for(var i=0;i<cur.length;i++) {
		html += "<option value=\""+val[i]+"\">"+cur[i]+"</option>";
  		}}
		html += "</select>\n";
		html += "<select name=\"termo[]\">\n";
		html += "<option value=\"maior\">Maior que</option>\n";
		html += "<option value=\"menor\">Menor que</option>\n";
		html += "<option value=\"contem\">Contenha</option>\n";
		html += "<option value=\"igual\">é igual a</option>\n";             
		html += "</select>\n";
		html += "<input type=\"texto\" name=\"q[]\" id=\"searchtext\" size=\"25\">\n";
		
		if(campo > 1){
		html += "<a href=\"#\" onclick=\"remove_search_field('"+num_campos+"');\">Remover</a>\n";
		}		
		
        var fileID = "search_field"+num_campos;		
		var filelocal = document.getElementById('campos_busca');		
		
		var fileDIV = document.createElement('div');
        fileDIV.setAttribute("id", fileID);
        fileDIV.innerHTML = html;

        filelocal.appendChild(fileDIV);		
		
        num_campos++;

}

function remove_search_field(divNum){
    var d = document.getElementById('campos_busca');
    var olddiv = document.getElementById("search_field"+divNum);
    d.removeChild(olddiv);
}
