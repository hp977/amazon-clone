import React from 'react';
import './App.css';
import Header from './Header';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<><Header /> <h1>Homepage</h1> </>} />
            <Route path='/checkout' element={<><Header /><h1>checkout</h1></>}>
            </Route>
          <Route path='/login' element={<h1>login</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
