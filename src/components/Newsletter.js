import styled from "styled-components"
import SendIcon from '@mui/icons-material/Send'

function News(){
    return (
        <div className="flex items-center flex-col">
            <div className="border-b-2 border-black">Daily Updates</div>
            <h2>Get the latest Quotes on E-mail</h2>
            <div className="border-2 border-black">
                <input className="p-1 outline-none border-none" placeholder="Enter E-mail here."/>
                <button className="p-1 border-none bg-indigo-300">
                    <SendIcon/>
                </button>
            </div>
        </div>
    )
}
export default News;