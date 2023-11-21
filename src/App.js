// import logo from './logo.svg';
import './Appa.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

// let name = "Bharti"
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React Bharti
    //     </a>
    //   </header>
    // </div>

    // <div className="blank">
    // </div>

    // <>
    //   <nav>
    //     <li>Home</li>
    //     <li>About</li>
    //     <li>Contact</li>
    //   </nav>
    //   <img src="" alt="" />
    //   <div className="container">
    //     <h1>Hello {name}</h1>
    //     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam, totam! Provident, aut sequi odio laborum minima, incidunt assumenda maxime unde nemo non, dolore atque harum cupiditate illum ipsa labore maiores.</p>
    //   </div>
    // </>

    <>
    {/* <Navbar/> for default value check of navbar */}
    <Navbar title="TextUtils" aboutText="About" />
    <div className="container">
      <TextForm heading="Enter the text to analyze below"/>
      {/* <About/> */}
    </div>
    </>
  );
}

export default App;
