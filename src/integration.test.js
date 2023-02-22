const BankStatement = require('../lib/bank_statement');
const BankModel = require('../lib/bank_model');


describe('BankStatement and BankModel integration', () => {
    let statement;
    beforeEach(() => {
      statement = new BankStatement();
    });
  
    it('should correctly update the balance in the statement after creating a new BankModel instance', () => {
      statement.deposit('2022-02-21', 1000);
      const model = new BankModel('2022-02-21', 1000);
      statement.transactions.push(model);
      expect(statement.balance()).toBe(2000);
    });
    it('should correctly print the statement after adding a BankModel instance', () => {
      statement.deposit('2022-02-21', 1000);
      const model = new BankModel('2022-02-21', 1000);
      statement.transactions.push(model);
      const expectedStatement =
      'date ||   credit ||   debit ||   balance\n\n' +
      '2022-02-21||1000.00||      ||2000.00\n' +
      '2022-02-21||1000.00||      ||1000.00';
      expect(statement.statement()).toBe(expectedStatement);
    });
    it('should update the balance in the statement after calling BankModel methods', () => {
        statement.deposit('2022-02-21', 1000);
        const model = new BankModel('2022-02-21', 1000);
        statement.transactions.push(model);
        const withdrawalAmount = 500;
        model.amount = model.getWithdrawal(withdrawalAmount);
        expect(statement.balance()).toEqual(1500);
    });
})