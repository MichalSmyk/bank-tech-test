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
}

module.exports = BankModel;