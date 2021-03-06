/* eslint-disable jsx-a11y/anchor-is-valid */
import "./css/styles.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect, useDispatch, useSelector} from "react-redux";
import {Navigate, Link} from "react-router-dom";
import {Dropdown} from "react-bootstrap";
import styled from "styled-components";
import {load_courses} from "../../actions/courses";
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
    font-size: 24px;
`


const Courses = () => {

    const user = useSelector(state => state.login.user);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(load_courses());
        }, [])
    const courses = useSelector(state => state.courses.courses);

    const [searchTerm, setSearchTerm] = useState("");
    const handleChange = event => {
        setSearchTerm(event.target.value);
      };

    const onClickLike = (course_id) => {
        axios.put(
            'http://localhost:9000/api/courses/toggle/',
            {
                course_id: course_id
            },
            {
                headers: {
                    'Content-Type': "application/json",
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            }
        )
        dispatch(load_courses());
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
                                <b style={{color: "black"}}>My Courses</b>
                            </a>
                            <a className="list-group-item list-group-item-action list-group-item-light p-3">
                                <LinkWrapper to="/desks">My Cards</LinkWrapper>
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
                        <div className="container-fluid" style={{paddingLeft: "75px", paddingRight: "75px", paddingTop: "25px"}}>
                            <h1 style={{marginBottom: "30px", fontSize: "42px"}}>
                                <div class="row">
                                    <div class="col">
                                        <h1>Available Courses</h1>
                                    </div>
                                    <div class="col">
                                        <input className="form-control" id="search" name="search" type="text"
                                          placeholder="Search by" value={searchTerm} onChange={handleChange} style={{maxWidth: "115px", marginLeft: "558px"}} />
                                    </div>
                                </div>
                            </h1>

                            {courses.filter(item =>
                                  item.name.toLowerCase().includes(searchTerm.toLowerCase())
                                ).map((item, index) =>{
                                    return (
                                        <div className="card border-primary mb-3">
                                            <div className="card-header">
                                                <div className="row">
                                                    <div className="col" style={{fontSize: "18px"}}>
                                                        EduPro Course ???{index + 1}
                                                    </div>
                                                    <div className="col form-check form-switch">
                                                            <input className="form-check-input" type="checkbox"
                                                                id="flexSwitchCheckDefault"
                                                                checked={item.toggle}
                                                                onClick={(e) => onClickLike(item.course_id)}/>
                                                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Liked</label>
                                                    </div>
                                                    <div className="col" style={{textAlign: "right"}}>
                                                        <a className="btn btn-primary btn-sm px-4 me-sm-3" >
                                                            <LinkWrapperButton to={`/courses/${item.course_id}`}>Dive into!</LinkWrapperButton>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-body text-primary">
                                                <h5 className="card-title" style={{color:"black", fontSize:"32px", marginBottom: "20px"}}><b>{item.name}</b></h5>
                                                <p className="card-text">{item.description}</p>
                                                <hr/>
                                                <img src={item.image} alt="Course Image" style={{width: "50%", height: "150px", marginTop: "15px", marginBottom: "20px", marginLeft:"325px"}}/>
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

export default connect(mapStateToProps, {load_desks})(Courses);