document.querySelector("#submit_btn").addEventListener("click", function(event){
    event.preventDefault();

    const userValue = document.querySelector("#username").value.trim();
    const emailValue = document.querySelector("#email").value.trim();
    const passValue = document.querySelector("#password").value.trim();
    const cPassValue = document.querySelector("#confirm_pass").value.trim();
    const phoneValue = document.querySelector("#phone").value.trim();
    const ageValue = document.querySelector("#age").value.trim();

    const formTag = document.getElementsByTagName("form");
    
    // function for "errorMsg()":
    function errorMsg(formTag, message){
        if (formTag.children.length > 4){
            formTag.children[4].remove();
        }

        let smallTag = document.createElement("small");
        formTag.appendChild(smallTag);
            
        formTag.className = "showRed"; // it'll create a class for "formTag";
        smallTag.innerHTML = message;
    }   
    
    // fucntion for "sucessMsg()":
    function successMsg(formTag){
        if (formTag.children.length > 4){
            formTag.children[4].remove();
        }
        formTag.className = "showGreen";

        formTag.reset();
    }

    // fucntion for "isEmail()":
    function checkEmail(email){
        let index_atSign = email.indexOf("@");
        if (index_atSign < 1) return false;

        let index_dot = email.lastIndexOf("."); // if there more tha 1 dots it'll count the last one
        if (index_dot <= index_atSign + 2) return false;
        if (index_dot === email.length - 1) return false;
        
        for(let i = 0; i < email.length; i += 1){
            if (emailValue.slice(i, i + 1) === emailValue.slice(i, i + 1).toUpperCase()){
                return false;
            }
            /* 
            // alternative "for loop"
            if (emailValue[i] === emailValue[i].toUpperCase()){
                return false;
            }
            */
        }

        return true;  // else;
    }

    // conditions for "username":
    if (userValue === ''){
        errorMsg(formTag[0], "username can't be blank");
    }
    else if (userValue.length <= 2){
        errorMsg(formTag[0], "username must contain more than 2 letters");
    }
    else{
        successMsg(formTag[0]);
    } 

    // conditoins for "email":
    
    if (emailValue === ''){
        errorMsg(formTag[1], "please enter email address");
    }
    else if (!checkEmail(emailValue)){ // if "isEmail" func is 'not true'
        errorMsg(formTag[1], "not a valid email");
    }
    else{
        successMsg(formTag[1]);
    }
    

    // conditions for "phone":
    if (phoneValue === ''){
        errorMsg(formTag[2], "phone can't be blank");
    }
    else if(phoneValue.length !== 11){
        errorMsg(formTag[2], "not a valid number");
    }
    else{
        successMsg(formTag[2]);
    }

    // conditions for "passwords":
    if (passValue === ''){
        errorMsg(formTag[3], "password can't be blank");
    }
    else if (passValue.length < 6){
        errorMsg(formTag[3], "atleast 6 characters");
    }
    else{
        successMsg(formTag[3]);
    }

    // condiitions for "confirm pass":
    if (cPassValue === ""){
        errorMsg(formTag[4], "please confirm your password");
    }
    else if (cPassValue !== passValue){
        errorMsg(formTag[4], "hey, you make so much mistakes! go to school learn something");
    }
    else{
        successMsg(formTag[4]);
    }
    
    // conditions for "age";
    if (ageValue < 18){
        errorMsg(formTag[5], "You're still a kid, watch cartoons");
    }
    else{
        successMsg(formTag[5]);
    }

    // checking is all the input are filled successfully:
    function showResult(form_indexes, success){
        if (form_indexes === success){
            Swal.fire(
                userValue,
                'Your have singed up successfully',
                'success'
              )
        }
    }

    function check_all_input(){
        let form_total_index = formTag.length - 1;
        let successCount = 0;
        for (let i = 0; i < formTag.length; i += 1){
            if (formTag[i].className === "showGreen"){
                successCount += 1;
                showResult(form_total_index, successCount);
            }
            else{
                return false;  // if returns false the "showResult()" won't run;
            }
        }
    }

    check_all_input();


    // NOTE: always execute the function after that function

});