/* eslint-disable jsx-a11y/anchor-is-valid */
import "./css/styles.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {useSelector} from "react-redux";
import {Navigate, Link} from "react-router-dom";
import {Dropdown} from "react-bootstrap";
import styled from "styled-components";

const LinkWrapper = styled(Link)`
    text-decoration: none;
    color: #636464;
    :hover {
        color: #636464;
    }
`

const Courses = () => {

    const user = useSelector(state => state.login.user);
    if (user) {
        return (
            <div>
                <div className="d-flex" id="wrapper">
                    <div className="border-end bg-white" id="sidebar-wrapper">
                        <div className="list-group list-group-flush">
                            <a className="list-group-item list-group-item-action list-group-item-light p-3" style={{background: "#0b5ed7", color: "white"}}
                               href="#!"><b>EduPro Platform</b></a>
                            <a className="list-group-item list-group-item-action list-group-item-light p-3">
                                <LinkWrapper to="/dashboard">Dashboard</LinkWrapper>
                            </a>
                            <a className="list-group-item list-group-item-action list-group-item-light p-3">
                                <b style={{color: "black"}}>My Courses</b>
                            </a>
                            <a className="list-group-item list-group-item-action list-group-item-light p-3">
                                <LinkWrapper to="/desks">My Cards</LinkWrapper>
                            </a>
                        </div>
                    </div>
                    <div id="page-content-wrapper">
                        <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom" style={{height: "57.5px"}}>
                            <div className="container-fluid">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                        aria-expanded="false" aria-label="Toggle navigation"><span
                                    className="navbar-toggler-icon"></span></button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                                        <li className="nav-item">
                                            <Dropdown>
                                              <Dropdown.Toggle id="dropdown-basic-button">
                                                Settings
                                              </Dropdown.Toggle>

                                              <Dropdown.Menu>
                                                <Dropdown.Item><LinkWrapper to="/account">Account Set Up</LinkWrapper></Dropdown.Item>
                                                <Dropdown.Item><LinkWrapper to="/">Feedback</LinkWrapper></Dropdown.Item>
                                                <Dropdown.Item href="/" style={{color: "#636464"}}>Logout</Dropdown.Item>
                                              </Dropdown.Menu>
                                            </Dropdown>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                        <div className="container-fluid">
                           Courses
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else {
        setTimeout(() => {}, 1000);
        return <Navigate to='/login' />
    }
}


export default Courses;