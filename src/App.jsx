import { useState } from 'react';
import PricingTable from './components/PriceTable';
import PricingHeader from './components/PircingHeader';

import './App.css';

function App() {
  const [payPerMonth, setPayPerMonth] = useState(true);

  return (
    <div className="App">
      <PricingHeader setPayPerMonth={setPayPerMonth}/>
      <PricingTable payPerMonth={payPerMonth}/>
    </div>
  )
}

export default App
