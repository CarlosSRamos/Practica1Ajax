<%-- 
    Document   : Formulario
    Created on : 19-oct-2020, 19:26:27
    Author     : justgunner
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="java.util.Date" %>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hobbies</title>
        <link rel="stylesheet" href="./css/estilos.css">
    </head>
    <body>
        <h1 class="titulo">Hobbies</h1>
        <h2>Selecciona 1 o más opciones de los hobbies que te gusten o interesen</h2>
        <div class="opciones">
            <form method="post">
                <input type="checkbox" name="hobby" value="1"> Hacer o ver algún deporte. <br>
                <input type="checkbox" name="hobby" value="2"> Tocar algún instrumento musical. <br>
                <input type="checkbox" name="hobby" value="3"> Videojuegos. <br>
                <input type="checkbox" name="hobby" value="4"> Escuchar música. <br>
                <input type="checkbox" name="hobby" value="5"> Hacer ejercicio. <br>
                <input type="submit" value="Enviar" id="botonopciones">
            </form>
        </div>
        <table id="tablarec">
            <tr>
                <th>Respuesta</th>
                <th>Recomendación</th>
            </tr>
        <%
          String[] respuestas = request.getParameterValues("hobby");
          String respuestasenv = "";
          String recomendación = "";
          if(respuestas == null){
              respuestasenv = "Por favor selecciona al menos una opción";
              recomendación = " ";
        %>
        <tr>
            <th><%= respuestasenv %></th>
            <th><%= recomendación %></th>
        </tr>
        </table>
        <% 
          Date fecha = new Date();
        %>
        <p id="fecha"><%= fecha %></p>
        <%
          }else{
              for(String r : respuestas){
                  switch (Integer.parseInt(r)){
                      case 1:
                            respuestasenv = "Hacer o ver algún deporte.";
                            recomendación = "https://www.youtube.com/c/espndeportes/videos";
                            break;
                      case 2:
                            respuestasenv = "Tocar algún instrumento musical.";
                            recomendación = "https://www.youtube.com/channel/UC3k4Tn0XRZ2urVwBLY5s9Zw";
                            break;
                      case 3:
                            respuestasenv = "Videojuegos.";
                            recomendación = "https://www.youtube.com/channel/UCz52C1ZeqTaOhM1FMRGMpzg";
                            break;
                      case 4:
                            respuestasenv = "Escuchar música.";
                            recomendación = "https://www.youtube.com/channel/UCWVWG_nHMXFihrqNnSf6TFg";
                            break;
                      case 5:
                            respuestasenv = "Hacer ejercicio.";
                            recomendación = "https://www.youtube.com/channel/UC9l7xbkF_n-WP61f74AjKvw";
                            break;
                  }
        %> 
        <tr>
            <th><%= respuestasenv %></th>
            <th><%= recomendación %></th>
        </tr>
        <%
                }  
        %>
        </table>
        <% 
          Date fecha = new Date();
        %>
        <p id="fecha"><%= fecha %></p>
        <%
           }  
        %>
    </body>
</html>
