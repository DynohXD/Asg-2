var x=document.getElementById('login');
var y=document.getElementById('register');
var z=document.getElementById('btn');
function register()
{
    x.style.left='-400px';
    y.style.left='50px';
    z.style.left='110px';
}
function login()
{
    x.style.left='50px';
    y.style.left='450px';
    z.style.left='0px';
}





/* Login GET POST */

/* Assign Values and Const */
const APIKEY = "63e2980e478852088da67e8a";

/*let firstName = $("#FirstName").val();
let lastName = $("#LastName").val();
let email = $("#Email").val();
let password = $("#Password").val(); 

let jsondata = {
  "FirstName": firstName,
  "LastName": lastName,
  "Email": email,
  "Password": password
};*/


var modal = document.getElementById('login-form');
window.onclick = function(event) 
{
    if (event.target == modal) 
    {   
        $("#submit-btn").on("click", function (e) {
          e.preventDefault();
      
          let firstName = $("#FirstName").val();
          let lastName = $("#LastName").val();
          let email = $("#Email").val();
          let password = $("#Password").val();
      
          let jsondata = {
            "FirstName": firstName,
            "LastName": lastName,
            "Email": email,
            "Password": password
          };
      
          let settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://shopcat-2fc4.restdb.io/rest/accounts",
            "method": "POST",
            "headers": {
              "content-type": "application/json",
              "x-apikey": APIKEY,
              "cache-control": "no-cache"
            },
            "processData": false,
            "data": JSON.stringify(jsondata),
            "beforeSend": function(){
              $("#contact-submit").prop( "disabled", true);
              $("#add-contact-form").trigger("reset");
            }
          }
      
          $.ajax(settings).done(function (response) {
            console.log(response);
            
            $("#submit-btn").prop( "disabled", false);
          }); 
        });
        window.location.href = "index.html";
    }
}


/* 
GET 
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://shopcat-2fc4.restdb.io/rest/accounts",
    "method": "GET",
    "headers": {
      "content-type": "application/json",
      "x-apikey": APIKEY,
      "cache-control": "no-cache"
    }
  }
  
$.ajax(settings).done(function (response) {
  console.log(response);
});


POST 
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://shopcat-2fc4.restdb.io/rest/accounts",
  "method": "POST",
  "headers": {
    "content-type": "application/json",
    "x-apikey": APIKEY,
    "cache-control": "no-cache"
  },
  "processData": false,
  "data": JSON.stringify(jsondata)
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
*/

