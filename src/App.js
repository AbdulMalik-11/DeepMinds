import './index.css'
import { Home } from "./Pages/Home"
import { Content } from "./Pages/Content"
import { Login } from './Pages/Login'
import { Register } from './Pages/Register'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="Content" element={<Content />} />
                <Route path="Login" element={<Login />} />
                <Route path="Register" element={<Register />} />
            </Routes>
        </Router>
    )
}
export default App