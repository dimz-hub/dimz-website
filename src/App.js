import Header from "./component/Header";
import Main from "./component/Main";
import Footer from "./component/Footer";
import React, { useState } from 'react';
function App() {

  const [clicked, setClicked] = useState(false);
        
          const handleClick = () => {
            setClicked(!clicked);
          };

  return (
    <div className={`flex flex-col  ${clicked? 'bg-[#000000]'  : 'bg-[white] text-[black]'}`}>
      <Header  clicked = {clicked} setClicked = {setClicked} handleClick = {handleClick}/>
      <Main  />
      <Footer />
  
    </div>
  );
}

export default App;
