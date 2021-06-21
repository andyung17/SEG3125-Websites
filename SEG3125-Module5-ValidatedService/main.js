 function validateAll(){
    const error = [10];
    error[0] = validateName();
    error[1] = validateGender();
    error[2] = validatePhone();
    error[3] = validateEmail();
    error[4] = validateService();
    error[5] = validateDoctor();
    var ErrorMessage ="";

    for(let i = 0; i < 10; i++){
        if((error[i] == undefined) || (error[i] == null)){
        }
        else{
            ErrorMessage += error[i] + ",\r"; 
        }
    }
    document.getElementById('phone_error').innerHTML = ErrorMessage;
}

function validatePhoneNumber(input_str) {
    var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/im;

    return re.test(input_str);
}

function validatePhone() {
    var a = document.getElementById("phoneInput").value;

    
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits

    if(validatePhoneNumber(a)){
    }else if(a == undefined){
        return("Phone Number Blank");
    }
    else{
        //document.getElementById("phone_error").innerHTML = "Phone Number Format Issue";
        return("Phone Number Format Issue");
    }
    // if (validatePhoneNumber(validatePhoneNumber(a))) {
    //     document.getElementById('phone_error').append("Phone Number Format correct");
    // } else {
    //     document.getElementById('phone_error').append("Phone Number Format Issue");
    // }
  }

  function validateEmailAddress(input_str){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(input_str).toLowerCase());
  }

  function validateEmail() {
    var a = document.getElementById("emailInput").value;

    if(validateEmailAddress(a)){
    }else{
        //document.getElementById("phone_error").innerHTML = "Email Format Issue";
        return("Email Format Issue");
    }
    // if (validatePhoneNumber(validatePhoneNumber(a))) {
    //     document.getElementById('phone_error').append("Phone Number Format correct");
    // } else {
    //     document.getElementById('phone_error').append("Phone Number Format Issue");
    // }
  }
  
  function validateFullName(input_str){
    if((input_str == undefined) || (input_str == null) || (input_str == "")){
        return "Empty Name";
    }
  }

  function validateName() {
    var a = document.getElementById("nameInput").value;
    return(validateFullName(a));
  }

  function validateGender(){
    var card = document.getElementById("genderSelect");
    var selectedValue = card.options[card.selectedIndex].value;
        if (selectedValue == "Male") {
        }
        else if(selectedValue == "Female"){
        }
        else if(selectedValue == "Other"){
        }
        else{
            return "Missing Gender";
        }
  }

  function validateService(){
    var card = document.getElementById("serviceSelect");
    var selectedValue = card.options[card.selectedIndex].value;
        if (selectedValue == "Ophthalmic Surgery") {
        }
        else if(selectedValue == "Orthopaedic Surgery"){
        }
        else if(selectedValue == "Cardiology Surgery"){
        }
        else if(selectedValue == "Internal Organs Surgery"){
        }
        else if(selectedValue == "Oncology Surgery"){
        }
        else{
            return "Missing Service";
        }
  }

  function validateDoctor(){
    var card = document.getElementById("doctorSelect");
    var selectedValue = card.options[card.selectedIndex].value;
        if (selectedValue == "Dr. Anne Limnae") {
        }
        else if(selectedValue == "Dr. Cameron Roy"){
        }
        else if(selectedValue == "Dr. Meghan Clark"){
        }
        else{
            return "Missing Doctor";
        }
  }