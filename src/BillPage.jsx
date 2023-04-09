import React from "react";

const BillingPage = ({
  ricefire3Qty = 0,
  ricefire4Qty = 0,
  ricefire5Qty = 0,
  ricefire6Qty = 0,
  eggfireQty = 0,
  pigredQty = 0,
  pigfireQty = 0
}) => {
  // Function to calculate total price
  const calculateTotalPrice = () => {
    // Prices for each item
    const ricefire3Price = 75;
    const ricefire4Price = 80;
    const ricefire5Price = 85;
    const ricefire6Price = 90;
    const eggfirePrice = 50;
    const pigredPrice = 60;
    const pigfirePrice = 70;

    // Calculate total price by multiplying quantities with prices
    const totalPrice =
      ricefire3Qty * ricefire3Price +
      ricefire4Qty * ricefire4Price +
      ricefire5Qty * ricefire5Price +
      ricefire6Qty * ricefire6Price +
      eggfireQty * eggfirePrice +
      pigredQty * pigredPrice +
      pigfireQty * pigfirePrice;

    return totalPrice;
  };

  return (
    <div className="billingContainer">
      <h1 className="billingTitle">Billing Information</h1>
      <div className="billingItems">
        <p className="billingItem">
          Rice Fire 3: {ricefire3Qty} x 75 = {ricefire3Qty * 75}
        </p>
        <p className="billingItem">
          Rice Fire 4: {ricefire4Qty} x 80 = {ricefire4Qty * 80}
        </p>
        <p className="billingItem">
          Rice Fire 5: {ricefire5Qty} x 85 = {ricefire5Qty * 85}
        </p>
        <p className="billingItem">
          Rice Fire 6: {ricefire6Qty} x 90 = {ricefire6Qty * 90}
        </p>
        <p className="billingItem">
          Egg Fire: {eggfireQty} x 50 = {eggfireQty * 50}
        </p>
        <p className="billingItem">
          Pig Red: {pigredQty} x 60 = {pigredQty * 60}
        </p>
        <p className="billingItem">
          Pig Fire: {pigfireQty} x 70 = {pigfireQty * 70}
        </p>
      </div>
      <h2 className="total">Total Price: {calculateTotalPrice()}</h2>
      <button className="checkoutButton">Checkout</button>
    </div>
  );
};

export default BillingPage;
