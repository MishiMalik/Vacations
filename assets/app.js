let createAccount=document.getElementById("create-account");
let fullName=document.getElementById("full-name");
let yourName=document.getElementById("your-name");
let Name="";
createAccount.addEventListener("click",function (){
     Name = fullName.value ;
})
yourName.value = Name;