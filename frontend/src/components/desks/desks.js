/* eslint-disable jsx-a11y/anchor-is-valid */
import "./css/styles.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect, useDispatch, useSelector} from "react-redux";
import {Navigate, Link} from "react-router-dom";
import {Dropdown} from "react-bootstrap";
import styled from "styled-components";
import {load_desks} from "../../actions/desks";
import {useEffect} from "react";
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
    font-size: 24px;
`


const Desks = () => {

    const user = useSelector(state => state.login.user);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(load_desks());
        }, [])
    const desks = useSelector(state => state.desks.desks);

    const onClickLike = (desk_id) => {
        axios.put(
            'http://localhost:9000/api/desks/toggle/',
            {
                desk_id: desk_id
            },
            {
                headers: {
                    'Content-Type': "application/json",
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            }
        )
        dispatch(load_desks());
    }


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
                            <h1 style={{marginBottom: "30px", fontSize: "42px"}}>
                                My Card Desks
                                <a className="btn btn-primary btn-success px-4 me-sm-3" style={{marginLeft: "924px"}} >
                                    <LinkWrapperButtonCreate to="/desks/create">Create Desk!</LinkWrapperButtonCreate>
                                </a>
                            </h1>

                            {desks.map((item, index) =>{
                                    return (
                                        <div className="card border-primary mb-3">
                                            <div className="card-header">
                                                <div className="row">
                                                    <div className="col" style={{fontSize: "18px"}}>
                                                        EduPro Cards Desk №{index + 1}
                                                    </div>
                                                    <div className="col form-check form-switch">
                                                            <input className="form-check-input" type="checkbox"
                                                                id="flexSwitchCheckDefault"
                                                                checked={item.liked}
                                                                onClick={(e) => onClickLike(item.desk_id)}/>
                                                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Liked</label>
                                                    </div>
                                                    <div className="col" style={{textAlign: "right"}}>
                                                        <a className="btn btn-primary btn-sm px-4 me-sm-3">
                                                            <LinkWrapperButton to={`/desks/edit/${item.desk_id}`}>Edit</LinkWrapperButton>
                                                        </a>
                                                        <a className="btn btn-primary btn-sm px-4 me-sm-3" >
                                                            <LinkWrapperButton to={`/desks/${item.desk_id}`}>Dive into!</LinkWrapperButton>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-body text-primary">
                                                <h5 className="card-title" style={{color:"black", fontSize:"32px", marginBottom: "20px"}}><b>{item.name}</b></h5>
                                                <p className="card-text">{item.description}</p>
                                            </div>
                                        </div>
                                    )
                                })}

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


const mapStateToProps = state => ({
});

export default connect(mapStateToProps, {load_desks})(Desks);