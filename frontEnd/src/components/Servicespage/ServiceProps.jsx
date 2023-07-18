import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';

export const Serviceplans = (props) => {
    return (
        <>
            <div className="col-md-3 col-sm-4 text-center plan">
                <h5>{props.title}</h5>
                <h6>There are many variations of the <br /> passages of lorem Ipsum from  <br />available, majority.</h6>
                <Link to="Servicessingle" className='planbutton'>Read More<ArrowForwardIcon className='arrow' /></Link>
            </div>

        </>
    )
}

export const WorkStyleText = (props) => {
    return (
        <>
            <div className="iconAndNumber d-flex justify-content-between align-items-center">
                <div className="icon">
                    <img src={props.img} className='Iconimg' alt="" />
                </div>
                <h1 className="number">{props.number}</h1>
            </div>
            <h4 className="conceptName">
                {props.concept}
            </h4>
            <h5>It is a long established fact  will be distracted.
                Lorem Ipsum is simply dummy from text of the
                and typesetting indufstry. </h5>
        </>
    )
}