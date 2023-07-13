import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

const TransactionHistory = ({items}) => {
    return (
        <table className={css["transaction-history"]}>
    <thead>
    <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
    </tr>
    </thead>
            
     <tbody >
  {items.map(item => (
    
    <tr key={item.id} >
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
    
  ))}
                
</tbody>
</table>
    )
};

PropTypes.TransactionHistory = {
    items: PropTypes.array,
}

export default TransactionHistory;

