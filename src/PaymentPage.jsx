//PaymentPage.jsx
import React from 'react';
import './PaymentPage.css';
import {Link} from 'react-router-dom'

const PaymentPage = () => {
return (
<div className="payment-page-container">
<h1 className="title">Payment</h1>
<h2 className="title2">Scan QR Code</h2>
<div className="qrcode-container">
<img
       src="https://qrcode.in.th/wp-content/themes/QR-THEME/page-templates/assets/img/qr-code.svg" 
       alt="QR Code"
       className="qrcode-image"
     />
</div>
{/* <p><button className="button">Home</button></p> */}
<Link to = '/'><button className="button">
  Comfirm
        </button>
</Link>
</div>
);
};

export default PaymentPage;