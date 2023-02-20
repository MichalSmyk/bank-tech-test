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

    statement() {
        let balance = 0;
        const firstRow = 'date   ||   credit   ||   debit   || balance\n';
        const statementRows = this.transactions.map(transaction => {
            balance += transaction.amount;
            return `${transaction.date}   ||   ${transaction.amount > 0 ? transaction.amount.toFixed(2) : ''} || ${transaction.amount < 0 ? (-transaction.amount).toFixed(2) : ''} || ${balance.toFixed(2)}`
        })
        return firstRow + statementRows.reverse().join('\n')
    }
}

module.exports = BankStatement