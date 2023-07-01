import Announcement from '../components/Announcement'
import Navbar from '../components/Nav-bar'
import Slider from '../components/Slider'
import  Categories  from '../components/categories'
import Products  from '../components/Products'
import News from '../components/Newsletter'
import Footer from '../components/Footer'
export const Home=()=>
{
    return (
        <div>
            <div>
                <Announcement/>
                <Navbar/>
               <Slider/>
               <Categories/>
               <Products/>
               <News/>
               <Footer/>
            </div>
        </div>
    )
}