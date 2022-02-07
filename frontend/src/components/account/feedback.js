/* eslint-disable jsx-a11y/anchor-is-valid */
import "./css/styles.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect, useSelector, useDispatch} from "react-redux";
import {Navigate, Link} from "react-router-dom";
import {Dropdown} from "react-bootstrap";
import styled from "styled-components";
import {send_feedback} from "../../actions/index";
import {useEffect, useState} from "react";
import {toast} from "react-toastify";

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

const Feedback = ({send_status, send_feedback}) => {

    const user = useSelector(state => state.login.user);

    const account = useSelector(state => state.account.account.data)

    const [formData, setFormData] = useState({
        full_name: account.first_name + ' ' + account.last_name,
        email: user.email,
        phone: '',
        message: ''
    });
    const { full_name, email, phone, message } = formData;
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value });
    const onSubmit = e => {
        e.preventDefault();
        send_feedback(full_name, email, phone, message);
        setFormData({
            full_name: '',
            email: '',
            phone: '',
            message: ''
        })
        toast.success("Feedback succesfully sended!")
    };

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
                        <div className="container-fluid" style={{paddingTop: "200px", paddingLeft: "500px"}}>
                            <div className="col-lg-6">
                            <form onSubmit={e => onSubmit(e)} id="contactForm" data-sb-form-api-token="API_TOKEN">
                                <div className="form-floating mb-3">
                                    <input className="form-control" id="name" type="text" name="full_name" placeholder="Enter your name..."
                                           data-sb-validations="required" value={formData.full_name} onChange={e => onChange(e)} disabled="true"/>
                                    <label htmlFor="name">Full name</label>
                                    <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                                </div>
                                <div className="form-floating mb-3">
                                    <input className="form-control" id="email" value={formData.email} type="email" name="email" placeholder="name@example.com"
                                           data-sb-validations="required,email" onChange={e => onChange(e)} disabled="true"/>
                                    <label htmlFor="email">Email address</label>
                                    <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.
                                    </div>
                                    <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                                </div>
                                <div className="form-floating mb-3">
                                    <input className="form-control" id="phone" value={formData.phone} type="tel" name="phone" placeholder="(123) 456-7890"
                                           data-sb-validations="required" onChange={e => onChange(e)}/>
                                    <label htmlFor="phone">Phone number</label>
                                    <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is
                                        required.
                                    </div>
                                </div>
                                <div className="form-floating mb-3">
                                    <textarea className="form-control" value={formData.message} id="message" name="message" type="text"
                                              placeholder="Enter your message here..."
                                              data-sb-validations="required" onChange={e => onChange(e)} required></textarea>
                                    <label htmlFor="message">Message</label>
                                    <div className="invalid-feedback" data-sb-feedback="message:required">A message is
                                        required.
                                    </div>
                                </div>
                                <div className="d-none" id="submitSuccessMessage">
                                    <div className="text-center mb-3">
                                        <div className="fw-bolder">Form submission successful!</div>
                                        To activate this form, sign up at
                                        <br/>
                                        <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                    </div>
                                </div>
                                <div className="d-none" id="submitErrorMessage">
                                    <div className="text-center text-danger mb-3">Error sending message!</div>
                                </div>
                                <div className="d-grid">
                                    <button className="btn btn-primary btn-lg" id="submitButton" type="submit">Submit
                                    </button>
                                </div>
                            </form>
                        </div>
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
    send_status: state.login.send_status
});

export default connect(mapStateToProps, {send_feedback})(Feedback);