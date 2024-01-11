import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Curreny = () => {
  const { dispatch } = useContext(AppContext);

  const handleCurrencyChange = (event) => {
    const currency = event.target.value;
    dispatch({
      type: "CHG_CURRENCY",
      payload: currency,
    });
    console.log("currency", currency);
    // curreny({
    //   value: event.target.value,
    // });
  };
  return (
    <div className="alert alert-secondary">
      <select style={{ backgroundColor: "lightgreen"  }}
        className="custom-select btn-secondary dropdown-toggle"
        id="inputGroupSelect05"
        onChange={(event) => handleCurrencyChange(event)}
      >
        <option value="$" name="Dollar" style={{ color:'black'}}>
          Currency ($ Dollar)
        </option>
        <option defaultValue value="£" name="Pound" style={{ color:'black'}} >
          Currency (£ Pound)
        </option>
        <option value="€" name="Euro" style={{ color:'black'}} >
          Currency (€ Euro)
        </option>
        <option value="₹" name="Ruppee" style={{ color:'black'}} >
          Currency (₹ Ruppee)
        </option>
      </select>
    </div>
  );
};
export default Curreny;
