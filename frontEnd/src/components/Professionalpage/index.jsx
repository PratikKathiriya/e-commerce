import { useState, useEffect } from "react";
import { Proffesionals } from "../Blogpage/Props"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import "./style.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Professional = () => {
    const [professionals, setProfessionals] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8000/professional/list');
            setProfessionals(response.data.data);
            console.log("response::::::", response.data.data)
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <div className="container-fluid">
                <div className="row ">
                    <div className="col firstSection">
                        <img src="./images/Professionalimg/Photo.jpg" className="firstimg" alt="" />
                        <div className="ProfessionalText text-center">
                            <h1>Our Proffesional</h1>
                            <h6>Home / Team</h6>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container my-5 py-md-5">
                <div className="row mb-3">
                    {/* {Professional.map ((val) => (
                        
                          <div className="col-md-3 text-center Professionals ">
                     <Link to="Professionalsingle"> <img src="images/Professionalimg/Photo (1).jpg" className='professionalimg'  alt="" /></Link>
                    <h4 className="name">John Smith  </h4>
                    <h6 className="country">Design, Australia </h6>
                    <div className="apps d-flex justify-content-around">
                        <FacebookIcon className='facebook'/>
                        <TwitterIcon className='twitter'/>
                    </div> 
    
                ))} */}
                    {professionals.map((val) => (
                        
                        <>
                            <div className="col-md-3 mb-3 text-center Professionals">
                                <Link to={`${val.uniqueId}`}><img src={val.image} className='professionalimg' alt="" /></Link>
                                <h4 className="name1">{val.name} {val.lastName}</h4>
                                <h6 className="country">{val.proffesion} , {val.country}</h6>
                                <div className="apps d-flex justify-content-around">
                                    <FacebookIcon className='facebook' />
                                    <TwitterIcon className='twitter' />
                                </div>
                            </div>
                        </>
                    ))}

                </div>
                {/* <div className="row mt-md-5">
                <Proffesionals img="images/Professionalimg/Photo (4).jpg" name="Sofia Carter" country="Design, Australia"/>
                <Proffesionals img="images/Professionalimg/Photo (5).jpg" name="Avery Jackson" country="Design, Australia"/>
                <Proffesionals img="images/Professionalimg/Photo (6).jpg" name="Luna James" country="Design, Australia"/>
                <Proffesionals img="images/Professionalimg/Photo (7).jpg" name="Gianna mateo" country="Design, Australia"/>
                </div> */}
            </div>


        </>
    );
};

export default Professional;