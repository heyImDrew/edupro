/* eslint-disable jsx-a11y/anchor-is-valid */
import "./css/styles.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect, useDispatch, useSelector} from "react-redux";
import {Navigate, Link} from "react-router-dom";
import {Dropdown} from "react-bootstrap";
import styled from "styled-components";
import {cards_add} from "../../actions/cards_add";
import {useEffect, useState} from "react";
import {load_desks} from "../../actions/desks";

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


const CardsAdd = ({card_id, cards_add}) => {

    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(load_desks());
        }, [])

    const user = useSelector(state => state.login.user);
    const data = useSelector(state => state.desks.desks);

    const get_desk = () => {
        let search = window.location.pathname;
        let match = search.match(/\/desks\/add\/card\/(.*)/);
        let desk_id = match?.[1];
        for (let i=0; i < data.length; i++) {
            if (data[i].desk_id === desk_id) {
                return data[i];
            }
        }
        return null;
    }

    let desk_id = get_desk().desk_id;

    const [cardData, setCardData] = useState({
        desk_id: desk_id,
        card_q: '',
        card_a: ''
    });

    const { card_q, card_a } = cardData;
    const onChange = e => setCardData({...cardData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        cards_add({
            desk_id: desk_id,
            card_q: card_q,
            card_a: card_a
        })
        setCardData({
            card_q: '',
            card_a: ''
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
                                <h2 style={{marginBottom: "15px", marginTop: "20px"}}>Card Information</h2>

                                <div className="form-group" style={{marginBottom: "5px"}}>
                                    <label htmlFor="card_q">Question</label>
                                    <input type="text" className="form-control" id="card_q" name="card_q" onChange={e => onChange(e)}
                                           placeholder="Enter Card Question" required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="card_1_a">Answer</label>
                                    <input type="text" className="form-control" id="card_a" name="card_a" onChange={e => onChange(e)}
                                           placeholder="Enter Card Answer" required/>
                                </div>
                                <button type="submit" className="btn-lg btn-primary" style={{width: "100%", marginTop: "30px", marginBottom: "5px"}}>Submit</button>
                                <button className="btn-lg btn-secondary" style={{width: "100%", marginTop: "10px", marginBottom: "5px"}}><LinkWrapperButtonCreate to={`/desks/edit/${desk_id}`}>Go Back</LinkWrapperButtonCreate></button>
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
    card_id: state.cards_add.card_id
});

export default connect(mapStateToProps, {cards_add})(CardsAdd);