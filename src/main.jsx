import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import NotFoundPage from "./pages/404.jsx";
import PrivacyPolicy from "./pages/privacy-policy.jsx";
import Imprint from "./pages/imprint.jsx";
import {HashRouter, Route, Routes} from "react-router-dom";
import IndexPage from "./pages/index.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode>
    <HashRouter basename={"/"}>
        <Routes>
            <Route exact path="/" element={<IndexPage/>}/>
            <Route exact path="/privacy-policy" element={<PrivacyPolicy/>}/>
            <Route exact path="/imprint" element={<Imprint/>}/>
            <Route element={<NotFoundPage/>}/>
        </Routes>
    </HashRouter>
</React.StrictMode>)