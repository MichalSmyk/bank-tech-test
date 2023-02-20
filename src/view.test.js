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
})