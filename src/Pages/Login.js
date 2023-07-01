import LoginNav from "../components/LoginNav"

export function Login() {
    const handlesubmit = (event) => {
        event.preventDefault();
    }
    return (
        <div className=" text-white " style={{"font-family":"poppins"}}>
            <LoginNav />
            <div className=" flex bg-orange-300  items-center  justify-center  h-screen mt-5" >
                <div className="bg-black p-10 rounded-2xl">
                    <h3>
                        Login
                    </h3>
                    <div className="flex flex-col">
                        <label style={{ color: 'white' }}>Username:</label>
                        <input className="p-2 outline-none text-black m-4" placeholder='Username or Email'></input>
                        <label style={{ color: 'white' }}>Password:</label>
                        <input className="p-2 outline-none text-black m-4" type='password' placeholder='Password'></input>
                        <input className="p-2 outline-none  m-4 border-2 border-white" type="submit" onClick={handlesubmit} style={{ "borderRadius": "15px" }} />
                    </div>
                    <div className=" flex  flex-col  h-12  justify-between">
                        <input type="button" value="Forgot Password" />
                        <input type="button" value="Login with Google" />
                    </div>
                </div>
            </div>
        </div>
    )
}
