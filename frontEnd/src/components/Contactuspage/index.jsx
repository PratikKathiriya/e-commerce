import "./style.css";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from "react";
import axios from "axios";


const Contactuspage = () => {

    const [data, setData] = useState({
        name:" Name",
        email:" Email",
        subject:" Subject",
        phone:"Phone ",
        message:" Message",
    })

    const handleinput1 = (e) => {
        const {name,value} = e.target;
        setData({...data,[name]:value})
    }

    const onSubmit1 = async(e) => {
        e.preventDefault()
        try {
            const res = await axios.post("http://localhost:8000/contact/insert",data); 
            console.log("res:::",res)
            alert("your data is submitted");
        } catch (error) {
            console.log("error::::",error)
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
            subject:" Subject", 
            phone:"Phone ",
            message:" Message",   
        })
    }
    return (
        <>
            <div className="container-fluid">
                <div className="row ">
                    <div className="col firstSection">
                        <img src="./images/teamsinglepageimg/Photo (1).jpg" className="firstimg" alt="" />
                        <div className="servicesingleText text-center">
                            <h1>Contact us</h1>
                            <h6>Home / Contact us</h6>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container my-5 py-md-5" >
                <div className="row d-flex justify-content-center">
                    <h1 className="text-center contactbigtext">We love meeting new people <br /> and helping them.</h1>
                    <div className="col-md-3 col-sm-7 col-9 iconnamemaindiv  my-5">
                        <div className="iconandname d-flex justify-content-between">
                                <button className="icon"><MailOutlineIcon/></button>
                                <h4 className="iconsname">info@yourdomain.com</h4>
                        </div>
                        <div className="iconandname d-flex justify-content-between">
                                <button className="icon"><CallOutlinedIcon/></button>
                                <h4 className="iconsname">+1 (378) 400-1234</h4>
                        </div>
                        <div className="iconandname d-flex justify-content-between">
                                <button className="icon"><PublicOutlinedIcon/></button>
                                <h4 className="iconsname">www.yourdomain.com</h4>
                        </div>
               
                    </div>
                    <div className="col-md-7 my-5 ms-md-5">
                        <div className="nameandemail d-md-flex">
                            <input type="text" className="namecontact contactform" name="name" value={data.name} onChange={handleinput1} placeholder="Name" />
                            <input type="text" className="emailcontact contactform" placeholder="Email" name="email" value={data.email} onChange={handleinput1} />    
                        </div>
                        <div className="subjectandphone d-md-flex">
                            <input type="text" className="subject contactform" placeholder="Subject" name="subject" value={data.subject} onChange={handleinput1} />
                            <input type="text" className="phone contactform" placeholder="Phone" name="phone" value={data.phone} onChange={handleinput1}/>
                        </div>
                        <textarea id="" cols="30" rows="7" className="text-area" placeholder="Hello Iam Interested In..." name="message" value={data.message} onChange={handleinput1}></textarea>
                        <br />
                        <button className="contactbutton" type="submit" onClick={(e)=>onSubmit1(e)}>Send Now<ArrowForwardIcon className="arrow"/></button>
                        </div>    

                </div>
                    <div className="row  my-5 py-5 d-flex justify-content-center">
                        <div className="col-md-10">
                            <img src="./images/teamsinglepageimg/Photo (1).png" className="contactimg" alt="" />
                        </div>
                    </div>
            </div>
        </>
    )
}

export default Contactuspage; 