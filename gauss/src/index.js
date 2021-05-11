// import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
import functionPlot from 'function-plot';
let contentsBounds = document.body.getBoundingClientRect();
let width = 800;
let height = 500;
let ratio = contentsBounds.width / width;
width *= ratio;
height *= ratio;
functionPlot({
    target: '#root',
    width,
    height,
    yAxis: { domain: [-1, 9] },
    grid: true,
    data: [
        {
            fn: 'x',
        },
    ],
});
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
