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
import ReceiptDetails  from "./component/Receipt/ReceiptDetails";
import SupplierReports from "./component/Reports/SupplierReportFolder/SupplierReports";
import Indivual from "./component/Reports/SupplierReportFolder/Indivual";
import SupplierUpdateDetails from "./component/Supplier/SupplierUpdateDetails";
import DailySupply from "./component/Reports/DailySupplies/DailySupply";
import DailySupplyReport from "./component/Reports/DailySupplies/DailySupplyReport";
import RegistraionReport from "./component/Reports/RegistrationReports/RegistraionReport";
import RegistrationReportDetails from "./component/Reports/RegistrationReports/RegistrationReportDetails";
import SuppliesBySupplier from "./component/Reports/DailySupplies/SuppliesBySupplier";
import LoginPage from "./component/LoginSys";
import Signup from "./component/Signup";



function App() {
  return (
   <React.Fragment>
    <header>
    <Header/>
    </header>
    <main>
      <Routes>
        <Route path="/Home" element={<Home/>} exact></Route>
        <Route path="/add" element={<Addsuppliers/>} exact></Route>
        <Route path="/suppliers" element={<Suppliers/>} exact></Route>
        <Route path="/suppliers/:id" element={<SupplierDetail/>}exact></Route>
        <Route path="/addsupplies" element={<Addsupply/>} exact></Route>
        <Route path="/supplies" element={<Supplies/>} exact></Route>
        <Route path="/supplies/:id" element={<SuppliesDetail/>}exact></Route>
        <Route path="/supplierHome" element={<SupplierHome/>} exact></Route>
        <Route path="/details/:name" element={<UpdateSupplierDetails/>} exact></Route>
        <Route path="/receiptDetails/:id" element={<ReceiptDetails/>}exact></Route>
        <Route path="/supplierReports" element={<SupplierReports/>}exact></Route>
        <Route path="/individual" element={<Indivual/>}exact></Route>
        <Route path="/supplierupdateDetail/:name" element={<SupplierUpdateDetails/>}exact></Route>
        <Route path="/dailysupply" element={<DailySupply/>}exact></Route>
        <Route path="/dailysupplyreport" element={<DailySupplyReport/>}exact></Route>
        <Route path="/regsitrationReport/:date" element={<RegistraionReport/>}></Route>
        <Route path="/registrationReportDetails/:date" element={<RegistrationReportDetails/>}exact></Route>
        <Route path="/suppliesBySupplier" element={<SuppliesBySupplier/>}exact></Route>
        <Route path="/" element={<LoginPage/>}exact></Route>
        <Route path="/signup" element={<Signup/>}exact></Route>

       
        

        
      </Routes>
    </main>
   </React.Fragment>
  
  );
}

export default App;
