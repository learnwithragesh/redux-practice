import React, { Component } from 'react';

import Display from './display';
import Increment from './increment';
import Decrement from './decrement';
import Reset from './reset';

class Counter extends Component {
   render() {
      return (
         <div className = "App">
            <Display />
            <Increment />
            <Decrement />
            <Reset />
         </div>
      );
   }
}
export default Counter;