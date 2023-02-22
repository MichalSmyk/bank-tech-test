const BankModel = require('../lib/model')

describe('BankModel', () => {

    beforeEach(() => {
     newBankModel = new BankModel('02/01/2023', 100);
    });

    it('returns date', () => {
        expect(newBankModel.getDate()).toBe('02/01/2023')
    });

    it('returns an amount', () => {
        expect(newBankModel.getAmount()).toBe(100)
    });

    it('returns total amount after deposit', () => {
        expect(newBankModel.getDeposit(50)).toBe(150)
    });

    it('returns total amount after withdrawal', () => {
        expect(newBankModel.getWithdrawal(50)).toBe(50);
    });

    it('throws an error if withdraw amount is bigger than total balane', () => {
        expect(() => newBankModel.getWithdrawal(150)).toThrow('Balance is lower than the amout to withdraw')
    })

})