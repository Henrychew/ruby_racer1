  var count = 0;
  var count1 = 0;


$(document).keyup(function(e){
  if (e.keyCode === 80) {
    $('tr#player1_strip > td.active').removeClass().next().addClass('active');
    count = count + 1;
    if (count === 18){
      alert("Player 1 win!");
      location.reload();
      }
  }else if (e.keyCode === 81) {
    $('tr#player2_strip > td.active').removeClass().next().addClass('active');
    count1 = count1 + 1;
    if (count1 === 18) {
      alert("Player 2 win!");
      location.reload();
    }
  }
});