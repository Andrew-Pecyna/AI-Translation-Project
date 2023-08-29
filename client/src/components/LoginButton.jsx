import { NavLink } from "react-router-dom"
import { styled } from "styled-components";

const LoginButton = () => {

    // const linkStyle = {
    //     backgroundColor: "lightgrey",
    //     color: "white",
    //     textDecoration: "none",
    //     padding: "15px 25px",
    //     fontSize: "25px"
    // }

    return (
            <Login to="/login">Log In</Login>
    )
}

const Login = styled(NavLink)`
    font-size: 20px;
    background-color: lightgrey;
    padding: 12px 25px;
    text-decoration: none;
    color: white;

    &:hover {
        background-color: grey;
    }
`

export default LoginButton;