var btnanadir = $('#anadir');

btnanadir.click(function() {
  $.post( "ajax/test.html", function( data ) {
      console.log(data);
  });
});
