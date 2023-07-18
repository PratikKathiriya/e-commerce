import { Link, useNavigate } from "react-router-dom";
import { News, OurProject, Plans, Userresponse } from "./Props";
import "./style.css"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CallIcon from '@mui/icons-material/Call';

const Homepage = () => {
    const neviget = useNavigate("");

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <img src="./images/Photo.jpg" alt="" className="first-img" />
                        <div className="first-text">
                            <h1>Let Your Home <br />Be Uniqe </h1>
                            <p>There are many variations of the passages of lorem Ipsum <br /> fromavailable,variations of the passages.</p>
                            <button className="btn bg-dark text-light "><Link className="text-decoration-none text-light" to="Plans">Get Started<ArrowForwardIcon className="arrow" /></Link></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row d-flex justify-content-center plans">
                    <Plans title="Project Plan" />
                    <Plans title="Interior Work" />
                    <Plans title="Realization" />









                </div>
            </div>
            <div className="container">
                <div className="row d-flex justify-content-center third-text">
                    <div className="col-md-5">
                        <h1 className="py-4 thirdBigText">We Create The Art  <br />
                            Of Stylish Living
                            Stylishly</h1>
                        <p className="thirdParagraph mb-4">It is a long established fact that a reader will be <br />
                            distracted by the of readable content of a page <br />
                            when lookings at its layouts the points of using <br />
                            that it has a more-or-less normal.</p>

                        <div className="call d-flex py-lg-3 py-md-1" >
                            <button className="callButton" ><CallIcon /></button>
                            <h4 className="callNumber">012345678 <br /><span className="callSpan">Call Us Anytime</span></h4>
                        </div>

                        <button className="bg-dark text-light my-3  buttonFree " onClick={() => neviget("/Contactus")}>Get Free Estimate<ArrowForwardIcon className="arrow" /></button>


                    </div>
                    <div className="col-md-5">
                        <img src="./images/Photo1.jpg" className="second-img" alt="" />
                    </div>
                </div>
            </div>
            <div className="container" style={{ marginTop: "200px" }}>
                <div className="row d-flex justify-content-center ">
                    <div className="col-sm-11  sectionFour">
                        <h1 className="text-center mt-5 pt-4 pb-4 hone" >What the people thinks <br /> About us</h1>
                        <div className="users d-flex ms-lg-4 mb-5 " >
                            <Userresponse img="./images/userOne.jpg" name="Nattasha Mith" add="Sydney,USA" />
                            <Userresponse img="./images/userTwo.jpg" name="Raymond Galario" add="Sydney,Australia" />
                            <Userresponse img="./images/userThree.jpg" name="Benny roll" add="Sydney,New York" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container brands">
                <div className="row">
                    <div className="col list-unstyled d-flex justify-content-around align-items-center">
                        <li><img src="./images/01.jpg" alt="" />   </li>
                        <li><img src="./images/02.jpg" alt="" /></li>
                        <li><img src="./images/03.jpg" alt="" /></li>
                        <li><img src="./images/04.jpg" alt="" /></li>
                        <li><img src="./images/05.jpg" alt="" /></li>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col text-center Projects mb-5   " >
                        <h1>Follow Our Project</h1>
                        <p>It is a long established fact that a reader will be distracted by the of readable <br /> content of page  lookings at its layouts  points.</p>
                    </div>
                </div>
                <div className="row d-flex justify-content-center ">
                    <OurProject img="./images/ourProjectOne.png" topright="100px" id="marginright" />
                    <OurProject img="./images/ourProjectTwo.png" topleft="100px" />
                </div>
                <div className="row d-flex justify-content-center">
                    <OurProject img="./images/ourProjectThree.png" bottomright="100px" className=" me-5    " />
                    <OurProject img="./images/ourProjectFour.png" bottomleft="100px" />
                </div>

            </div>
            <div className="container-fluid .mt-5">
                <div className="row">
                    <div className="col d-flex justify-content-center list-unstyled text-center stateticts">
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

            <div className="container mb-5">
                <div className="row mt-5">
                    <div className="col text-center mt-5 pt-5 news-text">
                        <h1 style={{ fontFamily: "jost", fontSize: "50px", fontWeight: "600" }}>Articles & News</h1>
                        <p>It is a long established fact that a reader will be distracted by the of readable content <br /> of a page when lookings at its layouts the points of using.</p>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <News img="./images/newsPhotoOne.png" news="Let’s Get Solution For Building Construction Work" date="26 December,2022" bgcolor="white" btncolor="#f4f0ec" />
                    <News img="./images/newsPhotoTwo.png" news="Low Cost Latest Invented Interior DesigningIdeas." date="22 December,2022" bgcolor="#f4f0ec" btncolor="white" />
                    <News img="./images/newsPhotoThree.png" news="Best For Any Office & Business Interior Solution" date="25 December,2022" bgcolor="white" btncolor="#f4f0ec" />
                </div>
            </div>

            <div className="container mb-5 pb-5 pt-5">
                <div className="row text-center mb-5  m-auto joinContact">
                    <div className="col-md-10 Join m-auto" >
                        <h1>Wanna Join The Interno?</h1>
                        <h6>It is a long established fact  will be distracted.</h6>
                        <button className="btn text-light mx-auto" onClick={() => neviget("/Contactus")}>Contact with us   <ArrowForwardIcon className="arrowlast" /> </button>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Homepage;