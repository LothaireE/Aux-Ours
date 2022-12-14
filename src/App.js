// import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import About from "./pages/About";
import Test from "./pages/Test";
function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Contacts" element={<Contacts />} />
                <Route path="/Test" element={<Test />} />
            </Routes>
            {/* <Footer /> */}
        </Router>
    );
}

export default App;
