import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';


export const Plans = (props) => {
    const neviget = useNavigate("");

    return (
        <>
            <div className="col-md-3 col-sm-4 text-center plan">
                <h5>{props.title}</h5>
                <p>There are many variations of the <br /> passages of lorem Ipsum from  <br />available, majority.</p>
                <a href="" onClick={() => neviget("/services")}>Read More<ArrowForwardIcon className='arrow' /></a>
            </div>

        </>
    )
}

export const Userresponse = (props) => {
    return (
        <>
            <div className="cardOfUser ms-2 pb-4">
                <div className="name d-flex ">
                    <img src={props.img} className='user-img' alt="" />
                    <h4>{props.name}<br /> <span>{props.add}</span></h4>
                </div>
                <p className='py-3'> Lorem Ipsum is simply dummy  <br />
                    text of the typesetting industry. <br />
                    Ipsum has been.</p>
            </div>
        </>
    )
}

export const OurProject = (props) => {
    const neviget = useNavigate("");

    return(
        <>
            <div className="col-md-4 mb-5 me-lg-5 me-3 projectmain" style={{marginRight:`${props.margin}`}}>
                <img src={props.img} style={{borderTopRightRadius:`${props.topright}`,borderTopLeftRadius:`${props.topleft}`,borderBottomRightRadius:`${props.bottomright}`,borderBottomLeftRadius:`${props.bottomleft}`}} className='projectImg' alt="" />
                <div className="nameOfProject d-flex justify-content-between pt-3">
                    <div className="projectName">
                        <h4>Modern Kitchen</h4>
                        <h6>Decor / Artchitecture</h6>
                    </div>
                    <button className='nameButton' onClick={() => neviget("/project")}>  <ArrowForwardIosIcon className='arrowbutton'/></button>
                </div>
            </div>
        </>
    )
}

export const News = (props) => {
    const neviget = useNavigate("");

    return(
        <>
        <div className="col-md-3 col-sm-4">
                <div className="newsCard" style={{backgroundColor:`${props.bgcolor}`}}>
                    <img src={props.img} alt="" className="news-img " />
                    <h4>{props.news}</h4>
                    <div className="dateButton d-flex justify-content-between align-items-center">
                        <div className="date">{props.date}</div>
                        <button className="news-button" onClick={() => neviget("/blog")} style={{backgroundColor:`${props.btncolor}`}}>
                        <ArrowForwardIosIcon style={{padding:"4px"}}/> 
                        </button>
                    </div>
                </div>
        </div>
        </>
    )
}
