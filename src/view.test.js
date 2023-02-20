const BankStatement = require('../lib/view')

describe('BankStatement', () => {
    let statement;

    beforeEach(() => {
        statement = new BankStatement();
    });

    it('has an empty transactions array', () => {
        expect(statement.transactions).toEqual([]);
    });
})