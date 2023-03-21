import React from "react";

const PropertyType = () => {
  return (
    <div>
      <h2>Choose property type</h2>
      <form>
        <input type="radio" id="radio-rent" name="add-type" />
        <label htmlFor="radio-rent">Rent</label>

        <input type="radio" id="radio-sell" name="add-type" />
        <label htmlFor="radio-sell">Sell</label>
      </form>
    </div>
  );
};

export default PropertyType;
