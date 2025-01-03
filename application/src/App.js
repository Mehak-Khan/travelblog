// import React from 'react';
// import Navbar from './Navbar';
// import { Route, Routes } from 'react-router-dom';
// import Blog from './Blog';

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <Routes>
//         <Route path="/Blog" element={<Blog />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Hamburger from './Hamburger';
import Blog from './Blog';
import Barcelona from './more-info/Barcelona';
import ContactForm from './ContactForm';
import ScrollToTop from './ScrollToTop';


function App() {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== '/Blog' && location.pathname !== '/Barcelona' && location.pathname !== '/ContactForm' &&(
        <>
          <Navbar />
        </>
      )}
      <ScrollToTop />
      <Routes>
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Home" element={<Navbar />} />
        <Route path="/Barcelona" element={<Barcelona />} />
        <Route path="/ContactForm" element={<ContactForm />} />
      </Routes>
    </div>
  );
}

export default App;
