import './App.css';
import logo from "./images/ironhack-logo-xs.png"
import menu from "./images/menu-top-xs.png"
import rLogo from "./logo.svg"
import icon1 from "./images/icon1.png"
import icon2 from "./images/icon2.png"
import icon3 from "./images/icon3.png"
import icon4 from "./images/icon4.png"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='navBar'>
          <img src={logo} className="" alt="logo" />
          <img src={menu} alt="menu" />
        </div>

        <div className='content'>
        <h1>
          Say hello to ReactJS
        </h1>
        <p>You will learn how to use the most popular frontend library, and become a super nija developer</p>

        <button className='btn'>Awesome!</button>
        </div>
        <img src={rLogo} className="rLogo1"/>
        <img src={rLogo} className="rLogo2"/>
        <img src={rLogo} className="rLogo3"/>

      </header>

        <div className='cards'>

        <div >
        <img src={icon1} className="" alt="logo" />
        <h3>Declarative</h3>
        <p>React makes it painless to create interactives UIs.</p>
        </div>

        <div >
        <img src={icon2} className="" alt="logo" />
        <h3>Componets</h3>
        <p>Buils encapsulated components that manage their state.</p>
        </div>

        <div >
        <img src={icon3} className="" alt="logo" />
        <h3>Single way</h3>
        <p>A set of inutables values are passed to the component's.</p>
        </div>

        <div >
        <img src={icon4} className="" alt="logo" />
        <h3>JSX</h3>
        <p>Statically-type, designed to run on moderns browsers.</p>
        </div>

        </div>






    </div>
  );
}

export default App;
