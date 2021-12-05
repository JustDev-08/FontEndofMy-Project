import './App.css';
import * as React from 'react'
 
// import Page..
import Check from './component/Check';
import Form from './component/Form';
import Home from './component/Home';
import { Route  , Routes} from 'react-router';

function App() {
  return (
    <React.Fragment>
    <div>
         <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/form" element={<Form/>}/>
           <Route path="/check" element={<Check/>}/>
         </Routes>
    </div>
    </React.Fragment>
  );
}

export default App
