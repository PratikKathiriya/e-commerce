import { useEffect, useState } from "react";
// import { News } from "../Homepage/Props";
import { Newsofblog } from "./Props";
import "./style.css";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import axios from "axios"
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const Blogpage = () => {
    const [data, setData] = useState([]);

    const getdata = async () => {
        const res = await axios.get(`http://localhost:8000/blog/list`);
        console.log("error::::::::::::", res.data.data);
        setData(res.data.data)
    }

    useEffect(() => {
        getdata();
    }, []);

    return (
        <>

            <div className="container-fluid">
                <div className="row ">
                    <div className="col firstSection">
                        <img src="./images/Prising&planimg/firstPhoto.jpg" className="firstimg" alt="" />
                        <div className="BlogText text-center">
                            <h1>Articles & news</h1>
                            <h6>Home / blog</h6>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container my-md-5 my-3 py-md-5 py-0">
                <div className="row d-md-flex justify-content-center">
                    <div className="col-md-9">
                        <h1 style={{ fontFamily: "jost", fontWeight: "600", fontSize: "45px" }} className="mb-2 ps-2 text-md-start text-center">Latest Post</h1>
                        <div className="postanddetail d-lg-flex justify-content-center">
                            <img src="./images/BLogimg/Photo.png" className="post" alt="" />
                            <div className="details">
                                <h4>Low Cost Latest Invented Interior <br /> Designing Ideas</h4>
                                <br />
                                <p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.
                                    <br />
                                    <br />
                                    Lorem Ipsum is not simply random text. It has roots in a piece of classica.</p>
                                <div className="dateandbutton d-flex justify-content-between align-items-center">
                                    <div className="date"> 26 December,2022</div>
                                    <button className="datebutton"> <KeyboardArrowRightIcon className="arrowkeybord" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row d-md-flex justify-content-center">
                    <div className="col-md-9 ">
                        <h1 className="text-md-start text-center" style={{ fontFamily: "jost", fontWeight: "600", fontSize: "45px" }} >Articles & news</h1>
                    </div>
                </div>
                <div className="row d-flex mb-md-3 justify-content-center">
                    {
                        data.map((val) => {
                            return (
                                <>
                                    <div className="col-md-3 col-7  mb-3  me-md-3 maincard">
                                        <div className="newsCardone px-3">
                                            <img src={val.image} alt="" className="news-img " />
                                            <h4 className='my-md-4'>{val.title}</h4>
                                            <div className="dateButton d-flex justify-content-between align-items-center">
                                                <div className="date">26,december 2022</div>
                                                <Link to="blogdetail">
                                                    <button className="datebutton" >
                                                        <ArrowForwardIosIcon className='arrowkeybord' style={{ padding: "4px" }} />
                                                    </button>
                                                </Link>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
                 

                <div className="row d-flex justify-content-center mb-md-5 mb-3">
                    <div className="col d-flex list-unstyled numbersbutton d-flex justify-content-center">
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li><KeyboardArrowRightIcon /></li>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Blogpage;