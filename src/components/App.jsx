import { useState } from "react"
import Headers from "./header";
import Form from "./form";
import GrowceryList from "./growceryList";
import Footer from "./footer";


const GrowceryItems = [
  {
    id: 1,
    name: 'kopi bubuk',
    quantity: 6,
    checked: true,
  },
  {
    id: 2,
    name: 'Gula pasir',
    quantity: 5,
    checked: true,
  },
  {
    id: 3,
    name: 'Air miniral',
    quantity: 3,
    checked: false,
  },
]



export default function App() {

  const [items, setItems] = useState([]);

  function hendeAddItems(item){
    setItems([...items, item])
  }


  function hendleDeleteItem(id){
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggle(id){
    setItems((items) => items.map((item) => item.id === id ? {...item, checked: !item.checked} : item))
  }


  function handeleClearItems(){
    setItems([])
  }

  return (
    <>
      <div className="app">
        <Headers />
        <Form onAddItem={hendeAddItems}/>
        <GrowceryList items={items} onDeletItem={hendleDeleteItem} onChekedItems={handleToggle} onChearItems={handeleClearItems} />
        <Footer items={items}/>
      </div>
    </>
  )

}


//before change the component;

// function Headers() {
//   return <h1>Shoping note 📝</h1>
// }


// function Form({onAddItem}) {
//   const [name, setName] = useState('');
//   const [quantity, setQuantity] = useState('');



//   function hendleSubmit(e) {
//     e.preventDefault()

//     if(!name) return;
//     const newItem = { name, quantity, checked: false, id: Date.now()};
//     onAddItem(newItem)
//     setName('');
//     setQuantity(1)
//   }


//   const quantityNum = [...Array(15)].map((_, i) => (
//     <option value={i + 1} key={i + 1}>
//       {i + 1}
//     </option>
//   ));


//   return (
//     <>
//       <form className="add-form" onSubmit={hendleSubmit}>
//         <h3>Hari ini belanja apa kita?</h3>
//         <div>
//           <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
//             {quantityNum}
//           </select>
//           <input type="text" placeholder="nama barang..." value={name} onChange={(e) => setName(e.target.value)} />
//         </div>
//         <button >Tambah</button>
//       </form>
//     </>
//   )
// }



// function GrowceryList({items, onDeletItem, onChekedItems, onChearItems}) {
//   const [sortBy, setSortBy] = useState('input')

//   let sortedItems = [...items]
//   switch (sortBy) {
//     case 'name'
//       : sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name))
//       break;
//     case 'checked'
//       : sortedItems = items.slice().sort((a, b) => a.checked - b.checked);
//       break;
//     case 'quantity'
//       : sortedItems = items.slice().sort((a, b) => a.quantity - b.quantity);
//       default:
//   }


//   return (
//     <>
//       <div className="list">
//         <ul>
//           {sortedItems.map((item) => (
//             <Item item={item} key={item.id} onDeletItem={onDeletItem} onChekedItems={onChekedItems} />
//           ))}
//         </ul>
//       </div>
//       <div className="actions">
//         <select onChange={(e) => setSortBy(e.target.value)}>
//           <option value="input">Urutkan berdasarkan urutan input</option>
//           <option value="name">Urutkan berdasarkan nama barang</option>
//           <option value="quantity">Urutkan berdasarkan kuantitas</option>
//           <option value="checked">Urutkan berdasarkan ceklis</option>
//         </select>
//         <button onClick={onChearItems}>Bersihkan Daftar</button> 
//       </div>
//     </>
//   )
// }



// function Item({ item, onDeletItem, onChekedItems }) {
//   return (
//     <li key={item.id}>
//       <input type="checkbox" checked={item.checked} onChange={() => onChekedItems(item.id)} />
//       <span  style={item.checked ? { textDecoration: 'line-through' } : {}}
//       >{item.quantity} {item.name} </span>
//       <button onClick={() => onDeletItem(item.id)}>&times;</button>
//     </li>
//   )
// }


// function Footer({ items }) {
//   if(items.length === 0 ) return <footer className="stats">
//   daftar belanja masih kosong
// </footer>



//   const totalItems = items.length;
//   const checkedItems = items.filter((item) => item.checked).length;
//   const percentage = totalItems === 0 ? 0  : Math.round((checkedItems / totalItems) * 100);

//   return (
//     <footer className="stats">
//       Ada {totalItems} barang di daftar belanjaan, {checkedItems} barang sudah dibeli ({percentage}%)
//     </footer>
//   );
// }