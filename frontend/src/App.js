import React from "react";
import {Provider} from "react-redux";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/login/login";
import store from "./store"
import Home from "./components/home/home";
import Index from "./components/index/index";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'


const App = () => (
    <Provider store={store}>
        <Router>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Index />} />
            </Routes>
        </Router>
        <ToastContainer autoClose={2000}  />
    </Provider>
)

export default App;