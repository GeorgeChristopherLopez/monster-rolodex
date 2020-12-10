import './App.css';
import { useState, useEffect } from 'react';
import  {CardList} from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component';

 
function App() {
const [searchField, setSearchFeild] = useState("");
const [monsters, setMonsters] = useState([]);
const filteredMonsters = monsters.filter(monster=>
  monster.name.toLowerCase().includes(searchField.toLowerCase()))

// Similar to componentDidMount and componentDidUpdate:
useEffect(() => {
  // Update the document title using the browser API
  
// console.log("componentDidMount or componentDidUpdated ")
  fetch('https://jsonplaceholder.typicode.com/users/')
  .then(response => response.json())
  .then(users => setMonsters(users))
},[]);



  return (
    <div className="App">
    <h1>Monsters Rolodex</h1>
    <SearchBox placeholder="search for stuff" handleChange={(e)=>setSearchFeild(e.target.value)}/>
    <CardList monsters={filteredMonsters}>   
    </CardList>
     </div>

  );
}

export default App;
