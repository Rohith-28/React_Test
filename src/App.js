import logo from './logo.svg';
import { useState } from 'react'

import './App.css';
import Main from './component/Main'
function App() {
  const [modal, setmodal] = useState(false)
  return (
    <>
        <div className='savebutton' style={{display:modal&&"none"}}>
         <button onClick={(e)=>setmodal(true)}>Save segment</button>
     </div>
   {modal&& <Main modal={modal} setmodal={setmodal} />  }  
    </>
  );
}

export default App;
