import React,{useState} from 'react';
import styles from './App.module.scss'
import Main from './Components/MainContainer/Main/Main.js';
import Nav from './Components/Nav/Nav.js';
import Views from './Components/MainContainer/Views/Views.js'

function App() {
  const [tab,setTab]=useState(0)
  return (
    < >
     <Nav tab={tab} setTab={setTab}/>
     <div hidden={tab===0?false:true} className={tab===0?styles['App']:""}>
     <Main/>
     <Views/>
     </div>

    </>
  );
}

export default App;
