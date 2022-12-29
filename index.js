var A = document.getElementById("overview"); //overview

var B = document.getElementById("login_form"); //login form
var C = document.createElement("registerForm"); //register form
var D = document.getElementById("login_btn"); //login button
var E = document.getElementById("register_btn"); //register button

/*------------------Login function ----------------*/

function Login() {
  //login function
  var username = document.getElementById("username").value; //username
  var password = document.getElementById("password").value; //password
  A.style.height = "272px"; //overview height
  B.style.left = "0px"; //login form left
  C.style.left = "300px"; //register form left
  D.style.color = "#F7F4EA"; //login button color
  D.style.backgroundColor = "#C0B9DD"; //login button background color
  E.style.backgroundColor = "#A098C3"; //register button background color
  E.style.color = "#DED9E2"; //register button color
}

/*------------------Register function ----------------*/

function Register() {
  //register function
  A.style.height = "320px"; //overview height
  B.style.left = "300px"; //login form left
  C.style.left = "0px"; //register form left
  D.style.color = "#BFFFF1"; //login button color
  D.style.backgroundColor = "#74F2CE"; //login button background color
  E.style.backgroundColor = "#7CFFCB"; //register button background color
  E.style.color = "#379634"; //register button color
}
