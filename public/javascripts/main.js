var btnanadir = $('#anadir');


btnanadir.click(function() {
  $.post( "/registro", function( data ) {
      alert($('input[name=nombre]').text());
      console.log(data);
  });
});
