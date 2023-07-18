
import "./style.css"
import { useNavigate } from "react-router-dom";

const Fourzerofour = () => {

    const neviget = useNavigate(" ")
    return (
        <>
            <div className="container-fluid mb-md-5">
                <div className="row">
                    <div className="col-md-6 d-md-flex ">
                        <div className="errortext m-auto">
                            <h1 className="errorbigtext">404</h1>
                            <h5 className="errorsmalltext">We are sorry, but the page <br />
                                you requested was not found</h5>
                            <button onClick={() => neviget("/")} className="errorbutton"> Back To Home</button>

                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src="./images/FAq/Photo (3).jpg" className="errorimg" alt="" />
                    </div>
                </div>
            </div>


        </>
    )
}

export default Fourzerofour;