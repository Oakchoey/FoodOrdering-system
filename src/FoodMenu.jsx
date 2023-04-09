//FoodMenu.jsx
import React, { useState } from "react";
import "./FoodMenu.css";
import {Link} from 'react-router-dom'

const FoodMenu = () => {
  const [eggfireQty, seteggfireQty] = useState(0);
  const [pigredQty, setpigredQty] = useState(0);
  const [pigfireQty, setpigfireQty] = useState(0);
  const [noudleredQty, setnoudleredQty] = useState(0);
  const [noudlefireQty, setNoudlefireQty] = useState(0);
  const [ricetomQty, setRicetomQty] = useState(0);
  const [ricefireQty, setRicefireQty] = useState(0);
  const [ricefire1Qty, setricefire1Qty] = useState(0);
  const [ricefire2Qty, setricefire2Qty] = useState(0);
  const [ricefire3Qty, setricefire3Qty] = useState(0);
  const [ricefire4Qty, setricefire4Qty] = useState(0);
  const [ricefire5Qty, setricefire5Qty] = useState(0);
  const [ricefire6Qty, setricefire6Qty] = useState(0);


  const handleIncrement = (menuItem) => {
    switch (menuItem) {
      case "noudlefire":
        setNoudlefireQty(noudlefireQty + 1);
        break;
      case "ricetom":
        setRicetomQty(ricetomQty + 1);
        break;
      case "ricefire":
        setRicefireQty(ricefireQty + 1);
        break;
      case "eggfire":
        seteggfireQty(eggfireQty + 1);
        break;
      case "pigred":
        setpigredQty(pigredQty + 1);
        break;
      case "pigfire":
        setpigfireQty(pigfireQty + 1);
        break;
      case "noudlered":
        setnoudleredQty(noudleredQty + 1);
        break;
      case "ricefire5":
        setricefire5Qty(ricefire5Qty + 1);
        break;
      case "ricefire6":
        setricefire6Qty(ricefire6Qty + 1);
        break;        
      case "ricefire1":
        setricefire1Qty(ricefire1Qty + 1);
        break;
      case "ricefire2":
        setricefire2Qty(ricefire2Qty + 1);
        break;
      case "ricefire3":
        setricefire3Qty(ricefire3Qty + 1);
        break;
      case "ricefire4":
        setricefire4Qty(ricefire4Qty + 1);
        break;
      default:
        break;
    }
  };

  const handleDecrement = (menuItem) => {
    switch (menuItem) {
      case "noudlefire":
        setNoudlefireQty(noudlefireQty > 0 ? noudlefireQty - 1 : 0);
        break;
      case "ricetom":
        setRicetomQty(ricetomQty > 0 ? ricetomQty - 1 : 0);
        break;
      case "ricefire":
        setRicefireQty(ricefireQty > 0 ? ricefireQty - 1 : 0);
        break;
      case "eggfire":
        seteggfireQty(eggfireQty > 0 ?eggfireQty - 1 : 0);
        break;
      case "pigred":
        setpigredQty(pigredQty > 0 ? pigredQty - 1 : 0);
        break;
      case "pigfire":
        setpigfireQty(pigfireQty > 0 ? pigfireQty - 1 : 0);
        break;
      case "noudlered":
        setnoudleredQty(noudleredQty > 0 ? noudleredQty - 1 : 0);
        break;
      case "ricefire5":
        setricefire5Qty(ricefire5Qty > 0 ? ricefire5Qty - 1 : 0);
        break;
      case "ricefire6":
        setricefire6Qty(ricefire6Qty > 0 ? ricefire6Qty - 1 : 0);
        break;
      case "ricefire1":
        setricefire1Qty(ricefire1Qty > 0 ?ricefire1Qty - 1 : 0);
        break;
      case "ricefire2":
        setricefire2Qty(ricefire2Qty > 0 ? ricefire2Qty - 1 : 0);
        break;
      case "ricefire3":
        setricefire3Qty(ricefire3Qty > 0 ? ricefire3Qty - 1 : 0);
        break;
      case "ricefire4":
        setricefire4Qty(ricefire4Qty > 0 ? ricefire4Qty - 1 : 0);
        break;    
      default:
        break;
    }
  };

  return (
    <div className="container">
      <Link to="/" className="backButton">Back</Link>
      <h1 className="title">Food Menu</h1>
      <ul className="menuList">
        
      <li className="menuItem">
          <h2 className="menuItemTitle">ข้าวไข่เจียว</h2>
          
          <p className="menuItemDescription">จำนวนแคลทั้งหมด 400 kcal</p>
          <p className="menuItemPrice">50 ฿</p>
          <div className="quantityContainer">
            <button
              className="quantityButton"
              onClick={() => handleDecrement("eggfire")}
            >
              -
            </button>
            <span className="quantity">{eggfireQty}</span>
            <button
              className="quantityButton"
              onClick={() => handleIncrement("eggfire")}
            >
              +
            </button>
          </div>
        </li>
        <li className="menuItem">
          <h2 className="menuItemTitle">ข้าวหมูแดง</h2>
          <p className="menuItemDescription">จำนวนแคลทั้งหมด 540 kcal</p>
          <p className="menuItemPrice">70 ฿</p>
          <div className="quantityContainer">
            <button
              className="quantityButton"
              onClick={() => handleDecrement("pigred")}
            >
              -
            </button>
            <span className="quantity">{pigredQty}</span>
            <button
              className="quantityButton"
              onClick={() => handleIncrement("pigred")}
            >
              +
            </button>
          </div>
        </li>
        <li className="menuItem">
          <h2 className="menuItemTitle">ข้าวหมูกรอบ</h2>
          <p className="menuItemDescription">จำนวนแคลทั้งหมด 600 kcal
          </p>
          <p className="menuItemPrice">70 ฿</p>
          <div className="quantityContainer">
            <button
              className="quantityButton"
              onClick={() => handleDecrement("pigfire")}
            >
              -
            </button>
            <span className="quantity">{pigfireQty}</span>
            <button
              className="quantityButton"
              onClick={() => handleIncrement("pigfire")}
            >
              +
            </button>
          </div>
        </li>
        <li className="menuItem">
          <h2 className="menuItemTitle">บะหมี่หมูแดง</h2>
          <p className="menuItemDescription">จำนวนแคลทั้งหมด 450 kcal
          </p>
          <p className="menuItemPrice">70 ฿</p>
          <div className="quantityContainer">
            <button
              className="quantityButton"
              onClick={() => handleDecrement("noudlered")}
            >
              -
            </button>
            <span className="quantity">{noudleredQty}</span>
            <button
              className="quantityButton"
              onClick={() => handleIncrement("noudlered")}
            >
              +
            </button>
          </div>
        </li>
        
        
        <li className="menuItem">
          <h2 className="menuItemTitle">บะหมี่หมูกรอบ</h2>
          <p className="menuItemDescription">จำนวนแคลทั้งหมด 500 kcal</p>
          <p className="menuItemPrice">70 ฿</p>
          <div className="quantityContainer">
            <button
              className="quantityButton"
              onClick={() => handleDecrement("noudlefire")}
            >
              -
            </button>
            <span className="quantity">{noudlefireQty}</span>
            <button
              className="quantityButton"
              onClick={() => handleIncrement("noudlefire")}
            >
              +
            </button>
          </div>
        </li>
        <li className="menuItem">
          <h2 className="menuItemTitle">ข้าวมันไก่ต้ม</h2>
          <p className="menuItemDescription">จำนวนแคลทั้งหมด 585 kcal</p>
          <p className="menuItemPrice">60 ฿</p>
          <div className="quantityContainer">
            <button
              className="quantityButton"
              onClick={() => handleDecrement("ricetom")}
            >
              -
            </button>
            <span className="quantity">{ricetomQty}</span>
            <button
              className="quantityButton"
              onClick={() => handleIncrement("ricetom")}
            >
              +
            </button>
          </div>
        </li>
        <li className="menuItem">
          <h2 className="menuItemTitle">ข้าวมันไก่ทอด</h2>
          <p className="menuItemDescription">จำนวนแคลทั้งหมด 695 kcal
          </p>
          <p className="menuItemPrice">60 ฿</p>
          <div className="quantityContainer">
            <button
              className="quantityButton"
              onClick={() => handleDecrement("ricefire")}
            >
              -
            </button>
            <span className="quantity">{ricefireQty}</span>
            <button
              className="quantityButton"
              onClick={() => handleIncrement("ricefire")}
            >
              +
            </button>
          </div>
        </li>

        <li className="menuItem">
            <h2 className="menuItemTitle">ข้าวผัดกระเทียม</h2>
            <p className="menuItemDescription">จำนวนแคลทั้งหมด 400 kcal</p>
            <p className="menuItemPrice">60 ฿</p>
            <div className="quantityContainer">
              <button
                className="quantityButton"
                onClick={() => handleDecrement("ricefire1")}
              >
                -
              </button>
              <span className="quantity">{ricefire1Qty}</span>
              <button
                className="quantityButton"
                onClick={() => handleIncrement("ricefire1")}
              >
                +
              </button>
            </div>
          </li>
          <li className="menuItem">
            <h2 className="menuItemTitle">ข้าวผัดปลาสลิด</h2>
            <p className="menuItemDescription">จำนวนแคลทั้งหมด 540 kcal</p>
            <p className="menuItemPrice">65 ฿</p>
            <div className="quantityContainer">
              <button
                className="quantityButton"
                onClick={() => handleDecrement("ricefire2")}
              >
                -
              </button>
              <span className="quantity">{ricefire2Qty}</span>
              <button
                className="quantityButton"
                onClick={() => handleIncrement("ricefire2")}
              >
                +
              </button>
            </div>
          </li>
          <li className="menuItem">
            <h2 className="menuItemTitle">เห็ดผัดน้ำมันหอย</h2>
            <p className="menuItemDescription">จำนวนแคลทั้งหมด 250 kcal
            </p>
            <p className="menuItemPrice">65 ฿</p>
            <div className="quantityContainer">
              <button
                className="quantityButton"
                onClick={() => handleDecrement("ricefire3")}
              >
                -
              </button>
              <span className="quantity">{ricefire3Qty}</span>
              <button
                className="quantityButton"
                onClick={() => handleIncrement("ricefire3")}
              >
                +
              </button>
            </div>
          </li>
          <li className="menuItem">
            <h2 className="menuItemTitle">กะเพราเต้าหู้ไข่หมูสับ</h2>
            <p className="menuItemDescription">จำนวนแคลทั้งหมด 450 kcal
            </p>
            <p className="menuItemPrice">70 ฿</p>
            <div className="quantityContainer">
              <button
                className="quantityButton"
                onClick={() => handleDecrement("ricefire4")}
              >
                -
              </button>
              <span className="quantity">{ricefire4Qty}</span>
              <button
                className="quantityButton"
                onClick={() => handleIncrement("ricefire4")}
              >
                +
              </button>
            </div>
          </li>
          
          
          <li className="menuItem">
            <h2 className="menuItemTitle">กะหล่ำปลีทอดน้ำปลาหมูกรอบ</h2>
            <p className="menuItemDescription">จำนวนแคลทั้งหมด 320 kcal</p>
            <p className="menuItemPrice">60 ฿</p>
            <div className="quantityContainer">
              <button
                className="quantityButton"
                onClick={() => handleDecrement("ricefire5")}
              >
                -
              </button>
              <span className="quantity">{ricefire5Qty}</span>
              <button
                className="quantityButton"
                onClick={() => handleIncrement("ricefire5")}
              >
                +
              </button>
            </div>
          </li>
          <li className="menuItem">
            <h2 className="menuItemTitle">กุ้งทอดกระเทียม</h2>
            <p className="menuItemDescription">จำนวนแคลทั้งหมด 350 kcal</p>
            <p className="menuItemPrice">60 ฿</p>
            <div className="quantityContainer">
              <button
                className="quantityButton"
                onClick={() => handleDecrement("ricefire6")}
              >
                -
              </button>
              <span className="quantity">{ricefire6Qty}</span>
              <button
                className="quantityButton"
                onClick={() => handleIncrement("ricefire6")}
              >
                +
              </button>
            </div>
          </li>
      </ul>
      <div className="totalContainer">
        <h3 className="description">Total</h3>
        

        <p className="description">
          {noudlefireQty * 70 + ricetomQty * 60 + ricefireQty * 60 + eggfireQty * 50 + noudleredQty * 70 + pigredQty * 70 + pigfireQty * 70
          + ricefire1Qty * 60 + ricefire2Qty * 65 + ricefire3Qty * 65 + ricefire4Qty * 70 + ricefire5Qty * 60 + ricefire6Qty * 60 } ฿          
        </p>
        <p className="description">          
          {noudlefireQty * 500 + ricetomQty * 585 + ricefireQty * 695 + eggfireQty * 400 + noudleredQty * 450 + pigredQty * 540 + pigfireQty * 600
          + ricefire1Qty * 400 + ricefire2Qty * 540 + ricefire3Qty * 250 + ricefire4Qty * 450 + ricefire5Qty * 320 + ricefire6Qty * 350} Kcal
        </p>
      </div>
      
      <Link to = '../PaymentPage'><button className="button">
          Checkout
        </button>
      </Link>

      <Link to = '../BillPage'><button className="button">
          GO to Bill
        </button>
      </Link>

    </div>
  );
};
export default FoodMenu;
