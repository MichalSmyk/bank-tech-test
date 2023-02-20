class BankModel{
    constructor(date, amount){
        this.date = date;
        this.amount = amount
    }
//method for adding date
    getDate(){
        return this.date
    }
//method for total amount
    getAmount(){
        return this.amount
    }
//method for deposit, returns total amount after deposit
    getDeposit(deposit){
        return this.amount + deposit
    }
//method for credit, returns total amoutn after credit, throws an error if the credited amount is bigger that the total balance
    getWithdrawal(withdraw) {
        if (withdraw > this.amount){
            throw ('Balance is lower than the amout to withdraw')
        } else {
        return this.amount - withdraw
        }
    }
}

module.exports = BankModel;