/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function cargaImagen() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("cambio2").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "./txt/archivo2.txt", true);
  xhttp.send();
}
function cargaVideo() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("cambio3").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "./txt/archivo3.txt", true);
  xhttp.send();
}
function cargaArchivo() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("cambio1").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "./txt/archivo1.txt", true);
  xhttp.send();
}
function cargaXML(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        leeXML(this);
    }
  };
  xhttp.open("GET", "./xml/cd.xml", true);
  xhttp.send();
}
function leeXML(xml){
  var i;
  var xmlDoc = xml.responseXML;
  var lista = "";
  var x = xmlDoc.getElementsByTagName("CD");
  for (i = 0; i < x.length; i++) { 
    lista += "<li>" +
    x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
    " - " +
    x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
    " - " +
    x[i].getElementsByTagName("PRICE")[0].childNodes[0].nodeValue +
    "</li>";
  }
  document.getElementById("xml").innerHTML = lista;
}


