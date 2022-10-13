
import { TransactHistory} from './Transactions.styled';

export const TransactionsList = ({ transactions }) => {
    return (
      <TransactHistory>
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
                <td>{itemTr.type}</td>
                <td>{itemTr.amount}</td>
                <td>{itemTr.currency}</td>  
        </tr>
      ))}
    </tbody>
    </TransactHistory>
    
    )
}