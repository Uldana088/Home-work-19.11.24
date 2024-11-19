let number = 28;


function askNum() {
  while (true) {
    const boljaw = +prompt("1 ден 100ге дейынгы санды жазып купия созы табыныз");

    if (boljaw === number) {
      alert("Жарайсыз! Сіз құпия санды таптыңыз!");
      break;
    } else if (boljaw < number) {
      alert("Құпия сан үлкенірек!");
    } else {
      alert("Құпия сан кішірек!");
    }
  }
}


console.log(askNum());


