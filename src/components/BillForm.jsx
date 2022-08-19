import { useState, useEffect } from 'react';
import axios from "axios";

const BillForm = ({ selectedPlan, subscriptionType }) => {
  const [numberOfUsers, setNumberOfUsers] = useState(selectedPlan.user_limit);
  const [totalBill, setTotalBill] = useState();

  const calculateBill = async () => {
    const { data } = await axios.get(`http://localhost:3000/plans/${selectedPlan.id}/calculate_bill.json?number_of_user=${numberOfUsers}&subscription_type=${subscriptionType}`);
    setTotalBill(data.calculated_amount);
  };

  useEffect(() => {
    setNumberOfUsers(selectedPlan.user_limit);
    setTotalBill();
  }, [selectedPlan, subscriptionType]);

  return (
    <div className="mt-10 text-right">
      <h1 className="text-2xl">You've selected {selectedPlan.name}</h1>
      <div className="mt-4">
        <label className="text-sm">Number of users</label>
        <input
          type="text"
          className="ml-3 p-1 rounded border-gray-300"
          value={numberOfUsers}
          onChange={evt => setNumberOfUsers(evt.target.value)}
          disabled={selectedPlan.name === 'solo'}
        />
        <button
          className="ml-6 mt-10 bg-green-500 px-4 py-2 text-white rounded text-sm hover:bg-green-400 hover:text-gray-200"
          onClick={calculateBill}
        >
          Calculate Bill
        </button>
      </div>
      <h2 className="text-lg mt-4">Total price: ${totalBill} / Month</h2>
    </div>
  )
}

export default BillForm
