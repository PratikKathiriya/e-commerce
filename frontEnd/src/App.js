import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogdetailpage from './components/Blogdetailspage';
import Blogpage from './components/Blogpage';
import Contactuspage from './components/Contactuspage';
import Aboutpage from './components/Aboutpage';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Prisingandplan from './components/Prising&plan';
import Professional from './components/Professionalpage';
import Projectdetail from './components/Projectdetail';
import Projectpage from './components/Projectpage';
import Teamsinglepage from './components/Teamsiglepage';
import Faqspage from './components/faqspage';
import Homepage from './components/Homepage';
import Servicespage from './components/Servicespage';
import Servicessingle from './components/Servicessinglepage';
import Fourzerofour from './components/404page';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} ></Route>
        <Route path="/About" element={<Aboutpage />} ></Route>
        <Route path="/Services">
          < Route index element={<Servicespage />} />
          <Route path='Servicessingle' element={<Servicessingle />}></Route>
        </Route>
        <Route path='/Servicessingle' element={<Servicessingle />}></Route>
        < Route path="/Blog">
          < Route index element={<Blogpage />} />
          <Route path='blogdetail' element={<Blogdetailpage />}></Route>
        </Route>
        < Route path="/Contactus" element={<Contactuspage />} ></Route>
        < Route path="/Plans" element={<Prisingandplan />} ></Route>
        < Route path='/project' >
          < Route index element={<Projectpage />} />
          <Route path='projectdetail' element={<Projectdetail />}></Route>
        </Route>
        < Route path='/faq' element={<Faqspage />}></Route>
        < Route path="/Professional">
          < Route index element={<Professional />} />
          <Route path=':uniqueId' element={<Teamsinglepage />}></Route>
        </Route>
        <Route path='/error' element={<Fourzerofour />}></Route>

      </Routes>


      <Footer />
    </>
  );
}

export default App;
