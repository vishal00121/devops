import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserManagement from './component/UserManagement';
import Layout from './component/Layout';
import PaymentsBilling from './component/PaymentsBilling';
import Homeview from './component/Home/Homeview';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Sidebar layout */}
        <Route path="/" element={<Layout />}>
          {/* Nested route */}
          <Route path="UserManagement" element={<UserManagement />} />
          <Route path="PaymentsBilling" element={<PaymentsBilling />} />
          <Route path = "Home" element = {<Homeview/>}/>
          <Route path = "" element = {<Homeview/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
