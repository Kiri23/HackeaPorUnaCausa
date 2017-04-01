var btnanadir = $('#anadir');

btnanadir.click(function() {
  $.post( "/registro", function( data ) {
      alert(btnanadir.val());
      console.log(data);
  });
});
