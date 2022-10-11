import { TransactionHistory } from './TransactionHistory';

export const TransactionsList = ({ transactions }) => {
    return (
      <table class="transaction-history">
       <thead>
          <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
          </tr>
        </thead>

        <tbody>
      {transactions.map(itemTr => (
        <tr key={itemTr.id}>
            <TransactionHistory transaction={itemTr} />
        </tr>
      ))}
    </tbody>
    </table>
    )
}