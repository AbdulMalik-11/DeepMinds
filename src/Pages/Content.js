import Navbar from "../components/Nav-bar";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import Products from "../components/Products";

export function Content() {
    return (
        <div>
            <Navbar />
            <Slider />
            <div className="flex flex-col items-center">
                <h1>XYZ Category</h1>
                <div className="flex">
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiBrBz4X1pTv7RJ6ueqLdzsJhnH-G7oMLsxg&usqp=CAU' />
                    <div className="flex items-center">
                        "Everyone thinks of changing the world, but no one thinks of changing himself"
                        <span /><br /><br /><br /><br />~Leo Tolstoy
                    </div>
                </div>
            </div>
            <Products />
            <Footer />
        </div>
    )
}