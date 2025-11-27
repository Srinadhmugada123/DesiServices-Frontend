import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation.jsx";
import HomePage from "./components/HomePage.jsx";
import { ServicesPage } from "./components/ServicePage.jsx";
import ServiceDetailPage  from "./components/ServiceDetailPage.jsx";
// import { BookingPage } from "./components/BookingPage.";
import {MyOrdersPage}  from "./components/MyOrdersPage";
import { BookingPage } from "./components/BookingPage.jsx";
import ScrollToTop from "./components/ScrollToTop";


export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <ScrollToTop behavior="auto" />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/service/:id" element={<ServiceDetailPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/orders" element={<MyOrdersPage />} /> 
          <Route path="*" element={<HomePage />} /> {/* Always Last */}
        </Routes>
      </div>
    </Router>
  );
}
