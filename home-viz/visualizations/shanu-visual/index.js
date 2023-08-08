import React from 'react';
import Linechart from './linechart';
import Areachart from './AreaChart';
import Piechart from './piechart';
// https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction

export default class ReactVizNerdlet extends React.Component {
   render(){
    return(
      <div> 
        <h1>Line Chart</h1>
<Linechart/>
<h1>Area Chart</h1>
<Areachart/>
<h1>Pie Chart</h1>
<Piechart/>
      </div>    )
   }
    
     }
    // <h1>Hello, reactJst!</h1>;
    
  