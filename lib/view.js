const BankModel = require("./model")

class BankStatement{
    constructor(){
        this.transactions = []
    }

    deposit(date, amount){
        const transaction = new BankModel(date, amount)
        this.transactions.push(transaction)
    }
}

module.exports = BankStatement