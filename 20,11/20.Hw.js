let Total  = 0;
const taby = () => {
    while (true) {
      var qasiqtiq = +prompt("Қашықтықты енгізіңізз;");
      if (qasiqtiq == 0) {
        break;
      }
      var unit = prompt("Олшем бырлыкты енгізіңіз : м| дц | км");
      if (unit == "m") {
        Total += qasiqtiq;
      } else if (unit == "dm") {
        Total += qasiqtiq / 10;
      } else if (unit == "km") {
        Total += qasiqtiq * 1000;
      }
    }
    return Total;
}
console.log(taby());
