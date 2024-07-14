import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import IndexPage from "./pages/index.jsx";
import {Router} from "@reach/router";
import NotFoundPage from "./pages/404.jsx";
import PrivacyPolicy from "./pages/privacy-policy.jsx";
import Imprint from "./pages/imprint.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <IndexPage path="/"/>
            <PrivacyPolicy path="/privacy-policy"/>
            <Imprint path="/imprint"/>
            <NotFoundPage default/>
        </Router>
    </React.StrictMode>
)