$(document).ready(function (){

    function errorMsg(index, msg){
        if ($(`form:eq(${index})`).hasClass("error") === true){
            $(`form:eq(${index})`).removeClass("error");
        }
        else if ($(`form:eq(${index})`).hasClass("success") === true){
            $(`form:eq(${index})`).removeClass("success");
        }

        $(`form:eq(${index})`).addClass("error");
        $(".error").children("small").show().html(msg);
    }

    function successMsg(index){
        if ($(`form:eq(${index})`).hasClass("error") === true){
            $(`form:eq(${index})`).removeClass("error");
        }
        else if ($(`form:eq(${index})`).hasClass("success") === true){
            $(`form:eq(${index})`).removeClass("success");
        }

        $(`form:eq(${index})`).children("small").hide();
        $(`form:eq(${index})`).addClass("success");
    }

    function checkEmail(email){
        let index_atSign = email.indexOf("@");
        if (index_atSign < 1) return false;

        let index_lastDot = email.lastIndexOf(".");
        if (index_lastDot <= index_atSign + 2) return false;
        if (index_lastDot === email.length - 1) return false;

        for (let i = 0; i < index_lastDot; i += 1){
            if (i === index_atSign){continue;}  // skip the index of "at sign"
            if (email[i] === email[i].toUpperCase()) return false;
        }
        
        return true;
    }

// NOTE: variables must be inside the "event" funciton;
    $("#username").keyup(function(){
        
        const userValue = $("#username").val();

        if (userValue === ""){
            errorMsg("0", "username cannot be blank");
        }
        else if ((userValue.length < 3) || (userValue.length > 10)){
            errorMsg("0", "username must be more than 3 & lees than 10 characters");
        }
        else{
            successMsg("0");
        }
    });

    $("#email").keyup(function(){
        
        const emailValue = $("#email").val();

        if (emailValue === ""){
            errorMsg("1", "email cannot be blank");
        }
        else if (checkEmail(emailValue) === false){
            errorMsg("1", "not a valid email");
        }
        else{
            successMsg("1");
        }
    });

    $("#password").keyup(function(){
        
        const passValue = $("#password").val();

        if (passValue === ""){
            errorMsg("2", "password cannot be blank");
        }
        else if (passValue.length < 4){
            errorMsg("2", "password must contain at least 4 characters");
        }
        else{
            successMsg("2");
        }
    });

    $("#confirm_pass").keyup(function(){
        
        const cPassValue = $("#confirm_pass").val();
        const passValue = $("#password").val();

        if (cPassValue === ""){
            errorMsg("3", "please confirm your password");
        }
        else if (cPassValue !== passValue){
            errorMsg("3", "password not matching");
        }
        else{
            successMsg("3");
        }
    });



    function showResult(formIndex, success){
        if (formIndex === success){
            Swal.fire(
                $("#username").val(),
                'Your have singed up successfully',
                'success'
              )
            $("form").trigger("reset").removeClass("success");
        }
    }

    $("#btn").click(function (){
        const total_form_i = $("form").length - 1;
        let successCount = 0;

        for (let i = 0; i <= total_form_i; i += 1){
            if ($(`form:eq(${i})`).hasClass("success") === true){
                successCount += 1;
                showResult(total_form_i, successCount);
            }
            else{
                return false;
            }
        }
    });

});