const BankModel = require("./model")

class BankStatement{
    constructor(){
        this.transactions = []
    }

    deposit(date, amount){
        const transaction = new BankModel(date, amount)
        this.transactions.push(transaction)
    }

    withdraw(date, amount){
        const transaction = new BankModel(date, -amount)
        this.transactions.push(transaction)
    }

    balance(){
        return this.transactions.reduce((balance, transaction) => balance + transaction.amount, 0)
    }
}

module.exports = BankStatement