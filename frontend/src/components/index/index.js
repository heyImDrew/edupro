/* eslint-disable jsx-a11y/anchor-is-valid */
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect, useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {load_feedbacks, send_feedback} from "../../actions";
import {Link} from "react-router-dom";
import styled from "styled-components";

const LinkWrapper = styled(Link)`
    text-decoration: none;
    color: white;
    :hover{
        color: white;
    }
`

const Index = ({send_status, send_feedback}) => {

    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
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
    };

    const feedbacks = useSelector(state => state.index.feedbacks);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(load_feedbacks());
        }, [])

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="home">
                <div className="container">
                    <a className="navbar-brand" href="#!">EduPro Platform</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation"><span
                            className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item"><a className="nav-link active" aria-current="page" href="#home">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="#features">About</a></li>
                            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <header className="bg-dark py-5">
                <div className="container px-5">
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-6">
                            <div className="text-center my-5">
                                <h1 className="display-5 fw-bolder text-white mb-2">Present your business in a whole new
                                    way</h1>
                                <p className="lead text-white-50 mb-4">Quickly design and customize responsive mobile-first
                                    sites with Bootstrap, the world’s most popular front-end open source toolkit!</p>
                                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
                                    <a className="btn btn-primary btn-lg px-4 me-sm-3"><LinkWrapper to="/dashboard">Get Started</LinkWrapper></a>
                                    <a className="btn btn-outline-light btn-lg px-4" href="#features">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section className="py-5 border-bottom" id="features">
                <div className="container px-5 my-5">
                    <div className="row gx-5">
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i
                                className="bi bi-collection"></i></div>
                            <h2 className="h4 fw-bolder">Featured title</h2>
                            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another
                                sentence and probably just keep going until we run out of words.</p>
                            <a className="text-decoration-none" href="#!">
                                Call to action
                                <i className="bi bi-arrow-right"></i>
                            </a>
                        </div>
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i
                                className="bi bi-building"></i></div>
                            <h2 className="h4 fw-bolder">Featured title</h2>
                            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another
                                sentence and probably just keep going until we run out of words.</p>
                            <a className="text-decoration-none" href="#!">
                                Call to action
                                <i className="bi bi-arrow-right"></i>
                            </a>
                        </div>
                        <div className="col-lg-4">
                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i
                                className="bi bi-toggles2"></i></div>
                            <h2 className="h4 fw-bolder">Featured title</h2>
                            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another
                                sentence and probably just keep going until we run out of words.</p>
                            <a className="text-decoration-none" href="#!">
                                Call to action
                                <i className="bi bi-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5 border-bottom">
                <div className="container px-5 my-5 px-5">
                    <div className="text-center mb-5">
                        <h2 className="fw-bolder">Customer testimonials</h2>
                        <p className="lead mb-0">Our customers love working with us</p>
                    </div>
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-6">
                            <div className="card mb-4">
                                <div className="card-body p-4">
                                    <div className="d-flex">
                                        <div className="flex-shrink-0"><i
                                            className="bi bi-chat-right-quote-fill text-primary fs-1"></i></div>
                                        <div className="ms-4">
                                            <p className="mb-1">
                                                {feedbacks.length > 0 ? <>{feedbacks[0].message}</> : <>Message</>}
                                            </p>
                                            <div className="small text-muted">- {feedbacks.length > 0 ? <>{feedbacks[0].full_name}</> : <>User</>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body p-4">
                                    <div className="d-flex">
                                        <div className="flex-shrink-0"><i
                                            className="bi bi-chat-right-quote-fill text-primary fs-1"></i></div>
                                        <div className="ms-4">
                                            <p className="mb-1">
                                                {feedbacks.length > 0 ? <>{feedbacks[1].message}</> : <>Message</>}
                                            </p>
                                            <div className="small text-muted">- {feedbacks.length > 0 ? <>{feedbacks[1].full_name}</> : <>User</>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-light py-5" id="contact">
                <div className="container px-5 my-5 px-5">
                    <div className="text-center mb-5">
                        <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-envelope"></i></div>
                        <h2 className="fw-bolder">Get in touch</h2>
                        <p className="lead mb-0">We'd love to hear from you</p>
                    </div>
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-6">
                            <form onSubmit={e => onSubmit(e)} id="contactForm" data-sb-form-api-token="API_TOKEN">
                                <div className="form-floating mb-3">
                                    <input className="form-control" id="name" type="text" name="full_name" placeholder="Enter your name..."
                                           data-sb-validations="required" value={formData.full_name} onChange={e => onChange(e)} required/>
                                    <label htmlFor="name">Full name</label>
                                    <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                                </div>
                                <div className="form-floating mb-3">
                                    <input className="form-control" id="email" value={formData.email} type="email" name="email" placeholder="name@example.com"
                                           data-sb-validations="required,email" onChange={e => onChange(e)} required/>
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
            </section>
            <section className="py-5 border-bottom" id="features">
                <div className="container px-5 my-5">
                    <div className="row gx-5">
                            <h2 className="h4 fw-bolder">Featured title</h2>
                            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another
                                sentence and probably just keep going until we run out of words.</p>
                            <a className="text-decoration-none" href="#!">
                                Call to action
                                <i className="bi bi-arrow-right"></i>
                            </a>
                    </div>
                </div>
            </section>
            <footer className="py-5 bg-dark">
                <div className="container px-5"><p className="m-0 text-center text-white">Copyright &copy; Your Website 2021</p>
                </div>
            </footer>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
            <script src="js/scripts.js"></script>
            <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="#!">EduPro Platform</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation"><span
                            className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item"><a className="nav-link active" aria-current="page" href="#home">Home</a>
                            </li>
                            <li className="nav-item"><a className="nav-link" href="#features">About</a></li>
                            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

const mapStateToProps = state => ({
    send_status: state.login.send_status
});

export default connect(mapStateToProps, {send_feedback})(Index);