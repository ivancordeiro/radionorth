var aum = false;
var vel = 10;
var top_pos = false;
var left_pos = false;

function exp_init(){
var y = 1;
var divs = document.getElementsByTagName("div");
for (var i = 0; i < divs.length; i++) { 
p = divs[i];

if(p.className == "expand"){

p.firstChild.rel = p.firstChild.width+"-"+p.firstChild.height;

p.firstChild.width = 32;
p.firstChild.height = 32;

if(p.firstChild.id == ""){p.firstChild.id = "foto"+y; y++;}

if (p.addEventListener){
  p.addEventListener('mouseover', expand, false); 
  p.addEventListener('mouseout', contract, false); 
} else if (p.attachEvent){
  p.attachEvent('onmouseover', expand);
  p.attachEvent('onmouseout', contract);  
}

p.style.display = "block";

}


}

}

function aumenta(img,width,height){

if(aum == true){

if(parseInt($(img).width) < width){

var lar = parseInt($(img).width);
lar += parseInt(width * vel / 100);
if(lar > width){lar = width;}

$(img).width = lar;
$(img).parentNode.style.width = lar+"px";

if(lar < width && left_pos == true){
$(img).parentNode.style.left = (getpx($(img).parentNode.style.left) - parseInt((height * vel / 100) / 2))+"px";
}


}
 
if(parseInt($(img).height) < height){

var tam = parseInt($(img).height);
tam += parseInt(height * vel / 100);
if(tam > height){tam = height;}

$(img).height = tam;
$(img).parentNode.style.height = tam+"px";
if(tam < height && top_pos == true){
$(img).parentNode.style.top = (getpx($(img).parentNode.style.top) - parseInt((height * vel / 100) / 2))+"px";
}
}
 

if(parseInt($(img).width) < width || parseInt($(img).height) < height){setTimeout("aumenta('"+img+"','"+width+"','"+height+"')",50);}

}
}

function diminui(img){

if(aum == false){


var lar = parseInt($(img).width);
lar -= parseInt(width * vel / 100);
if(lar < 32){lar = 32;}

if(parseInt($(img).width) > 32){
$(img).width = lar;
$(img).parentNode.style.width = lar+"px";
}
 
if(getpx($(img).parentNode.style.left) < 0 && left_pos == true){
n = (getpx($(img).parentNode.style.left) + parseInt((width * vel / 100 / 2)));
if(n > 0){n = 0;}
$(img).parentNode.style.left = n+"px";
}
 
 
var tam = parseInt($(img).height);
tam -= parseInt(height * vel / 100);
if(tam < 32){tam = 32;}
 
if(parseInt($(img).height) > 32){
$(img).height = tam;
$(img).parentNode.style.height = tam+"px";
}

if(getpx($(img).parentNode.style.top) < 0 && top_pos == true){
n = (getpx($(img).parentNode.style.top) + parseInt((height * vel / 100 / 2)));
if(n > 0){n = 0;}
$(img).parentNode.style.top = n+"px";
}

if(parseInt($(img).width) > 32 || parseInt($(img).height) > 32 || getpx($(img).parentNode.style.top) != 0){setTimeout("diminui('"+img+"')",50);}

}

}


function expand(evt){

	var p;
	var ie_var = "srcElement";
	var moz_var = "target";
	evt[moz_var] ? p = evt[moz_var] : p = evt[ie_var];
	if(p.tagName == "IMG" || p.tagName == "DIV"){
	str = p.rel;
	
	str = str.split("-");
	
	width = str[0];
	height = str[1];

	aum = true;
	ids = p.id;
	aumenta(ids,width,height);
	
	}
}

function contract(evt){
	var p;
	var ie_var = "srcElement";
	var moz_var = "target";
	evt[moz_var] ? p = evt[moz_var] : p = evt[ie_var];
	if(p.tagName == "IMG" || p.tagName == "DIV"){
	aum = false;
	ids = p.id;
	diminui(ids);
	
	}
}



function init(){
exp_init();
}