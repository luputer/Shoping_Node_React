import { useState } from "react";
import Item from "./item";

 export default function GrowceryList({items, onDeletItem, onChekedItems, onChearItems}) {
    const [sortBy, setSortBy] = useState('input')
  
    let sortedItems = [...items]
    switch (sortBy) {
      case 'name'
        : sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name))
        break;
      case 'checked'
        : sortedItems = items.slice().sort((a, b) => a.checked - b.checked);
        break;
      case 'quantity'
        : sortedItems = items.slice().sort((a, b) => a.quantity - b.quantity);
        default:
    }
  
  
    return (
      <>
        <div className="list">
          <ul>
            {sortedItems.map((item) => (
              <Item item={item} key={item.id} onDeletItem={onDeletItem} onChekedItems={onChekedItems} />
            ))}
          </ul>
        </div>
        <div className="actions">
          <select onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Urutkan berdasarkan urutan input</option>
            <option value="name">Urutkan berdasarkan nama barang</option>
            <option value="quantity">Urutkan berdasarkan kuantitas</option>
            <option value="checked">Urutkan berdasarkan ceklis</option>
          </select>
          <button onClick={onChearItems}>Bersihkan Daftar</button> 
        </div>
      </>
    )
  }