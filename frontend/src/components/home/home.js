/* eslint-disable jsx-a11y/anchor-is-valid */
import "./css/styles.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect, useDispatch, useSelector} from "react-redux";
import {Navigate, Link} from "react-router-dom";
import {Dropdown} from "react-bootstrap";
import styled from "styled-components";
import {load_dashnews} from "../../actions/dashnews";
import {useEffect} from "react";

const LinkWrapper = styled(Link)`
    text-decoration: none;
    color: #636464;
    :hover {
        color: #636464;
    }
`


const Home = () => {

    const user = useSelector(state => state.login.user);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(load_dashnews());
        }, [])
    const dashnews = useSelector(state => state.dashnews.dashnews.data);
    const rand_desk_id = useSelector(state => state.dashnews.dashnews.random_desk_data.desk_id);
    const rand_course_id = useSelector(state => state.dashnews.dashnews.random_course_data.course_id);


    if (user) {
        return (
            <div>
                <div className="d-flex" id="wrapper">
                    <div className="border-end bg-white" id="sidebar-wrapper">
                        <div className="list-group list-group-flush">
                            <a className="list-group-item list-group-item-action list-group-item-light p-3" style={{background: "#0b5ed7", color: "white"}}
                               href="#!"><b>EduPro Platform</b></a>
                            <a className="list-group-item list-group-item-action list-group-item-light p-3">
                                <b style={{color: "black"}}>Dashboard</b>
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
                        <div className="container-fluid" style={{paddingLeft: "150px", paddingRight: "150px", paddingTop: "30px"}}>
                            <h1>Platform News:</h1>
                            <div className="row">
                                {dashnews.map((item, index) =>{
                                    return (
                                        <div className="col-lg-4 col-md-4 col-sm-6 mb-5">
                                            <div className="card bg-light" style={{height: "375px"}}>
                                               <img className="card-img-top"
                                                                 src={item.url} alt="" height="225px"/>
                                                <div className="card-body" style={{height: "150px"}}>
                                                    <h4 className="card-title">
                                                        {item.header}
                                                    </h4>
                                                    <p className="card-text">{item.text}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="container-fluid" style={{paddingLeft: "150px", paddingRight: "150px"}}>
                            <h1>Don't forget to repeat your knowledge!</h1>
                            <h6>(Random Course and Desk)</h6>
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-6 mb-5">
                                    <div className="card bg-light" style={{height: "275px"}}>
                                        <Link to={`/courses/${rand_course_id}`}>
                                            <a href="#"><img className="card-img-top"
                                                         src="https://sun9-68.userapi.com/impg/c850608/v850608293/188e68/-r6r2EQYRNs.jpg?size=1280x844&quality=96&sign=b4dbd576db84649c17c2baad2ff16541&type=album" alt="" height="200px"/></a>
                                        </Link>
                                        <div className="card-body" style={{height: "75px"}}>
                                            <h4 className="card-title">
                                                Random Course
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6 mb-5">
                                    <div className="card bg-light" style={{height: "275px"}}>
                                        <Link to={`/desks/${rand_desk_id}`}>
                                            <a href="#"><img className="card-img-top"
                                                         src="https://sun9-68.userapi.com/impg/c850608/v850608293/188e68/-r6r2EQYRNs.jpg?size=1280x844&quality=96&sign=b4dbd576db84649c17c2baad2ff16541&type=album" alt="" height="200px"/></a>
                                        </Link>
                                        <div className="card-body" style={{height: "75px"}}>
                                            <h4 className="card-title">
                                                Random Desk
                                            </h4>
                                        </div>
                                    </div>
                                </div>
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
});

export default connect(mapStateToProps, {load_dashnews})(Home);