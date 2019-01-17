import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Multiply from '../src/Component/Question/Multiply';
import './App.css';





class App extends React.Component {
constructor(){
    super()
}
   render(){
       return( 
           <div>
           <Multiply />
       </div>
       )
    }
}
export default App;
