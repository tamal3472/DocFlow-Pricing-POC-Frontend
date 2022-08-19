import { useState, useEffect } from 'react';
import axios from "axios";
import BillForm from './BillForm';


const PricingTable = ({ payPerMonth }) => {
  const [plans, setPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState();

  const fetchPlans = async () => {
    const { data } = await axios.get('http://localhost:3000/plans.json');
    setPlans(data.plans);
  };

  const renderPrice = plan => {
    if (payPerMonth) {
      return `$${plan.price_monthly} / Month`;
    }

    return `$${plan.price_yearly} / Month`;

  }

  useEffect(() => {
    fetchPlans();
  }, []);

  return (
    <>
      <div className="mt-10 grid gap-3 grid-cols-3">
        { plans.map(plan =>(
          <div key={plan.id} className="rounded shadow-md p-4">
            <h1 className="capitalize text-3xl">{plan.name}</h1>
            <h2 className="text-2xl mt-4">{renderPrice(plan)}</h2>
            <div className="flex justify-between px-5 mt-10">
              <p className="text-base font-light">Template</p>
              <p className="text-sm">{ plan.name == 'solo' ? 1 : 'Unlimited' }</p>
            </div>
            <div className="flex justify-between px-5 mt-2">
              <p className="text-base font-light">Users</p>
              <p className="text-sm">{plan.user_limit}</p>
            </div>
            <div className="flex justify-between px-5 mt-2">
              <p className="text-base font-light">Additional user fee</p>
              <p className="text-sm">{plan.additional_user_fee ? `${plan.additional_user_fee} / Month` : 'Not applicable'}</p>
            </div>
            <button className="mt-10 bg-blue-500 px-4 py-2 text-white rounded text-sm hover:bg-blue-400 hover:text-gray-200" onClick={()=>setSelectedPlan(plan)}>Get Started</button>
          </div>
        ))}
      </div>
      { selectedPlan && <BillForm selectedPlan={selectedPlan} subscriptionType={payPerMonth ? 'monthly' : 'yearly'}/> }
    </>
  )
}

export default PricingTable
