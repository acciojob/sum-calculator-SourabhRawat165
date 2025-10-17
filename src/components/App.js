import React, { useState } from "react";
import './../styles/App.css';
import SumCalculator from "./SumCalculator";

const App = () => {
  const[sum, setSum] = useState(0)
  return (
    <div>
        <h1>Sum Calculator</h1>
          <input onChange={(e) =>{
            setSum((sum)+(Number(e.target.value)))
          }} type="number"/>
          <SumCalculator sum={sum} setSum={setSum}/>
    </div>
  )
}

export default App