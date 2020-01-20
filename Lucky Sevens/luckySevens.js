function clearErrors(){
  document.getElementById("bet").value = "";
}
function validate(){
  if ((Number(document.getElementById("bet").value)) <=0 || isNaN(Number(document.getElementById("bet").value))){
    alert("The bet must be a positive number.");
    clearErrors();
    return false;
  }
  else{
    return true;
  }
}


function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function luckySevens() {
  var initialBet = Number(document.getElementById("bet").value);
  var money = initialBet;
  var maxMoney = money;
  var roll = 0;
  var maxRoll = roll;
  while (money > 0){
    var die1 = rollDice();
    var die2 = rollDice();
    roll++;
    if (die1 + die2 == 7){
      money=money + 4;
      if (money>maxMoney){
        maxMoney=money;
        maxRoll=roll;
      }
    } else{
      money--;
    }
  }
  document.getElementById("hidden").style.cssText = "display:block";
  document.getElementById("initialBet").innerText = "$"+initialBet;
  document.getElementById("roll").innerText = roll;
  document.getElementById("maxMoney").innerText = "$"+maxMoney;
  document.getElementById("maxRoll").innerText = maxRoll;
  return false;
}

function reset(){
  clearErrors();
  document.getElementById("hidden").style.cssText = "display:none";
}
