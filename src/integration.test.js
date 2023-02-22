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
})