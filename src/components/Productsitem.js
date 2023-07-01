import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

function Productsitem({ item }) {
    return (
        <div className="relative cursor-pointer flex items-center justify-center m-5" style={{ width:"300px" ,height:"300px"}} >
            <img  src={item.img} style={{height:"100%",width:"100%"}}/>
            <div className="opacity-0 absolute flex items-center justify-center hover:opacity-100" style={{
                "width": "100%",
                "height": "100%",
                "background-color": "rgba(0,0,0,0.3)",
                "transition": "all 0.3s"
            }}>
                <div className="p-2 bg-white flex" style={{
                    "border": "solid 1px white",
                    "border-radius": "50%"
                }}>
                    <FavoriteBorderOutlinedIcon />
                </div>
            </div>
        </div >
    )
}
export default Productsitem;