import logo from './logo.svg';
import './Homepage.css';
import { useQuery } from 'react-query';

function Homepage() {

  useQuery('hello-world', () => {
     return Promise.resolve(5)   
  })

  return (
    <div className="dark">
    <div className="bg-white dark:bg-[#282c34] text-center">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo"/>
        <p className="text-gray-300"> 
          Edit <code>src/AppComponents/Homepage.js</code> and save to reload.
        </p>
        <a
          className="Home-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn
        </a>
      </header>
    </div>
    </div>
  );
}

export default Homepage;
