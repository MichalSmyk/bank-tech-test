class BankModel{
    constructor(date, amount){
        this.date = date;
        this.amount = amount
    }

    getDate(){
        return this.date
    }

    getAmount(){
        return this.amount
    }

    getDeposit(deposit){
        return this.amount + deposit
    }

    getWithdrawal(withdraw) {
        if (withdraw > this.amount){
            throw ('Balance is lower than the amout to withdraw')
        } else {
        return this.amount - withdraw
        }
    }
}

module.exports = BankModel;