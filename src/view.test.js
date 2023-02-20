const BankModel = require('../lib/model');
const BankStatement = require('../lib/view')

describe('BankStatement', () => {
    let statement;

    beforeEach(() => {
        statement = new BankStatement();
    });

    it('has an empty transactions array', () => {
        expect(statement.transactions).toEqual([]);
    });

    it('adds deposit to transactions array', () => {
        statement.deposit('01/02/2023', 100)
        expect(statement.transactions).toEqual([{ date: '01/02/2023', amount: 100}]);
    });

    it('adds a withdraw to transactions array', () => {
        statement.withdraw('02/02/2023', 50)
        expect(statement.transactions).toEqual([{ date: '02/02/2023', amount: -50}]);
    });

    it('should return the correct balance', () => {
        statement.deposit('01/02/2023', 100);
        statement.deposit('02/02/2023', 100);
        statement.withdraw('03/02/2023', 30);
        expect(statement.balance()).toEqual(170);
    })

})