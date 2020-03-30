/* Going to keep demo data in file system instead
import { Transactions, Categories } from './index';
import { trans, cate } from './demoData';

Transactions.bulkCreate(trans)
  .then((result) => console.log(`${result.length} transactions have been created.`))

Categories.bulkCreate(cate)
  .then((result) => console.log(`${result.length} categories have been created.`))
*/
