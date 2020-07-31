import React from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand , Button} from 'reactstrap';
import './App.css';

function App() {
  return (
    <div className="App">
     <Navbar dark color="primary" fixed ="top">
       <div className="container">
          <NavbarBrand href="/" color="red"> Ristorante Con Fusion</NavbarBrand>
          <Button variant="secondary">ASD</Button>
         </div>
    </Navbar>
    </div>
  );
}

export default App;
