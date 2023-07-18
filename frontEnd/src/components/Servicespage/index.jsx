import { Outlet } from "react-router-dom";
import { Serviceplans, WorkStyleText } from "./ServiceProps";
import "./style.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';



const Servicespage = () => {
    return(
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <img src="./images/servicesImg/firstImg.jpg" alt="" className="firstImg" />
                    <div className="serviceText text-center">
                        <h1>Services </h1>
                        <h6>Home/Services</h6>
                    </div>

                </div>    
            </div>
        </div>
        <div className="container plans">
            <div className="row d-flex justify-content-center">
                <Serviceplans title="Project Plan"/>
                <Serviceplans title="Interior Work"/>
                <Serviceplans title="Retail Design"/>
            </div>
            <div className="row d-flex justify-content-center SecondPlans">
                <Serviceplans title="2D/3D Art Work"/>
                <Serviceplans title="Interior Work"/>  
                <Serviceplans title="Decoration Work"/> 
            </div>
        </div>
        <div className="container howWeWork">
            <div className="row text-center">
                    <div className="col howWeWorktext">
                        <h1 className="howWeWorkh1">How We Work</h1>
                        <p className="howWeWorkp">It is a long established fact  will be distracted.Lorem Ipsum is simply dummy text of <br /> the printing and typesetting industry.</p>
                    </div>
            </div>
            <div className="row d-flex justify-content-center mb-5">
                <div className="col-md-4">
                    <img src= "./images/servicesImg/firstPhoto.jpg" className="firstWorkPhoto workImg" alt="" />
                </div>
                <div className="col-md-4  ps-md-5 textofWorks">
                    <WorkStyleText img="./images/servicesImg/Icon.png" concept="Concept & Details" number="01"/>
                </div>  
            </div>
            <div className="row d-flex justify-content-center   mb-5">
            <div className="col-md-4  ps-md-5 textofWorks">
                    <WorkStyleText img="./images/servicesImg/secondicon.png" concept="Idea For Work" number="02"/>
                </div>  
                <div className="col-md-4 ms-md-5">
                    <img src="./images/servicesImg/Photo (2).jpg" className="firstWorkPhoto workImg" alt="" />
                </div>
            </div>
            <div className="row d-flex justify-content-center mb-5">
                <div className="col-md-4">
                    <img src="./images/servicesImg/Photo (1).jpg" className="firstWorkPhoto workImg" alt="" />
                </div>
                <div className="col-md-4  ps-md-5 textofWorks">
                    <WorkStyleText img="./images/servicesImg/thirdicon.png" concept="Design" number="03"/>
                </div>  
            </div>
            <div className="row d-flex justify-content-center mb-5">
            <div className="col-md-4  ps-md-5 textofWorks">
                    <WorkStyleText img="./images/servicesImg/fourthicon.png" concept="Perfaction" number="04"/>
                </div>  
                <div className="col-md-4 ms-md-5">
                    <img src="./images/servicesImg/fourthPhoto.jpg" className="firstWorkPhoto workImg" alt="" />
                </div>
            </div>
            
        </div>
        
        <div className="container mb-5 pb-5 pt-5">
                <div className="row text-center mb-5  m-auto joinContact">
                    <div className="col-md-10 Join m-auto">
                                    <h1>Wanna Join The Interno?</h1>
                        <h6>It is a long established fact  will be distracted.</h6>
                        <button className="mx-auto">Contact with us   <ArrowForwardIcon className="arrowlast" /> </button>
                    </div>
                </div>
            </div>
        <Outlet/>
        </>
    );
}

export default Servicespage;