import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  const [weight, setWeight] = useState(0)
  const [bottles, setBottles] = useState(0)
  const [time, setTime] = useState(0)
  const [gender, setGender] = useState('male')
  const [result, setResult] = useState(0)
  
  function calculate(e) {
    e.preventDefault();
    let litres = bottles * 0.33
    let grams = litres * 8 * 4.5
    let burning = weight / 10
    let blood = grams - (burning * time)
  
    if (gender === 'male'){
      blood = grams / (weight * 0.7)
    } else {
      blood = grams / (weight * 0.6)
    }
    setResult(blood)
  }
  


return (

<>
<h3>Calculating alcohol blood level</h3>

<form onSubmit={calculate}>

  <div>
    <label>Weight</label>
    <input type="number" value={weight} onChange={e => setWeight(e.target.value)}></input>
  </div>

  <div>
    <label>Bottles</label>
    <select name="bottles" value={bottles} onChange={e => setBottles(e.target.value)}>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
  </div>

  <div>
    <label>Time</label>
    <select name="time"  value={time} onChange={e => setTime(e.target.value)}>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
  </div>

  <div>
    <label>Gender</label>
      <input type="radio" name="gender" value="male" defaultChecked  onChange={e => setGender(e.target.value)}/><label>Male</label>
      <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)} /><label>Female</label>
  </div>

  <div>
    <output>{result}</output>
  </div>

  <button>Calculate</button>

</form>






</>
  );
}

export default App;
