import React from "react";
import { Header } from "./component/Headers";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Addsuppliers from './component/Addsuppliers';
import Suppliers from './component/Supplier/Suppliers';
import Addsupply from "./component/Addsupply";
import SupplierDetail from "./component/Supplier/SupplierDetail";
import Supplies from './component/Supplies/Supplies';
import SuppliesDetail from "./component/Supplies/SuppliesDetail";
import SupplierHome from "./component/SupplierHome";
import UpdateSupplierDetails from "./component/Update/UpdateSupplierDetails";
import SupplierUpdate from "./component/SupplierUpdate";
import SupplierReceipt from "./component/SupplierReceipt";
import ReceiptDetails  from "./component/Receipt/ReceiptDetails";
function App() {
  return (
   <React.Fragment>
    <header>
    <Header/>
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Home/>} exact></Route>
        <Route path="/add" element={<Addsuppliers/>} exact></Route>
        <Route path="/suppliers" element={<Suppliers/>} exact></Route>
        <Route path="/suppliers/:id" element={<SupplierDetail/>}exact></Route>
        <Route path="/addsupplies" element={<Addsupply/>} exact></Route>
        <Route path="/supplies" element={<Supplies/>} exact></Route>
        <Route path="/supplies/:id" element={<SuppliesDetail/>}exact></Route>
        <Route path="/supplierHome" element={<SupplierHome/>} exact></Route>
        <Route path="/details/:id" element={<UpdateSupplierDetails/>} exact></Route>
        <Route path="/supplierUpdate" element={<SupplierUpdate/>} exact></Route>
        <Route path="/supplierReceipt" element={<SupplierReceipt/>}exact></Route>
        <Route path="/receiptDetails/:id" element={<ReceiptDetails/>}exact></Route>

      </Routes>
    </main>
   </React.Fragment>
  
  );
}

export default App;
