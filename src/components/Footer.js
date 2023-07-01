import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PlaceIcon from '@mui/icons-material/Place';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
    return (
        <div className='flex bg-black mt-2 text-white rounded-lg'>
            <div className=' flex-1'>
                <div className='flex ml-4 items-center'>
                    <h3>Social Links:</h3>
                    <FacebookIcon style={{ "color": 'blue' }} />
                    <InstagramIcon style={{ "color": 'red' }} />
                    <TwitterIcon style={{ "color": 'blue' }} />
                    <WhatsAppIcon style={{ "color": 'green' }} />
                </div>
                <p style={{ "margin-left": '10px' }}>Visit our other social handles.Stick to the updates we provide over there.Follow us on for us to grow. </p>
            </div>
            <div className='flex flex-col items-center list-none flex-1'>
                <h3>Site Links</h3>
                <li>My account</li>
                <li>Join Group</li>
                <li>Poetry</li>
                <li>Different Languages</li>
            </div>
            <div className=' flex-1'>
                <div className='flex flex-col'>
                    <PlaceIcon />
                    <p>Near Halwasiya Ashok Marg Sector D Hazratganj Lucknow U.P. India</p>
                </div>
                <div>
                    <CallIcon />
                    <p>
                        +(91)XXXXXXXXXX
                    </p>
                </div>
                <div>
                    <EmailIcon />
                        <p>abmalik@student.iul.ac.in</p>
                </div>
            </div>

        </div>
    )
}
export default Footer;