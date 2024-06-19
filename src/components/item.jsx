export default function Item({ item, onDeletItem, onChekedItems }) {
    return (
      <li key={item.id}>
        <input type="checkbox" checked={item.checked} onChange={() => onChekedItems(item.id)} />
        <span  style={item.checked ? { textDecoration: 'line-through' } : {}}
        >{item.quantity} {item.name} </span>
        <button onClick={() => onDeletItem(item.id)}>&times;</button>
      </li>
    )
  }