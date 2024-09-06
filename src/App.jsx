
import NavBar from "./components/NavBar.jsx";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Patrimoine from "./components/Patrimoine.jsx";
import Possessions from "./components/Possessions.jsx";
import LandingPage from "./components/LandingPage.jsx";
function App() {
    return(
        <>
            <BrowserRouter>
                <NavBar/>
                <LandingPage/>
                <Routes>
                    <Route path="/patrimoine" element={<Patrimoine/>}/>
                    <Route path="/possession" element={<Possessions/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App
