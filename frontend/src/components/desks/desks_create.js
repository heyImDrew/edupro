/* eslint-disable jsx-a11y/anchor-is-valid */
import "./css/styles.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect, useDispatch, useSelector} from "react-redux";
import {Navigate, Link} from "react-router-dom";
import {Dropdown} from "react-bootstrap";
import styled from "styled-components";
import {desks_create} from "../../actions/desks_create";
import {useState} from "react";

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


const DesksCreate = ({desk_id, desks_create}) => {

    const user = useSelector(state => state.login.user);


    const [deskData, setDeskData] = useState({
        desk_h: '',
        desk_d: ''
    });
    const [cardData_1, setCardData_1] = useState({
        card_1_q: '',
        card_1_a: ''
    });
    const [cardData_2, setCardData_2] = useState({
        card_2_q: '',
        card_2_a: ''
    });
    const [cardData_3, setCardData_3] = useState({
        card_3_q: '',
        card_3_a: ''
    });

    const { desk_h, desk_d } = deskData;
    const { card_1_q, card_1_a } = cardData_1;
    const { card_2_q, card_2_a } = cardData_2;
    const { card_3_q, card_3_a } = cardData_3;

    const onDeskChange = e => setDeskData({...deskData, [e.target.name]: e.target.value });
    const onCardChange_1 = e => setCardData_1({...cardData_1, [e.target.name]: e.target.value });
    const onCardChange_2 = e => setCardData_2({...cardData_2, [e.target.name]: e.target.value });
    const onCardChange_3 = e => setCardData_3({...cardData_3, [e.target.name]: e.target.value });
    const onSubmit = e => {
        e.preventDefault();
        desks_create({
            desk: deskData,
            cards: [
                cardData_1,
                cardData_2,
                cardData_3
            ]
        });
        setDeskData({
            desk_h: '',
            desk_d: ''
        })
        setCardData_1({
            card_1_q: '',
            card_1_a: ''
        })
        setCardData_2({
            card_2_q: '',
            card_2_a: ''
        })
        setCardData_3({
            card_3_q: '',
            card_3_a: ''
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

                            <form onSubmit={e => onSubmit(e)}>
                                <h2 style={{marginBottom: "5px"}}>Desk Information Input</h2>
                                <div className="form-group" style={{marginBottom: "5px"}}>
                                    <label htmlFor="desk_h">Header</label>
                                    <input type="text" className="form-control" id="desk_h" name="desk_h" value={deskData.desk_h}
                                           placeholder="Enter Desk Header" onChange={e => onDeskChange(e)} required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="desk_d">Description</label>
                                    <input type="text" className="form-control" id="desk_d" name="desk_d" value={deskData.desk_d}
                                           placeholder="Enter Desk Description" onChange={e => onDeskChange(e)} required/>
                                </div>
                                <h2 style={{marginBottom: "15px", marginTop: "20px"}}>Cards Information Input</h2>

                                <h4 style={{marginBottom: "10px"}}>- Card №1</h4>
                                <div className="form-group" style={{marginBottom: "5px"}}>
                                    <label htmlFor="card_1_q">Question</label>
                                    <input type="text" className="form-control" id="card_1_q" name="card_1_q" value={cardData_1.card_1_q}
                                           placeholder="Enter Card Question" onChange={e => onCardChange_1(e)} required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="card_1_a">Answer</label>
                                    <input type="text" className="form-control" id="card_1_a" name="card_1_a" value={cardData_1.card_1_a}
                                           placeholder="Enter Card Answer" onChange={e => onCardChange_1(e)} required/>
                                </div>


                                <h4 style={{marginBottom: "10px", marginTop: "30px"}}>- Card №2</h4>
                                <div className="form-group" style={{marginBottom: "5px"}}>
                                    <label htmlFor="card_2_q">Question</label>
                                    <input type="text" className="form-control" id="card_2_q" name="card_2_q" value={cardData_2.card_2_q}
                                           placeholder="Enter Card Question" onChange={e => onCardChange_2(e)} required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="card_2_a">Answer</label>
                                    <input type="text" className="form-control" id="card_2_a" name="card_2_a" value={cardData_2.card_2_a}
                                           placeholder="Enter Card Answer" onChange={e => onCardChange_2(e)} required/>
                                </div>

                                <h4 style={{marginBottom: "10px", marginTop: "30px"}}>- Card №3</h4>
                                <div className="form-group" style={{marginBottom: "5px"}}>
                                    <label htmlFor="card_3_q">Question</label>
                                    <input type="text" className="form-control" id="card_3_q" name="card_3_q" value={cardData_3.card_3_q}
                                           placeholder="Enter Card Question" onChange={e => onCardChange_3(e)} required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="card_3_a">Answer</label>
                                    <input type="text" className="form-control" id="card_3_a" name="card_3_a" value={cardData_3.card_3_a}
                                           placeholder="Enter Card Answer" onChange={e => onCardChange_3(e)} required/>
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

const mapStateToProps = state => ({
    desk_id: state.desks_create.desk_id
});

export default connect(mapStateToProps, {desks_create})(DesksCreate);