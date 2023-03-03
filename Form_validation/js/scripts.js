

// Function check for validating each field 
// Params in the function are 1)User value 2)Input box id for changing border color 3) Error Box id for displaying error message 4) Error message when field is empty 5) Error message when field is invalid 6) Regex pattern
function check(UserValue , inputBox , errorBox , errorBoxEmptyField , errorBoxInvalidField , regexPattern){
    if(UserValue == ""){
        console.log("here");
        errorBox.innerHTML = errorBoxEmptyField;
        inputBox.classList.add("error");
        return false;
    }
    else if(regexPattern.test(UserValue) == false){
        inputBox.classList.add("error");
        errorBox.innerHTML = errorBoxInvalidField;
        return false;
    }
    else{
        inputBox.classList.remove("error");
        errorBox.innerHTML="";
        return true;
    }
}

function validate(){
    // First Name Validation
    // Storing input box , error box for changing styles
    // Sending values , input box and error box and error messages too
    const regexName = /^[A-Za-z]{1,30}$/;
    let firstName = document.querySelector("#idFirstName").value;
    let firstNameInputBox = document.querySelector("#idFirstName");
    let errorBoxId = document.querySelector("#firstNameErrorBox");
    flagFirstName = check(firstName , firstNameInputBox , errorBoxId , "First name is required" , "First Name is not valid" , regexName );

    // Last Name validation
    let lastName = document.querySelector("#idLastNname").value;
    let lastNameInputBox = document.querySelector("#idLastNname");
    let lastNameErrorBox = document.querySelector("#lastNameErrorBox");
    flagLastName = check(lastName , lastNameInputBox , lastNameErrorBox , "Last name is required" , "Last Name is not valid", regexName);
    // Passing user inputted value , input box id , error box id , error messages , regex pattern

    // Email validation
    // Storing input box , error box for changing styles
    // Sending values , input box and error box and error messages too
    const regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*[a-z](\.[a-z]{2,3})+$/;
    let email = document.querySelector("#idMail").value;
    let emailInputBox = document.querySelector("#idMail");
    let emailIdErrorBox = document.querySelector("#mailIdErrorBox");
    flagMailId = check(email , emailInputBox , emailIdErrorBox , "Email address is required" , "Email address is not valid" , regexMail);

    //Contact Number
    const regexPhoneNumber = /^\d{10}$/;
    let contactNumber = document.querySelector("#idNumber").value;
    let contactNumberInputBox = document.querySelector("#idNumber");
    let contactNumberErrorBox = document.querySelector("#phoneNumberErrorBox");
    flagPhoneNumber = check(contactNumber , contactNumberInputBox , contactNumberErrorBox , "Contact Number is required" , "Contact Number is not valid" , regexPhoneNumber);
    // Passing user inputted value , input box id , error box id , error messages , regex pattern

    //Pin code Number
    const regexPinCode = /^\d{6}$/;
    let pinCode = document.querySelector("#idPinCode").value;
    let pinCodeInputBox = document.querySelector("#idPinCode");
    let pinCodeErrorBox = document.querySelector("#pinCodeErrorBox");
    flagPinCode = check(pinCode , pinCodeInputBox , pinCodeErrorBox , "Pin Code is required" , "Pin Code is not valid" , regexPinCode);

    //Card Number 
    const regexCard = /^\d{16}$/;
    let card = document.querySelector("#idCardNumber").value;
    let cardInputBox = document.querySelector("#idCardNumber");
    let CardNumberErrorBox = document.querySelector("#cardNumberErrorbox");
    flagCard = check(card , cardInputBox , CardNumberErrorBox , "Card Number is required" , "Card Number is not valid" , regexCard);

    //Card Year
    const regexYear = /^202[3-9]$/;
    let cardExpiry = document.querySelector("#idCardExpiryYear").value;
    let cardExpiryInputBox = document.querySelector("#idCardExpiryYear");
    let cardExpiryErrorBox = document.querySelector("#cardExpiryErrorBox");
    flagCardExpiry = check(cardExpiry , cardExpiryInputBox , cardExpiryErrorBox , "Card Expiry is required" , "Card Expiry is not valid" , regexYear);

    //CVV
    const regexCvv= /^\d{3,4}$/;
    let cvv = document.querySelector("#idCvv").value;
    let cvvInputBox = document.querySelector("#idCvv");
    let cvvErrorBox = document.querySelector("#cvvErrorBox");
    flagCvv = check(cvv , cvvInputBox , cvvErrorBox , "CVV is required" , "CVV is not valid" , regexCvv);
    

    // Storing each flag values and checking whether each field is valid or not 
    // even if one field is not valid the form will not be submitted
    if(flagFirstName && flagLastName && flagMailId && flagPhoneNumber && flagPinCode && flagCard && flagCardExpiry && flagCvv){
        return true;
    }
    else{
        return false;
    }
}

