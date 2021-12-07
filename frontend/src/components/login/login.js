import './login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";
import {login} from "../../actions/login";
import {connect, useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import {toast} from "react-toastify";

const Login = ({isAuthenticated, login}) => {
    function sleep(milliseconds) {
      const date = Date.now();
      let currentDate = null;
      do {
        currentDate = Date.now();
      } while (currentDate - date < milliseconds);
    }
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const { username, password } = formData;
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value });
    const onSubmit = e => {
        e.preventDefault();
        toast.info("Trying to login...")
        login(username, password);

    };

    if (isAuthenticated) {

        return <Navigate to="/home"/>
    }
    return (

<div className="container">
    <div className="row">
        <div className="col-md-8 offset-md-2">
            <div className="account-wall">
                <img className="profile-img" src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120" alt=""/>
                <form className="form-signin" onSubmit={e => onSubmit(e)}>
                    <input type="text" className="form-control" placeholder="Username" onChange={e => onChange(e)} name="username" autocomplete="off" required autoFocus/>
                    <input type="password"  className="form-control" placeholder="Password" onChange={e => onChange(e)} name="password" autocomplete="off" required/>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">
                        Sign in
                    </button>
                </form>
            </div>
        </div>
    </div>
</div>


    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.login.isAuthenticated
});

export default connect(mapStateToProps, {login})(Login);