class BankModel{
    constructor(date, amount){
        this.date = date;
        this.amount = amount
    }

    getDate(){
        return this.date
    }
}

module.exports = BankModel;