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


