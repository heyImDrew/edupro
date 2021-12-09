/* eslint-disable jsx-a11y/anchor-is-valid */
import "./css/styles.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect, useDispatch, useSelector} from "react-redux";
import {Navigate, Link} from "react-router-dom";
import {Dropdown} from "react-bootstrap";
import styled from "styled-components";
import {load_desks} from "../../actions/desks";
import {useEffect} from "react";

const LinkWrapper = styled(Link)`
    text-decoration: none;
    color: #636464;
    :hover {
        color: #636464;
    }
`

const LinkWrapperButton = styled(Link)`
    text-decoration: none;
    color: white;
    :hover{
        color: white;
    };
    font-size: 15px;
`

const LinkWrapperButtonCreate = styled(Link)`
    text-decoration: none;
    color: white;
    :hover{
        color: white;
    };
    font-size: 24px;
`


const DesksCreate = () => {

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
                                <LinkWrapper to="/courses">My Courses</LinkWrapper>
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
                        <div className="container-fluid" style={{paddingLeft: "75px", paddingRight: "75px", paddingTop: "25px"}}>

                            <form>
                                <h2 style={{marginBottom: "20px"}}>Desk Information Input</h2>
                                <div className="form-group" style={{marginBottom: "10px"}}>
                                    <label htmlFor="desk_h">Header</label>
                                    <input type="text" className="form-control" id="desk_h" name="desk_h"
                                           placeholder="Enter Desk Header"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="desk_d">Description</label>
                                    <input type="text" className="form-control" id="desk_d" name="desk_d"
                                           placeholder="Enter Desk Description"/>
                                </div>
                                <h2 style={{marginBottom: "30px", marginTop: "50px"}}>Cards Information Input</h2>

                                <h4 style={{marginBottom: "10px"}}>- Card №1</h4>
                                <div className="form-group" style={{marginBottom: "5px"}}>
                                    <label htmlFor="card_1_q">Question</label>
                                    <input type="text" className="form-control" id="card_1_q" name="card_1_q"
                                           placeholder="Enter Card Question"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="card_1_a">Answer</label>
                                    <input type="text" className="form-control" id="card_1_a" name="card_1_a"
                                           placeholder="Enter Card Answer"/>
                                </div>


                                <h4 style={{marginBottom: "10px", marginTop: "30px"}}>- Card №2</h4>
                                <div className="form-group" style={{marginBottom: "5px"}}>
                                    <label htmlFor="card_2_q">Question</label>
                                    <input type="text" className="form-control" id="card_2_q" name="card_2_q"
                                           placeholder="Enter Card Question"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="card_2_a">Answer</label>
                                    <input type="text" className="form-control" id="card_2_a" name="card_2_a"
                                           placeholder="Enter Card Answer"/>
                                </div>

                                <h4 style={{marginBottom: "10px", marginTop: "30px"}}>- Card №3</h4>
                                <div className="form-group" style={{marginBottom: "5px"}}>
                                    <label htmlFor="card_3_q">Question</label>
                                    <input type="text" className="form-control" id="card_3_q" name="card_3_q"
                                           placeholder="Enter Card Question"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="card_3_a">Answer</label>
                                    <input type="text" className="form-control" id="card_3_a" name="card_3_a"
                                           placeholder="Enter Card Answer"/>
                                </div>

                                <h4 style={{marginBottom: "10px", marginTop: "30px"}}>- Card №4</h4>
                                <div className="form-group" style={{marginBottom: "5px"}}>
                                    <label htmlFor="card_4_q">Question</label>
                                    <input type="text" className="form-control" id="card_4_q" name="card_4_q"
                                           placeholder="Enter Card Question"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="card_4_a">Answer</label>
                                    <input type="text" className="form-control" id="card_4_a" name="card_4_a"
                                           placeholder="Enter Card Answer"/>
                                </div>

                                <h4 style={{marginBottom: "10px", marginTop: "30px"}}>- Card №5</h4>
                                <div className="form-group" style={{marginBottom: "5px"}}>
                                    <label htmlFor="card_5_q">Question</label>
                                    <input type="text" className="form-control" id="card_5_q" name="card_5_q"
                                           placeholder="Enter Card Question"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="card_5_a">Answer</label>
                                    <input type="text" className="form-control" id="card_5_a" name="card_5_a"
                                           placeholder="Enter Card Answer"/>
                                </div>

                                <button type="submit" className="btn-lg btn-primary" style={{width: "100%", marginTop: "30px", marginBottom: "50px"}}>Submit</button>
                            </form>

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

export default DesksCreate;