document.querySelector("#submit-btn").addEventListener('click', emailSub);
function emailSub(){
    let email = document.querySelector("#email-input").value;

    if (email == "@gmail.com" || email == "@email.com" || email =="@yahoo.com"){
        alert("Your email has been collected");
    }
    else{
        alert("Your email is incorrect");
    }
    document.querySelector("form").reset();
}
x = "Faisal Shah Omar";
y = x.slice(3, -1);
console.log(y);