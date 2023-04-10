import React from 'react';
import HomePage from './HomePage';
import FoodMenu from './FoodMenu';
import PaymentPage from './PaymentPage';
import ThankYouPage from './ThankYouPage';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const App = () => {
return (
<div>


<Router>
        <Routes>
          <Route path='/'            element={<HomePage />} />
          <Route path='/FoodMenu'    element={<FoodMenu />} />
          <Route path='/PaymentPage' element={<PaymentPage />} />
          <Route path='/ThankYouPage'    element={<ThankYouPage />} />
        
        </Routes>
</Router>
</div>
);
};

export default App