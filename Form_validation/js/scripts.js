function validate(){

    // First Name
    const regex_name = /^[A-Za-z]{1,30}$/;
    var fname = document.querySelector("#fname").value;
    flag_fname = true;
    let first_name_errorbox = document.querySelector("#fname_errorbox");
    if(fname == ""){
        first_name_errorbox.innerHTML = "First name is required";
        flag_fname = false;
    }  
    else if(regex_name.test(fname)==false){
        flag_fname = false;
        first_name_errorbox.innerHTML = "First Name is not valid";
    }   
    else{
        flag_fname = true;
        first_name_errorbox.innerHTML = "";
    }

    // Last Name
    var lname = document.querySelector("#lname").value;
    flag_lname = true;
    let last_name_errorbox = document.querySelector("#lname_errorbox");
    if(lname == ""){
        last_name_errorbox.innerHTML = "Last name is required";
        flag_lname = false;
    }  
    else if(regex_name.test(lname)==false){
        flag_lname = false;
        last_name_errorbox.innerHTML = "Last Name is not valid";
    }   
    else{
        flag_lname = true;
        last_name_errorbox.innerHTML = "";
    }

    // Email
    const regex_mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*[a-z](\.[a-z]{2,3})+$/;
    var email = document.querySelector("#mail").value;
    flag_mailid = true;
    let mailid_errorbox = document.querySelector("#mailid_errorbox");
    if(email == ""){
        mailid_errorbox.innerHTML = "Email address is required";
        flag_mailid = false;
    }  
    else if(regex_mail.test(email)==false){
        mailid_errorbox.innerHTML = "Email address is not valid";
        flag_mailid = false;
    }   
    else{
        flag_mailid = true;
        mailid_errorbox.innerHTML = "";
    }

    //Contact Number
    const regex_phone_num = /^\d{10}$/;
    var contact_number = document.querySelector("#numb").value;
    flag_number = true;
    let phone_errorbox = document.querySelector("#phone_errorbox");
    if(contact_number == ""){
        phone_errorbox.innerHTML = "Contact Number is required";
        flag_number=false;
    }
    else if(regex_phone_num.test(contact_number)==false){
        phone_errorbox.innerHTML = "Contact Number is not valid";
        flag_number = false;
    }
    else{
        flag_number = true;
        phone_errorbox.innerHTML = "";
    }

    //Pin code Number
    const regex_pincode = /^\d{6}$/;
    var code = document.querySelector("#code").value;
    flag__code = true;
    let pincode_errorbox = document.querySelector("#pincode_errorbox");
    if(code == ""){
        pincode_errorbox.innerHTML = "PIN CODE is required";
        flag__code = false;
    }
    else if(regex_pincode.test(code)==false){
        pincode_errorbox.innerHTML = "PIN Code is not valid";
        flag__code = false;
    }   
    else{
        flag__code = true;
        pincode_errorbox.innerHTML = "";
    }

    //Card Number 
    const regex_card = /^\d{16}$/;
    var card = document.querySelector("#cardnum").value;
    flag_card = true;
    let cardnumber_errorbox = document.querySelector("#cardnumber_errorbox");
    if(card == ""){
        cardnumber_errorbox.innerHTML = "Card Number is required";
        flag__card = false;
    }
    else if(regex_card.test(card)==false){
        cardnumber_errorbox.innerHTML = "Card Number is not valid";
        flag__card = false;
    }   
    else{
        flag__card = true;
        cardnumber_errorbox.innerHTML = "";
    }

    //Card Year
    let date = new Date();
    let year = date.getFullYear()
    var card_exp = document.querySelector("#cardyear").value;
    flag_cardexpiry = true;
    let cardyear_errorbox = document.querySelector("#cardyear_errorbox");
    if(card_exp == ""){
        cardyear_errorbox.innerHTML = "Card Expiry is required";
        flag_cardexpiry = false;
    }
    else if(year > card_exp){
        cardyear_errorbox.innerHTML = "Card Expiry is not valid";
        flag_cardexpiry = false;
    }
    else{
        flag_cardexpiry = true;
        cardyear_errorbox.innerHTML = "";
    }

    //CVV
    const regex_cvv= /^\d{3,4}$/;
    var cvv = document.querySelector("#cvv1").value;
    flag_cvv = true;
    let cvv_errorbox = document.querySelector("#cvv_errorbox");
    if(cvv == ""){
        cvv_errorbox.innerHTML = "CVV is required";
        flag_cvv = false;
    }
    else if(regex_cvv.test(cvv) == false){
        cvv_errorbox.innerHTML = "CVV is not valid";
        flag_cvv = false;
    }
    else{
        flag_cvv = true;
        cvv_errorbox.innerHTML = "";
    }
    
    if(flag_fname && flag_lname && flag_mailid && flag_number && flag__code && flag__card && flag_cardexpiry && flag_cvv){
        return true;
    }
    else{
        return false;
    }
}