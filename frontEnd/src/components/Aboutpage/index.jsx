import { useNavigate } from "react-router-dom";
import "./style.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from "react";
import axios from "axios";



const Aboutpage = () => {

    const [data, setData] = useState({
        name:" name",
        email:" email",
        message:"message ",
    })

    const handleinput = (e) => {
        const {name,value} = e.target
        setData({...data,[name]:value})
    }

    const onSubmit = async(e) => {
        e.preventDefault()
        try {
            const res = await axios.post("http://localhost:8000/contact/insert",data);
            setData(" ");   
            console.log("res:::",res)
            alert("your data is submitted");
            
        } catch (error) {
            console.log("error::::",error)
            try {
                if (error.response.data.status == 404) {
                    alert("enter differnt email id:");
                }
                else{
                    alert("please wait");
                }
            } catch (error) {
                alert("server issue pleassse wait:::");
            }
           
        } 
        setData( {
            name:" Name",
            email:" Email",
            message:" Message",   
        })
    }



    const neviget = useNavigate("");
    return (    
        <>

            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <img src="./images/AboutOne.png" alt="" className="aboutFirstImage" />
                        <div className="aboutFirstSection text-center">
                            <div className="about">
                                <h1>About us</h1>
                                <h6 className="aboutDirection">Home/About us</h6>
                            </div>
                            <div className="aboutlines">
                                
                                <p className="aboutline">I like an interior that defies labeling. I don't really want someone to walk into a room and know that I did it</p>
                                <h5>-BUNNY WILLIAMS</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col ">
                        <div className="bigBorder mx-auto"></div>
                    </div>
                </div>
            </div>
            <div className="container beforeafter">
                <div className="row d-flex justify-content-end">
                    <div className="col-md-5 btext">
                        <h1 className="beforeBigtext">What We Do</h1>
                        <p>It is a long established fact that a reader will be distracted by the of readable content of a page
                            when lookings at its layouts the points of using
                            that it has a more-or-less normal.</p>
                        <button className="conceptButton " onClick={() => neviget("/Services")}>Our concept</button>
                    </div>
                    <div className="col-md-7 d-flex justify-content-md-end justify-content-center">
                        <img src="./images/beforImg.jpg" alt="" className="beforeImg " />
                    </div>
                </div>
            </div>
            <div className="container">
            <div className="row d-flex justify-content-center mt-5">
            <div className="col-md-7 mb-5 mr-5 d-flex justify-content-start justify-content-center">
                    <img src="./images/afterImg.jpg" alt="" className="afterImg" />
                    </div>
                    <div className="col-md-5 atext mb-5">
                    <h1 className="afterBigtext">The End Result</h1>
                        <p>It is a long established fact that a reader will be distracted by the of readable content of a page
                            when lookings at its layouts the points of using
                            that it has a more-or-less normal.</p>
                        <button className="portfolioButton">Our portfolio</button>
                    </div>
                  
                </div>
            </div>
            <div className="container-fluid peoplesthink">
                <div className="row peoples" >
                    <div className="col text-center">
                        <h1>
                            What People Think <br /> About Us              
                    </h1>
                    <div className=" d-sm-flex justify-content-center list-unstyled">
                        <li><img src="./images/aboutPeopleImg.png" alt=""  className="peopleone"/></li>
                        <li><img src="./images/aboutPeopleImgtwo.png" alt="" className="peopletwo"/></li>
                        {/* <li><img src="" alt="" /></li> */}
                        <li><img src="./images/aboutPeopleImgthree.png" alt="" className="peoplethree" /></li>
                    </div>
                    </div>
                </div>
            </div>
            <div className="container inputfield" >
                <div className="row">
                    <div className="col text-center">
                        <h1 className="inputh1">Creative Peoject? let's have <br /> a productive talk</h1>
                        <div className="nameAndEmail">
                            <input type="text" name="name" onChange={handleinput} placeholder="Name" value={data.name} className="nameInput"/>
                            <input type="text" name="email" placeholder="Email" onChange={handleinput} className="emailInput"  value={data.email}/> <br />
                            <textarea name="message" id="" className="commentInput" cols="30" onChange={handleinput} placeholder="Hello I an Interested In" rows="7" value={data.message}></textarea> <br />
                            <button className="buttonForform " onClick={(e)=>onSubmit(e)}>send now <ArrowForwardIcon className="arrow"/></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Aboutpage;