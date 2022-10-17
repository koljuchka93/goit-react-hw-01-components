import { Profile } from './Profile/Profile';
import user from './Profile/user.json';

import { Stastistics } from './Statistics/Statistics';
import data from './Statistics/data.json';

import { FriendsList } from './Friend/FriendsList';
import friends from './Friend/friends.json';

import { TransactionsList } from './Transactions/TransactionsList';
import transactions from './Transactions/transactions.json';


export const App = () => {
  return (
  <div>
    <Profile 
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Stastistics data={data} />
    <FriendsList friends={friends} />  
    <TransactionsList transactions={transactions} />
  </div>
  );
};

