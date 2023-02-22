const BankModel = require('./lib/bankModel');
const BankStatement = require('./lib/bankStatement'); 

const statement = new BankStatement();

statement.deposit('10/01/2023', 100);
statement.deposit('13/01/2023', 200);
statement.withdraw('14/01/2023', 50);

console.log(statement.statement());
