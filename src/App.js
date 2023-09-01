import "./style/styling.css"
import NavigationBar from "./components/NavigationBar.js"
import IntroOne from "./components/Intro";
import Characters from "./components/Character";
import Details from "./components/Details";

function App() {
  return (
    <div>
      <div className="pageOne">
        <NavigationBar />
        <IntroOne />
      </div>

      <div className="pageTwo">
        <Characters />
      </div>

      <div className="pageThree">
        <Details />
      </div>

    </div>


  );
}

export default App;
