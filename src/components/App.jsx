import { Profile } from './Profile/Profile';
import user from './Profile/user.json';

import { StastisticsList } from './Statistics/StatisticsList';
import data from './Statistics/data.json';

import { FriendsList } from './Friend/FriendsList';
import friends from './Friend/friends.json';

import { TransactionsList } from './Transactions/TransactionsList';
import transactions from './Transactions/transactions.json';


export const App = () => {
  return (
  <div>
    <Profile user={user[0]} />
    <StastisticsList data={data} />
    <FriendsList friends={friends} /> 
    <TransactionsList transactions={transactions} />
  </div>
  );
};

export default App;