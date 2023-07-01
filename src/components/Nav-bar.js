import 'styled-components'
import styled from 'styled-components'
import Badge from '@mui/material/Badge';
import Search from '@mui/icons-material/Search';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import { Link } from 'react-router-dom'
const Linkroute = styled(Link)({
    "color": "inherit",
    "text-decoration": "none"
})


function Navbar() {
    return (
        <div className='text-white bg-black p-3' style={{ borderRadius: " 10px" }}>
            <div className='flex flex-row items-center'>
                <div className='flex items-center ml-2' style={{ flex: 1 }}>
                    <div className='flex items-center'>
                        <input placeholder='Search items' />
                        <Search />
                    </div>
                </div>
                <div style={{ flex: 1 }}>
                    <h2 className='text-2xl text-center'>DeepMinds</h2>
                </div>          
                <div className='mr-2 flex items-center justify-end' style={{flex:"1"}}>
                    <div className='mr-5 cursor-pointer'>
                        <FavoriteTwoToneIcon/>
                        <Badge badgeContent={1} color="secondary"></Badge>
                    </div>
                    <Linkroute to="/Register">
                        <div className='mr-5'>Register</div>
                    </Linkroute>
                    <Linkroute to="/Login">
                        <div className='mr-5'>LogIn</div>
                    </Linkroute>
                </div>
            </div>
        </div>
    )
}
export default Navbar