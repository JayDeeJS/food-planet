import React from "react";
import {Routes, Route} from "react-router-dom";
import Main from "./components/main/main";
import Nav from "./components/nav/nav";

function App() {
    return (
        <>
            <Nav/> <br/>
            <Routes>
                <Route path="/" element={<Main/>}/>
            </Routes>
        </>
    )
}

export default App;
