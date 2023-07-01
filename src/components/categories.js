import Categoriesitem from "./categoriesitem"
import { Categoriesdata } from "../data"

function Categories() {
    return (
        <div className="flex relative flex-wrap ">
            {Categoriesdata.map((item) => (
                <Categoriesitem item={item}></Categoriesitem>
            ))}                                                                                                                 
        </div>
    )
}
export default Categories