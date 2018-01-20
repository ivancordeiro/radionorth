/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
document.addEventListener("deviceready", onDeviceReady, false); 


function onDeviceReady() {

modelo =  device.model;
plataforma = device.platform;
uuid = device.uuid;
version =  device.version;
serial = device.serial;

//pedidos();

}




function logar(){


alert('testando envio json 4');
	
$.ajax({
dataType: "json",
type: "POST",
url: "http://ivanprogramador.com.br/json4.php",
data: "dia=" ,
crossDomain: true,

success: function(retorno){ 

alert(  "Testando retorno de json 4: " + retorno.teste);

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