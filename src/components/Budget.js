import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
// import Curreny from "./Curreny";

const Budget = () => {
  const { expenses, budget, currency } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);
  const [newBudget, setNewBudget] = useState(budget);
  const handleBudgetChange = (event) => {
    console.log("currency2", currency);
    if (event.target.value > 20000) {
      alert("The value cannot exceed remaining funds  £ 20000");
      return;
    }
    if (event.target.value < totalExpenses) {
      alert("The value cannot be less than total expenses  £" + totalExpenses);
      return;
    }
    setNewBudget(event.target.value);
  };

  return (
    <div className="alert alert-secondary">
      <span>Budget: {currency}</span>
      <input
        type="number"
        step="10"
        value={newBudget}
        onChange={handleBudgetChange}
      ></input>
    </div>
  );
};
export default Budget;
