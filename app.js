const btn = document.querySelector(".btn");
const boxemail = document.querySelector(".box-email");
const input = document.querySelector(".input");


function checkEmail(email) {
             var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
             return re.test(email);
}



btn.addEventListener("click", () => {
    
    var email = document.querySelector(".input").value;

if (checkEmail(email)) {
                boxemail.classList.add("valide");

setTimeout(function() {
    boxemail.classList.remove("valide");
}, 2000);
  
                
             } else {
                 
                 boxemail.classList.add("error");   
                 
               }           
});


input.addEventListener("click", () => {
    boxemail.classList.remove("error");
    boxemail.classList.remove("active");
});

