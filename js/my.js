//UI logic

$(document).ready(function(){
  $("form#numberForm").submit(function(event){
    event.preventDefault();

    var resultList = []
    var number = parseInt($("#number").val());
    var resultList = pingPong(number);
    var length = resultList.length;

    for (var i = 0; i < length; i += 1) {
      $("#output").append(resultList[i] + "<br>");
    }

  });
});


// Buisness logic

var pingPong = function(numLength){
  var numList = [];

  for (var i = 1; i <= numLength; i += 1) {
    if (i % 3 === 0 && i % 5 === 0) {
      numList.push("ping-pong");
    } else if (i % 3 === 0) {
      numList.push("ping");
    } else if (i % 5 === 0) {
      numList.push("pong");
    } else {
      numList.push(i);
    }
  }
  return numList
}
