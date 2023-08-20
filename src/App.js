import React from 'react';
import { useEffect,useState} from 'react';

//importing components
import Hero from './components/Hero'
import Header from './components/Header'
import NavMobile from './components/NavMobile'
import Stats from './components/Stats'
import Why from './components/Why'
import Calculate from './components/Calculate'
import Trade from './components/Trade'
import Features from './components/Features'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

//import AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

//import ParticleBg
// import ParticleBg from './components/ParticlesBg';

const App = () => {
  //mobile nav
  const [navMobile,setnavMobile]=useState(false);
  //aos init
  useEffect(()=>{
    AOS.init({
      duration:2500,
      delay:400,
    });
  });
  return (
  <div className='overflow-hidden'>
       
       <Header setnavMobile={setnavMobile}/>
       <Hero/>
       <div className={`${navMobile?'right-0':'-right-full'} fixed z-10 top-0 h-full transition-all duration-200`}>
        <NavMobile setnavMobile={setnavMobile}/>
       </div>
       <Stats/>
       <Why/>
       <Calculate/>
       <Trade/>
       <Features/>
       <Newsletter/>
       <Footer/>
       
       
  </div>
  );
};

export default App;
