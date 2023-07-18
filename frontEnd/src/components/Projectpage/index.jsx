import { Link, Outlet } from "react-router-dom";
import { Projects } from "./Props";
import "./Style.css"
import Tabs from "./Props2";
import { useEffect, useState } from "react";
import axios from "axios";


const Projectpage  = () => {
    const [data, setData] = useState([]);
    const [data2, setData2]=useState([]);

    const getdata = async() => {
     
        try {
            const res = await axios.get(`http://localhost:8000/project/list`);
            setData2(res.data.data)
            console.log("ressssssssss::::;;", res.data);
            console.log("dataaaaaaaaa",data2 )
        } catch (error) {
            console.log("errrorrrr", error);
        }                       
    } 

    useEffect(()=>{
        getdata();
    }, [])
    return(
        <>
                  <div className="container-fluid">
                <div className="row ">
                    <div className="col firstSection">
                        <img src="./images/projectsimg/Photo.jpg" className="firstimg" alt="" />
                        <div className="projectText text-center">
                            <h1>Projects</h1>
                            <h6>Home / Projects</h6>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container my-5  pt-md-5"> 
                 <div className="row d-flex justify-content-center">
                    <div className=" col-lg-5 col-md-7 d-flex  list-unstyled areaMainDiv justify-content-around align-items-center">

                            <li>Bathroom</li>
                            <li>Bed Room</li>
                            <li>Kitchen</li>
                            <li>Living Area</li>
                       
                    </div>
                </div>
                <div className="row d-flex justify-content-center mainprojects">
                    <div className="col-md-4 me-lg-5">
                        <Projects img="./images/projectsimg/Photo.png"/>
                        <Projects img="./images/projectsimg/Phototwo.png"/>
                        <Projects img="./images/projectsimg/Photofive.png"/>
                        <Projects img="./images/projectsimg/Photosix.png"/>

                    </div>
                    <div className="col-md-4">
                    <Projects img="./images/projectsimg/Phototwo.png"/>
                    <Projects img="./images/projectsimg/Photothree.png"/>
                    <Projects img="./images/projectsimg/Photofour.png"/>
                    <Projects img="./images/projectsimg/Photoseven.png"/>

                    </div>
                </div>
            </div> */}

            {
                data2.map((val) => {
                    return(
                        <>
                        {
                            val.category == 5 && 
                            <>
                            <h1>{val.client}</h1>
                            </>
                        }
                        </>
                    )
                })
            }

            <Tabs/>
            


            <Outlet/>


        
        </>
    );
}

export default Projectpage;