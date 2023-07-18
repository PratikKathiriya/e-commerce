import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';


export const Projects = (props) => {
    return(
        <>
        <img src={props.img} className='projectsimg' alt="" />
        <div className="nameandbutton d-flex justify-content-between align-items-center">
            <div className="name">
                <h3>{props.name}</h3>
                <h6>Decor / Artchitecture</h6>
            </div>
            {/* <div className="button">
                <ArrowForwardIosIcon/>
            </div> */}
            <Link to = "projectdetail" className='button1'> 
            <div className="button">
                <ArrowForwardIosIcon />
            </div>
            </Link>
        </div>
        </>
    );
}

