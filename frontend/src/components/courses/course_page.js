/* eslint-disable jsx-a11y/anchor-is-valid */
import "./css/styles.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {useSelector, useDispatch, connect} from "react-redux";
import {Navigate, Link, useLocation} from "react-router-dom";
import {Carousel, Dropdown, Card, Button} from "react-bootstrap";
import styled from "styled-components";
import {useEffect, useState} from "react";
import {load_course} from "../../actions/course_page";
import {toast} from "react-toastify";

const LinkWrapper = styled(Link)`
    text-decoration: none;
    color: #636464;
    :hover {
        color: #636464;
    }
`


const CoursePage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        let search = window.location.pathname;
        let match = search.match(/\/courses\/(.*)/);
        let course_id = match?.[1];
        dispatch(load_course(course_id));
        }, [])

    const user = useSelector(state => state.login.user);
    const course = useSelector(state => state.course_page.course);

    const [formData, setFormData] = useState({
        answer: ''
    });
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value });
    const onSubmit = (e, answer) => {
        e.preventDefault();
        if (formData.answer === answer) {
            toast.success("Right answer!")
        }
        else {
            toast.error("Answer is not correct!")
        }
        setFormData({
            answer: ''
        })
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

                            <Carousel fade variant="dark" style={{marginTop: "50px", paddingLeft:"150px", paddingRight:"150px", maxWidth:"1600px"}}>

                                {course.partitions.map((item, index) => {
                                    switch (item.type) {

                                        case "TEXT_PIC_TEXT":
                                            return (
                                        <Carousel.Item style={{minHeight: "850px"}}>
                                            <Card style={{minHeight: "800px"}}>
                                              <Card.Header as="h4">{course.name}</Card.Header>
                                              <Card.Body>

                                                <Card.Text>
                                                    <Card>
                                                        <Card.Body>
                                                            <Card.Body dangerouslySetInnerHTML={{__html: `${item.text_1}`}}></Card.Body>
                                                        </Card.Body>
                                                    </Card>
                                                </Card.Text>

                                                <Card.Text>
                                                    <Card>
                                                        <Card.Body>
                                                            <img src={item.picture} style={{maxWidth: "1185px"}}/>
                                                        </Card.Body>
                                                    </Card>
                                                </Card.Text>

                                                  <Card.Text>
                                                    <Card>
                                                        <Card.Body>
                                                            <Card.Body dangerouslySetInnerHTML={{__html: `${item.text_2}`}}></Card.Body>
                                                        </Card.Body>
                                                    </Card>
                                                </Card.Text>

                                              </Card.Body>
                                            </Card>
                                        </Carousel.Item>
                                    )



                                        case "TEXT_PIC":
                                            return (
                                        <Carousel.Item style={{minHeight: "850px"}}>
                                            <Card style={{minHeight: "800px"}}>
                                              <Card.Header as="h4">{course.name}</Card.Header>
                                              <Card.Body>
                                                <Card.Text>
                                                    <Card>
                                                        <Card.Body>
                                                            <Card.Body dangerouslySetInnerHTML={{__html: `${item.text_1}`}}></Card.Body>
                                                        </Card.Body>
                                                    </Card>
                                                </Card.Text>

                                                <Card.Text>
                                                    <Card>
                                                        <Card.Body>
                                                            <img src={item.picture} style={{maxHeight: "500px"}}/>
                                                        </Card.Body>
                                                    </Card>
                                                </Card.Text>

                                              </Card.Body>
                                            </Card>
                                        </Carousel.Item>
                                    )



                                        case "PIC_TEXT":
                                            return (
                                        <Carousel.Item style={{minHeight: "850px"}}>
                                            <Card style={{minHeight: "800px"}}>
                                              <Card.Header as="h4">{course.name}</Card.Header>
                                              <Card.Body>

                                                <Card.Text>
                                                    <Card>
                                                        <Card.Body>
                                                            <img src={item.picture} style={{maxHeight: "550px"}}/>
                                                        </Card.Body>
                                                    </Card>
                                                </Card.Text>

                                                  <Card.Text>
                                                    <Card>
                                                        <Card.Body>
                                                            <Card.Body dangerouslySetInnerHTML={{__html: `${item.text_1}`}}></Card.Body>
                                                        </Card.Body>
                                                    </Card>
                                                </Card.Text>
                                              </Card.Body>
                                            </Card>
                                        </Carousel.Item>
                                    )



                                        case "TEXT_PIC_TASK":
                                            return (
                                        <Carousel.Item style={{minHeight: "850px"}}>
                                            <Card style={{minHeight: "800px"}}>
                                              <Card.Header as="h4">{course.name}</Card.Header>
                                              <Card.Body>
                                                <Card.Text>
                                                    <Card>
                                                        <Card.Body>
                                                            <Card.Body dangerouslySetInnerHTML={{__html: `${item.text_1}`}}></Card.Body>
                                                        </Card.Body>
                                                    </Card>
                                                </Card.Text>


                                                <Card.Text>
                                                    <Card>
                                                        <Card.Body>
                                                            <img src={item.picture} style={{maxWidth: "1185px"}}/>
                                                        </Card.Body>
                                                    </Card>
                                                </Card.Text>


                                                  <Card.Text>
                                                    <Card border="info">
                                                        <Card.Body>
                                                            <Card.Header style={{width: "1170px", marginLeft:"15px"}}>
                                                                {item.task.task_question}
                                                            </Card.Header>
                                                            <Card.Body>
                                                                <form onSubmit={e => onSubmit(e, item.task.task_answer)}>
                                                                    <input className="form-control" id="answer" type="text" name="answer" placeholder="Enter your answer..." value={formData.answer} onChange={e => onChange(e)} data-sb-validations="required" required/>
                                                                    <button className="btn btn-primary btn-lg" id="submitButton" type="submit" style={{marginTop: "20px", width: "1170px"}}>Submit</button>
                                                                </form>
                                                            </Card.Body>
                                                        </Card.Body>
                                                    </Card>
                                                </Card.Text>
                                              </Card.Body>
                                            </Card>
                                        </Carousel.Item>
                                    )



                                        case "TEXT_TASK":
                                            return (
                                        <Carousel.Item style={{minHeight: "850px"}}>
                                            <Card style={{minHeight: "800px"}}>
                                              <Card.Header as="h4">{course.name}</Card.Header>
                                              <Card.Body>
                                                <Card.Text>
                                                    <Card>
                                                        <Card.Body>
                                                            <Card.Body dangerouslySetInnerHTML={{__html: `${item.text_1}`}}></Card.Body>
                                                        </Card.Body>
                                                    </Card>
                                                </Card.Text>
                                                  <Card.Text>
                                                    <Card border="info">
                                                        <Card.Body>
                                                            <Card.Header style={{width: "1170px", marginLeft:"15px"}}>
                                                                {item.task.task_question}
                                                            </Card.Header>
                                                            <Card.Body>
                                                                <form onSubmit={e => onSubmit(e, item.task.task_answer)}>
                                                                    <input className="form-control" id="answer" type="text" name="answer" placeholder="Enter your answer..." value={formData.answer} onChange={e => onChange(e)} data-sb-validations="required" required/>
                                                                    <button className="btn btn-primary btn-lg" id="submitButton" type="submit" style={{marginTop: "20px", width: "1170px"}}>Submit</button>
                                                                </form>
                                                            </Card.Body>
                                                        </Card.Body>
                                                    </Card>
                                                </Card.Text>
                                              </Card.Body>
                                            </Card>
                                        </Carousel.Item>
                                    )



                                        case "PIC_TASK":
                                            return (
                                        <Carousel.Item style={{minHeight: "850px"}}>
                                            <Card style={{minHeight: "800px"}}>
                                              <Card.Header as="h4">{course.name}</Card.Header>
                                              <Card.Body>

                                                <Card.Text>
                                                    <Card>
                                                        <Card.Body>
                                                            <img src={item.picture} style={{maxWidth: "1185px"}}/>
                                                        </Card.Body>
                                                    </Card>
                                                </Card.Text>

                                                  <Card.Text>
                                                    <Card border="info">
                                                        <Card.Body>
                                                            <Card.Header style={{width: "1170px", marginLeft:"15px"}}>
                                                                {item.task.task_question}
                                                            </Card.Header>
                                                            <Card.Body>
                                                                <form onSubmit={e => onSubmit(e, item.task.task_answer)}>
                                                                    <input className="form-control" id="answer" type="text" name="answer" placeholder="Enter your answer..." value={formData.answer} onChange={e => onChange(e)} data-sb-validations="required" required/>
                                                                    <button className="btn btn-primary btn-lg" id="submitButton" type="submit" style={{marginTop: "20px", width: "1170px"}}>Submit</button>
                                                                </form>
                                                            </Card.Body>
                                                        </Card.Body>
                                                    </Card>
                                                </Card.Text>
                                              </Card.Body>
                                            </Card>
                                        </Carousel.Item>
                                    )
                                    }
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


const mapStateToProps = state => ({
    course_page: {
        course: {
            partitions: []
        }
    }
});

export default connect(mapStateToProps, {load_course})(CoursePage);