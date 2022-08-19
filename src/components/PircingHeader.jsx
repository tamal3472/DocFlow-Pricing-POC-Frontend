const PricingHeader = ({ setPayPerMonth }) => (
  <>
    <h1 className="text-4xl font-semibold">Choose the plan that fits your need</h1>

    <div className="flex justify-center mt-10 items-center">
      <span className="mr-3 text-sm font-medium text-gray-900 dark:text-gray-500">Pay month to month</span>
      <label htmlFor="default-toggle" className="inline-flex relative items-center cursor-pointer">
          <input type="checkbox" id="default-toggle" className="sr-only peer" onChange={() => setPayPerMonth(prevState => !prevState)} />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      </label>
      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-500">Subscribe for a year</span>
    </div>
  </>
)


export default PricingHeader
