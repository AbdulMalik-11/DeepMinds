import { Link } from "react-router-dom"
import styled from "styled-components"

function Categoriesitem({ item }) {
    return (
        <div className="flex flex-col items-center justify-center">
            <div style={{margin:"20px"}}>

                <Link to="/Content">
                    <img className="rounded-lg" src={item.image} width={400} height={300} />
                </Link>
            </div>
            <div className="font-bold">
                {item.title}
            </div>
        </div>
    )
}
export default Categoriesitem;