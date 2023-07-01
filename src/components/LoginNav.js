import styled from "styled-components"
import { Link } from 'react-router-dom'

const Linkroute = styled(Link)({
    "color": "inherit",
    "text-decoration": "none"
})

function Logindiv() {
    return (
        <div className="flex text-black items-center pt-4 ">
            <h2 className=" flex  justify-center" style={{ "font-family": "anton", "flex": "2" }}>DeepMinds</h2>
            <div className=" flex  list-none  justify-around  items-center w-3/4">
                <li className="rounded-xl p-2 border-b-8 border-black border-r-2"><Linkroute to="/">Home</Linkroute></li>
                <li className="rounded-xl p-2 border-b-8 border-black border-r-2">Contact</li>
                <li className="rounded-xl p-2 border-b-8 border-black border-r-2">Help</li>
                <li className="rounded-xl p-2 border-b-8 border-black border-r-2"><Linkroute to="/Register">Register</Linkroute></li>
            </div>
        </div>
    )
}
export default Logindiv;