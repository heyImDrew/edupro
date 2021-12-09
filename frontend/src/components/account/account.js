/* eslint-disable jsx-a11y/anchor-is-valid */
import "./css/styles.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect, useSelector, useDispatch} from "react-redux";
import {Navigate, Link} from "react-router-dom";
import {Dropdown} from "react-bootstrap";
import styled from "styled-components";
import {load_account} from "../../actions/account";
import {useEffect} from "react";

const LinkWrapper = styled(Link)`
    text-decoration: none;
    color: #636464;
    :hover {
        color: #636464;
    }
`

const LinkWrapperContinue = styled(Link)`
    text-decoration: none;
    color: white;
    :hover {
        color: white;
    }
`

const Account = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(load_account());
        }, [])
    const account = useSelector(state => state.account.account.data);
    const amount = useSelector(state => state.account.account.amount);
    const get_image = (gender) => {
        let image = ""
        if (gender === "man") {
            image = "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.png"
        }
        else {
            image = "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.png"
        }
        return image
    }



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
                                              <Dropdown.Toggle id="dropdown-basic-button" >
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
                            <section className="vh-50">
                                <div className="container py-5 h-100">
                                    <div className="row d-flex justify-content-center align-items-center h-100">
                                        <div className="col-md-12 col-xl-8" style={{margin: "75px"}}>
                                            <div className="card" style={{width: "800px"}}>
                                                <div className="card-body text-center">
                                                    <div className="mt-3 mb-4">
                                                        <img
                                                            src={get_image("man")}
                                                            className="rounded-circle img-fluid" style={{width: "250px"}}
                                                        />
                                                    </div>
                                                    <h4 className="mb-2">{account.first_name} {account.last_name}</h4>
                                                    <p className="text-muted mb-4">@{account.username} <span
                                                        className="mx-2">|</span> <a href="#!">{account.company}</a></p>

                                                    <button type="button"
                                                            className="btn btn-primary btn-rounded btn-lg">
                                                        <LinkWrapperContinue to="/courses">Continue learning!</LinkWrapperContinue>
                                                    </button>
                                                    <div
                                                        className="d-flex justify-content-between text-center mt-5 mb-2">
                                                        <div>
                                                            <p className="mb-2 h5">{account.courses}</p>
                                                            <p className="text-muted mb-0">Courses Available</p>
                                                        </div>
                                                        <div className="px-3">
                                                            <p className="mb-2 h5">{amount.desks}</p>
                                                            <p className="text-muted mb-0">Desks Created</p>
                                                        </div>
                                                        <div className="px-3">
                                                            <p className="mb-2 h5">{amount.cards}</p>
                                                            <p className="text-muted mb-0">Cards Created</p>
                                                        </div>
                                                        <div>
                                                            <p className="mb-2 h5">{account.days}</p>
                                                            <p className="text-muted mb-0">Days with EduPro</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </section>
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

export default connect(mapStateToProps, {load_account})(Account);