import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Slidedata } from '../data';
import { useState } from 'react';
function Slider(){
    const [index,setindex]=useState(0);
    const handleleft=()=>{
        setindex(Math.abs((-index-1)%Slidedata.length))
    }
    const handleRight=()=>{
        setindex((index+1)%Slidedata.length)
    }
    // setTimeout(() => {
        // handleRight()
    // }, 1000);
    return (
        <div style={{"height":"600px"}} className='flex items-center'>
            <div className='flex justify-start flex-1'>
                <ArrowLeftIcon onClick={handleleft}/>
            </div>
            <img  className='flex-1 justify-items-start mr-96' src={Slidedata[index].image} width={400} height={300}/>
            <div>
                <p className='text-center mr-40 font-mono'>
                Your valuable insights and perspectives are important to us as they help us understand how our content resonates with our visitors. We would love to hear your reflections, impressions, or any ideas you may have regarding the quotes, their presentation, or the overall user experience. Please take a moment to share your thoughts with us.
                </p>
            <input style={{"fontFamily":"anton"}} className='m-20 border-b-4 border-r-2 border-black rounded-md' type='button' value='Share thoughts.'/>
            </div>
            <div style={{"transition":"all 2s ease"}}  className=' flex justify-end flex-1'>          
                <ArrowRightIcon onClick={handleRight}/>
            </div>
        </div>
    )
}
export default Slider;































// const Container = styled.div`
// width:100%;
//     border-radius:5px;
//     height:100vh;
//     display:flex;
//     position:relative;
//     background-color:white;
//     overflow:hidden;
//     `
// const Arrow = styled.div`
//     width:50px;
//     height:50px;
//     border-radius:10px;
//     background-color:white;   
//     display:flex;
//     align-items:center; 
//     justify-content:center; 
//     position:absolute;
//     top:0;
//     bottom:0;
//     margin:auto;
//     left:${(props) => props.direction === 'left' && '10px'};
//     right:${(props) => props.direction === 'right' && '10px'};
//     z-index:2;
//     `
// const Slide = styled.div`
//     height:100vh;
//     width:100vw;
//     display:flex;
//     align-items:center;
// `

// const Wrapper = styled.div`
// display:flex;   
// transition:all .15s ;
// transform:translateX(-${props => props.slide * 1350}px);
// height:100%;
// padding:30px;
// `

// const Imgcontainer = styled.div`
// height:100%;
// display:flex;
// flex:1;
// `
// const Image = styled.img`
// height:80%;
//     `
// const Infocontainer = styled.div`
//     flex:1;
    
//     `
// const Title = styled.h1``
// const Desc = styled.p`
// font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
// `
// const Button = styled.button`
// background-color:transparent;
// cursor:pointer;
// `

// function Slider() {
//     const [slide, setslide] = useState(0)
//     const handleslide = (props) => {
//         if (props == 'left' && slide > 0) {
//             setslide(slide - 1)
//         }
//         if (props == 'right') {
//             setslide((slide + 1)%6);
//         }
//     }
//     return (
//         <Container>
//             <Arrow direction='left' onClick={() => handleslide('left')}>
//                 <ArrowLeftIcon />
//             </Arrow>
//             <Wrapper slide={slide}>
//                 {Slidedata.map((index) => (
//                     <Slide>
//                         <Imgcontainer>
//                             <Image src={index.image} width={400} height={100} />
//                         </Imgcontainer>
//                         <Infocontainer>
//                             <Title>
//                                 {index.title}
//                             </Title>
//                             <Desc>
//                                 {index.description}
//                             </Desc>
//                             <Button>
//                                 Add new!
//                             </Button>
//                         </Infocontainer>
//                     </Slide>
//                 ))}
//             </Wrapper>
//             <Arrow direction='right' onClick={() => handleslide('right')}>
//                 <ArrowRightIcon />
//             </Arrow>
//         </Container>
//     )
// }