function BillForm() {
  return (
    <div className="mt-10 text-right">
      <h1 className="text-2xl">You've selected solo</h1>
      <div className="mt-4">
        <label className="text-sm">Number of users</label>
        <input type="text" className="ml-3 p-1 rounded border-gray-300" />
      </div>
      <h2 className="text-lg mt-4">Total price: $60</h2>
    </div>
  )
}

export default BillForm
