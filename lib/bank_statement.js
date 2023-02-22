const BankModel = require("./bank_model")

class BankStatement{
    constructor(){
        this.transactions = []
    }
//method for depositing money taking date and amount
    deposit(date, amount){
        const transaction = new BankModel(date, amount)
        this.transactions.push(transaction)
    }
//method for withdrawing money taking date and amount 
    withdraw(date, amount){
        const transaction = new BankModel(date, -amount)
        this.transactions.push(transaction)
    }
//method for total balance of the account 
    balance(){
        return this.transactions.reduce((balance, transaction) => balance + transaction.amount, 0)
    }
//method to print the statement in the console
    statement() {
        let balance = 0;
        const firstRow = 'date ||   credit ||   debit ||   balance\n\n';
        const statementRows = this.transactions.map(transaction => {
            balance += transaction.amount;
            return `${transaction.date}||${transaction.amount > 0 ? transaction.amount.toFixed(2) : '      '}||${transaction.amount < 0 ? (-transaction.amount).toFixed(2) : '      '}||${balance.toFixed(2)}`
        })
        return firstRow + statementRows.reverse().join('\n')
    }
}

module.exports = BankStatement