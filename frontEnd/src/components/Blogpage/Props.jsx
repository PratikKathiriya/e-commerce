import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom';

export const Newsofblog = (props) => {
    return(
        <>
        <div className="col-md-3 col-7  mb-md-0 mb-3  me-md-3 maincard">
                <div className="newsCardone px-3">
                    <img src={props.img} alt="" className="news-img " />
                    <h4 className='my-md-4'>{props.news}</h4>
                    <div className="dateButton d-flex justify-content-between align-items-center">
                        <div className="date">{props.date}</div>
                        <Link to="blogdetail">
                        <button className="datebutton" >
                        <ArrowForwardIosIcon className='arrowkeybord' style={{padding:"4px"}}/> 
                        </button>
                        </Link>
                    </div>
                </div>
        </div>
        </>
    )
}

export const Proffesionals = (props) => {
    return(
        <>
            <div className="col-md-3 text-center Professionals ">
                 <Link to="Professionalsingle"> <img src={props.img} className='professionalimg'  alt="" /></Link>
                <h4 className="name">{props.name}  </h4>
                <h6 className="country"> {props.country}</h6>
                <div className="apps d-flex justify-content-around">
                    <FacebookIcon className='facebook'/>
                    <TwitterIcon className='twitter'/>
                </div>     
            </div>
        </>
    )
}