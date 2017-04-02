var btnanadir = $('#anadir');


btnanadir.click(function() {
  var nombre = $('#nombre').val();
  var fecha = $('#fecha').val();
  var entrado_por = $('#entrado_por').val();
  var encargado = $('#encargado').val();
  var pueblo = $('#pueblo').val();
  var grado = $('#grado').val();
  var clasificacion = $('#clasificacion').val();
  var ofrecimiento = $('#ofrecimiento').val();
  var cantidad = $('#cantidad').val();
  var niños = $('#ninos').val();
  var adultos = $('#adultos').val();
  var seniors = $('#seniors').val();
  var impedidos = $('#impedidos').val();
  var maestros = $('#maestros').val();
  var nocharge  = $('#nocharge').val();
  var total = cantidad + ninos + adultos + seniors + impedidos + maestros + nocharge;
  var eventos = $('#eventos').val();

  $.post( "/registro",{'nombre':nombre,'fecha': new Date(),'entrado_por':entrado_por,
                       'encargado':encargado,'pueblo':pueblo,'grado':grado,
                       'clasificacion':clasificacion,'ofrecimiento':ofrecimiento,
                       'cantidad':cantidad,'niños':niños,'adultos':adultos,'seniors':seniors,
                       'impedidos':impedidos,'maestros':maestros,'nocharge':nocharge,'total':total,
                       'eventos':eventos }, function( data ) {
      console.log(data);;
  });
});
