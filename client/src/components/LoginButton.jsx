import { NavLink } from "react-router-dom"
import styled from "styled-components";

const LoginButton = () => {

    return (
        <Login to="/login">
            <span>Log In</span>
        </Login>
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