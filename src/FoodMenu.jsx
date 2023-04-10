import React, { useState } from 'react';
import './FoodMenu.css'; 
import {Link} from 'react-router-dom'
const FoodMenu = () => {
  
  const [selectedItems, setSelectedItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  const handleItemClick = (item) => {
    const updatedSelectedItems = [...selectedItems, item];
    setSelectedItems(updatedSelectedItems);
    const updatedTotalPrice = totalPrice + item.price;
    setTotalPrice(updatedTotalPrice);
    const updatedTotalCalories = totalCalories + item.calories;
    setTotalCalories(updatedTotalCalories);
  };

  const handleRemoveItemClick = (item) => {
    const updatedSelectedItems = selectedItems.filter(
      (selectedItem) => selectedItem.id !== item.id
    );
    setSelectedItems(updatedSelectedItems);
    
  
    if (updatedSelectedItems.length === 0) {
      setTotalPrice(0);
      setTotalCalories(0);
    } else {
      setTotalPrice(prevTotalPrice => prevTotalPrice - item.price);
      setTotalCalories(prevTotalCalories => prevTotalCalories - item.calories);
    }
  };
  return (
    
    <div className="food-menu">
      
      <h1 className="food-menu-title">Food Menu</h1>
      <ul className="menu-items">
        {menuItems.map((item) => (
          <li key={item.id} className="menu-item">
            <span className="item-info">
              {item.name} - {item.price}฿ - {item.calories} calories
            </span>
            <button className="add-button" onClick={() => handleItemClick(item)}>
              Add
            </button>
          </li>
        ))}
      </ul>
      <h2 className="selected-items-title">Selected Items</h2>
      <ul className="selected-items">
        {selectedItems.map((selectedItem) => (
          <li key={selectedItem.id} className="selected-item">
            <span className="item-info">
              {selectedItem.name} - {selectedItem.price}฿ - {selectedItem.calories} calories
            </span>
            <button
              className="remove-button"
              onClick={() => handleRemoveItemClick(selectedItem)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <h3 className="total-price">Total Price : {totalPrice} ฿</h3>
      <h3 className="total-calories">Total Calories : {totalCalories} calories</h3>

      

<Link to = '../PaymentPage'><button className="buttonmenu">
          Checkout
        </button>
      </Link> 

     
    </div>
    
  );
};

const menuItems = [
  { id: 1, name: 'ข้าวไข่เจียว', price: 50, calories: 400 },
  { id: 2, name: 'ข้าวหมูแดง', price: 70, calories: 540 },
  { id: 3, name: 'ข้าวหมูกรอบ', price: 70, calories: 600 },
  { id: 4, name: 'บะหมี่หมูแดง', price: 70, calories:  450 },
  { id: 5, name: 'บะหมี่หมูกรอบ', price: 70, calories: 500 },
  { id: 6, name: 'ข้าวมันไก่ต้ม', price: 60, calories: 585  },
  { id: 7, name: 'ข้าวมันไก่ทอด', price: 60, calories: 695 },
  { id: 8, name: 'ข้าวผัดกระเทียม', price: 60, calories: 400 },
  { id: 9, name: 'ข้าวผัดปลาสลิด', price: 65, calories: 540 },
  { id: 10, name: 'ข้าวเห็ดผัดน้ำมันหอย', price: 65, calories: 250 },
  { id: 11, name: 'ข้าวกะเพราเต้าหู้ไข่หมูสับ', price: 70, calories: 450},
  { id: 12, name: 'ข้าวกะหล่ำปลีทอดน้ำปลาหมูกรอบ', price: 60, calories: 320 },
  { id: 13, name: 'ข้าวกุ้งทอดกระเทียม', price: 60, calories: 350 },
  { id: 14, name: 'ข้าวขาหมู', price: 60, calories: 690 },
  { id: 15, name: 'ข้าวต้มปลา', price: 60, calories: 325  },
  { id: 16, name: 'ข้าวผัดกะเพราไก่', price: 60, calories: 554  },
  { id: 17, name: 'ข้าวหมูอบ', price:60, calories: 385 },
  { id: 18, name: 'ไข่ดาว', price: 10, calories: 165 },
  { id: 19, name: 'ไข่ต้ม', price: 10, calories: 155},
  { id: 20, name: 'ไข่ลวก', price: 12, calories: 80}
  ];
  export default FoodMenu;
