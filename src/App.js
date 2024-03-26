import "./App.css"
import './style/landingpage.css'
import NavigationBar from "./components/NavigationBar"
import Intro from "./components/Intro"
import Category from "./components/Category"
import Footer from "./components/Footer"

function App() {
    return (
      <div className="poppins">
        <div className="myBG">
          <NavigationBar />
          <Intro />
        </div>
        <div>
            <h5 className="mySubMenu" style={{marginTop:'20.8vh'}}><b>Updated News</b></h5>
            <Category/>
            <h5 className="myAbout" >Tentang IBOS</h5>
        </div>
        <div className="customSpacing"></div>
        <div className="myFooter">
          <Footer></Footer>
        </div>
      </div>
      
    );
  }
  
export default App