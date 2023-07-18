import "./style.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const Prisingandplan = () => {
    return (
        <>
          <div className="container-fluid">
                <div className="row ">
                    <div className="col firstSection">
                        <img src="./images/Prising&planimg/firstPhoto.jpg" className="firstimg" alt="" />
                        <div className="prisingPlanText text-center">
                            <h1>Prising & Plan</h1>
                            <h6>Home / pricing</h6>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row d-flex justify-content-center" style={{marginTop:"100px"}}>
                    <div className="col-md-3 text-center list-unstyled prisingDiv me-md-3">
                        <h5 className="perisingtag">Design advice</h5>
                        <h1 className="prize"><span>$</span>29</h1>
                        <h5 className="time">/month</h5>
                        <hr  width="100%" />
                        <li>General living space advices </li>
                        <li>Rennovation advices</li>
                        <li>Interior design advices</li>
                        <li>Furniture reorganization</li>
                        <li>Up to 5 hours meetings</li>
                        <button className="buttons">Get started  <ArrowForwardIcon className="arrow"/></button>
                    </div>
                    <div className="col-md-3 text-center list-unstyled prisingDiv me-md-3">
                        <h5 className="perisingtag">Complete interior</h5>
                        <h1 className="prize2"><span>$</span>39</h1>
                        <h5 className="time">/month</h5>
                        <hr  width="100%" />
                        <div className="mpp">Most Popular Plans</div>
                        <li>Complete home redesign </li>
                        <li>Interior and exterior works</li>
                        <li>Modular interior plannings</li>
                        <li>Kitchen design</li>
                        <li>Garages organization</li>
                        <button className="hii">Get started  <ArrowForwardIcon className="arrow2"/></button>
                    </div>
                    <div className="col-md-3 text-center list-unstyled prisingDiv">
                        <h5 className="perisingtag">Design advice</h5>
                        <h1 className="prize"><span>$</span>59</h1>
                        <h5 className="time">/month</h5>
                        <hr  width="100%" />
                        <li>General living space advices </li>
                        <li>Rennovation advices</li>
                        <li>Interior design advices</li>
                        <li>Furniture reorganization</li>
                        <li>Up to 5 hours meetings</li>
                        <button className="buttons">Get started  <ArrowForwardIcon className="arrow"/></button>
                    </div>
                </div>
            </div>
        
        </>
    );
}

export default Prisingandplan;