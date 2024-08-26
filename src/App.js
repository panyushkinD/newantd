import React from "react";
import {Route, Routes} from "react-router-dom";
import SecureLayout from "./Components/SecureLayout";
import Auth from "./Components/Auth";
import Registor from "./Components/Registor";
import Main from "./Components/Main";
import Header from "./Components/Header";
import Footer from "./Components/Footer";


const App = () => {
    return (
        <div>
            <Routes>

                <Route path="/" element={<Auth/>}/>
                <Route path="/registor" element={<Registor/>}/>

            </Routes>

            <Routes>


                <Route path="/secure" element={<SecureLayout/>}>
                    <Route path="main" element={<Main/>}/>
                </Route>
            </Routes>
        </div>
    )
};
export default App;