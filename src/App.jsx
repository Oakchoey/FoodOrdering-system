import React from 'react';
import HomePage from './HomePage';
import FoodMenu from './FoodMenu';
import PaymentPage from './PaymentPage';
import BillPage from './BillPage';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const App = () => {
return (
<div>


<Router>
        <Routes>
          <Route path='/'            element={<HomePage />} />
          <Route path='/FoodMenu'    element={<FoodMenu />} />
          <Route path='/PaymentPage' element={<PaymentPage />} />
          <Route path='/BillPage'    element={<BillPage />} />
        
        </Routes>
</Router>
</div>
);
};

export default App