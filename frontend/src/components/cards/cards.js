/* eslint-disable jsx-a11y/anchor-is-valid */
import "./css/styles.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {useSelector, useDispatch, connect} from "react-redux";
import {Navigate, Link, useLocation} from "react-router-dom";
import {Carousel, Dropdown} from "react-bootstrap";
import styled from "styled-components";
import {useEffect} from "react";
import {load_desks} from "../../actions/desks";

const LinkWrapper = styled(Link)`
    text-decoration: none;
    color: #636464;
    :hover {
        color: #636464;
    }
`


const Cards = () => {

    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(load_desks());
        }, [])

    const user = useSelector(state => state.login.user);
    const data = useSelector(state => state.desks.desks);

    const get_desk = () => {
        let search = window.location.pathname;
        let match = search.match(/\/desks\/(.*)/);
        let desk_id = match?.[1];
        for (let i=0; i < data.length; i++) {
            if (data[i].desk_id === desk_id) {
                return data[i];
            }
        }
        return null;
    }

    const cards = get_desk().cards;
    const len = cards.length

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
                                <b style={{color: "black"}}>My Cards</b>
                            </a>
                            <a className="list-group-item list-group-item-action list-group-item-light p-3">
                                <LinkWrapper to="/favourites">Favourites</LinkWrapper>
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
                            <h1 style={{textAlign: "center", marginTop: "90px"}}>{get_desk().name}</h1>
                            <h6 style={{textAlign: "center"}}>({get_desk().description})</h6>
                            <Carousel variant="dark" style={{marginTop: "50px", paddingLeft: "295px", marginLeft:"240px", textAlign:"center", maxWidth:"1100px"}}>

                                {cards.map((item, index) =>{
                                    return (
                                            <Carousel.Item style={{height: "600px"}}>
                                                <div className="c-wrap">
                                                    <div className="c-card">
                                                        <div className="c-front">
                                                            <div className="card bg-light" style={{height: "550px", width:"500px"}}>
                                                                <h5 className="card-header">Question</h5>
                                                                <div className="card-body" style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                                                                    <p className="card-text">
                                                                        {item.question}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="c-back" style={{color: "white"}}>
                                                            <div className="card bg-success" style={{height: "550px", width:"500px"}}>
                                                                <h5 className="card-header">Answer</h5>
                                                                <div className="card-body" style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                                                                    <p className="card-text">
                                                                        {item.answer}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Carousel.Item>
                                        )
                                })}
                            </Carousel>
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


export default Cards;