//csapat név kiíró script

var reader = document.getElementById('reader');
var timer = document.getElementById('idő');

var down = document.getElementById('home');
var down2 = document.getElementById('away');

var score_home_html = document.getElementById('home_score');
var score_away_html = document.getElementById('away_score');

var points_home = document.getElementById('home_points');
var points_away = document.getElementById('away_points');

var selected1_home;
var selected2_home;

var change1;
var change2;

var change1i;
var change2i;

var selected1_away;
var selected2_away;

var change1a;
var change2a;

var change1ia;
var change2ia;

let score_home = 0;
let score_away = 0;





function Function_1()
{
  var up = document.getElementById('home1');
  var $el = $('.child').clone();
  $('#parent2').append($el);
  down.innerHTML = "Hazai:<br> " + up.innerHTML;
}

function Function_2()
{
  var up = document.getElementById('home2');
  var $el = $('.child').clone();
  $('#parent2').append($el);
  down.innerHTML = "Hazai:<br> " + up.innerHTML;
}

function Function_3()
{
  var up = document.getElementById('home3');
  var $el = $('.child').clone();
  $('#parent2').append($el);
  down.innerHTML = "Hazai:<br> " + up.innerHTML;
}

function Function_4()
{
  var up = document.getElementById('home4');
  var $el = $('.child').clone();
  $('#parent2').append($el);
  down.innerHTML = "Hazai:<br> " + up.innerHTML;
}

function Function_5()
{
  var up = document.getElementById('home5');
  var $el = $('.child').clone();
  $('#parent2').append($el);
  down.innerHTML = "Hazai:<br> " + up.innerHTML;
}

function Function_6()
{
  var up = document.getElementById('home6');
  var $el = $('.child').clone();
  $('#parent2').append($el);
  down.innerHTML = "Hazai:<br> " + up.innerHTML;
}

function Function_7()
{
  var up = document.getElementById('home7');
  var $el = $('.child').clone();
  $('#parent2').append($el);
  down.innerHTML = "Hazai:<br> " + up.innerHTML;
}

function Function_8()
{
  var up = document.getElementById('home8');
  var $el = $('.child').clone();
  $('#parent2').append($el);
  down.innerHTML = "Hazai:<br> " + up.innerHTML;
}

function Function_9()
{
  var up = document.getElementById('home9');
  var $el = $('.child').clone();
  $('#parent2').append($el);
  down.innerHTML = "Hazai:<br> " + up.innerHTML;
}

function Function_10()
{
  var up = document.getElementById('home10');
  var $el = $('.child').clone();
  $('#parent2').append($el);
  down.innerHTML = "Hazai:<br> " + up.innerHTML;
}

function Function_11()
{
  var up = document.getElementById('home11');
  var $el = $('.child').clone();
  $('#parent2').append($el);
  down.innerHTML = "Hazai:<br> " + up.innerHTML;
}

function Function_12()
{
  var up = document.getElementById('home12');
  var $el = $('.child').clone();
  $('#parent2').append($el);
  down.innerHTML = "Hazai:<br> " + up.innerHTML;
}

function Function_13()
{
  var up = document.getElementById('home13');
  var $el = $('.child').clone();
  $('#parent2').append($el);
  down.innerHTML = "Hazai:<br> " + up.innerHTML;
}

function Function_14()
{
  var up = document.getElementById('home14');
  var $el = $('.child').clone();
  $('#parent2').append($el);
  down.innerHTML = "Hazai:<br> " + up.innerHTML;
}

function Function_15()
{
  var up = document.getElementById('away1');
  var $el = $('.child').clone();
  $('#parent2').append($el);
  down2.innerHTML = "Vendég:<br> " + up.innerHTML;
}

function Function_16()
{
  var up = document.getElementById('away2');
  var $el = $('.child').clone();
  $('#parent2').append($el);
  down2.innerHTML = "Vendég:<br> " + up.innerHTML;
}

function Function_17()
{
  var up = document.getElementById('away3');
  var $el = $('.child').clone();
  $('#parent2').append($el);
  down2.innerHTML = "Vendég:<br> " + up.innerHTML;
}

function Function_18()
{
  var up = document.getElementById('away4');
  var $el = $('.child').clone();
  $('#parent2').append($el);
  down2.innerHTML = "Vendég:<br> " + up.innerHTML;
}

function Function_19()
{
  var up = document.getElementById('away5');
  var $el = $('.child').clone();
  $('#parent2').append($el);
  down2.innerHTML = "Vendég:<br> " + up.innerHTML;
}

function Function_20()
{
  var up = document.getElementById('away6');
  var $el = $('.child').clone();
  $('#parent2').append($el);
  down2.innerHTML = "Vendég:<br> " + up.innerHTML;
}

function Function_21()
{
  var up = document.getElementById('away7');
  var $el = $('.child').clone();
  $('#parent2').append($el);
  down2.innerHTML = "Vendég:<br> " + up.innerHTML;
}

function Function_22()
{
  var up = document.getElementById('away8');
  var $el = $('.child').clone();
  $('#parent2').append($el);
  down2.innerHTML = "Vendég:<br> " + up.innerHTML;
}

function Function_23()
{
  var up = document.getElementById('away9');
  var $el = $('.child').clone();
  $('#parent2').append($el);
  down2.innerHTML = "Vendég:<br> " + up.innerHTML;
}

function Function_24()
{
  var up = document.getElementById('away10');
  var $el = $('.child').clone();
  $('#parent2').append($el);
  down2.innerHTML = "Vendég:<br> " + up.innerHTML;
}

function Function_25()
{
  var up = document.getElementById('away11');
  var $el = $('.child').clone();
  $('#parent2').append($el);
  down2.innerHTML = "Vendég:<br> " + up.innerHTML;
}

function Function_26()
{
  var up = document.getElementById('away12');
  var $el = $('.child').clone();
  $('#parent2').append($el);
  down2.innerHTML = "Vendég:<br> " + up.innerHTML;
}

function Function_27()
{
  var up = document.getElementById('away13');
  var $el = $('.child').clone();
  $('#parent2').append($el);
  down2.innerHTML = "Vendég:<br> " + up.innerHTML;
}

function Function_28()
{
  var up = document.getElementById('away14');
  var $el = $('.child').clone();
  $('#parent2').append($el);
  down2.innerHTML = "Vendég:<br> " + up.innerHTML;
}

function reply_click(clicked_id)
{
  if (selected1_home == undefined)
  {
    selected1_home = clicked_id;
    console.log(selected1_home);
  }
  else
  {
    selected2_home = clicked_id;
    console.log(selected2_home);
  }
  if (selected1_home != undefined && selected2_home != undefined)
  {
    if (selected1_home == selected2_home)
    {
      alert("A két játékos nem lehet ugyan az!");
      selected1_home = undefined;
      selected2_home = undefined;
    }
  }



  if (selected1_home != selected2_home)
  {
    change1 = document.getElementById(selected1_home);
    change2 = document.getElementById(selected2_home);
    change1i = change1.innerHTML;
    change2i = change2.innerHTML;
    change1.innerHTML = change2i;
    change2.innerHTML = change1i;
    reader.innerHTML += timer.innerHTML + " Csere: " + " " + change1i + " <-> " + change2i + "<br>";
    selected1_home = undefined;
    selected2_home = undefined;
  }
}

function reply_click2(clicked_id)
{
  if (selected1_away == undefined)
  {
    selected1_away = clicked_id;
    console.log(selected1_away);
  }
  else
  {
    selected2_away = clicked_id;
    console.log(selected2_away);
  }
  if (selected1_away != undefined && selected2_away != undefined)
  {
    if (selected1_away == selected2_away)
    {
      alert("A két játékos nem lehet ugyan az!");
      selected1_away = undefined;
      selected2_away = undefined;
    }
  }



  if (selected1_away != selected2_away)
  {
    change1a = document.getElementById(selected1_away);
    change2a = document.getElementById(selected2_away);
    change1ia = change1a.innerHTML;
    change2ia = change2a.innerHTML;
    change1a.innerHTML = change2ia;
    change2a.innerHTML = change1ia;
    reader.innerHTML += timer.innerHTML + " Csere: " + " " + change1ia + " <-> " + change2ia + "<br>";
    selected1_away = undefined;
    selected2_away = undefined;
  }
}

function giveHomePoints()
{
  if (selected1_home == undefined)
  {
    alert("Nem választottál ki játékost!");
  }
  else
  {
    score_home = score_home + parseInt(points_home.value[0]);
    score_home_html.innerHTML = score_home;
    console.log(score_home);
    reader.innerHTML += timer.innerHTML + " Hazai pontszerzés: " + " " + " Játékos: " + document.getElementById(selected1_home).innerHTML + " " + " Pont:" + points_home.value + "<br>";
    selected1_home = undefined;
  }

}

function giveAwayPoints()
{
  if (selected1_away == undefined)
  {
    alert("Nem választottál ki játékost!");
  }
  else
  {
    score_away = score_away + parseInt(points_away.value[0]);
    score_away_html.innerHTML = score_away;
    console.log(score_away);
    reader.innerHTML += timer.innerHTML + " Vendég pontszerzés: " + " " + " Játékos: " + document.getElementById(selected1_away).innerHTML + " " + " Pont:" + points_away.value + "<br>";
    selected1_away = undefined;
  }

}

function nogiveHomePoints()
{
  if (selected1_home == undefined)
  {
    alert("Nem választottál ki játékost!");
  }
  else
  {
    reader.innerHTML += timer.innerHTML + " Hazai pontszerzési kísérlet: " + " " + " Játékos: " + document.getElementById(selected1_home).innerHTML + " " + " Pont:" + points_home.value + "<br>";
    selected1_home = undefined;
  }

}

function nogiveAwayPoints()
{
  if (selected1_away == undefined)
  {
    alert("Nem választottál ki játékost!");
  }
  else
  {
    reader.innerHTML += timer.innerHTML + " Vendég pontszerzési kísérlet: " + " " + " Játékos: " + document.getElementById(selected1_away).innerHTML + " " + " Pont:" + points_away.value + "<br>";
    selected1_away = undefined;
  }

}



//csapatnév listázó script
