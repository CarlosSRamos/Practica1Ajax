/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function myMove() {
    var elem = document.getElementById("myAnimation");
    var pos = 0;
    var id = setInterval(frame, 10);
    
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
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

function recibeYcarga(url,funcion){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                funcion(xhttp);
            }
        };
        xhttp.open("GET",url, true);
        xhttp.send();
    }

function Solicitud2(xhttp){
    document.getElementById("cambio2").innerHTML = xhttp.responseText;
}

function Solicitud3(xhttp){
    document.getElementById("cambio3").innerHTML = xhttp.responseText;
}

function cargaArchivoSync() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("cambio4").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "./txt/archivo4.txt", false);
  xhttp.send();
}
