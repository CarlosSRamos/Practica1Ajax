
var lenguajes = ["Html","CSS","JavaScript"]

function verifica_datos(){
    // Obtener los datos de la pagina
    var body = document.getElementsByTagName("body")[0];
    var columna = document.getElementById("colum").value;
    var renglon = document.getElementById("reng").value;
    //Variable para la verificación de que los datos sean numeros
    var letras="abcdefghyjklmnñopqrstuvwxyz";
    //Si el campo de las columnas o renglones esta vacio se lanzara una alerta al usuario para su correcto uso
    if(columna == 0 || renglon == 0){
        alert("Los campos de columna y renglon no pueden estar vacios");
    }
    //Se normalizan las entradas para su verifación
    verif1 = columna.toLowerCase();
    verif2 = renglon.toLowerCase();
    //Se verifica posicion por posicion de las entradas que no sean letras
    for(i=0; i<verif1.length; i++){
        if (letras.indexOf(verif1.charAt(i),0)!=-1){
            alert("Favor de introducir solo números en las columnas y reglones");
        }
    }
    for(i=0; i<verif2.length; i++){
        if (letras.indexOf(verif2.charAt(i),0)!=-1){
            alert("Favor de introducir solo números en las columnas y reglones");
        }
    }
    //Se manda a llamar generar_tabla para que se genere una tabla correctamente
    a = genera_tabla();
}

function genera_tabla() {
    // Obtener los datos de la pagina
    var body = document.getElementsByTagName("body")[0];
    var columna = document.getElementById("colum").value;
    var renglon = document.getElementById("reng").value;

    // Creo la tabla
    var tabla   = document.createElement("table");
    var tblBody = document.createElement("tbody");
   
    // Creamos las columnas de la tabla
    for (var i = 0; i < columna; i++) {
      // Crea las hileras de la tabla
      var hilera = document.createElement("tr");
   
      for (var j = 0; j < renglon; j++) {
        // Se crea los elementos que estaran dentro de la tabla
        var celda = document.createElement("td");
        var textoCelda = document.createTextNode("celda en la hilera "+i+", columna "+j);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
      }
   
      // agrega la hilera al final de la tabla (al final del elemento tblbody)
      tblBody.appendChild(hilera);
    }
   
    // Se le da orden a la tabla en el body
    tabla.appendChild(tblBody);
    body.appendChild(tabla);
    //Se le agrega estilo a la tabla para poderse ver
    tabla.setAttribute("border", "2");
  }

function lenguajes_utilizados(){
        // Se crean las variables para recorrer el arreglo y donde tener su contenido
        var i = 0;
        var lengpag = "";
        // Se recorre el arreglo y se almacena sus valores en lengpag
        while(lenguajes[i]){
            lengpag += i + " " + lenguajes[i] + "<br>";
            i++; 
        }
        //Se agregan al html al elemento con id leng
        document.getElementById("leng").innerHTML = lengpag;
}