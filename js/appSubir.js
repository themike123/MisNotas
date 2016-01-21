//var app = angular.module('subir', [])


//app.controller('subirController', function($scope, $http){
  function cargar() {
  //$scope.cargar = function(
      var ContenedorListas=localStorage.getItem("listas");

      if (ContenedorListas) {
        var fecha = new Date();
        var fecaactual=fecha.getDate() + "/" + (fecha.getMonth() +1) + "/" + fecha.getFullYear();

        var aux=JSON.parse(ContenedorListas);
        document.getElementById("contenedora").innerHTML = '';
        for (var i = 0; i < aux.notas.length; i++) {
          var cadena= "<div class=\"col s12 m6\">"+
                      "<div class=\"card-panel teal\">"+
                      "<span class=\"white-text\" >"+
                      "<font  size=\"6\">"+aux.notas[i].contenido+
                      "<font  size=\"3\"><p>"+fecaactual+"<\p>"+
                      "</span>"+
                      "</div>"+
                      "</div>";

          document.getElementById("contenedora").innerHTML += cadena;
        }
      }



      console.log("Esta es la fecha:"+fecaactual);
    }

  //$scope.nuevo = function(){
  function nuevo() {
    var ContenedorListas=localStorage.getItem("listas");
    console.log("Esto tiene localStorage:"+ContenedorListas);
    var nota ={
    title:'Hola Mundo',
    contenido:document.getElementById("textarea1").value
    }

    console.log("contenido de mi nota:"+document.getElementById("textarea1").value);

    if (ContenedorListas) {
      var aux =JSON.parse(ContenedorListas);
      aux.notas.push(nota);
      localStorage.clear();
      localStorage.removeItem("listas");
      localStorage.setItem("listas",JSON.stringify(aux) );
      console.log("Lo que tiene localStorage:"+localStorage.getItem("listas"));
    }else {
      var Contenedor={
        'notas':[]
      }
      console.log("Esta es la nota:"+document.getElementById("textarea1").value);
      Contenedor.notas.push(nota);
      localStorage.setItem("listas",JSON.stringify(Contenedor) );
      console.log("Lo que tiene localStorage:"+localStorage.getItem("listas"));
    }

    window.location="index.html";
  }

//});
