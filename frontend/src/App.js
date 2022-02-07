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
import Account from "./components/account/account";
import Desks from "./components/desks/desks";
import Courses from "./components/courses/courses";
import Cards from "./components/cards/cards";
import DesksCreate from "./components/desks/desks_create"
import DesksEdit from "./components/desks/desks_edit";
import CardsAdd from "./components/cards/cards_add";
import CoursePage from "./components/courses/course_page";
import Favourites from "./components/home/favourites";
import Feedback from "./components/account/feedback";


const App = () => (
    <Provider store={store}>
        <Router>
            <Routes>
                <Route path="/dashboard" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/account" element={<Account />} />
                <Route exact path="/desks" element={<Desks />} />
                <Route exact path="/courses" element={<Courses />} />
                <Route path="/courses/:course_id" element={<CoursePage />} />
                <Route path="/desks/:desk_id" element={<Cards />} />
                <Route path="/desks/edit/:desk_id" element={<DesksEdit />} />
                <Route path="/desks/add/card/:desk_id/" element={<CardsAdd />} />
                <Route path="/desks/create" element={<DesksCreate />} />
                <Route path="/favourites" element={<Favourites />} />
                <Route path="/feedback" element={<Feedback />} />
                <Route path="/" element={<Index />} />
            </Routes>
        </Router>
        <ToastContainer autoClose={3500}  closeButton={false} position="bottom-right"/>
    </Provider>
)

export default App;