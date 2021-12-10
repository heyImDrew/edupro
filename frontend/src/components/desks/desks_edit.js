/* eslint-disable jsx-a11y/anchor-is-valid */
import "./css/styles.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect, useDispatch, useSelector} from "react-redux";
import {Navigate, Link} from "react-router-dom";
import {Dropdown} from "react-bootstrap";
import styled from "styled-components";
import {useEffect, useState} from "react";
import {load_desks} from "../../actions/desks";
import axios from "axios";

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
    font-size: 18px;
`


const DesksEdit = () => {

    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(load_desks());
        }, [])

    const user = useSelector(state => state.login.user);
    const data = useSelector(state => state.desks.desks);

    const get_desk = () => {
        let search = window.location.pathname;
        let match = search.match(/\/desks\/edit\/(.*)/);
        let desk_id = match?.[1];
        for (let i=0; i < data.length; i++) {
            if (data[i].desk_id === desk_id) {
                return data[i];
            }
        }
        return null;
    }

    let desk = get_desk();
    let cards = get_desk().cards;

    const OnRemoveClick = card_id => {
        let data = {card_id: card_id}
        let config = { headers: {
                    'Content-Type': "application/json",
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }}
        axios.post("http://localhost:9000/api/cards/remove/", JSON.stringify(data), config)
        dispatch(load_desks());
    }

    console.log(get_desk())

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
                        <div className="container-fluid" style={{paddingLeft: "75px", paddingRight: "75px", paddingTop: "10px"}}>

                            <form>
                                <h2 style={{marginBottom: "5px"}}>Desk Information Edit</h2>
                                <div className="form-group" style={{marginBottom: "5px"}}>
                                    <label htmlFor="desk_h">Header</label>
                                    <input type="text" className="form-control" id="desk_h" name="desk_h" value={desk.name}
                                           placeholder="Enter Desk Header" disabled="true" required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="desk_d">Description</label>
                                    <input type="text" className="form-control" id="desk_d" name="desk_d" value={desk.description}
                                           placeholder="Enter Desk Description" disabled="true" required/>
                                </div>
                                <h2 style={{marginTop: "20px"}}>Cards Information Edit</h2>

                                {cards.map((item, index) =>{
                                    return (
                                        <div>
                                            <h4 style={{marginBottom: "10px", marginTop: "15px"}}>- Card №{index + 1}
                                                <a className="btn btn-secondary btn-sm px-4 me-sm-3" onClick={(e) => OnRemoveClick(item.card_id)} style={{marginLeft: "20px"}}>Remove</a>
                                            </h4>

                                            <div className="form-group" style={{marginBottom: "5px"}}>
                                                <label htmlFor="card_1_q">Question</label>
                                                <input type="text" className="form-control" id="card_1_q" name="card_1_q" value={item.question}
                                                       placeholder="Enter Card Question" required/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="card_1_a">Answer</label>
                                                <input type="text" className="form-control" id="card_1_a" name="card_1_a" value={item.answer}
                                                       placeholder="Enter Card Answer" required/>
                                            </div>
                                        </div>
                                    )
                                })}
                                <button className="btn-lg btn-secondary" style={{width: "100%", marginTop: "30px", marginBottom: "5px"}}><LinkWrapperButtonCreate to={`/desks/add/card/${desk.desk_id}`}>Add Card</LinkWrapperButtonCreate></button>
                                <button className="btn-lg btn-primary" style={{width: "100%", marginTop: "30px", marginBottom: "50px"}} disabled="true">Submit</button>
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


export default DesksEdit;