import React from "react";
import {Route, Routes} from "react-router-dom";
import SecureLayout from "./Components/SecureLayout";
import Auth from "./Components/Auth";
import Registor from "./Components/Registor";
import Movies from "./Components/Movies";

import Serials from "./Components/Serials";


const App = () => {
    return (
        <div>
            <Routes>

                <Route path="/" element={<Auth/>}/>
                <Route path="/registor" element={<Registor/>}/>

            </Routes>

            <Routes>


                <Route path="/secure" element={<SecureLayout/>}>
                    <Route path="movies" element={<Movies/>}/>
                    <Route path="serials" element={<Serials/>}/>
                </Route>
            </Routes>
        </div>
    )
};
export default App;