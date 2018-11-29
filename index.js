
import './src/style.css';

  function component() {
    var element = document.getElementById('hello');

    // Lodash, now imported by this script
    element.innerHTML = 'GOPAL'
    element.classList.add('hello');


    return element;
  }

  component();