import styled from "styled-components"
import { PopularQuotes } from '../data'
import Productsitems from './Productsitem'



function Products() {
    return (
        <div>
            <div className="flex mt-8 justify-center">
                <h2>
                    Popular Quotes
                </h2>
            </div>
            <div className="border-2 flex items-center justify-center overflow-hidden flex-wrap p-8 ml-8">
                {PopularQuotes.map((item) => (
                    <Productsitems item={item} />
                ))}
            </div>
        </div>
    )
}
export default Products;