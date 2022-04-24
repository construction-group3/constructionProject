const visibilityBtn = document.getElementById("visibilityBtn");
 
  visibilityBtn.addEventListener('click', toogleVisibility) 
  
  function toogleVisibility(){
    const password = document.getElementById("password");

    const icon = document.getElementById("icon")
    if(password.type === "password"){
        password.type = "text"
        icon.innerText = "visibility_off"
    }
    else{
        password.type = "password"
        icon.innerText = "visibility"
    }
} 