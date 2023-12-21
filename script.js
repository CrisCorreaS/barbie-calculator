const RESULT = document.getElementById("resultText");
const CALCULATION = document.getElementById("calculationText");

/*In the input elements of the html file, in class="btn operator" elements we add an id as: id="clear".
    In the class="btn math" and class="btn" elements we add the function onclick="insert(...)" as: onclick="insert('*')"
    Now if everything is okay, we should see the values of the keys we click on, in the console
*/

//Print values on calculator screen
function insert(num) {
  CALCULATION.textContent += num;
}

//Clear calculation with "C"
document.getElementById("clear").addEventListener("click", function () {
  CALCULATION.textContent = "";
  RESULT.textContent = 0;
});

//Remove character with "<"
document.getElementById("back").addEventListener("click", function () {
  let exp = CALCULATION.textContent;
  CALCULATION.textContent = exp.substring(0, exp.length - 1);
});

//Return output of calculation on click ( = ) equal button
document.getElementById("equal").addEventListener("click", function () {
  let exp = CALCULATION.textContent;
  let expOk = exp.toString();
  let resultado = eval(expOk);

  if (resultado > 9999) {
    resultado = resultado.toExponential();

    resultado = resultado.toString();

    let numbers = resultado.split(/e/);
    let firstPart = resultado.substring(0, 3);
    resultado = firstPart + "e" + numbers[1];

    RESULT.textContent = resultado;
  } else {
    if (Number.isInteger(resultado)) {
      RESULT.textContent = resultado;
    } else {
      RESULT.textContent = resultado.toFixed(2);
    }
  }

  CALCULATION.textContent = RESULT.textContent;
});
