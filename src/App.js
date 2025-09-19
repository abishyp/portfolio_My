import { useEffect } from 'react';
import './App.css';
import Pages from './PAGES/Pages';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function App() {
  useEffect(()=>{
     AOS.init({
      duration: 1000, 
      once: true, 
      offset: 100, 
    });
  },[])
  return (
    <>
   
    <Pages />

    </>
  );
}

export default App;
