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

    it('returns total amount after withdrawal', () => {
        expect(newBankModel.getDeposit(50)).toBe(50)
    })

})