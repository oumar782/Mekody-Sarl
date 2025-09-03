
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Page/Home.jsx";
import About from "./Page/About.jsx";
import Service from "./Page/service.jsx";
import Formation from "./Page/Formation.jsx";
import Tourism from "./Page/Tourism.jsx";
import Colonie from "./Page/Colonie.jsx";
import Dev from "./Page/Developpement.jsx";
import Contact from "./Page/Contact.jsx";



const App = () => (

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/A-propos" element={<About  />} />
          <Route path="/Nos-services" element={<Service  />} />
          <Route path="/Nos-formations" element={<Formation  />} />
          <Route path="/Tourisme-medical" element={<Tourism  />} />
          <Route path="/Colonie-de-vacance" element={<Colonie  />} />
          <Route path="/Developpement-informatique" element={<Dev  />} />
          <Route path="/contact" element={<Contact  />} />
         
        </Routes>
      </BrowserRouter>
    
);

export default App;
