import React from "react";
import {Routes, Route} from "react-router-dom";
import Main from "./components/main/main";
import Nav from "./components/nav/nav";
import Footer from "./components/footer/footer";

function App() {
    return (
        <>
            <Nav/> <br/>
            <Routes>
                <Route path="/" element={<Main/>}/>
            </Routes>
            <Footer/>
        </>
    )
}

export default App;
