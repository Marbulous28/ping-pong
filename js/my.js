//UI logic

$(document).ready(function(){
  $("form#numberForm").submit(function(event){
    event.preventDefault();

    var number = parseInt($("#number").val());
    var output = pingPong(number);
  });
});


// Buisness logic

var pingPong = function(numLength){
  for (var i = 1; i <= numLength; i += 1) {
    if (i % 3 === 0 && i % 5 === 0) {
      alert("ping-pong");
    } else if (i % 3 === 0) {
      alert("ping");
    } else if (i % 5 === 0) {
      alert("pong");
    } else {
      alert(i);
    }
  }
}
