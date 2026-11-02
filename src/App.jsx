
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// Components
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Advertisement from "./components/Advertisement.jsx";
import Services from "./components/Services.jsx";
import WhySDFL from "./components/WhySDFL.jsx";
import Feedback from "./components/Feedback.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

// Main Pages
import Gallery from "./pages/Gallery/Gallery.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import About from "./pages/About/About.jsx";
import WhatWeOffer from "./pages/WhatWeOffer/WhatWeOffer.jsx";

//WhatWeOffer
import TrainingDetails from "./pages/courses/TrainingDetails.jsx";
import TrainingProgrammes from "./pages/courses/TrainingProgrammes.jsx";

//ANNUAL REPORTS
import ServicesPortal from "./pages/Services/ServicesPortal.jsx";

// ANNUAL REPORTS
import AnnualReports from "./pages/AnnualReports/AnnualReports.jsx";

// SDFL Team Pages
import SDFLTeam from "./pages/SDFLTeam/SDFLTeam.jsx";
import BoardMembers from "./pages/SDFLTeam/BoardMembers.jsx";
import BoardProfile from "./pages/SDFLTeam/BoardProfile.jsx";
import Staff from "./pages/SDFLTeam/Staff.jsx";
import ResourcePool from "./pages/SDFLTeam/ResourcePool.jsx";

// Styles
import "./App.css";
import "./HomeSpacing.css";

// ==========================================
// HOME PAGE
// ==========================================

function Home() {
  return (
    <main>
      <Hero />
      <Advertisement />
      <Services />
      <WhySDFL />
      <Feedback />
    </main>
  );
}

// ==========================================
// MAIN APPLICATION
// ==========================================

function App() {
  return (
    <BrowserRouter>

      {/* Main Navigation */}
      <Navbar />

      {/* Website Routes */}
      <Routes>

        {/* Home */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* About */}
        <Route
          path="/about"
          element={<About />}
        />

        {/* ANNUAL REPORTS PAGE */}
          <Route
                path="/annual-reports"
                element={<AnnualReports />}
              />

        {/* Gallery */}
        <Route
          path="/gallery"
          element={<Gallery />}
        />

        {/* Contact */}
        <Route
          path="/contact"
          element={<Contact />}
        />

        {/* What We Offer */}
        <Route
          path="/what-we-offer"
          element={<WhatWeOffer />}
        />

        <Route 
          path="/courses" 
          element={<TrainingProgrammes />} />

        <Route 
          path="/courses/:id" 
          element={<TrainingDetails />} />
        
        {/* Main Services Listing */}
        
        <Route
          path="/services"
          element={<ServicesPortal />}
          />
        
      {/* Individual Service Details */}
        
        <Route
          path="/services/:serviceId"
          element={<ServicesPortal />}
          />

        {/* ==================================
            SDFL TEAM SECTION
        ================================== */}

        <Route
          path="/sdfl-team"
          element={<SDFLTeam />}
        >

          {/* Board Members Listing */}
          <Route
            index
            element={<BoardMembers />}
          />

          {/* Individual Board Member Profile */}
          <Route
            path="board/:id"
            element={<BoardProfile />}
          />

          {/* Staff Listing */}
          <Route
            path="staff"
            element={<Staff />}
          />

          {/* Resource Person Pool */}
          <Route
            path="resource-pool"
            element={<ResourcePool />}
          />

        </Route>

      </Routes>

      {/* Website Footer */}
      <Footer />

    </BrowserRouter>
  );
}

export default App;
