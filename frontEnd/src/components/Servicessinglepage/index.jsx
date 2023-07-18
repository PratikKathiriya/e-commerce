 
import "./style.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';



const Servicessingle = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row ">
                    <div className="col firstSection">
                        <img src="/images/servicesingle/firstimg.jpg" className="firstimg" alt="" />
                        <div className="servicesingleText text-center">
                            <h1>Service Single</h1>
                            <h6>Home / Services Single</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container secondsection">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-4">
                        <h1>We set the trends of
                            modern living
                            Services.</h1>
                    </div>
                    <div className="col-md-6 secondPeragraph">
                        <p>It is a long established fact that a reader will be distracted by the of readable content of a page</p>
                        <p> when lookings at its layouts the points spriof using that it has a more
                            less normal.A wonderful serenity has taken pgossession of my entire soul, like thesce sweet morndsings of sphring which I enjoy with my forwhole heart. I am alone, and feel the charm of excgistence in this spot, which was created for the bliss of souls like mine.</p>
                        <p>when lookings at its layouts the points spriof using that it has a more
                            less normal.A wonderful serenity has taken pgossession of my entire soul, like thesce sweet morndsings of sphring which I enjoy with my forwhole heart. I am alone, and feel the charm of excgistence in this spot, which was created for the bliss of souls like mine.</p>
                    </div>
                </div>
            </div>
            <div className="container brands">
                <div className="row">
                    <div className="col list-unstyled text-center d-md-flex justify-content-around align-items-center">
                        <li><img src="/images/01.jpg" alt="" />   </li>
                        <li><img src="/images/02.jpg" alt="" /></li>
                        <li><img src="/images/03.jpg" alt="" /></li>
                        <li><img src="/images/04.jpg" alt="" /></li>
                        <li><img src="/images/05.jpg" alt="" /></li>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-4 whatWedo">
                        <h2>Use Of Interior</h2>
                        
                            <li >  <span> 1</span> We provide high quality design services</li>
                            <li > <span> 2</span> Project on time and latest design</li>
                            <li > <span>3 </span> Scientific skills for  getting better result </li>
                            <li > <span>4 </span>  Renovations benifit for service</li>
                            <li > <span>5 </span> We are confident about our projects</li>
                    
                    </div>
                    <div className="col-md-4 whatWedo">
                        <h2>Make An Art</h2>
                        
                            <li > <span> 1</span> We provide high quality design services</li>
                            <li > <span>2</span> Project on time and latest design</li>
                            <li > <span>3 </span> Scientific skills for  getting better result </li>
                            <li > <span>4 </span>  Renovations benifit for service</li>
                            <li > <span>5 </span> We are confident about our projects</li>
                         
                    </div>
                </div>
            </div>
            <div className="container" style={{marginTop:"100px",marginBottom:"100px"}}>
                <div className="row lovedesign d-flex justify-content-center">
                    <div className="col-md-4 my-md-auto">
                        <img src="  /images/servicesingle/thirdphoto.jpg" alt="" />
                    </div>
                    <div className="col-md-4  ps-md-5 ms-md-5">
                        <h1>We love design.That's how we got here.</h1>
                        <p>It is a long established fact that a reader will be distracted by the of readable content .</p>
                        <button>Our Portfolio <ArrowForwardIcon className="arrow"/></button>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-5">
                <div className="row ">
                    <div className="col d-md-flex justify-content-center list-unstyled text-center stateticts">
                        <li className="borderOfstateticts">
                             <h1>12</h1>
                             <h6>Years Of Experience</h6>                                           
                        </li>
                        <li className="borderOfstateticts">
                            <h1>85</h1>
                            <h6>Success Project</h6>
                        </li>
                        <li className="borderOfstateticts">
                            <h1>15</h1>
                            <h6>Active Project</h6>
                        </li>
                        <li>
                            <h1>95</h1>
                            <h6>Happy Customer</h6>
                        </li>
                    </div>
                </div>
            </div>
    
        </>
    );
};

export default Servicessingle;