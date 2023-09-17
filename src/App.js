import React , {useState} from 'react'
import './App.css';


function App() {

  const [value,setValue] = useState(0);
  const [user,setUser] = useState({name:'AK',age:1})

  const increment = () => {
      setValue(value+1)
  }

  const decrement = () => {
    setValue(value-1)
  }

  const handleChange = (event) => {
    const {name , value} = event.target;
    setUser({...user,[name]:value});
  }
  return (
    <div className="App">
      <h1 style={{textAlign:'center'}}>Use State</h1>
      <div style={{margin:'20px'}}>
         <button onClick={decrement}>-</button>
      </div>
      <h2>Value : {value}</h2>
      <div>
        <button onClick={increment}>+</button>
      </div> <br/><br/>

      <div>
        <input 
          type='text'
          name='name'
          placeholder='name'
          onChange={handleChange}
          value={user.name}  
        /><br/><br/>
        <input 
          type='number'
          name='age'
          value={user.age}
          placeholder='age'
          onChange={handleChange}
        />
        <h2>{user.name}, {user.age} </h2>
      </div><br/>
    </div>
  );
}

export default App;
