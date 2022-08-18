import BillForm from './BillForm'

function PricingTable({ payPerMonth }) {
  return (
    <>
      <div className="mt-10 grid gap-3 grid-cols-3">
        {
          payPerMonth &&
          <div className="rounded shadow-md p-4">
            <h1 className="text-3xl">Solo</h1>
            <h2 className="text-2xl mt-4">$6 / {payPerMonth ? 'month' : 'year'}</h2>
            <div className="flex justify-between px-5 mt-10">
              <p className="text-base font-light">Template</p>
              <p className="text-sm">1</p>
            </div>
            <div className="flex justify-between px-5 mt-2">
              <p className="text-base font-light">Users</p>
              <p className="text-sm">1</p>
            </div>
            <div className="flex justify-between px-5 mt-2">
              <p className="text-base font-light">Users</p>
              <p className="text-sm">1</p>
            </div>

            <button className="mt-10 bg-blue-500 px-4 py-2 text-white rounded text-sm hover:bg-blue-400 hover:text-gray-200">Get Started</button>
          </div>
        }
        

        <div className="rounded shadow-md p-4">
          <h1 className="text-3xl">Start up</h1>
          <h2 className="text-2xl mt-4">$6 / {payPerMonth ? 'month' : 'year'}</h2>
          <div className="flex justify-between px-5 mt-10">
            <p className="text-base font-light">Template</p>
            <p className="text-sm">Unlimited</p>
          </div>
          <div className="flex justify-between px-5 mt-2">
            <p className="text-base font-light">Users</p>
            <p className="text-sm">20</p>
          </div>
          <div className="flex justify-between px-5 mt-2">
            <p className="text-base font-light">Additional user</p>
            <p className="text-sm">+6$</p>
          </div>

          <button className="mt-10 bg-blue-500 px-4 py-2 text-white rounded text-sm hover:bg-blue-400 hover:text-gray-200">Get Started</button>
        </div>

        <div className="rounded shadow-md p-4">
          <h1 className="text-3xl">Enterprise</h1>
          <h2 className="text-2xl mt-4">$6 / {payPerMonth ? 'month' : 'year'}</h2>
          <div className="flex justify-between px-5 mt-10">
            <p className="text-base font-light">Template</p>
            <p className="text-sm">Unlimited</p>
          </div>
          <div className="flex justify-between px-5 mt-2">
            <p className="text-base font-light">Users</p>
            <p className="text-sm">20</p>
          </div>
          <div className="flex justify-between px-5 mt-2">
            <p className="text-base font-light">Addition users</p>
            <p className="text-sm">+5$</p>
          </div>

          <button className="mt-10 bg-blue-500 px-4 py-2 text-white rounded text-sm hover:bg-blue-400 hover:text-gray-200">Get Started</button>
        </div>
      </div>

      <BillForm />
    </>
  )
}

export default PricingTable
