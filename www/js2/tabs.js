/* WHMCS Administration Area Tabs Javascript */

/* Copyright WHMCompleteSolution 2006 */



////

function doesNameStartWith(itemName, itemPrefix) {
return itemName.indexOf(itemPrefix) == 0;
}

////


function TabClick(sel) {



for(i=0;i<tabs;i++) {

document.getElementById('tab'+i).className='tab';

document.getElementById('tabbox'+i).style.display='none';

}



document.getElementById('tab'+sel).className='tabselected';

document.getElementById('tabbox'+sel).style.display='';



}

function setTab(num) {

GerarCookie("tab",num,"");

var url = document.URL;

url = url.split("/");

url = url[(url.length - 1)];

if(url.indexOf("?")){
url = url.split("?");
url = url[0];
}

GerarCookie("pag",url,"");

}

