

class bankAccount{
    
        
    name = "Habibur Rahman";
    acNumber = 404;
    balance = 1000;
    // Deposit methud...
    deposit(amount){
    
        let totall = this.balance += amount;
        console.log("Totall Deposit : " + totall + " " + "Account Number : " + this.acNumber);
    }

    withdrow(amount){
        
        if(this.balance == 0){
            console.log("Insuffiant Balance");
        }
        else if(this.balance < 50 ){
            console.log("Invalid Amount");
        }
        else if(this.balance < amount){
            console.log("Insuffiant Balance");
        }
        else{
            let withdrowAmount = this.balance -= amount;
            // let t = this.totall -= withdrowAmount;
            console.log("Totall Withdrow : " + withdrowAmount + " " + "Account Number : " + this.acNumber);
        }
    }

    getBalance(){
        return ("Update Balance : " + this .balance);
    }

    displayAccInfo(){
        let hol_name = this.name;
        let hol_acNumber = this.acNumber;
        let hol_balance = this.balance;
        console.log(`Holder Name : ${hol_name}, Account Number : ${hol_acNumber}, Balance : ${hol_balance}`);
    }
}

let bankObject = new bankAccount(); // class object ....

bankObject.deposit(10);
bankObject.withdrow(50);
console.log(bankObject.getBalance());
bankObject.displayAccInfo();