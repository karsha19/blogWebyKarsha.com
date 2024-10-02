console.log("hehe");

let button=document.querySelector("button");
let password=document.querySelector("#pass");
let namee=document.querySelector("#name");
let email=document.querySelector("#em");
let phone=document.querySelector("#ph");
let buttonhref=document.querySelector("#buttonhref");
let response=document.querySelector("#response");
function submit(){
     if (password.innerText==="123456bella.kth" && namee.innerText==="raksha adhikari" && email.innerText==="rakshaadhikari697@gmail.com" && phone.innerText==="8595855303"){
      setTimeout(()=>{
      response.style.visibility="visible";
      },5000);
        console.log("yess!");
      }         
    }                 
    

button.addEventListener("click",submit);
//google signin
let g=document.querySelector(".g-signin2");
   
  
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}


///////////////////////////////////
let pop=document.querySelector("#pop"); 
let login=document.querySelector("#login");
function hover(){
  pop.style.visibility = "visible";  
}
login.addEventListener("mouseover",hover);
/////////////////////////////
let xmark=document.querySelector("#xmark");
function disappear() {
  pop.style.visibility="hidden";
}
xmark.addEventListener("click",disappear);





