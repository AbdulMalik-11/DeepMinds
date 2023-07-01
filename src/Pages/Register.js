import styled from "styled-components"
import { Link } from 'react-router-dom'
const Linkroute = styled(Link)({
    "color": "inherit",
    "text-decoration": "none",
    "display": "flex",
    "justifyContent": "center"
})

export function Register() {
    const handlesubmit = (event) => {
        event.preventDefault();
    }
    return (
        <div className="flex flex-col items-center justify-center h-fit  bg-gradient-to-r from-purple-500 to-pink-500" style={{ "fontFamily": "poppins" }}>
            <form className="flex flex-col p-8">
                <h2 style={{ "fontFamily": "anton", "font-size": "40px" }}>Register New Account</h2>
                <input className="p-2 m-4" placeholder="First Name" />
                <input className="p-2 m-4" placeholder="Last Name" />
                <input className="p-2 m-4" placeholder="Email" />
                <input className="p-2 m-4" type="tel" placeholder="Phone Number" />
                <input className="p-2 m-4" type='Password' placeholder="Password" />
                <input className="p-2 m-4" type="submit" onClick={handlesubmit} style={{ "backgroundColor": "black", "color": "white" }} />
                <Linkroute to="/Login">Already User</Linkroute>
            </form>
        </div>
    )
}