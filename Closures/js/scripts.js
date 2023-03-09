// Bank object with 5 accounts
const bank = [
    {
        accountNumber : 1000,
        cardNumber : 12345,
        pin : 0900,
        accountBalance : 5000
    },
    {
        accountNumber : 1001,
        cardNumber : 23456,
        pin : 0901,
        accountBalance : 6000
    },
    {
        accountNumber : 1002,
        cardNumber : 34567,
        pin : 0902,
        accountBalance : 7000
    },
    {
        accountNumber : 1000,
        cardNumber : 45678,
        pin : 0903,
        accountBalance : 8000
    },
    {
       accountNumber : 1000,
       cardNumber : 567890,
        pin : 0904,
       accountBalance : 9000
    }
]
// withdrawl arrow function
const withdrawl = (details) => {
    let amount = parseInt(prompt("Enter amount to be withdrawn"));
    if((amount > details.accountBalance)){
    alert("Insufficient balance");
    }
    else{
        details.accountBalance -= amount;
        alert("Amount Withdrawn " + amount + " Account Balance " + details.accountBalance);
        return;
    }
}

// Deposit arrow function
const deposit = (details) => {
    let amount = parseInt(prompt("Enter amount to be deposited"));
    details.accountBalance += amount;
    alert("Amount Deposited " + amount + " Account Balance " + details.accountBalance);
    return;
}

// Validate arrow function
const validate = (cardNumber,pin) => {
    flag=false;
    bank.forEach(element => {
        if((element.cardNumber == cardNumber)&&(element.pin == pin)){
            flag=true;
            let choice = parseInt(prompt("1 for withdrawl 2 for deposit"));
            switch(choice){
                case 1:
                    withdrawl(element);
                    break;
                case 2:
                    deposit(element);
                    break;
                default:
                    console.log("Invalid chocie");
                    return;
            }
        }
});
if(flag != true){
    alert("Invalid details");
    return;
    }
    else{
        return;
    }
}
while(true){
   let cN = parseInt(prompt("Enter card number"));
   let pin = parseInt(prompt("Enter PIN nunmber"));
   validate (cN , pin);
}