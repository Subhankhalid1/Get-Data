
import React from 'react';

import './App.css'

//import components
import Header from './components/Header';
import MainGrid from './components/MainGrid';
import Slider from './components/protection';
import Footer from './components/Footer';
// import Slider from './Slider'

function App() {


  return (
    <div >

      <Header />
      <br/> <br/>
      <div className="app">
      <Slider />
      </div>
      <br/> <br/>
      <div>

        <MainGrid />
      </div>
<Footer/>
    </div>
  );
}
export default App;