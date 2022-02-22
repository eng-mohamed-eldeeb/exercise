import _ from 'lodash';
import './style.css';


console.log("./src/index.js")
function component() {
    const element = document.createElement('div');
 
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
   element.classList.add('hello');

  element.appendChild(myIcon);
    return element;
  }
 
  document.body.appendChild(component());