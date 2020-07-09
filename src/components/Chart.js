import React from 'react';
import {Radar} from 'react-chartjs-2';

const data = {
  labels: ['Confirmed', 'Deaths', 'Recovered', 'Active', 'New Cases', 'New Deaths', 'New Recovered'],
  datasets: [
    {
      label: 'Confirmed Cases',
      backgroundColor: 'rgba(179,181,198,0.2)',
      borderColor: 'rgba(179,181,198,1)',
      pointBackgroundColor: 'rgba(179,181,198,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(179,181,198,1)',
      data: [116540,123333]
    },
    {
      label: 'Deaths',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      pointBackgroundColor: 'rgba(255,99,132,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,99,132,1)',
      data: [45555,1111,233322]
    }
  ]
};

function Chart(){
    return (
      <div>
        {/* <h2>Radar Example</h2> */}
        <Radar data={data} />
      </div>
    );
    }
    export default Chart;