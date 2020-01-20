function findEvens() {
var numberSet = [];
var start = Number(document.getElementById("start").value);
var number = start;
var step = Number(document.getElementById("step").value);
for (var i = 0;
  start +i*step < Number(document.getElementById("end").value);
i++){
  number = number + step;
    if (number%2==0){
      numberSet.push(number);
    }
  }
  document.getElementById("output").innerText = numberSet;
  return false;
}
