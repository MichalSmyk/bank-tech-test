const BankModel = require('../lib/model')

describe('BankModel', () => {
    it('returns date', () => {
        const newBankModel = new BankModel('02/01/2023', 100);
        expect(newBankModel.getDate()).toBe('02/01/2023')
    })
})