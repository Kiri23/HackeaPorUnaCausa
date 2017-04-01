var btnanadir = $('#anadir');


btnanadir.click(function() {
  var nombre = $('#nombre').val();
  $.post( "/registro",{'nombre':nombre}, function( data ) {

      alert(nombre);
      console.log(data);
  });
});
