import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import IndexPage from "./pages/index.jsx";
import {Router} from "@reach/router";
import NotFoundPage from "./pages/404.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <IndexPage exact path="/"/>
            <NotFoundPage default/>
        </Router>
    </React.StrictMode>
)