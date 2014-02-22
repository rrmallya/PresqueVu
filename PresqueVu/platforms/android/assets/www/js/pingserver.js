$(document).ready(function(){
  $.support.cors = true;
  console.log("document is ready");

$.ajax({
type: "GET",
crossDomain: true,
url: "http://presquevu.herokuapp.com/hello.text",
error: function(xhr, statusText) { alert("Error: "+statusText); },
success: function(msg){ alert( "Success: " + msg ); }
}
);
});