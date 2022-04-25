const visibilityBtn = document.getElementById("visibilityBtn");
 
  visibilityBtn.addEventListener('click', toogleVisibility) 
  
  function toogleVisibility(){
    if(password.type === "password"){
        password.type = "text"
        visibilityBtn.innerText = "visibility_off"
    }
    else{
        password.type = "password"
        visibilityBtn.innerText = "visibility"
    }
} 