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
}

module.exports = BankModel;