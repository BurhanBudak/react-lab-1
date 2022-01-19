import './App.css';
import {useState} from 'react'
import Navbar from './components/Navbar.js'
import List from './components/List';
function App() {


  const [books] = useState([
    {title:'Lord of the rings',id:1},
    {title:'Harry Potter', id:2},
    {title:'Dune', id:3},
  ])
  console.log(books)
  return (
    <div className="App">
      <Navbar />
      <List books={books}/>
    </div>
  );
}

export default App;
