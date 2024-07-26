class Account{
    #balance = 0;

    get balance(){
        return this.#balance;
    }

    deposit(amount){
        if(amount <= 0){
            return;
        }
        this.#balance += amount;
    }

    withdraw(amount){
        if(amount <= 0 || amount > this.#balance){
            console.log("insufficient funds");
            return;
        }
        this.#balance -= amount;
    }
}

const account1 = new Account();
account1.deposit(100);
console.log(account1.balance);
account1.withdraw(10);
console.log(account1.balance);