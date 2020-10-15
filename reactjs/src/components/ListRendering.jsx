import React from "react";

const ListRendering = () => {
  const foodListItems = [
    {
      name: "burger",
      price: "$3.50",
    },
    {
      name: "salad",
      price: "$10.99",
    },
    {
      name: "steak",
      price: "$20.00",
    },
  ];

  return (
    <div>
      <ul>
        {foodListItems.map((foodListItem, key) => (
          <FoodListItem food={foodListItem} key={key} />
        ))}
      </ul>
    </div>
  );
};

const FoodListItem = (props) => {
  return (
    <li>
      {props.food.name} | {props.food.price}
    </li>
  );
};

export default ListRendering;
