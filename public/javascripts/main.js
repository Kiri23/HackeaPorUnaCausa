var btnanadir = $('#anadir');

btnanadir.click(function() {
  $.post( "/registro", function( data ) {
      alert(btnanadir.text());
      console.log(data);
  });
});
