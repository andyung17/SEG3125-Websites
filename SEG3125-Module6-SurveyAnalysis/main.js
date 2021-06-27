function validateAll(){
    var counter=0;
    // var errors = [];
    // errors.push(validateName());
    // errors.push(validateExp());
    const errors = [11];
    errors[0] = validateName();
    errors[1] = validateGender();
    errors[2] = validatePhone();
    errors[3] = validateEmail();
    errors[4] = validateService();
    errors[5] = validateDoctor();
    errors[6] = validateDate();
    errors[7] = validateTime();
    errors[8] = validateCard();
    errors[9] = validateCVC();
    errors[10] = validateExp();
    var ErrorMessage ="";

    for(let i = 0; i < 11; i++){
        if(errors[i] == true){
            counter+=1;
        }
        else{
            ErrorMessage += errors[i] + ",\r";
        }
        //console.log(error[i]);
    }
    // console.log(counter);
    // console.log(document.getElementById("nameInput"));
    if(counter == 11){
        // //console.log(counter);
        // var modal = document.getElementById("myModal");

        // // Get the button that opens the modal
        // // var final = document.getElementById("Final");

        // // Get the <span> element that closes the modal
        // var span = document.getElementsByClassName("close")[0];

        // // When the user clicks the button, open the modal
        
        // modal.style.display = "block";
    

        // // When the user clicks on <span> (x), close the modal
        // span.onclick = function() {
        //     modal.style.display = "none";
        //   }

        // // When the user clicks anywhere outside of the modal, close it
        // window.onclick = function(event) {
        //     if (event.target == modal) {
        //         modal.style.display = "none";
        //     }
        // }
        // popup();
        $('#myModal').modal('show');
        popup();

    }

    ErrorMessage.concat("\n");
    document.getElementById('phone_error').innerHTML = ErrorMessage;
}

function popup(){
    //var message="";
    const output = [7];
    output[0] = document.getElementById("phoneInput").value;
    output[1] = document.getElementById("serviceSelect").value;
    output[2] = document.getElementById("nameInput").value;
    output[3] = document.getElementById("doctorSelect").value;
    output[4] = document.getElementById("emailInput").value;
    var dateTypeVar = $("#datepicker").datepicker("getDate");
    output[5] = $.datepicker.formatDate('MM-dd-yy', dateTypeVar);
    var timeTypeVar = String($("#timepicker").timepicker().getTime()).split(" ");
    //output[6] = $.timepicker.timeFormat('hh:mm', timeTypeVar);
    // console.log(timeTypeVar);
    
    // output[6] = document.getElementById("timepicker").value;
    //message = output[0] + output[1];
    //alert(message);
    //message += "\n" + document.getElementById("doctorSelect").value;
    // console.log(document.getElementById("nameInput"));
    // console.log("test")
    // document.getElementById("modal-info").innerHTML = output[0];
    //alert(document.getElementById("nameInput").value);

    $(document.getElementById('fullName')).text("Name: "+output[2]);
    $(document.getElementById('emailChoice')).text("Email: "+ output[4]);
    $(document.getElementById('doctorChoice')).text("Veterinarian: "+ output[3]);
    $(document.getElementById('serviceChoice')).text("Service: "+ output[1]);
    $(document.getElementById('confirmationCode')).text("Confirmation Code: "+ makeid(12));
    $(document.getElementById('dateChoice')).text("Date: " + output[5]);
    //$(document.getElementById('timeChoice')).text("Time: " + output[6]);
    $(document.getElementById('timeChoice')).text("Time: "+ timeTypeVar[4]);

}

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
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
        $("#phoneInput").removeClass('errorClass');
        return true;
    }else if(a == undefined){
        $("#phoneInput").addClass('errorClass');
        return("Phone Number Blank");
    }
    else{
        //document.getElementById("phone_error").innerHTML = "Phone Number Format Issue";
        $("#phoneInput").addClass('errorClass');
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
        $("#emailInput").removeClass('errorClass');
        return true;
    }
    else{
        //document.getElementById("phone_error").innerHTML = "Email Format Issue";
        $("#emailInput").addClass('errorClass');
        return("Email Format Issue");
    }
    // if (validatePhoneNumber(validatePhoneNumber(a))) {
    //     document.getElementById('phone_error').append("Phone Number Format correct");
    // } else {
    //     document.getElementById('phone_error').append("Phone Number Format Issue");
    // }
  }
  
  function validateFullName(input_str){
    if( (input_str == undefined) || (input_str == null) || (input_str == "") ){
        $("#nameInput").addClass('errorClass');
        return "Empty Name";
    }
    else{
        $("#nameInput").removeClass('errorClass');
        return true;
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
            $("#genderSelect").removeClass('errorClass');
            return true;
        }
        else if(selectedValue == "Female"){
            $("#genderSelect").removeClass('errorClass');
            return true;
        }
        else if(selectedValue == "Other"){
            $("#genderSelect").removeClass('errorClass');
            return true;
        }
        else{
            $("#genderSelect").addClass('errorClass');
            return "Missing Gender";
        }
  }

  function validateService(){
    var card = document.getElementById("serviceSelect");
    var selectedValue = card.options[card.selectedIndex].value;
        if (selectedValue == "Ophthalmic Surgery") {
            $("#serviceSelect").removeClass('errorClass');
            return true;
        }
        else if(selectedValue == "Orthopaedic Surgery"){
            $("#serviceSelect").removeClass('errorClass');
            return true;
        }
        else if(selectedValue == "Cardiology Surgery"){
            $("#serviceSelect").removeClass('errorClass');
            return true;
        }
        else if(selectedValue == "Internal Organs Surgery"){
            $("#serviceSelect").removeClass('errorClass');
            return true;
        }
        else if(selectedValue == "Oncology Surgery"){
            $("#serviceSelect").removeClass('errorClass');
            return true;
        }
        else{
            $("#serviceSelect").addClass('errorClass');
            return "Missing Service";
        }
  }

  function validateDoctor(){
    var card = document.getElementById("doctorSelect");
    var selectedValue = card.options[card.selectedIndex].value;
        if (selectedValue == "Dr. Anne Limnae") {
            $("#doctorSelect").removeClass('errorClass');
            return true;
        }
        else if(selectedValue == "Dr. Cameron Roy"){
            $("#doctorSelect").removeClass('errorClass');
            return true;
        }
        else if(selectedValue == "Dr. Meghan Clark"){
            $("#doctorSelect").removeClass('errorClass');
            return true;
        }
        else{
            $("#doctorSelect").addClass('errorClass');
            return "Missing Vet";
        }
  }

  function validateDate(){
    if(document.getElementById("datepicker").value == ""){
        $("#datepicker").addClass('errorClass');
        return "Missing Date";
    }
    else{
        $("#datepicker").removeClass('errorClass');
        return true;
    }
}
  
  function validateTime(){
        if(document.getElementById("timepicker").value == ""){
            $("#timepicker").addClass('errorClass');
            return "Missing Time";
        }
        else{

            var timeTypeVar = String($("#timepicker").timepicker().getTime()).split(" ");
            var value = timeTypeVar[4];
            if(value==="10:00:00" || value==="11:00:00" || value==="12:00:00" || value==="1:00:00" || value==="2:00:00" || value==="3:00:00" || value==="4:00:00" || value==="5:00:00" || value==="6:00:00" || value==="01:00:00" || value==="02:00:00" || value==="03:00:00" || value==="04:00:00" || value==="05:00:00" || value==="06:00:00"){
                //console.log(value);
                return true;
            }else{
                $("#timepicker").removeClass('errorClass');
                // console.log("value");
                return "Incorrect Time";
            }
        }
    }

    function validateCard() {
        var card = document.getElementById("CreditCard").value;
        // This filter asks for something like (12345), so parentheses with any number (at least 1)
        // of digits
        var filter = /[0-9]{4} {0,1}[0-9]{4} {0,1}[0-9]{4} {0,1}[0-9]{4}/;
        if (filter.test(card)) {
            $("#CreditCard").removeClass('errorClass');
            return true;
        }
        else {
            $("#CreditCard").addClass('errorClass');
            return "Invalid Card Number";
        }
    }

    function validateCVC() {
        var cvc = document.getElementById("CVC").value;
        // This filter asks for something like (12345), so parentheses with any number (at least 1)
        // of digits
        var filter = /[0-9]{3}/;
        if (filter.test(cvc)) {
            $("#CVC").removeClass('errorClass');
            return true;
        }
        else{
            $("#CVC").addClass('errorClass');
            return "Invalid CVV";
        }
    }

    function validateExp() {
        var exp = document.getElementById("ExpDate").value;
        // This filter asks for something like (12345), so parentheses with any number (at least 1)
        // of digits
        var filter = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
        if (filter.test(exp)) {    
            var today = new Date();
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            mm = parseInt(mm);
            mm +=1;
            var yyyy = today.getFullYear();
            year = yyyy;
            year = parseInt(year);
            currMonth = String(exp).substring(0,2)
            currYear = String(exp).substring(3,5)
            if((parseInt(currYear) + 2000 >= year) && ( parseInt(currMonth) >= mm)){
                $("#ExpDate").removeClass('errorClass');
                return true;
            }
            else{
                $("#ExpDate").addClass('errorClass');
                return "Expired Card";
            }
        }
        else {
            $("#ExpDate").addClass('errorClass');
            return "Expired Card";
        }
    }

      var holidays = ["2021-01-01","2021-02-15","2021-04-02","2021-05-24","2021-07-01","2021-09-06",
  "2021-10-11","2021-12-25","2021-12-26","2021-12-27"];

// $( function(){
//     $( "#datepicker" ).datepicker({
//         minDate: '+0D',
//         maxDate: '+7M',
//         // used to disable some dates
//         beforeShowDay: function(date){
//             var datestring = jQuery.datepicker.formatDate('yy-mm-dd', date);
//             return [ holidays.indexOf(datestring) == -1 ]},
//         beforeShowDay:noSundays,
//     });
// });

  $(document).on('change','#doctorSelect',function(){
    $( function() {
        var doctorName = $('#doctorSelect').find(":selected").text();
        if(doctorName === "Dr. Anne Limnae"){
            $( "#datepicker" ).datepicker({
                minDate: '+0D',
                maxDate: '+7M',
                // used to disable some dates
                beforeShowDay: disableDates2,
            });
        }
        else if(doctorName === "Dr. Cameron Roy"){
            $('#datepicker').datepicker("destroy");
            $( "#datepicker" ).datepicker({
                minDate: '+0D',
                maxDate: '+7M',
                // used to disable some dates
                beforeShowDay: disableDates,
            });
        }
        else if(doctorName === "Dr. Meghan Clark"){
            $('#datepicker').datepicker("destroy");
            $( "#datepicker" ).datepicker({
                minDate: '+0D',
                maxDate: '+7M',
                // used to disable some dates
                beforeShowDay: disableDate3,
            });
        }
  } );
});

function disableDates(date){
    if(date.getDay() === 0 || date.getDay() == 5 || date.getDay() == 6){
        return [false];
    }
    var string = jQuery.datepicker.formatDate('yy-mm-dd', date);
    return [ holidays.indexOf(string) === -1 ]

}

function disableDates2(date){
    if(date.getDay() === 0 || date.getDay() == 1 || date.getDay() == 2){
        return [false];
    }
    var string = jQuery.datepicker.formatDate('yy-mm-dd', date);
    return [ holidays.indexOf(string) === -1 ]

}

function disableDate3(date){
    if(date.getDay() === 0 || date.getDay() == 2 || date.getDay() == 4){
        return [false];
    }
    var string = jQuery.datepicker.formatDate('yy-mm-dd', date);
    return [ holidays.indexOf(string) === -1 ]

}

function noMonday(date) {
    return [date.getDay() != 1, ''];
}

function noTuesday(date) {
    return [date.getDay() != 2, ''];
}

function noWednesday(date) {
    return [date.getDay() != 3, ''];
}

function noThursday(date) {
    return [date.getDay() != 4, ''];
}

function noFriday(date) {
    return [date.getDay() != 5, ''];
}

function noSundays(date) {
    return [date.getDay() != 0, ''];
}


$(document).ready(function(){
    $('#timepicker').timepicker({
        timeFormat: 'h:mm p',
        interval: 60,
        minTime: '10',
        maxTime: '6:00pm',
        dynamic: false,
        dropdown: true,
        scrollbar: true
    });
});
