/* eslint-disable jsx-a11y/anchor-is-valid */
import 'bootstrap/dist/css/bootstrap.min.css';
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";


const Home = () => {

    const user = useSelector(state => state.login.user);
    if (user) {
        return (
            <div>Homepage</div>
        )
    }
    else {
        setTimeout(() => {}, 1000);
        return <Navigate to='/login' />
    }
}

export default Home;