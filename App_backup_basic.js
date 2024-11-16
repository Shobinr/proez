import React from 'react';
import ReactDOM from 'react-dom/client';
// React.createElement = > Creates an Object

// when we render to the dom then it becomes html

const heading = React.createElement('div', { id: 'heading' }, 'FoodApp');

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);
