function validateForm(){
  var valid=true;
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var reason = document.getElementById("reason").value;

  if (name.length < 1){
    valid=false;
    alert("Please enter your name so we know who to contact. Thanks!");
  }
  if (email.length < 4 && phone.length < 5) {
    valid=false;
    alert("Please enter a valid email or phone number so we can reach you. Thanks!");
  }
  if (reason.length <5){
    valid=false;
    alert("Please select the reason for your inquiry. Thanks!");
      }
  return valid;
}
