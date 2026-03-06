function Checkout() {
  return (
    <div className="container">
      <h2>Checkout</h2>
      <form>
        <input type="text" placeholder="Full Name" />
        <input type="text" placeholder="Address" />
        <input type="text" placeholder="Phone Number" />
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}

export default Checkout;