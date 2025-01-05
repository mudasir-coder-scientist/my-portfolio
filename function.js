var menu = document.querySelector(".menu-icon");
var navbar = document.querySelector(".mobile-navbar");
let value = 0;
menu.addEventListener("click", function(){
  if(value == 0)
  {
    navbar.style.display = "block";
    value =1
    
  }else{
    navbar.style.display = "none";
    value = 0
  }
})